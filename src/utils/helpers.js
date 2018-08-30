export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
export function formatQuestion (question, author, authedUser) {
    const { id, timestamp, optionOne } = question
    const { name, avatarURL } = author
  
    return {
      name,
      author,
      id,
      text: optionOne.text,
      timestamp,
      avatar: avatarURL,
    }
}