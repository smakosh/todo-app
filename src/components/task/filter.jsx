import React from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByDate, sortByDeadline } from '../../actions/filters'

import '../../styles/forms.css'

const Filter = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 hide-tablet-down"></div>
            <div className="column xlarge-8 medium-12 small-12">
                <div className="input-field purple-input search flexed">
                    <span className="search-icon"></span>
                    <input 
                        type="text" 
                        placeholder="Search for a task" 
                        autoComplete="off"
                        value={props.filters.text} 
                        onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <select
                        onChange={(e) => {
                            if(e.target.value === 'date') {
                                props.dispatch(sortByDate());
                            } else if (e.target.value === 'deadline') {
                                props.dispatch(sortByDeadline());
                            }
                        }}
                    >
                        <option selected disabled>Sort by</option>
                        <option value="date">Date</option>
                        <option value="deadline">Deadline</option>
                    </select>
                </div>
            </div>
            <div className="column xlarge-2 hide-mobile"></div>
        </div>
    </div>
)

const ConnectedFilter = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(ConnectedFilter)(Filter)