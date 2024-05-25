import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form } from "../Forms";
import FeatherIcon from 'feather-icons-react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
 
export const Fecha = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, control, formState: { isValid, errors }, watch } = useForm({ defaultValues: state });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirmacion");
  };
 
  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <Field label="Fecha de llegada" error={errors?.patente}>
          <Controller
            control={control}
            name='fecha'
            render={({ field }) => (
                <DatePicker
                  className="form-control"
                  placeholderText='Seleccione'
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
            )}
          />
        </Field>
        <div className="button-row">
          <Link className={`App-btn App-btn-back`} to="/residuo">
            <FeatherIcon icon="chevron-left" size="18" /> Volver
          </Link>
          <Button variant="next" disabled={!isValid}>Siguiente <FeatherIcon icon="chevron-right" size="18" /></Button>
        </div>
        <pre>
          {JSON.stringify(watch(), null, 2)}
        </pre>
    </Form>
  );
};