import * as React from 'react';
import './SearchBar.css';
function SearchBar({ onSubmit }) {

    const [input, setInput] = React.useState({
        location: "",
        checkin: "",
        checkout: "",
        guests: 0
    });

    const onLocationChange = (e) => {
        e.preventDefault();
        setInput({ location: e.target.value });
    }

    const onCheckInChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setInput({ checkin: e.target.value });
    }

    const onCheckOutChange = (e) => {
        e.preventDefault();
        setInput({ checkout: e.target.value })
    }

    const onGuestsChange = (e) => {
        e.preventDefault();
        setInput({ guests: e.target.value });
    }

    return (
        <div className=''>
            <div className='px-32 w-full h-[40vh]'>
                <div className='font-bold text-gray-400'>
                    Find places to stay on Airbnb
                </div>
                <div className='font-light text-gray-400'>
                    Discover entire homes and rooms perfect for any trip.
                </div>
                <form onSubmit={onSubmit}>
                    <div className="sm:col-span-3 inline-grid grid-cols-4 leading-10 w-full">
                        <div className="my-2 ">
                            <input type="text" name="location" id="location" placeholder='Search Destination' className="block w-full rounded-l-full border-0 py-5 pl-4 pr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-10" onChange={onLocationChange} value={input.location} required />
                        </div>
                        <div className="my-2 ">
                            <input type="date" name="checkin" id="checkin" placeholder='Check In'
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} className="block w-full border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-10" onChange={onCheckInChange} value={input.checkin} required />
                        </div>
                        <div className="my-2 ">
                            <input type="date" name="checkout" id="checkout" placeholder='Check Out'
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")} className="block w-full border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-10" onChange={onCheckOutChange} value={input.checkout} required />
                        </div>
                        <div className="my-2 ">
                            <input type="number" name="guests" id="guests" placeholder='Guests' className="block w-full rounded-r-full border-0 py-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-10" onChange={onGuestsChange} value={input.guests} required />
                        </div>
                    </div>
                    <div className='flex justify-center items-center m-5'>
                            <button type='submit' className="px-4 py-2 rounded-full font-bold text-white bg-[#Add8e6] hover:bg-[#Add8f1]" >Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SearchBar