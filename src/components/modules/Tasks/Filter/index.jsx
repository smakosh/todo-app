import React from 'react'
import { connect } from 'react-redux'
import { filterBy } from '../../../../actions/filters'
import { CustomButton } from '../../../common'
import cx from 'classnames'
import './style.css'

const Filter = ({ filterBy, filters }) => (
    <div className="container filter-by center-text">
        {['All', 'Active', 'Done'].map((item, index) =>
            <CustomButton className={cx({ 'active-filter': filters.show === item })} key={index} onClick={() => filterBy(item)}>
                {item}
            </CustomButton>
        )}
    </div>
)

const mapStateToProps = ({ filters }) => ({
    filters
})

export default connect(mapStateToProps, { filterBy })(Filter)