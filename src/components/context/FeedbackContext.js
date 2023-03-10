import { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    
    const [feedback, setFeedback] = useState([]);

   const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
   })

   useEffect(() => {
    fetchFeedback()
   }, [])

   const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    setFeedback(data)
   }

   const addFeedback = async(newFeedback) => {
     const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
     })
     const data = await response.json()
    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
   }

   const deleteFeedback = async(id) => {

    await fetch(`/feedback/${id}`, {method: 'DELETE'})
    window.confirm('Are you sure you want to delete this feedback?');
    setFeedback(feedback.filter((item) => (item.id !== id)))
   }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) =>{
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
       setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
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