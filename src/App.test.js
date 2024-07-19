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
  const guestsLabel = screen.getByLabelText('Number of Guests');
  const dateLabel =screen.getByLabelText('Choose date');
  const timeLabel =screen.getByLabelText('Choose time');
  const occasionLabel =screen.getByLabelText('Occasion');
  expect(headingElement).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(guestsLabel).toHaveAttribute('min',"1");
  expect(guestsLabel).toHaveAttribute('max','10');
  expect(dateLabel).toBeInTheDocument();
  expect(dateLabel).toHaveAttribute('min');
  expect(dateLabel).toHaveAttribute('max');
  expect(timeLabel).toBeInTheDocument();
  expect(timeLabel).toHaveAttribute('required')
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
  fireEvent.change(dateInput,{target:{value:'2024-11-25'}});

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

test('when the inputs are valid the submit button is no longer disabled',()=>{
  const handleSubmit = jest.fn();
  render(< BookingPage onSubmit = {handleSubmit}/>,{wrapper:BrowserRouter});
  const firstNameInput = screen.getByLabelText('First Name *');
  fireEvent.change(firstNameInput,{target:{value:'Anne'}});
  const lastNameInput = screen.getByLabelText('Last Name *');
  fireEvent.change(lastNameInput,{target:{value:'Park'}});
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-11-25'}});
  const timeInput = screen.getByLabelText('Choose time');
  fireEvent.change(timeInput,{target:{value:'18:00'}})
  const guestsInput = screen.getByLabelText('Number of Guests');
  fireEvent.change(guestsInput,{target:{value:5}});
  const submitButton =screen.getByRole('button');
  expect(submitButton).not.toBeDisabled();
})

test('when the inputs are invalid the submit button is disabled',()=>{
  const handleSubmit = jest.fn();
  render(< BookingPage onSubmit = {handleSubmit}/>,{wrapper:BrowserRouter});
  const firstNameInput = screen.getByLabelText('First Name *');
  fireEvent.change(firstNameInput,{target:{value:'An'}});
  const lastNameInput = screen.getByLabelText('Last Name *');
  fireEvent.change(lastNameInput,{target:{value:'Pa'}});
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-11-25'}});
  const timeInput = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of Guests');
  fireEvent.change(guestsInput,{target:{value:15}});
  const submitButton =screen.getByRole('button');
  expect(submitButton).toBeDisabled();
})