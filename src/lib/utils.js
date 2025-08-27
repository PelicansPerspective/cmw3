/**
 * cn - A utility function for conditionally joining CSS class names together
 * @param  {...string} classes - The class names to be joined
 * @returns {string} - A string of class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * formatDate - A utility function for formatting dates
 * @param {Date} date - The date to be formatted
 * @returns {string} - A formatted date string
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}
