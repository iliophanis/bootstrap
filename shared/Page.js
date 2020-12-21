import { useEffect, useState } from 'react'

import PageHeader from 'components/shared/page/PageHeader'

function Page({ breadcrumb, children, buttons }) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    function handleIntersect(entries) {
      if (entries[0].intersectionRatio > 0) {
        setStuck(false)
      } else {
        setStuck(true)
      }
    }

    const observer = new IntersectionObserver(handleIntersect, null)

    const target = document.querySelector('#page-header-anchor')
    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="container-fluid">
      <div id="page-header-anchor"></div>
      <PageHeader breadcrumb={breadcrumb} buttons={buttons} isStuck={stuck} />
      {children}
    </div>
  )
}

export default Page
