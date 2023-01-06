import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    
    const [feedback, setFeedback] = useState([{
            id: 1,
            rating: 10,
            text: 'This Feedback of item 1.',
          },
          {
            id: 2,
            rating: 9,
            text: 'This Feedback of item 2.',
          },
          {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          }
   ]);

   const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
   })

   const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
   }

   const deleteFeedback = (id) => {
    window.confirm('Are you sure you want to delete this feedback?');
    setFeedback(feedback.filter((item) => (item.id !== id)))
   }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) =>{
       setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;