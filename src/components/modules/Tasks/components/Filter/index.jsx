import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { filterBy } from '../../actions'
import { CustomButton } from '../../../../common'
import './style.scss'

const Filter = ({ filterBy, filters }) => (
	<div className="container filter-by center-text">
		{['All', 'Active', 'Done'].map(item => (
			<CustomButton className={cx({ 'active-filter': filters.show === item })} key={item} onClick={() => filterBy(item)}>
				{item}
			</CustomButton>
		))}
	</div>
)

const mapStateToProps = ({ filters }) => ({
	filters
})

export default connect(mapStateToProps, { filterBy })(Filter)
