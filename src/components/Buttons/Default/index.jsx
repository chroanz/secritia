import { Button } from "antd";
import "./style.css";

function ButtonDefault({ onClick, label, type }) {
  function handleOnClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Button onClick={handleOnClick} type={type}>
      {label}
    </Button>
  );
}

export default ButtonDefault;
