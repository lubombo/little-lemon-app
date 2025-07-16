import BookingForm from './BookingForm';
import { useReducer } from 'react';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

const updateTimes = (state, action) => {
  if (action.type === 'update_times') {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section>
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
