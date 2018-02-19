import React from 'react'
import { connect } from 'react-redux'
import { startAddTask } from '../../actions/tasks'
import '../../styles/forms.css'
import TaskForm from './tasksForm'

const Create = (props) => (
    <div className="container create">
        <TaskForm 
            onSubmit={(task) => {
                props.dispatch(startAddTask(task))
                props.history.push('/')
            }}
        />
    </div>
)

const ConnectCreate = (dispatch) => {
    return {
        startAddTask: (tasksToDo) => dispatch(startAddTask(tasksToDo))
    }
}

export default connect(ConnectCreate)(Create)