import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext';

const FeedbackForm = () => {

    const[text, setText] = useState('');
    const[rating, setRating] = useState(10);
    const[btnDisabled, setBtnDisabled] = useState(true);
    const[message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
      if(feedbackEdit.edit === true){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
      }
    }, [feedbackEdit])

    const handleText = (e) =>{
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Feedback must be more than 10 Characters')
        } else {
            setBtnDisabled(false);
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim().length > 10){
        const newFeedback = {
          text,
          rating
        }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
          addFeedback(newFeedback);
        }
        
        setText('')
      }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How do you find our feedback service?</h3>
        <br />
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input onChange={handleText} type="text" placeholder='Enter your Feedback' value={text} />
            <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
        </div>
        {message && <div className='message'>{message}</div>} 
      </form>
    </Card>
  )
}

export default FeedbackForm