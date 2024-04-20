import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Card({ imagArray, name, location, rate_per_night }) {
    return (
        <div className='rounded-md pt-8 pl-10'>
            <div className=''>
                <Splide aria-label="My Favorite Images" className="h-48 w-72 overflow-hidden rounded-xl">
                    {imagArray.map((item, index) => (
                        <SplideSlide key={index}>
                            <img src={item.image} alt={item.alt} />
                        </SplideSlide>
                    ))}
                </Splide>
                <div className='font-semibold text-gray-600'>
                    {name}
                </div>
                <div className='font-semibold text-gray-400'>
                    {location}
                </div>
                <div className='font-semibold text-gray-700'>
                ₹{rate_per_night}
                </div>
                
            </div>
        </div>
    );
}

export default Card;
