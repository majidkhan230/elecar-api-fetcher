import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const FeaturedLuxuryCat = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [carMake, setCarMake] = useState([]);
  const [filterCar, setFilterCar] = useState([]);
  const [se, setseIsFound] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("https://freetestapi.com/api/v1/cars");
      const res = data?.data;
      setCars(res);
      const carMakes = [...new Set(res.map((car) => car.make))];
      setCarMake(carMakes);
      setFilterCar(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterSearch(selectedCategory);
  }, [selectedCategory]); 
  const filterSearch = (cat) => {
    if (cat === "All") {
      setFilterCar(cars);
    } else {
      const filterData = cars.filter((item) => item.make === cat);
      setFilterCar(filterData);
    }
  };

  const handleSearch = () => {
    const filterSearchResults = filterCar.filter((car) =>
      car.engine.toString().toLowerCase().includes(search.toLowerCase())
    );
    if (filterSearchResults.length === 0) {
      setseIsFound(true);
    } else {
      setseIsFound(false);
      setFilterCar(filterSearchResults);
    }
  };

  const openModal = (car) => {
    setSelectedCar(car);
    setModal(true);
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-center">Featured Luxury Cars</h1>
      <div className="text-black font-sans flex justify-center gap-2 mt-4">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="rounded-md"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          className="rounded-md w-full sm:w-auto p-2 text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          {carMake.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-500 rounded-md px-4 py-2 font-bold text-white"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>

      {loading ? (
        <div className="text-center text-2xl font-bold mt-4">Loading......</div>
      ) : se ? (
        <h1 className="text-2xl font-bold text-center mt-4">No Data Found</h1>
      ) : (
        <div className="flex flex-wrap overflow-hidden gap-2 justify-center mt-10">
          {filterCar.map((car, index) => (
            <div
              onClick={() => openModal(car)}
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-72 cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.model}
                className="rounded-md w-full mb-4"
              />
              <div className="flex flex-col">
                <h1>{car.make}</h1>
                <p>{car.engine}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">{car.price}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {modal && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
            <img
              src={selectedCar.image}
              alt={`${selectedCar.make} ${selectedCar.model}`}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h1 className="text-xl font-bold mb-2">
              {selectedCar.make} {selectedCar.model}
            </h1>
            <p className="mb-2">Engine: {selectedCar.engine}</p>
            <p className="mb-2">Price: {selectedCar.price}</p>
            <p className="mb-2">Mileage: {selectedCar.mileage} miles</p>
            <p className="mb-4">Fuel Type: {selectedCar.fuelType}</p>
            <button
              onClick={() => setModal(false)}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedLuxuryCat;
