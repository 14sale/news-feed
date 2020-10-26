const dateFormat = date => {
  const d = new Date(date)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${monthNames[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`
}

export { dateFormat }
