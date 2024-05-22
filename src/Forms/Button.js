import { forwardRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button className={`App-btn App-btn-${variant}`} {...props}>
        {children}
      </button>
    );
  }
);
