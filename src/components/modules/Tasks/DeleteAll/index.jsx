import React from 'react'
import { connect } from 'react-redux'
import { startDeleteAll } from '../../../../actions/tasks'

const DeleteAll = ({ dispatch }) => (
    <div className="center-text delete-all">
        <button onClick={() => dispatch(startDeleteAll())} className="btn btn-rounded btn-outlined red-btn">
            Delete All
        </button>
    </div>
)

export default connect()(DeleteAll)