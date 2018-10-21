import React from 'react'
import { connect } from 'react-redux'
import { startEditTask } from '../actions'
import TaskForm from '../components/TaskForm'

const Edit = ({ startEditTask, history, task }) => (
	<div className="container create">
		<TaskForm
			task={task}
			onSubmit={taskToEdit => {
				startEditTask(task.id, taskToEdit)
				history.push('/')
			}}
		/>
	</div>
)

const mapStateToProps = (state, props) => ({
	task: state.tasksToDo.find(task => task.id === props.match.params.id)
})

export default connect(mapStateToProps, { startEditTask })(Edit)
