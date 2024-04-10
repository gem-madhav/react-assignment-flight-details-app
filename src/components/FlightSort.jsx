import React from "react";
import { SortButton } from "./SortButton";
const sortOptions = [
  { title: "DEPARTURE", sortType: "departure" },
  { title: "DURATION", sortType: "duration" },
  { title: "ARRIVAL", sortType: "arrival" },
  { title: "PRICE", sortType: "price" },
];
const FlightSort = ({ handleSort }) => {
  return (
    <div className="flight-sort">
      <div className="sort-header">
        <h3>Sort By</h3>
        <div className="sort-buttons">
          {sortOptions.map((sortOption) => (
            <SortButton
              key={sortOption.title}
              sortOption={sortOption}
              handleSort={handleSort}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSort;
