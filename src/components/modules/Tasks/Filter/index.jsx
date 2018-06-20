import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByDeadline } from '../../../../actions/filters'
import './style.css'

const Filter = ({filters, dispatch}) => (
    <div className="container filter-container">
        <div className="tasks filter-search">
            <div className="input-field purple-input search flexed">
                <input 
                    type="text" 
                    placeholder="Search for a task" 
                    autoComplete="off"
                    value={filters.text} 
                    onChange={e => {
                        dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select onChange={e => e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByDeadline())}>
                    <option selected disabled>Sort by</option>
                    <option value="date">Date</option>
                    <option value="deadline">Deadline</option>
                </select>
            </div>
        </div>
    </div>
)

const ConnectedFilter = ({ filters }) => {
    return {
        filters
    }
}

export default connect(ConnectedFilter)(Filter)