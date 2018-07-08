// SET_TEXT_FILTER
export const setTextFilter = (text = '') => dispatch => dispatch({ type: 'SET_TEXT_FILTER', text })
// SORT_BY_DATE
export const sortByDate = () => dispatch => dispatch({ type: 'SORT_BY_DATE' })
// SORT_BY_DEADLINE
export const sortByDeadline = () => dispatch => dispatch({ type: 'SORT_BY_DEADLINE' })

export const filterBy= value => dispatch => dispatch({ type: 'FILTER', by: value })
  