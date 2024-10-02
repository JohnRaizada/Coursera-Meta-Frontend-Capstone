import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  beforeEach(() => {
    act(() => {
        render(
            <MemoryRouter>
                <App />
                </MemoryRouter>);
    });
  });
  test("Renders the correct name in browser tab", () => {
    waitFor(()=>expect(document.title).toBe("Little Lemon"));
  });
});
