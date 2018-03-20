// tasks Reducer

const taskReducerDefaultState = []

const taskReducer = (state = taskReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.tasksToDo
      ]
    case 'SET_TASKS':
      return action.tasksToDo
    case 'SET_TO_COMPLETE':
      return state.map((tasksToDo) => {
        if (tasksToDo.id === action.id) {
          return {
            ...tasksToDo,
            completed: true
          }
        } else {
          return tasksToDo
        }
      })
    case 'SET_TO_UNCOMPLETED':
      return state.map((tasksToDo) => {
        if (tasksToDo.id === action.id) {
          return {
            ...tasksToDo,
            completed: false
          }
        } else {
          return tasksToDo
        }
      })
    case 'EDIT_TASK':
      return state.map((tasksToDo) => {
        if (tasksToDo.id === action.id) {
          return {
            ...tasksToDo,
            ...action.updates
          }
        } else {
          return tasksToDo
        }
      })
    case 'DELETE_TASK':
      return  state.filter(({ id }) => id !== action.id)
    case 'DELETE_ALL':
      return  taskReducerDefaultState
    default:
      return state
  }
}

export default taskReducer