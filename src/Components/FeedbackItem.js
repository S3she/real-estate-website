import { useState } from "react";
import { Link } from "react-router-dom";
import FeedbackData from "../Pages/Homes/FeedbackData";


const FeedbackItem = () => {
    const [id, setID] = useState(id);
    const [img, setImg] = useState(img);
    const [title, setTitle] = useState(title);
    const [text, setText] = useState(text);

    return (
        <div className="card">
            <div className="num-display">{img}</div>
            <div className="title-display">{title}</div>
            <div className="text-display">{text}</div>
            
        </div>
    );
};

export default FeedbackItem;