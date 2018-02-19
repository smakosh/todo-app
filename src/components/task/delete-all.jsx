import React from 'react'
import { connect } from 'react-redux'
import { startdeleteAll } from '../../actions/tasks'

const Deleteall = ({ dispatch }) => (
    <div className="center-text deleteall">
            <button 
                onClick={(e) => {
                    dispatch(startdeleteAll())}} 
                className="btn btn-rounded btn-outlined red-btn"
            >
                Delete All
            </button>
    </div>
)

export default connect()(Deleteall)