import FeedbackItem from '../Components/FeedbackItem';

const FeedbackList = (item) => {

    return (
        <div className="feedback-list">
            {item.map((item) => (
            <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default FeedbackList;