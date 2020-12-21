import { Children, createElement } from 'react'
import { useForm } from 'react-hook-form'

function createFormChildren({ element, register, handleSubmit }) {
  if (!element.props) {
    return element
  }
  let { name, children } = element.props
  if (children) {
    children = Children.map(children, (child) =>
      createFormChildren({
        element: child,
        register: register,
        handleSubmit: handleSubmit
      })
    )
  }
  console.log('field props', element.props)
  if (name === 'submitButton') {
    return createElement(element.type, {
      ...{
        ...element.props,
        onClick: handleSubmit
      }
    })
  }
  return createElement(element.type, {
    ...{
      ...element.props,
      children: children,
      register: name ? register : undefined,
      key: name ? element.props.name : element.props.key
    }
  })
}

function Form({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues })

  return (
    <form className="w-100" onSubmit={methods.handleSubmit(onSubmit)}>
      {Children.map(children, (child) =>
        createFormChildren({
          element: child,
          register: methods.register,
          handleSubmit: methods.handleSubmit(onSubmit)
        })
      )}
    </form>
  )
}

export default Form
