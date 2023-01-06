import { useContext } from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa' 
import FeedbackContext from './context/FeedbackContext'

const FeedbackItem = ({ item }) => {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        {item.text}
      </div>
      {/* <button onClick={handleRating}>rating</button> */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes className="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit className="purple" />
      </button>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object
}

export default FeedbackItem
