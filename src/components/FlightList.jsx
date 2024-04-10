import React from "react";
import FlightItem from "./FlightItem";

const FlightList = ({ flights }) => {
  return flights.length ? (
    <ul className="flight-list">
      {flights.map((flight) => (
        <FlightItem key={flight.id} flightData={flight} />
      ))}
    </ul>
  ) : (
    <p>Flights are loading . Or we don't have any flights.😥 </p>
  );
};

export default FlightList;
