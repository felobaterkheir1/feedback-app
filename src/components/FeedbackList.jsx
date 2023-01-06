import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import FeedbackContext from './context/FeedbackContext'


const FeedbackList = () => {

    const { feedback } = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return(
            <div>NO Feedback Items</div>
        )
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired
//     }))
// }

export default FeedbackList
