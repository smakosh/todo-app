import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import { startRemoveTask, startCompletedTask, startUnCompletedTask } from '../../../../actions/tasks'

const Task = ({ dispatch, id, name, type, completed }) => (
    <div className={cx('single-task', { 'single-task-done': completed })}>
        <div className="right-text delete">
            <a onClick={() => dispatch(startRemoveTask({ id: id }))}>
                <i className="fa fa-close"></i>
            </a>
        </div>
        <div className="task-content">
            <div className="content">
                <h4 className={cx({ 'completed': completed })}>
                    {name}
                </h4>
                <div style={{ marginBottom: '.8rem'}}>
                    <span className={`badge ${type}`}>
                        {type}
                    </span>
                </div>
            </div>
            <div className="complete">
                <label>
                    <input 
                        type="checkbox" 
                        className="green-checkbox"
                        defaultChecked={`${ completed ? 'checked' : '' }`}
                        onClick={() => {
                            completed ? dispatch(startUnCompletedTask({ id: id })) : dispatch(startCompletedTask({ id: id }))
                        }}
                    />
                    <span></span>
                </label>
            </div>
        </div>
        <div className="edit-part">
            <Link to={`/edit/${id}`} className="edit">
                Edit <i className="fa fa-pencil-square-o"></i>
            </Link>
        </div>
    </div>
)

export default connect()(Task)