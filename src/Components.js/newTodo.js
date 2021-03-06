import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import '../todo.css';

class NewTodo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {task: ''} 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTask({...this.state, id: uuid(), completed: false});
        this.setState({task: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='task'>
                <label htmlFor="task">New Task</label>
                <input type="text" name='task' value={this.state.task} placeholder="..." id="task" onChange={this.handleChange}/>
                <button value="submit">Add Task</button>
            </form>
        );
    }
}

export default NewTodo;