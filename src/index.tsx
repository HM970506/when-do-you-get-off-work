import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/main";

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
