import BookingForm from "./BookingForm";
import React, {useReducer} from 'react';
import { Route, Routes } from "react-router-dom";

//initial state

function initializeTimes(){
    return["5pm", "6pm", "7pm", "8pm", "9pm"];
}

//update function
function updateTimes(state,action) {
    switch(action.type){
        case 'ADD_TIME':
            return [...state, action.payload];
        default:
            return state;
    }
}

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>

            <Routes>
                <Route path="./BookingPage.js" element={<BookingPage />}></Route>
            </Routes>
        </div>

    
    )
}

export default BookingPage;