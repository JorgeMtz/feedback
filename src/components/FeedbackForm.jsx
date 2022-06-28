import { useState } from "react"
import Card from "./shared/Card"

const FeedbackForm = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>Give us a rating</h2>
                <div className="input-group">
                    <input type="text" value={text} onChange={handleTextChange} placeholder="Write a review" />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm