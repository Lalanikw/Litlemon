import React, {useState} from "react";

function BookingForm ({availableTimes, dispatch}) {
    const [selectedTime, setSelectedTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_TIME', payload:selectedTime});
    };

    return (
        <div className="booking" >
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <div className="booking_fields">
                        <h2>Make your Reservation</h2>
                        <label>First Name:</label><br></br>
                        <input type="text" placeholder="first_name" id="first_name" required></input>
                        <label>Last Name:</label>
                        <input type="text" placeholder="last_name" id="last_name" required></input>

                        <label htmlFor="Resevarion Date"required>Date:</label>
                        <input type="date" placeholder="Date" id="Date" onChange={handleSubmit}></input>

                        <label htmlFor="Reservation Time"required>Choose time:</label>
                        <select value={selectedTime} onChange={(e) =>setSelectedTime(e.target.value)}>
                            <option value="">Select a time</option>
                            {availableTimes.map((time,index)=>(
                                <option key={time+index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="guests"required>Number of Guests:</label>
                        <input type="number" placeholder="1" min="1" max="10" id="Guests"></input>

                        <label htmlFor ="Occasion">Occasion:</label>
                        <select>
                            <option>Birthday</option>
                            <option>Annivesary</option>
                            <option>Other</option>
                        </select>

                        <label>Other notes:</label>
                        <input type="text" placeholder="Notes" name="Notes"></input>
                    </div>
                    <button type="submit">Make Your Reservation</button>
                </fieldset>
            </form>
        </div>
    );
}

export  default BookingForm;