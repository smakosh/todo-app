import React from 'react'
import { Link } from 'react-router-dom'
import { startremoveTask, startCompletedTask } from '../../actions/tasks'
import { connect } from 'react-redux'

const TaskItem = ({ dispatch, id, name, type, completed }) => (
    <div className="single-task">
        <div>
            <h4
                className={`${completed ? 'completed' : '' }`}
            >
                {name}
            </h4>
            <p 
                className={`badge ${type}`}
            >
                {type}
            </p>
        </div>
        <div className="buttons">
            <Link to={`/edit/${id}`}>
                <i className="fa fa-pencil-square-o"></i>
            </Link>
            <a onClick={(event) => {
                dispatch(startremoveTask({ id: id }
            ))}}>
                <i className="fa fa-close"></i>
            </a>
            <label>
                <input 
                    type="radio" 
                    className="green-checkbox"
                    defaultChecked={`${completed ? 'checked' : '' }`}
                    onClick={(event) => {
                        dispatch(startCompletedTask({ id: id }
                    ))}}
                />
                <span></span>
            </label>
        </div>
    </div>
)

export default connect()(TaskItem)