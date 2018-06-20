import React from 'react'
import { connect } from 'react-redux'
import { startEditTask } from '../../../actions/tasks'
import TaskForm from '../TaskForm'

const Edit = ({ dispatch, history, task}) => (
    <div className="container create">
        <TaskForm
            task={task}
            onSubmit={taskToEdit => {
                dispatch(startEditTask(task.id, taskToEdit))
                history.push('/')
            }}
        />
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        task: state.tasksToDo.find(task => task.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit)