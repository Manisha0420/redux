import { useSelector, useDispatch } from "react-redux";
import { increment } from "./reducers/CounterSilce";

const App = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Counter Value: {value}</h1>
      <button onClick={handleChange}>Increment</button>
    </div>
  );
};

export default App;
