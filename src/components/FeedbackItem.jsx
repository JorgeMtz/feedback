import {FiX} from 'react-icons/fi'
import Card from "./shared/Card"

const FeedbackItem = ({item, handleDelete}) => {

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FiX color="white"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem