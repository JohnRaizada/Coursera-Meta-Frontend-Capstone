import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { jest } from "@jest/globals";
import Main, {initializeTimes, updateTimes} from "./Main";
describe("Main", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });
  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });
  test("initializeTimes returns a non-empty array", async () => {
    await waitFor(() => expect(initializeTimes().length).toBeGreaterThan(0));
  });

  test("updateTimes returns a non-empty array", async () => {
    await waitFor(() =>
      expect(
        updateTimes(["17:00", "18:00"], { date: "2017-01-26" }).length
      ).toBeGreaterThan(0)
    );
  });
});
function waitFor(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, 0);
  });
}
