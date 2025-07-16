import { useState } from 'react';
import { submitForm } from '../api';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update_times', date: selectedDate });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    date,
    time,
    guests,
    occasion,
  };
  const success = await submitForm(formData);
  if (success) {
    alert("Reservation successful!");
    setDate("");
  setTime("");
  setGuests(1);
  setOccasion("Birthday");
  }
};

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: 200, gap: 20 }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {Array.isArray(availableTimes) &&
          availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
