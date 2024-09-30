import Home from "./Home";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound";
export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
