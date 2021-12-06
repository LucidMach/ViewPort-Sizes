import { useEffect, useState } from "react";
import Alert from "./components/alert";
import "./App.css";

const App: React.FC = () => {
  const [h, setH] = useState<number>();
  const [w, setW] = useState<number>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setH(window.innerHeight);
    setW(window.innerWidth);
  }, []);

  window.addEventListener("resize", () => {
    setH(window.innerHeight);
    setW(window.innerWidth);
  });

  const handleClick = (copytext: string): void => {
    navigator.clipboard.writeText(copytext.toString());
    setShow(true);
    setTimeout(() => setShow(false), 1000);
  };

  return (
    <div className="app_container" style={{ height: h }}>
      <h1 style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <span
          className="app_hero"
          onClick={(e) => handleClick(e.currentTarget.innerText)}
        >
          {w}
        </span>
        x
        <span
          className="app_hero"
          onClick={(e) => handleClick(e.currentTarget.innerText)}
        >
          {h}
        </span>
      </h1>
      <h4
        style={{
          cursor: "pointer",
          color: "var(--accent)",
        }}
        onClick={() => {
          handleClick(`${w} ${h}`);
        }}
      >
        [ click here to copy both dimensions onto clipboard ]
      </h4>
      <Alert show={show} />
    </div>
  );
};

export default App;
