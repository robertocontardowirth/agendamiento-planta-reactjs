import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form } from "../Forms";
import FeatherIcon from 'feather-icons-react';
import DatePicker from "react-datepicker";
import Select from 'react-select'

import "react-datepicker/dist/react-datepicker.css";
 
export const Fecha = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, control, formState: { isValid, errors }, watch } = useForm({ defaultValues: state });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirmacion");
  };

  const horario = [
    { value: "07:00", label: "07:00" },
    { value: "08:00", label: "08:00" },
    { value: "09:00", label: "09:00" }
  ]
 
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
        <Field label="Hora" error={errors?.comuna}>
          <Controller
            name="hora"
            rules={{ 
              required: "Hora de llegada" 
            }}
            control={control}
            render={({ field: { onChange }, value, ref }) => <Select
                inputRef={ref}
                classNamePrefix="form-select"
                options={horario}
                value={horario.find(c => c.value === value)}
                onChange={val => onChange(val.value)}
            />}
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