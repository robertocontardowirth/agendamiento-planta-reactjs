import { forwardRef } from "react";

export const Range = forwardRef((props, ref) => {
  return <input type="range" ref={ref} className="form-range" {...props} />;
});
