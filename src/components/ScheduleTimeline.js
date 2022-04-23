import Calendar from 'react-calendar'
import '../assets/design/scheduleTimeline.scss';
import 'react-calendar/dist/Calendar.css';

const ScheduleTimeline = (o) => {
    return (
        <div className={o.class}>
            <Calendar />
        </div>
    )
}

export default ScheduleTimeline;