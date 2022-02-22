import React, { useState } from 'react'; 
import { Button } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import Input from './Input';
import TaskList from "./TaskList";

const Body = () => {
    const [ tasks, setTasks ] = useState([
        {id: 1, name: "Complete tusitala assignment", done: true},
        {id: 2, name: "Go for a swim", done: false},
        {id: 3, name: "Do FET", done: false},
    ]);

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleRemove = (event) => {
        let filtered = tasks.filter(task => task.id !== Number(event.target.id));
        setTasks(filtered);
    }

    const handleToggle = (event) => {
        let mapped = tasks.map(task => {
            return task.id === Number(event.target.id) ? { ...task, done: !task.done } : { ...task};
        });
        setTasks(mapped);
    }

    const handleDelete = () => {
        var newVal = prompt("Ok to continue, else click Cancel!");
        if (newVal || newVal === "") {
            setTasks([]);
        } else {
        }
    }

    const handleRandom = () => {
        let undones = []
        tasks.forEach((task, i) => {
            if (!task.done) {
                undones.push(i);
            }
        })
        if (undones.length === 0) {
            alert("You've completed all your tasks. WHOOP!!!")
        } else {
            let selected = Math.floor(Math.random() * undones.length);
            alert("You should probably get started on: " + tasks[undones[selected]].name);
        }
    }

    const handleAdd = (event) => {
        event.preventDefault();
        if (userInput === "") {
            alert("Don't leave the task empty :)");
            return;
        }
        let last = tasks.length === 0 ? 1 : tasks.slice(-1)[0].id + 1;
        let copy = [...tasks];        
        copy = [...copy, { id: last, name: userInput, done: false }];
        setTasks(copy);
        event.target.form.elements.foo.value = "";
        setUserInput("");
    }

    return (
        <Card as="h2" className="text-center">
            <Card.Header>Indecisive App</Card.Header>
            <Card.Body>
                <Card.Title as="h4">Put your choices in the hand of a computer!</Card.Title>
                <br></br>
                <Input handleChange={handleChange} handleAdd={handleAdd}/>                
                <br></br>
                <TaskList tasks={tasks} handleRemove={handleRemove} handleToggle={handleToggle}></TaskList>
                <div>
                    <Button variant="success" onClick={handleRandom}>What should I do?</Button>
                </div>
                <div>
                    <Button variant="danger" onClick={handleDelete}>Delete all</Button>
                </div>
            </Card.Body>
            <Button variant="outline-dark" target="_blank" href="https://github.com/VimuthM">Check out my git!</Button>
        </Card>
    )
}

export default Body;