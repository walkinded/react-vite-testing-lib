import { describe, expect } from "vitest";
import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from "../counterReducer";

describe("counterSlice reducer", () => {
  const initialState = { value: 0 };
  it("возвращает initialState при undefined state", () => {
    // reducer с undefined state — стандартный способ проверить initialState
    expect(counterReducer(undefined, { type: "@@INIT" })).toEqual({
      value: 0,
    });
  });

  it("increment увеличивает значение на 1", () => {
    const nextState = counterReducer(initialState, increment());
    expect(nextState.value).toBe(1);
  });

  it("decrement уменьшает значение на 1", () => {
    const nextState = counterReducer(initialState, decrement());
    expect(nextState.value).toBe(-1);
  });

  it("несколько increment подряд работают корректно", () => {
    let state = counterReducer(initialState, increment());
    state = counterReducer(state, increment());
    state = counterReducer(state, increment());
    expect(state.value).toBe(3);
  });

  it("increment + decrement возвращают к 0", () => {
    let state = counterReducer(initialState, increment());
    state = counterReducer(state, decrement());
    expect(state.value).toBe(0);
  });

  it("incrementByAmount добавляет переданное число", () => {
    const nextState = counterReducer(initialState, incrementByAmount(5));
    expect(nextState.value).toBe(5);
  });

  it("не мутирует предыдущий state (иммутабельность)", () => {
    const prev = { value: 10 };
    const next = counterReducer(prev, increment());
    expect(prev.value).toBe(10);
    expect(next.value).toBe(11);
  });
});
