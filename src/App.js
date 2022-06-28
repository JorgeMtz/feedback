import {useState} from "react"
import { v4 as uuidv4} from 'uuid';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(feedback => feedback.id !== id));
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback])
  }
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          }>
          </Route>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </BrowserRouter>
  );
}

export default App;
