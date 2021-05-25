import React, { FC } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import store from "../store";

export const Counter: FC = () => {
  const count = useSelector(
    (state: ReturnType<typeof store.getState>) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
