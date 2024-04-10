import React from "react";
import planeImage from "../assets/airplane.png";
const FlightItem = ({ flightData }) => {
  const {
    airline,
    departure,
    departureTime,
    arrival,
    arrivalTime,
    duration,
    price,
    emi,
  } = flightData;
  const formatDuration = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}h ${formattedMinutes}m`;
  };
  return (
    <li className="flight-item">
      <div className="flight-airline">
        <img src={planeImage} alt="Airplane" className="icon" />
        <span>{airline}</span>
      </div>
      <div className="flight-details">
        <div className="departure-details">
          <p>{departure}</p>
          <b>{departureTime}</b>
        </div>

        <div className="flight-duration">
          <p className="time">{formatDuration(duration)}</p>
        </div>
        <div className="arrival-details">
          <p>{arrival}</p>
          <b>{arrivalTime}</b>
        </div>
        <div className="flight-price">
          <p className="price">₹{price}</p>
          <p className="emi">{emi}</p>
        </div>
        <button className="book-button">BOOK</button>
      </div>

      <div className="extra-details">
        <p className="refund-details">Partially Refundable</p>
        <button className="details-button">
          Flight Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="15"
          >
            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path
              fill="#74C0FC"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default FlightItem;
