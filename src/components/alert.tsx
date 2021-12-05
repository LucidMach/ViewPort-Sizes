import { useRef } from "react";
import "../App.css";

interface Props {
  // alertRef: HTMLDivElement;
  show: boolean;
}

const Alert: React.FC<Props> = ({ show }) => {
  const alertRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="app_alert"
      ref={alertRef}
      style={{ display: show ? "flex" : "none" }}
    >
      <h2>copied!</h2>
    </div>
  );
};

export default Alert;
