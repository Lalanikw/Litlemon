import { render, screen } from '@testing-library/react';
import BookingForm from "./Components/BookingForm";

  test("Renders the BookingForm heading", ()=> {
    //render the App Component
    render(<BookingForm/>);
  
    //save the heading in a variable
   const headingElement = screen.getByText("Reserve OnLine");
  
   //test assumption
   expect(headingElement).toBeInTheDocument();
} )

