import React, { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [h, setH] = useState<number>();
  const [w, setW] = useState<number>();

  useEffect(() => {
    setH(window.innerHeight);
    setW(window.innerWidth);
  }, []);

  window.addEventListener("resize", () => {
    setH(window.innerHeight);
    setW(window.innerWidth);
  });

  const handleClick = (e: React.MouseEvent, dim_as_string: string): void => {
    console.log(e.target);
    navigator.clipboard.writeText(dim_as_string.toString());
  };

  return (
    <div className="app_container" style={{ height: h }}>
      <h1 style={{ display: "flex", gap: "0.5rem" }}>
        <span
          className="app_hero"
          onClick={(e) => handleClick(e, e.currentTarget.innerText)}
        >
          {w}
        </span>
        x
        <span
          className="app_hero"
          onClick={(e) => handleClick(e, e.currentTarget.innerText)}
        >
          {h}
        </span>
      </h1>
      <h4 style={{ fontFamily: "cursive", color: "var(--accent)" }}>
        [ click dimension to copy onto clipboard ]
      </h4>
    </div>
  );
};

export default App;
