import React from "react";
import {useState} from "react";

function BookingForm({availableTimes, updateAvailableTimes}) {

    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("form submitted!");
    };

    return (
        <div className="booking" >
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <div className="booking_fields">
                        <label>Name:</label>
                        <input type="text" placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)}></input>
                        <label for="Resevarion Date">Date:</label>
                        <input type="date" placeholder="Date" name="date"></input>
                        <label for="Reservation Time">Choose time:</label>
                        <select>
                            <option>17.00</option>
                            <option>18.00</option>
                            <option>19.00</option>
                            <option>20.00</option>
                            <option>21.00</option>
                        </select>
                        <label for="guests">Number of Guests:</label>
                        <input type="number" placeholder="1" min="1" max="10" id="Guests"></input>
                        <label for ="Occasion">Occasion:</label>
                        <select>
                            <option>Birthday</option>
                            <option>Annivesary</option>
                            <option>Other</option>
                        </select>
                        <label>Other notes:</label>
                        <input type="text" placeholder="Notes" name="Notes"></input>
                    </div>
                    <button disabled={!name} type="submit">Make Your Reservation</button>
                </fieldset>
            </form>
        </div>
    );
}

export  default BookingForm;