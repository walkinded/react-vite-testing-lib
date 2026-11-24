import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import AppRouter from "../../router/AppRouter";
import { Provider } from "react-redux";
import { store } from "../../store/reducers/store";

describe("TEST NavBar", () => {
  test("Test main link", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );
    const mainLink = screen.getByTestId("main-link");

    await user.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("Test about link", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );

    const aboutLink = screen.getByTestId("about-link");

    await user.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("Test user link", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );
    const usersLink = screen.getByTestId("users-link");

    await user.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });

  test("Error page", async () => {
    render(
      <MemoryRouter initialEntries={["/wrongLink"]}>
        <NavBar />
        <AppRouter />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
