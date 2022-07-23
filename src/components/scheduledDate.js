import { TbCalendarTime } from 'react-icons/tb';

export const ScheduledDate = ({ scheduledDate }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.getMonth();
    var month = ["Jan", "Feb", "Mar", "Apr,", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    console.log(dd + " " + month[mm]);
    if (scheduledDate === dd + " " + month[mm]) {
        return (<div style={{ background: "#CC3838" }}><TbCalendarTime />{scheduledDate}</div>);
    }
    return (<div><TbCalendarTime />{scheduledDate}</div>);
}