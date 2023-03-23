import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState('');

//js syntax called array distructuring and we use it because 
//useState always returns an array with exactly two elements
//pulling those elements out of that returned array.
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        } 
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
        //will remove any excess white space
        //enteredAge is a string, not a number.
        //+ forces a  conversion of the age to a number; Ensures that it is a number.

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    };

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"  value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" valu={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
    </Card>
    );
};

//htmlFor is the prop name that For attributes to a label.
//onSubmit prop to specify a function that should be executed
//when that from is submitted.
export default AddUser;