import Calendar from 'react-calendar'
import '../assets/design/calendarSchedule.scss';
import 'react-calendar/dist/Calendar.css';
import { addClass, classModifier } from '../functions/utils';

const CalendarSchedule = (o) => {
    const defaultClass = 'calendar'
    const classes = classModifier(defaultClass, o.class)
    const outerProps = {
        className: addClass(classes)
    }
    return (
        <div {...outerProps}>
            <Calendar />
        </div>
    )
}

export default CalendarSchedule;