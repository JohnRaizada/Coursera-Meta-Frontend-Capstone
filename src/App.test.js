import { render, screen } from "@testing-library/react";
import Booking from "./components/Booking";
import { initializeTimes, updateTimes } from "./components/Main";
import userEvent from "@testing-library/user-event";

test("initializeTimes returns a non-empty array", () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});

test("updateTimes returns a non-empty array", () => {
  expect(
    updateTimes(["17:00", "18:00"], { date: "2017-01-26" }).length
  ).toBeGreaterThan(0);
});

test("Renders the Booking heading", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
test("Renders the Booking date label", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
test("Renders the Booking time label", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Choose time");
  expect(labelElement).toBeInTheDocument();
});
test("Renders the Booking guests label", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Number of guests");
  expect(labelElement).toBeInTheDocument();
});
test("Renders the Booking occasion label", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Occasion");
  expect(labelElement).toBeInTheDocument();
});
test("Renders the Booking submit button", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  expect(buttonElement).toBeInTheDocument();
});
test("Renders the Booking date input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose date");
  expect(inputElement).toBeInTheDocument();
});
test("Renders the Booking time input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose time");
  expect(inputElement).toBeInTheDocument();
});
test("Renders the Booking guests input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  expect(inputElement).toBeInTheDocument();
});
test("Renders the Booking occasion input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Occasion");
  expect(inputElement).toBeInTheDocument();
});
test("Renders the correct default value for the Booking date input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose date");
  expect(inputElement).toHaveValue(new Date().toISOString().split("T")[0]);
});
test("Renders the correct default value for the Booking guests input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  expect(inputElement).toHaveValue(1);
});
test("Renders the correct default value for the Booking occasion input", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Occasion");
  expect(inputElement).toHaveValue("Birthday");
});
test("Renders the Booking date label and input as a pair", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Choose date");
  const inputElement = screen.getByLabelText("Choose date");
  const labelParent = labelElement.parentElement;
  const labelSibling = labelParent.childNodes[1];
  expect(labelSibling).toBe(inputElement);
});
test("Renders the Booking time label and input as a pair", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Choose time");
  const inputElement = screen.getByLabelText("Choose time");
  const labelParent = labelElement.parentElement;
  const labelSibling = labelParent.childNodes[1];
  expect(labelSibling).toBe(inputElement);
});
test("Renders the Booking guests label and input as a pair", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Number of guests");
  const inputElement = screen.getByLabelText("Number of guests");
  const labelParent = labelElement.parentElement;
  const labelSibling = labelParent.childNodes[1];
  expect(labelSibling).toBe(inputElement);
});
test("Renders the Booking occasion label and input as a pair", () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const labelElement = screen.getByText("Occasion");
  const inputElement = screen.getByLabelText("Occasion");
  const labelParent = labelElement.parentElement;
  const labelSibling = labelParent.childNodes[1];
  expect(labelSibling).toBe(inputElement);
});
test("Renders correct error message without inputting guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  userEvent.clear(inputElement);
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElement = screen.getByText("Required");
  expect(errorElement).toBeInTheDocument();
});
test("Renders correct error message without inputting date", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose date");
  userEvent.clear(inputElement);
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElement = screen.getByText("Required");
  expect(errorElement).toBeInTheDocument();
});
test("Renders correct error message with less guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  userEvent.clear(inputElement);
  userEvent.type(inputElement, "0");
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElement = screen.getByText("Atleast 1 is required");
  expect(errorElement).toBeInTheDocument();
});
test("Renders correct error message with more guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  userEvent.clear(inputElement);
  userEvent.type(inputElement, "11");
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElement = screen.getByText("Atmost 10 are allowed");
  expect(errorElement).toBeInTheDocument();
});
test("Doesn't render error message with correct guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Number of guests");
  for (let i = 1; i <= 10; i++) {
    userEvent.clear(inputElement);
    userEvent.type(inputElement, i.toString());
    userEvent.tab();

    // Wait for potential validation to finish
    await new Promise((resolve) => setTimeout(resolve, 0));

    const errorElementMore = screen.queryByText("Atmost 10 are allowed");
    expect(errorElementMore).toBeNull();
    const errorElementLess = screen.queryByText("Atleast 1 is required");
    expect(errorElementLess).toBeNull();
    const errorElementRequired = screen.queryByText("Required");
    expect(errorElementRequired).toBeNull();
    const errorElementNatural = screen.queryByText("Must be a natural number");
    expect(errorElementNatural).toBeNull();
  }
});
test("Doesn't render error message with correct date", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose date");
  userEvent.clear(inputElement);
  userEvent.type(inputElement, "2022-01-01");
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeNull();
  const errorElementValid = screen.queryByText("Must be a valid date");
  expect(errorElementValid).toBeNull();
});
test("Doesn't render error message with correct time", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Choose time");
  userEvent.selectOptions(inputElement, "18:00");
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeNull();
  const errorElementValid = screen.queryByText("Must be a valid time");
  expect(errorElementValid).toBeNull();
});
test("Doesn't render error message with correct occasion", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
  );
  const inputElement = screen.getByLabelText("Occasion");
  userEvent.selectOptions(inputElement, "Anniversary");
  userEvent.tab();

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeNull();
  const errorElementValid = screen.queryByText("Must be a valid occasion");
  expect(errorElementValid).toBeNull();
});
test("Doesn't render error message while submitting correct form", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const dateElement = screen.getByLabelText("Choose date");
  userEvent.clear(dateElement);
  userEvent.type(dateElement, "2022-01-01");
  const timeElement = screen.getByLabelText("Choose time");
  userEvent.selectOptions(timeElement, "18:00");
  const guestsElement = screen.getByLabelText("Number of guests");
  userEvent.clear(guestsElement);
  userEvent.type(guestsElement, "5");
  const occasionElement = screen.getByLabelText("Occasion");
  userEvent.selectOptions(occasionElement, "Anniversary");
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeNull();
  const errorElementValid = screen.queryByText("Must be a valid date");
  expect(errorElementValid).toBeNull();
  const errorElementValidTime = screen.queryByText("Must be a valid time");
  expect(errorElementValidTime).toBeNull();
  const errorElementValidOccasion = screen.queryByText("Must be a valid occasion");
  expect(errorElementValidOccasion).toBeNull();
  const errorElementNatural = screen.queryByText("Must be a natural number");
  expect(errorElementNatural).toBeNull();
  const errorElementMore = screen.queryByText("Atmost 10 are allowed");
  expect(errorElementMore).toBeNull();
  const errorElementLess = screen.queryByText("Atleast 1 is required");
  expect(errorElementLess).toBeNull();
});
test("Doesn't render error message while submitting correct form with default values", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeNull();
  const errorElementNatural = screen.queryByText("Must be a natural number");
  expect(errorElementNatural).toBeNull();
  const errorElementMore = screen.queryByText("Atmost 10 are allowed");
  expect(errorElementMore).toBeNull();
  const errorElementLess = screen.queryByText("Atleast 1 is required");
  expect(errorElementLess).toBeNull();
});
test("Render error message while submitting with invalid date", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const dateElement = screen.getByLabelText("Choose date");
  userEvent.clear(dateElement);
  userEvent.type(dateElement, "2022-13");
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeInTheDocument();
});
test("Render error message while submitting without guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const guestsElement = screen.getByLabelText("Number of guests");
  userEvent.clear(guestsElement);
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementRequired = screen.queryByText("Required");
  expect(errorElementRequired).toBeInTheDocument();
});
test("Renders error message while submitting with less guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const guestsElement = screen.getByLabelText("Number of guests");
  userEvent.clear(guestsElement);
  userEvent.type(guestsElement, "0");
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementLess = screen.queryByText("Atleast 1 is required");
  expect(errorElementLess).toBeInTheDocument();
});
test("Renders error message while submitting with more guests", async () => {
  const dispatchHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} />
  );
  const guestsElement = screen.getByLabelText("Number of guests");
  userEvent.clear(guestsElement);
  userEvent.type(guestsElement, "11");
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  const errorElementMore = screen.queryByText("Atmost 10 are allowed");
  expect(errorElementMore).toBeInTheDocument();
});
test("Submit button does not proceed with invalid form", async () => {
  const dispatchHandler = jest.fn();
  const submitFormHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} submitForm={submitFormHandler}/>
  );
  const guestsElement = screen.getByLabelText("Number of guests");
  userEvent.clear(guestsElement);
  userEvent.tab();
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(submitFormHandler).not.toHaveBeenCalled();
});
test("Submit button proceeds with default form", async () => {
  const dispatchHandler = jest.fn();
  const submitFormHandler = jest.fn();
  render(
    <Booking availableTimes={["17:00", "18:00"]} availableTimesDispatch={dispatchHandler} submitForm={submitFormHandler} />
  );
  const buttonElement = screen.getByRole("button", {
    name: "Make your reservation",
  });
  userEvent.click(buttonElement);

  // Wait for potential validation to finish
  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(submitFormHandler).toHaveBeenCalled();
});
