import Home from "./Home";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound";
import { useReducer, useContext } from "react";
import { fetchAPI, submitAPI } from "../api";
import Confimation from "./Confirmation";
import { SidebarContext, HeaderContext } from "../App";
export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}
export function initializeTimes() {
  return fetchAPI(new Date());
}

export async function submitForm(formData) {
  if (await submitAPI(formData)) window.location.href = "/confirmation";
}
export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const { setSidebarOpen } = useContext(SidebarContext);
  const { headerVisible } = useContext(HeaderContext);
  return (
    <main onClick={()=>setSidebarOpen(false)} className={headerVisible? "header":null}>
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
