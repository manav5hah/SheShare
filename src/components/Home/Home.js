import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardsContainer from '../CardsContainer/CardsContainer';
import { filterByLocation, calculateNumberOfNights } from '../utils';
import AirbnbData from "../../assets/airbnb.json"
import Footer from '../Footer/Footer';

function Home() {
    const [filter, setFilter] = useState({
        location: "",
        no_of_nights: 0,
        guests: 0,
        originalJson: AirbnbData,
        updatedJson: AirbnbData
    });

    useEffect(() => {
        fetch("../../assets/airbnb.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setFilter(prevFilter => ({
                ...prevFilter,
                originalJson: data,
                updatedJson: data
            })))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const location = e.target[0].value;
        const startDate = new Date(e.target[1].value);
        const endDate = new Date(e.target[2].value);

        const filteredData = filterByLocation(filter.originalJson, location);
        const numberOfNights = calculateNumberOfNights(startDate, endDate);
        const guests = e.target[3].value;

        // Update the rate_per_night based on number of nights
        const updatedData = filteredData.map(item => ({
            ...item,
            rate_per_night: item.rate_per_night * numberOfNights
        }));

        setFilter(prevFilter => ({
            ...prevFilter,
            location: location,
            updatedJson: updatedData,
            no_of_nights: numberOfNights,
            guests: guests
        }));
    }

    return (
        <div className='w-full'>
            <SearchBar onSubmit={onSubmit} />
            <hr />
            <CardsContainer AirbnbData={filter.updatedJson} />
            <Footer />
        </div>
    );
}

export default Home;
