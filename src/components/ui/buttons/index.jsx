import classes from "./styles.module.css";
import classNames from "classnames";

export function Button({children, type = "primary", onClick, disabled }) {
    return (
      <button
        className= {classNames(classes.button, {
            [classes.cancel]: type === "cancel"
        })}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }  