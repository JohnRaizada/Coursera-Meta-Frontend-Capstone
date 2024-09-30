import Home from "./Home";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";
import Confimation from "./Confirmation";
export function updateTimes(state, action) {
  console.log(action.date);
  return fetchAPI(new Date(action.date));
}
export function initializeTimes() {
  return fetchAPI(new Date());
}

export function submitForm(formData) {
  if (submitAPI(formData)) window.location.href = "/confirmation";
}
export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              availableTimesDispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/confirmation" element={<Confimation />} />
      </Routes>
    </main>
  );
}
