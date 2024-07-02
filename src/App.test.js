import { fireEvent, render, screen } from '@testing-library/react';

import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';

// const mockGetItem = jest.fn();
// const mockSetItem = jest.fn();
// Object.defineProperty(window, "localStorage",{
//   value:{
//     getItem : ()=>
//   }
// })

test('renders BookingPage heading, fields and labels on the form', ()=>{
  const handleSubmit = jest.fn();
  render(<BookingPage onSubmit ={handleSubmit} />,{wrapper:BrowserRouter});
  const headingElement = screen.getByText("Book a Table");
  const guestsLabel = screen.getByText('Number of Guests');
  const dateLabel =screen.getByLabelText('Choose date');
  const timeLabel =screen.getByLabelText('Choose time');
  const occasionLabel =screen.getByLabelText('Occasion');
  expect(headingElement).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
})



test('the booking times are initialized when the date is changed',()=>{
  const handleSubmit = jest.fn();
 
  render(< BookingPage onSubmit ={handleSubmit} />,{wrapper:BrowserRouter});
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-10-04'}});
 
  const timeChange = screen.getByText('Booked' && '19:00')

  
  fireEvent.change(dateInput,{target:{value:'2024-10-10'}});

  expect(timeChange).not.toHaveClass('booked');
})

test('the booking times are initialized when the form is submitted',()=>{
  const handleSubmit = jest.fn();
 
  render(< BookingPage onSubmit = {handleSubmit}/>,{wrapper:BrowserRouter});
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-07-25'}});

  const timeInput = screen.getByLabelText('Choose time')
  fireEvent.change(timeInput,{target:{value:'18:00'}})

  const timeChange = screen.getByText('Booked' && '18:00')
  
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(timeChange).not.toHaveClass('booked');
})

test('the booking times are updated when time is selected',()=>{
  const handleSubmit = jest.fn();
 
  render(< BookingPage onSubmit ={handleSubmit}/>,{wrapper:BrowserRouter});

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-08-25'}});

  const timeInput = screen.getByLabelText('Choose time')
  fireEvent.change(timeInput,{target:{value:'18:00'}})

  const timeChange = screen.getByText('Booked' && '18:00')
  expect(timeChange).toBeInTheDocument();
})
