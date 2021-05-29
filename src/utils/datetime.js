const dateFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }

export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', dateFormatOptions)
}

export const formatMinutes = (minutes) => {
  if (minutes === 1) {
    return 'A minute'
  }
  return `${minutes} minutes`
}
