import { AiOutlineRight, AiOutlineExclamation } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Feedback = ({ feedback, userId }) => {
    if (feedback === true) {
        return (<div id="button" style={{ background: "#CC3838" }}><Link to={"/" + userId + "/workout"}><AiOutlineExclamation /></Link></div>);
    }
    return (<div id="button"><Link to={"/" + userId + "/workout"}><AiOutlineRight /></Link></div>);
}