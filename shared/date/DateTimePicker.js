import { useRef, createRef } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import el from 'date-fns/locale/el'

import DateTimeContainer from 'components/shared/date/DateTimeContainer'
import DateTimeButton from 'components/shared/date/DateTimeButton'
import styles from 'components/shared/shared.module.css'
/* popperPlacement (options):'auto',
                            'auto-left',
                            'auto-right',                              'bottom',
                            'bottom-end',
                            'bottom-start',
                            'left',
                            'left-end',
                            'left-start',
                            'right',                               'right-end',
                            'right-start',
                            'top',
                            'top-end',
                            'top-start'            */
registerLocale('el', el)

function DateTimePicker({
  name,
  disabled,
  label,
  sizeLabel,
  date,
  changeDate,
  placement = 'bottom-start',
  ...props
}) {
  const calendarRef = useRef(null)
  const reference = createRef()

  return (
    <div className="form-group row">
      {label && (
        <span
          className={`label label-default ${
            sizeLabel === undefined ? 'col-3 col-sm-3' : sizeLabel
          }`}
          htmlFor={name}>
          <strong>
            {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
            <strong>{label}</strong>
          </strong>
        </span>
      )}
      <div className={`${styles.customStyle}`}>
        <DatePicker
          name={name}
          ref={calendarRef}
          selected={date}
          disabled={disabled}
          onChange={changeDate}
          popperPlacement={placement}
          timeFormat="HH:mm"
          timeIntervals={15}
          showTimeSelect
          locale="el"
          dateFormat="d MMMM yyyy HH:mm"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          customInput={
            <DateTimeButton
              name={name}
              disabled={disabled}
              reference={reference}
            />
          }
          timeCaption="'Ωρα"
          calendarContainer={DateTimeContainer}
          {...props}
        />
      </div>
    </div>
  )
}

export default DateTimePicker
