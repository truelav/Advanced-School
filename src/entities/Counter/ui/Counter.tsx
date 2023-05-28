// import { classNames } from "shared/lib/classNames/classNames";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

// interface CounterProps {
//     clssName?: string;
// }

export const Counter = () => {
  const dispatch = useDispatch();
  //   const counterValue = useSelector((state: StateSchema) => state.counter.value);
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
