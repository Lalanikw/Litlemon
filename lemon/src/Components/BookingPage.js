import BookingForm from "./BookingForm";
import React, {useState} from 'react';

function BookingPage() {

    const [availableTimes, setAvailableTimes] = useState ([]);

    const updateAvailableTimes = (times) => {
        setAvailableTimes(times)
    }

    return (
        <div>
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}/>
        </div>
    )
}

export default BookingPage;