import React from 'react'
import { connect } from 'react-redux'

import { starteditTask } from '../../../actions/tasks'

import TaskForm from '../TaskForm'

const Edit = (props) => {
    return (
        <div className="container create">
            <TaskForm
                task={props.task}
                onSubmit={(task) => {
                    props.dispatch(starteditTask(props.task.id, task))
                    props.history.push('/')
                }}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        task: state.tasksToDo.find((task) => task.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit)