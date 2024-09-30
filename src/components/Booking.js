import { useState } from "react";
import { occasions } from "../Data";
export default function Booking({
  availableTimes,
  availableTimesDispatch,
  submitForm,
}) {
  const [booking, setBooking] = useState({
    date: new Date().toISOString().split("T")[0],
    time: availableTimes[0],
    guests: 1,
    occasion: occasions[0],
  });
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(booking);
        }}
      >
        <h1 className="display-title highlight-color-other">Reserve a table</h1>
        <div>
          <label
            htmlFor="booking-date"
            className="section-category highlight-color-other"
          >
            Choose date
          </label>
          <input
            type="date"
            required
            id="booking-date"
            name="booking-date"
            value={booking.date}
            onChange={(e) => {
              setBooking({ ...booking, date: e.target.value });
              availableTimesDispatch({
                type: "updateTimes",
                date: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label
            htmlFor="booking-time"
            className="section-category highlight-color-other"
          >
            Choose time
          </label>
          <select
            id="booking-time"
            name="booking-time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="booking-guests"
            className="section-category highlight-color-other"
          >
            Number of guests
          </label>
          <input
            type="number"
            required
            id="booking-guests"
            name="booking-guests"
            placeholder="1"
            min="1"
            max="10"
            value={booking.guests}
            onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
          />
        </div>
        <div>
          <label
            htmlFor="booking-occasion"
            className="section-category highlight-color-other"
          >
            Occasion
          </label>
          <select
            required
            id="booking-occasion"
            name="booking-occasion"
            value={booking.occasion}
            onChange={(e) =>
              setBooking({ ...booking, occasion: e.target.value })
            }
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Make your reservation</button>
      </form>
    </section>
  );
}
