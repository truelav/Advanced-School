import { render } from "react-dom";
import { Counter } from "./components/Counter";

render(
  <div>
    Counter Component
    <div>
      <Counter />
    </div>
  </div>,
  document.getElementById("root")
);
