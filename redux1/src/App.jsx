import { store } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {JSON.stringify(data)}
        <button onClick={() => dispatch({ type: "ADD" })}> + </button>
        <button onClick={() => dispatch({ type: "SUB" })}> - </button>
      </div>
    </>
  )
}
export default App;
