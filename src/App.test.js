import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Booking';
import BookingForm from './BookingForm';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const mockTimes = [
    {time:'17:00', isAvailable:true},
    {time:'18:00', isAvailable:true},
    {time:'19:00', isAvailable:true},
    {time:'20:00', isAvailable:true},
    {time:'21:00', isAvailable:true},
    {time:'22:00', isAvailable:true},
]

const mockDates = [
  '2024-05-25', '2024-05-26','2024-05-27','2024-05-28'
]
test('renders BookingPage heading, fields and labels on the form', ()=>{
  render(<BookingPage />);
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
 
  render(< BookingPage onSubmit = {handleSubmit}/>);
  const timeInput = screen.getByLabelText('Choose time')
  fireEvent.change(timeInput,{target:{value:'18:00'}})

  const timeChange = screen.getByText('Booked')

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-05-25'}});

  expect(timeChange).not.toHaveClass('booked');
})

test('the booking times are initialized when the form is submitted',()=>{
  const handleSubmit = jest.fn();
 
  render(< BookingPage onSubmit = {handleSubmit}/>);
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput,{target:{value:'2024-05-25'}});

  const timeInput = screen.getByLabelText('Choose time')
  fireEvent.change(timeInput,{target:{value:'18:00'}})

  const timeChange = screen.getByText('Booked')
  
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(timeChange).not.toHaveClass('booked');
})

test('the booking times are updated when time is selected',()=>{
  const handleSubmit = jest.fn();
 
  render(< BookingPage onSubmit = {handleSubmit}/>);
  const timeInput = screen.getByLabelText('Choose time')
  fireEvent.change(timeInput,{target:{value:'18:00'}})

  const timeChange = screen.getByText('Booked')
  expect(timeChange).toBeInTheDocument();
})