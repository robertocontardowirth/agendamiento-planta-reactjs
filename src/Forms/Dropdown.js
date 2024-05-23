import { forwardRef } from "react";
import Select from 'react-select'

export const Dropdown = forwardRef((props, ref) => {
  //console.log(props, ref)
  /*return <select ref={ref} className="form-control" {...props}>
        <option value="">Seleccione Comuna</option>
    </select>;*/
    return <Select ref={ref} className="form-control" {...props} />
});