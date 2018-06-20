import React from 'react'
import { connect } from 'react-redux'
import { startAddTask } from '../../../actions/tasks'
import TaskForm from '../TaskForm'

const Create = ({ dispatch, history }) => (
    <div className="container create">
        <TaskForm 
            onSubmit={task => {
                dispatch(startAddTask(task, history))
                history.push('/')
            }}
        />
    </div>
)

export default connect()(Create)