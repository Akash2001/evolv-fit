import { VscBell } from 'react-icons/vsc';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { TbUserCheck } from 'react-icons/tb';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import img from '../images/img.png';
import { ToolTipComponent } from './toolTip';
import { Feedback } from './feedBack';
import { ScheduledDate } from './scheduledDate';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

export const UserRow = ({ user, setSteps, setCalorie }) => {
    const { userId, name, email, stepsWalked, proteinConsumed, fatConsumed, carbConsumed, stepsTarget, performedDate, scheduledDate, calorieIntake, feedback } = user;
    return (
        <div className="userRow">
            <div className="userRow_profile">
                <div><img src={img} alt="User" /></div>
                <div id="flex">
                    <div>{name}</div>
                    <text>{email}</text>
                </div>
            </div>
            <div id="full_width_sm" style={{ width: "60%" }}>
                <div className="userRow_steps">
                    <div id="progress_bar"><CircularProgressbarWithChildren styles={buildStyles({ pathColor: "#7FD18C" })} value={(stepsWalked * 100) / 4000} >{stepsWalked} <br /><text>walked</text></CircularProgressbarWithChildren></div>
                    <div><div id="button" onClick={() => setSteps(stepsWalked + 500, userId)}><BsPlus /></div><div id="padding-vertical">{stepsTarget}k <br /><text>target</text></div><div id="button" onClick={() => { setSteps(stepsWalked - 500, userId) }}><BiMinus /></div></div>
                </div>
                <div className="userRow_workout">
                    <div className="userRow_workout_dates">
                        <div><TbUserCheck />{performedDate}</div>
                        <ScheduledDate scheduledDate={scheduledDate} />
                    </div>
                    {<Feedback feedback={feedback} userId={userId} />}
                </div>
                <div className="userRow_nutrition">
                    <div id="piechart">
                        <Tooltip title={<ToolTipComponent protien={proteinConsumed} carbs={carbConsumed} fat={fatConsumed} />} style={{ padding: "0px", margin: "0px" }} arrow>
                            <div>
                                <PieChart
                                    data={[
                                        { value: (proteinConsumed * 100) / 125, color: '#F45C84' },
                                        { value: (fatConsumed * 100) / 125, color: '#03C7FC' },
                                        { value: (carbConsumed * 100) / 125, color: '#F5C90F' },
                                    ]}
                                    label={({ x, y, dy, dx }) => <text
                                        x={x}
                                        y={y}
                                        dx={dx}
                                        dy={dy}
                                        dominantBaseline="central"
                                        textAnchor="middle"
                                        style={{
                                            fontSize: '1.2em',
                                            fill: '#ffffff',
                                            width: '50%',
                                            wordWrap: 'break-word',
                                        }}
                                    >
                                        {calorieIntake}
                                    </text>}
                                    labelPosition={0}
                                    lineWidth={25}
                                >
                                </PieChart>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="userRow_incr_decr"><div id="button" onClick={() => { setCalorie(calorieIntake + 100, userId) }}><BsPlus /></div><div id="padding-vertical">2.5k <br /><text>target</text></div><div id="button" onClick={() => { setCalorie(calorieIntake - 100, userId) }}><BiMinus /></div></div>
                    <div id="button"><Link to={"/" + userId + "/nutrition"}><AiOutlineRight /></Link></div>
                </div>
            </div>
            <div className="userRow_last">
                <div><VscBell /></div>
            </div>
        </div>
    )
}