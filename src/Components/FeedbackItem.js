import { useState } from "react";
import FeedbackData from "../Pages/Data/FeedbackData";


const FeedbackItem = ({item}) => {
    const [img, setImg] = useState();
    const [title, setTitle] = useState("Testing");
    const [text, setText] = useState("Test");

    return (
        <div className="card">
            <div className="num-display">{item.img}</div>
            <div className="title-display">{item.title}</div>
            <div className="text-display">{item.text}</div>
        </div>
    );
};

export default FeedbackItem;