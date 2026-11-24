import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selecrots/getCounterValue";
import {
  decrement,
  increment,
  reset,
} from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onReset = () => dispatch(reset());

  return (
    <>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        value = <span data-testid="count-value">{value}</span>
      </p>
      <button data-testid="increment-btn" onClick={onIncrement}>
        +
      </button>
      <button data-testid="decrement-btn" onClick={onDecrement}>
        -
      </button>
      <button data-testid="reset-btn" onClick={onReset}>
        reset
      </button>
    </>
  );
};

export default Counter;
