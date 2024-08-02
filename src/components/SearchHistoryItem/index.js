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
        <img src={logoUrl} alt={logoUrl} className="app-icon" />
        <p className="title">
          {title}
          <span className="domain-url">{domainUrl}</span>
        </p>
      </div>
      <button className="button" type="button" onClick={onDelete}>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchHistoryItem
