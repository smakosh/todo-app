import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'

import Task from './Task'
import SelectedTasks from './Selectors'
import DeleteAll from './DeleteAll'
import Filter from './Filter'

import add from '../../../assets/add.svg'
import './style.css'

const Tasks = ({tasks}) => (
    <div className="container">
        <div className='right-text add-card'>
          <Link to="/create"><i className="fa fa-plus"></i></Link>
        </div>
        <Link className="add-card-mobile" to="/create">
            <img src={add} alt="add new task" />
        </Link>
        <Filter />
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="tasks">
                    <FlipMove>
                        {tasks.map(task => <Task key={task.id} {...task} />)}
                    </FlipMove>
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
        {tasks.length === 0 &&
            <div className="center-text empty-state">
                <h2>Start your day by adding some tasks!</h2>
                <Link to="/create" className="btn btn-rounded btn-outlined green-btn">
                    Add new Task
                </Link>
            </div>
        }
        {tasks.length > 0 && <DeleteAll />}
    </div>
)

const ConnectedTasks = ({tasksToDo, filters}) => {
    return {
        tasks: SelectedTasks(tasksToDo, filters)
    }
}

export default connect(ConnectedTasks)(Tasks)