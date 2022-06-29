import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid';
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(feedback => feedback.id !== id));
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback,...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext