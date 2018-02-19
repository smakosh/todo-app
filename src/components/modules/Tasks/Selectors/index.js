// Get visible tasks

export default (tasks, { text, sortBy }) => {
  return tasks.filter((task) => {
    const textMatch = task.name.toLowerCase().includes(text.toLowerCase())
    return textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'deadline') {
      return a.day > b.day ? 1 : -1
    }
    return a.createdAt < b.createdAt ? 1 : -1
  })
}