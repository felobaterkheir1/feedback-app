import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext';

const FeedbackStats = () => {

  const { feedback } = useContext(FeedbackContext);
  // Calculating the average
  let average = feedback.reduce((acc, cur) => {
    return (acc + cur.rating) 
  }, 0) / feedback.length;

  // reassignment to one decimal number
  average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
        <h2>{feedback.length} Reviews</h2>
        <h2>Average: {isNaN(average) ? 0 : average}</h2>
    </div>
  )
}

export default FeedbackStats
