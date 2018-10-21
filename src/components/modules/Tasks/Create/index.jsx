import React from 'react'
import { connect } from 'react-redux'
import { startAddTask } from '../actions'
import TaskForm from '../components/TaskForm'

const Create = ({ startAddTask, history }) => (
	<div className="container create">
		<TaskForm
			onSubmit={task => {
				startAddTask(task, history)
				history.push('/')
			}}
		/>
	</div>
)

export default connect(null, { startAddTask })(Create)
