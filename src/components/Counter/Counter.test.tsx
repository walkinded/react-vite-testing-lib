import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { setupStore } from "../../store/reducers/store";

const renderWithStore = (preloadedState?: any) => {
  const store = setupStore(preloadedState);
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );
  return store;
};

describe("Counter UI", () => {
  test("increments увеличивает значение на 1, resets сбрасывает до 0", async () => {
    const user = userEvent.setup();
    renderWithStore();

    expect(screen.getByTestId("count-value")).toHaveTextContent("0");

    await user.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("1");

    await user.click(screen.getByTestId("reset-btn"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("0");
  });

  test("decrements уменьшает значение с 0 на -1", async () => {
    const user = userEvent.setup();
    renderWithStore();

    await user.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("-1");
  });

  test("renders value from preloadedState", () => {
    renderWithStore({ counter: { value: 7 } });
    expect(screen.getByTestId("count-value")).toHaveTextContent("7");
  });
});
