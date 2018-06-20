import database from '../firebase/firebase'

// ADD_TASK
export const addTask = tasksToDo => ({ type: 'ADD_TASK', tasksToDo })

export const startAddTask = (taskData = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid
  const {
    name = '',
    type = '',
    day = '',
    completed = false,
    createdAt = 0
  } = taskData
  const tasksToDo = { name, type, day, completed, createdAt }

  return database.ref(`users/${uid}/tasksToDo`).push(tasksToDo).then(ref => {
    dispatch(addTask({ id: ref.key, ...tasksToDo }))
  })
}

// DELETE_TASK
export const removeTask = ({ id } = {}) => ({ type: 'DELETE_TASK', id })

export const startRemoveTask = ({ id } = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/tasksToDo/${id}`).remove()
    .then(() => dispatch(removeTask({ id })))
    .catch(err => console.log(`something went wrong: ${err}`))
}

// EDIT_TASK
export const editTask = (id, updates) => ({ type: 'EDIT_TASK', id, updates })

export const startEditTask = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/tasksToDo/${id}`).update(updates)
    .then(() => dispatch(editTask(id, updates)))
    .catch(err => console.log(`something went wrong: ${err}`))
}

// SET_TO_COMPLETE
export const completedTask = ({ id } = {}) => ({ type: 'SET_TO_COMPLETE', id })


export const startCompletedTask = ({ id } = {}) => (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/tasksToDo/${id}`).update({ 'completed': true })
      .then(() => dispatch(completedTask({ id })))
      .catch(err => console.log(`something went wrong: ${err}`))
  }

// SET_TO_UNCOMPLETED
export const uncompletedTask = ({ id } = {}) => ({ type: 'SET_TO_UNCOMPLETED', id })

export const startUnCompletedTask = ({ id } = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/tasksToDo/${id}`).update({ 'completed': false })
    .then(() => dispatch(uncompletedTask({ id })))
    .catch(err => console.log(`something went wrong: ${err}`))
}

// DELETE_ALL
export const deleteAll = () => ({ type: 'DELETE_ALL' })

export const startDeleteAll = () => (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/tasksToDo`).remove()
      .then(() => dispatch(deleteAll()))
      .catch(err => console.log(`something went wrong: ${err}`))
  }

// SET_TASKS
export const setTasks = tasksToDo => ({ type: 'SET_TASKS', tasksToDo })

export const startSetTasks = () => (dispatch, getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/tasksToDo`).once('value')
    .then(snapshot => {
      const tasksToDo = []

      snapshot.forEach(childSnapshot => {
        tasksToDo.push({ id: childSnapshot.key, ...childSnapshot.val() })
      })
      dispatch(setTasks(tasksToDo))
  })
}