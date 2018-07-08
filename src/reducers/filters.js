// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    show: 'All'
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DEADLINE':
            return {
                ...state,
                sortBy: 'deadline'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'FILTER':
            return {
                ...state,
                show: action.by
            }
        default:
            return state
    }
}