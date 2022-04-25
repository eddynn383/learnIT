import Calendar from 'react-calendar'
import '../assets/design/calendarSchedule.scss';
import 'react-calendar/dist/Calendar.css';
import { addClass } from '../functions/utils';

const CalendarSchedule = (o) => {
    const defClass = 'calendar'
    const classes = addClass(defClass, o.class)
    const outerProps = {
        className: classes
    }
    return (
        <div {...outerProps}>
            <Calendar />
        </div>
    )
}

export default CalendarSchedule;