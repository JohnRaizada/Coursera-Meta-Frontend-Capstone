import {
  cleanup,
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Booking from "./Booking";
import userEvent from "@testing-library/user-event";
import { jest } from "@jest/globals";

describe("Booking", () => {
  beforeEach(() => {
    const dispatchHandler = jest.fn();
    act(() => {
      render(
        <Booking availableTimes={[]} availableTimesDispatch={dispatchHandler} />
      );
    });
  });
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });
  test("Renders the Booking heading", () => {
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders the Booking date label", () => {
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });
  test("Renders the Booking time label", () => {
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
  });
  test("Renders the Booking guests label", () => {
    const labelElement = screen.getByText("Number of guests");
    expect(labelElement).toBeInTheDocument();
  });
  test("Renders the Booking occasion label", () => {
    const labelElement = screen.getByText("Occasion");
    expect(labelElement).toBeInTheDocument();
  });
  test("Renders the Booking submit button", () => {
    const buttonElement = screen.getByRole("button", {
      name: "Make your reservation",
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("Renders the Booking date input", () => {
    const inputElement = screen.getByLabelText("Choose date");
    expect(inputElement).toBeInTheDocument();
  });
  test("Renders the Booking time input", () => {
    const inputElement = screen.getByLabelText("Choose time");
    expect(inputElement).toBeInTheDocument();
  });
  test("Renders the Booking guests input", () => {
    const inputElement = screen.getByLabelText("Number of guests");
    expect(inputElement).toBeInTheDocument();
  });
  test("Renders the Booking occasion input", () => {
    const inputElement = screen.getByLabelText("Occasion");
    expect(inputElement).toBeInTheDocument();
  });
  test("Renders the correct default value for the Booking date input", () => {
    const inputElement = screen.getByLabelText("Choose date");
    expect(inputElement).toHaveValue(new Date().toISOString().split("T")[0]);
  });
  test("Renders the correct default value for the Booking guests input", () => {
    const inputElement = screen.getByLabelText("Number of guests");
    expect(inputElement).toHaveValue(1);
  });
  test("Renders the correct default value for the Booking occasion input", () => {
    const inputElement = screen.getByLabelText("Occasion");
    expect(inputElement).toHaveValue("Birthday");
  });
  test("Renders the Booking date label and input as a pair", () => {
    const labelElement = screen.getByText("Choose date");
    const inputElement = screen.getByLabelText("Choose date");
    const labelParent = labelElement.parentElement;
    const labelSibling = labelParent.childNodes[1];
    expect(labelSibling).toBe(inputElement);
  });
  test("Renders the Booking time label and input as a pair", () => {
    const labelElement = screen.getByText("Choose time");
    const inputElement = screen.getByLabelText("Choose time");
    const labelParent = labelElement.parentElement;
    const labelSibling = labelParent.childNodes[1];
    expect(labelSibling).toBe(inputElement);
  });
  test("Renders the Booking guests label and input as a pair", () => {
    const labelElement = screen.getByText("Number of guests");
    const inputElement = screen.getByLabelText("Number of guests");
    const labelParent = labelElement.parentElement;
    const labelSibling = labelParent.childNodes[1];
    expect(labelSibling).toBe(inputElement);
  });
  test("Renders the Booking occasion label and input as a pair", () => {
    const labelElement = screen.getByText("Occasion");
    const inputElement = screen.getByLabelText("Occasion");
    const labelParent = labelElement.parentElement;
    const labelSibling = labelParent.childNodes[1];
    expect(labelSibling).toBe(inputElement);
  });
  test("Doesn't render error message with correct guests", async () => {
    const inputElement = screen.getByLabelText("Number of guests");
    for (let i = 1; i <= 10; i++) {
      act(() => {
        userEvent.clear(inputElement);
        userEvent.type(inputElement, i.toString());
        userEvent.tab();
      });

      const errorElementMore = screen.queryByText("Atmost 10 are allowed");
      expect(errorElementMore).toBeNull();
      const errorElementLess = screen.queryByText("Atleast 1 is required");
      expect(errorElementLess).toBeNull();
      const errorElementRequired = screen.queryByText("Required");
      expect(errorElementRequired).toBeNull();
      const errorElementNatural = screen.queryByText(
        "Must be a natural number"
      );
      expect(errorElementNatural).toBeNull();
    }
  });
  test("Doesn't render error message with correct date", async () => {
    const inputElement = screen.getByLabelText("Choose date");
    act(() => {
      userEvent.clear(inputElement);
      userEvent.type(inputElement, "2022-01-01");
      userEvent.tab();
    });

    const errorElementRequired = screen.queryByText("Required");
    expect(errorElementRequired).toBeNull();
    const errorElementValid = screen.queryByText("Must be a valid date");
    expect(errorElementValid).toBeNull();
  });
  test("Doesn't render error message with correct occasion", async () => {
    const inputElement = screen.getByLabelText("Occasion");
    const errorElementRequired = screen.queryByText("Required");
    const errorElementValid = screen.queryByText("Must be a valid occasion");
    act(() => {
      userEvent.selectOptions(inputElement, "Anniversary");
      userEvent.tab();
    });

    return waitFor(() => {
      expect(errorElementRequired).toBeNull();
      expect(errorElementValid).toBeNull();
    });
  });
  test("Renders error message while submitting with less guests", async () => {
    const guestsElement = screen.getByLabelText("Number of guests");
    const buttonElement = screen.getByRole("button", {
      name: "Make your reservation",
    });
    act(() => {
      userEvent.clear(guestsElement);
      userEvent.type(guestsElement, "0");
      userEvent.click(buttonElement);
    });

    const errorElementLess = screen.queryByText("Atleast 1 is required");
    return waitFor(() =>
      expect(screen.queryByText("Atleast 1 is required")).toBeInTheDocument()
    );
  });
  test("Renders error message while submitting with more guests", async () => {
    const guestsElement = screen.getByLabelText("Number of guests");
    const buttonElement = screen.getByRole("button", {
      name: "Make your reservation",
    });
    act(() => {
      userEvent.clear(guestsElement);
      userEvent.type(guestsElement, "11");
      userEvent.click(buttonElement);
    });

    const errorElementMore = screen.queryByText("Atmost 10 are allowed");
    return waitFor(() =>
      expect(screen.queryByText("Atmost 10 are allowed")).toBeInTheDocument()
    );
  });
});
describe("Booking Submit", () => {
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });
  test("Submit button does not proceed with invalid form", async () => {
    const dispatchHandler = jest.fn();
    const submitFormHandler = jest.fn();
    act(() => {
      render(
        <Booking
          availableTimes={["17:00", "18:00"]}
          availableTimesDispatch={dispatchHandler}
          submitForm={submitFormHandler}
        />
      );
    });
    const guestsElement = screen.getByLabelText("Number of guests");
    const buttonElement = screen.getByRole("button", {
      name: "Make your reservation",
    });
    act(() => {
      userEvent.clear(guestsElement);
      userEvent.tab();
      userEvent.click(buttonElement);
    });
    return waitFor(() => expect(submitFormHandler).not.toHaveBeenCalled());
  });
  test("Submit button proceeds with default form", async () => {
    const dispatchHandler = jest.fn();
    const submitFormHandler = jest.fn();
    act(() => {
      render(
        <Booking
          availableTimes={["17:00", "18:00"]}
          availableTimesDispatch={dispatchHandler}
          submitForm={submitFormHandler}
        />
      );
    });
    const buttonElement = screen.getByRole("button", {
      name: "Make your reservation",
    });
    act(() => {
      userEvent.click(buttonElement);
    });
    return waitFor(() => expect(submitFormHandler).toHaveBeenCalled());
  });
});
