import { UserRow } from './userRow';
import { IoMdWalk } from 'react-icons/io'
import { CgGym } from 'react-icons/cg'
import { BiDish } from 'react-icons/bi'
import { usersData } from '../data/users';
import { useState } from 'react';
import '../App.css';

export const Container = () => {
    const [users, setUsers] = useState(usersData);

    const setSteps = (steps, index) => {
        let newUsers = [...users];
        newUsers[index] = { ...newUsers[index], stepsWalked: steps };
        setUsers(newUsers);
    }
    const setCalorie = (calorie, index) => {
        let newUsers = [...users];
        newUsers[index] = { ...newUsers[index], calorieIntake: calorie };
        setUsers(newUsers);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="container_menu">
                    <div className="container_menu_leftMargin"><IoMdWalk />Steps</div>
                    <div><CgGym />Workout</div>
                    <div><BiDish />Nutrition</div>
                </div>
                {users.map((user, index) => {
                    return <UserRow key={index} user={user} setSteps={setSteps} setCalorie={setCalorie} />
                })}
            </div>
        </div>
    )
}