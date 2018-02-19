import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'

import TaskItem from './taskItem'
import selectTasks from '../../selectors/tasks'
import DeleteAll from './delete-all'
import Filter from './filter'

import '../../styles/task.css'

const Tasks = (props) => (
    <div className="container">
        <div className='card center-text add-card'>
          <Link to="/create">Add new Task</Link>
        </div>
        <Filter />
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="tasks">
                    <FlipMove>
                        { props.tasks.map((task) => {
                            return <TaskItem key={task.id} {...task} />
                        })}
                    </FlipMove>
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
        {
            props.tasks.length === 0 ?
            <div className="center-text empty-state">
                <h2>
                    You have no tasks to do, it's time to start up your day by adding a new task!
                </h2>
                <Link 
                    to="/create"
                    className="btn btn-rounded btn-outlined green-btn"
                >
                    Add new Task
                </Link>
            </div>
            : null
        }
        {
            props.tasks.length > 0 ?
            <DeleteAll />
            : null
        }
    </div>
)

const ConnectedTasks = (state) => {
    return {
        tasks: selectTasks(state.tasksToDo, state.filters)
    }
}

export default connect(ConnectedTasks)(Tasks)