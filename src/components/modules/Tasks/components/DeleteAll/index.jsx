import React from 'react'
import { connect } from 'react-redux'
import { startDeleteAll } from '../../actions'

const DeleteAll = ({ startDeleteAll }) => (
	<div className="center-text delete-all">
		<button type="button" onClick={startDeleteAll} className="btn btn-rounded btn-outlined red-btn">
            Delete All
		</button>
	</div>
)

export default connect(null, { startDeleteAll })(DeleteAll)
