import { CalendarContainer } from 'react-datepicker'

import styles from 'components/shared/shared.module.css'

function DateTimeContainer({ className, children }) {
  return (
    <div className={`${styles.dateTimeContainer} rounded `}>
      <CalendarContainer className={className}>
        <div>{children}</div>
      </CalendarContainer>
    </div>
  )
}

export default DateTimeContainer
