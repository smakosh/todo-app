import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import Task from './Task'
import SelectedTasks from './Selectors'
import DeleteAll from './DeleteAll'
import SortBy from './SortBy'
import Filter from './Filter'
import add from '../../../assets/add.svg'
import './style.css'

const Tasks = ({ tasks, filters }) => (
    <div className="container">
        <div className='right-text add-card'>
          <Link to="/create"><i className="fa fa-plus"></i></Link>
        </div>
        <Link className="add-card-mobile" to="/create">
            <img src={add} alt="add new task" />
        </Link>
        <SortBy />
        <Filter />
        <div className="tasks">
            <FlipMove>
                {tasks.filter(task => {
                    switch(filters.show) {
                        case 'All':
                            return task
                        case 'Active':
                            return !task.completed
                        case 'Done':
                            return !!task.completed
                        default:
                            return task
                    }
                }).map(task => <Task key={task.id} {...task} />)}
            </FlipMove>
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

const ConnectedTasks = ({ tasksToDo, filters }) => ({
    tasks: SelectedTasks(tasksToDo, filters),
    filters
})

export default connect(ConnectedTasks)(Tasks)