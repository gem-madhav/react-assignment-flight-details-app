import { useEffect, useState } from "react";
import "./App.css";
import FlightSort from "./components/FlightSort";
import FlightList from "./components/FlightList";

const flightData = [
  {
    id: 1,
    airline: "IndiGo",
    departure: "DEL",
    arrival: "BOM",
    duration: 95,
    arrivalTime: "10:25",
    departureTime: "15:00",
    price: 4743,
    emi: "No Cost EMI from ₹949",
  },
  {
    id: 2,
    airline: "SpiceJet",
    departure: "DEL",
    arrival: "BOM",
    duration: 150,
    arrivalTime: "18:05",
    departureTime: "20:50",
    price: 5355,
    emi: "No Cost EMI from ₹1,071",
  },
  {
    id: 3,
    airline: "Air India",
    departure: "DEL",
    arrival: "BOM",
    duration: 160,
    price: 5503,
    arrivalTime: "01:05",
    departureTime: "10:00",
    emi: "No Cost EMI from ₹1,101",
  },
];

function App() {
  const [flights, setFlights] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const sortFlights = (data, sortBy) => {
    if (!data || data.length === 0) return [];
    const sortedData = [...data];
    sortedData.sort((firstFlight, secondFlight) => {
      switch (sortBy) {
        case "price-asc":
          return firstFlight.price - secondFlight.price;
        case "price-desc":
          return secondFlight.price - firstFlight.price;
        case "duration-asc":
          return firstFlight.duration - secondFlight.duration;
        case "duration-desc":
          return secondFlight.duration - firstFlight.duration;
        case "departure-asc":
          return (
            parseTime(firstFlight.departureTime) -
            parseTime(secondFlight.departureTime)
          );
        case "departure-desc":
          return (
            parseTime(secondFlight.departureTime) -
            parseTime(firstFlight.departureTime)
          );
        case "arrival-asc":
          return (
            parseTime(firstFlight.arrivalTime) -
            parseTime(secondFlight.arrivalTime)
          );
        case "arrival-desc":
          return (
            parseTime(secondFlight.arrivalTime) -
            parseTime(firstFlight.arrivalTime)
          );
        default:
          return 0;
      }
    });
    return sortedData;
  };

  // Helper function to parse 24 hour time string
  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Fetching flights
  useEffect(() => {
    const fetchFlights = async () => {
      localStorage.setItem("flightData", JSON.stringify(flightData));
      const storedFlights = localStorage.getItem("flightData");
      if (storedFlights) {
        setFlights(JSON.parse(storedFlights));
      }
    };

    fetchFlights();
  }, []);

  const handleSort = (sortByString) => {
    setSortBy(sortByString);
  };
  useEffect(() => {
    setFlights((prevFlightsData) => sortFlights(prevFlightsData, sortBy));
  }, [sortBy]);

  return (
    <div className="flight-search">
      <FlightSort handleSort={handleSort} />
      <FlightList flights={flights} />
    </div>
  );
}

export default App;
