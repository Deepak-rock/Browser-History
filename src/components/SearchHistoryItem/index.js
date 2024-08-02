import './index.css'

const SearchHistoryItem = props => {
  const {historyListDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-icon" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchHistoryItem
