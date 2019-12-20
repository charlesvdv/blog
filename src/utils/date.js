const dateFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }

export const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', dateFormatOptions)
}