import React, { useState } from "react";
import places from "./../data/places";

const Find = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roomsFilter, setRoomsFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [parkingFilter, setParkingFilter] = useState("All");

  const handleRoomsFilterChange = (e) => {
    setRoomsFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleParkingFilterChange = (e) => {
    setParkingFilter(e.target.value);
  };

  const getPriceRange = (range) => {
    switch (range) {
      case "80-150":
        return { min: 80, max: 150 };
      case "151-250":
        return { min: 151, max: 250 };
      case "251-350":
        return { min: 251, max: 350 };
      case "351-400":
        return { min: 351, max: 400 };
      default:
        return null;
    }
  };

  const filteredPlaces = places.filter((elem) => {
    const matchesSearch =
      elem.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      elem.agent_name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRooms =
      roomsFilter === "All" ? true : elem.number_of_rooms === parseInt(roomsFilter, 10);

    const priceRange = getPriceRange(priceFilter);

    const matchesPrice =
      priceFilter === "All"
        ? true
        : priceRange
        ? elem.price >= priceRange.min && elem.price <= priceRange.max
        : false;

    const matchesParking =
      parkingFilter === "All"
        ? true
        : parkingFilter === "Yes"
        ? elem.parking
        : !elem.parking;

    return matchesSearch && matchesRooms && matchesPrice && matchesParking;
  });

  return (
    <div className="pages">
      <h2>Search for a room</h2>
      <input
        type="search"
        placeholder="Search by address or agent name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div id="filtering">
        <h3>Filters</h3>
        <section>
          <select value={roomsFilter} onChange={handleRoomsFilterChange}>
            <option value="All">Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <select value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="All">Price</option>
            <option value="80-150">$80 - $150</option>
            <option value="151-250">$151 - $250</option>
            <option value="251-350">$251 - $350</option>
            <option value="351-400">$351 - $400</option>
          </select>

          <select value={parkingFilter} onChange={handleParkingFilterChange}>
            <option value="All">Parking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </section>
      </div>

      <div id="all-houses">
        {filteredPlaces.map((elem) => (
          <section key={elem.id} className="single-ad">
            <h2>{elem.address}</h2>
            <img src="" alt="ooops" />
            <h3>Rooms: {elem.number_of_rooms}</h3>
            <h3>Parking Available: {elem.parking ? "Yes" : "No"}</h3>
            <h3>${elem.price}</h3>
            <button
              onClick={() => {
                window.open(`https://wa.me/${elem.phone}`, "_blank");
              }}
            >
              Talk to agent
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Find;
