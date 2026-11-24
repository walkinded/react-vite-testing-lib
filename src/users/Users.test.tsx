import { render, screen } from "@testing-library/react";
import axios from "axios";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";

vi.mock("axios");

const mockedAxios = vi.mocked(axios);

describe("getData", () => {
  let response: { data: any[] } = { data: [] };
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    mockedAxios.mockClear();
  });

  test("get user data", async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve(response));
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <AppRouter />
      </MemoryRouter>,
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
    // screen.debug();
  });

  test("test redirect to details page", async () => {
    const user = userEvent.setup();

    mockedAxios.get.mockReturnValue(Promise.resolve(response));
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <AppRouter />
      </MemoryRouter>,
    );
    const users = await screen.findAllByTestId("user-item");
    const link = await screen.findByRole("link", { name: /Leanne Graham/ });

    expect(users).toHaveLength(3);
    await user.click(link);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
    // screen.debug();
  });
});
