import { render, screen } from "@testing-library/react";
import Booking from "./components/Booking";
import { initializeTimes, updateTimes } from "./components/Main";
test("Renders the Booking heading", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns a non-empty array", () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});

test("updateTimes returns a non-empty array", () => {
  expect(
    updateTimes(["17:00", "18:00"], { date: "2017-01-26" }).length
  ).toBeGreaterThan(0);
});
