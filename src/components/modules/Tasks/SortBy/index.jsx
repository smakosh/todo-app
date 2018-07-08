import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByDeadline } from '../../../../actions/filters'
import './style.css'

const SortBy = ({ setTextFilter, sortByDate, sortByDeadline, filters }) => (
    <div className="container filter-container">
        <div className="tasks filter-search">
            <div className="input-field purple-input search flexed">
                <input 
                    type="text" 
                    placeholder="Search for a task" 
                    autoComplete="off"
                    value={filters.text} 
                    onChange={e => setTextFilter(e.target.value)}
                />
                <select onChange={e => e.target.value === 'date' ? sortByDate() : sortByDeadline()}>
                    <option selected disabled>Sort by</option>
                    <option value="date">Date</option>
                    <option value="deadline">Deadline</option>
                </select>
            </div>
        </div>
    </div>
)

const ConnectedFilter = ({ filters }) => ({
    filters
})

export default connect(ConnectedFilter, { 
    setTextFilter,
    sortByDate,
    sortByDeadline
})(SortBy)