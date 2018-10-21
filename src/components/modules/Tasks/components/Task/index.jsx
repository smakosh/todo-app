import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import { startRemoveTask, startCompletedTask, startUnCompletedTask } from '../../actions'

const Task = ({
	startRemoveTask,
	startUnCompletedTask,
	startCompletedTask,
	id,
	name,
	type,
	completed
}) => (
	<div className={cx('single-task', { 'single-task-done': completed })}>
		<div className="right-text delete">
			<a onClick={() => startRemoveTask({ id })}>
				<i className="fa fa-close" />
			</a>
		</div>
		<div className="task-content">
			<div className="content">
				<h4 className={cx({ completed })}>
					{name}
				</h4>
				<div style={{ marginBottom: '.8rem' }}>
					<span className={`badge ${type}`}>
						{type}
					</span>
				</div>
			</div>
			<div className="complete">
				<label htmlFor="check">
					<input
						id="check"
						type="checkbox"
						className="green-checkbox"
						defaultChecked={completed && 'checked'}
						onClick={() => {
							completed ? startUnCompletedTask({ id })
								: startCompletedTask({ id })
						}}
					/>
					<span />
				</label>
			</div>
		</div>
		<div className="edit-part">
			<Link to={`/edit/${id}`} className="edit">
                Edit <i className="fa fa-pencil-square-o" />
			</Link>
		</div>
	</div>
)

export default connect(null, {
	startRemoveTask,
	startUnCompletedTask,
	startCompletedTask
})(Task)
