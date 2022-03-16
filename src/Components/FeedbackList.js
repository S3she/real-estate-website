import FeedbackItem from '../Components/FeedbackItem';

const FeedbackList = (feedback) => {

    return (
        <div className="feedback-list">
            {FeedbackItem.map((feedback) => (
            <FeedbackList key={feedback.FeedbackItem.id} img={feedback.FeedbackItem.img} title={feedback.FeedbackItem.title} text={feedback.FeedbackItem.text} />
            ))}
        </div>
    );
};

export default FeedbackList;