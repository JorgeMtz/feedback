import { useContext } from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" size={15}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem