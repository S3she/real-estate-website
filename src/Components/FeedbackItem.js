import { useState } from "react";
import FeedbackData from "../Pages/Homes/FeedbackData";


const FeedbackItem = ({item}) => {
    const [img, setImg] = useState(img);
    const [title, setTitle] = useState(title);
    const [text, setText] = useState(text);

    return (
        <div className="card">
            <div className="num-display">{item.img}</div>
            <div className="title-display">{item.title}</div>
            <div className="text-display">{item.text}</div>
        </div>
    );
};

export default FeedbackItem;