export default (tasks, { text, sortBy }) => {
  return tasks.filter(task => {
    const textMatch = task.name.toLowerCase().includes(text.toLowerCase())
    return textMatch
  }).sort((a, b) => {
    switch(sortBy) {
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1
      case 'deadline':
        return a.day > b.day ? 1 : -1
      default:
        return a.createdAt < b.createdAt ? 1 : -1
    }
  })
}