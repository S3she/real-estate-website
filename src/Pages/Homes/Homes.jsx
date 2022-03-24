import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import BookingForm from "../../Components/BookingForm";
import Button from "../Blog/Button";


const ObjectPage = ({ objects }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [object, setObject] = useState({});
  const [text, setText] = useState([]);
  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
  });
  const [bookings, setBookings] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleFieldChange = (fieldName, fieldValue) => {
    setBooking({ ...booking, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      booking.firstName &&
      booking.lastName &&
      booking.date &&
      booking.phone &&
      booking.email
    ) {
      const newBooking = { ...booking, id: uuidv4(), objectId: object.id };
      setBookings([...bookings, newBooking]);
      setBooking({
        firstName: "",
        lastName: "",
        date: "",
        phone: "",
        email: "",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem("Bookings", JSON.stringify([...bookings]));
  }, [bookings]);

  useEffect(() => {
    if (objects.length === 0) {
      const currentObject = JSON.parse(localStorage.getItem("Current Object"));
      setObject(currentObject);
      setText(currentObject.text);
    } else {
      const currentObject = objects.filter(
        (object) => object.id === params.id
      )[0];
      localStorage.setItem("Current Object", JSON.stringify(currentObject));
      setObject(currentObject);
      setText(currentObject.text);
    }
  }, []);

  const onClick = () => {
    navigate("/homes");
  };

  return (
      <div className="row-cols-lg-1">
        <div className="col-lg-1">
          <Button className={"btn-icon"} type={"button"} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeftLong} className="fa-2x" />
          </Button>
        </div>
      

        <div className="container-sm"> 
        <div className="row">
        <div className="row row-cols-1">
        <div className="card-body card h-150 mx-20">
        <div className="col-lg-6 mb-2">
          <img src={object.image} alt="apartment" className="img-fluid" />
          <div className="mt-2">
            <h4>{object.address}</h4>
            <h5>Price: {object.price} kr</h5>
            <h5>Rooms: {object.rooms}</h5>
            <h5>Bathrooms: {object.bathrooms}</h5>
            <h5>Living area: {object.area} kvm</h5>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
           
        </div>
        <div className="col-lg-4">
          <BookingForm
            data={booking}
            onChange={handleFieldChange}
            submit={handleSubmit}
            success={success}
          />
          </div>
        </div> 
        </div>
        </div>
        </div>
      

    </div>
  );
};

export default ObjectPage;
