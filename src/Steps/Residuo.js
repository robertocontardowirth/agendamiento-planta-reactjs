import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form, Input, Range } from "../Forms";
import FeatherIcon from 'feather-icons-react';
import Select from 'react-select'
 
export const Residuo = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { isValid, errors },
  } = useForm({ defaultValues: state, mode: "onChange" });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/fecha");
  };

  const comunas = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ]

  const residuos = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ]
 
  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <Field label="Patente Vehículo" error={errors?.patente}>
          <Input
            {...register("patente", { 
				required: "La patente del vehículo es requerido" 
			})}
            id="patente"
          />
        </Field>
        <Field label="Comuna de origen" error={errors?.comuna}>
          <Controller
            name="comuna"
            rules={{ 
              required: "La comuna es requerida" 
            }}
            control={control}
            render={({ field: { onChange }, value, ref }) => <Select
                inputRef={ref}
                classNamePrefix="form-select"
                options={comunas}
                value={comunas.find(c => c.value === value)}
                onChange={val => onChange(val.value)}
            />}
          />
        </Field>
        <Field label="Dirección de origen" error={errors?.direccion}>
          <Input
            {...register("direccion", { 
              required: "La direccion es requerida" 
            })}
            id="direccion"
          />
        </Field>
        <Field label="Residuo" error={errors?.comuna}>
          <Controller
            name="residuo"
            rules={{ 
              required: "El Residuo requerida" 
            }}
            control={control}
            render={({ field: { onChange }, value, ref }) => <Select
                inputRef={ref}
                classNamePrefix="form-select"
                options={residuos}
                value={residuos.find(c => c.value === value)}
                onChange={val => onChange(val.value)}
            />}
          />
        </Field>
        <Field label="Tonelaje residuo" error={errors?.pesaje_agenda}>
          <>
            <p className="text-center">
              {watch('pesaje_agenda')} Toneladas
            </p>
            <div class="row">
              <div class="col-auto">
                <FeatherIcon icon="minus" size="18" />
              </div>
              <div class="col">
                <Range
                  {...register("pesaje_agenda", {
                    required: "El Tonelaje es requerido",
                  })}
                  min="0"
                  max="50"
                  step="0.1"
                  id="pesaje_agenda"
                />
              </div>
              <div class="col-auto">
                <FeatherIcon icon="plus" size="18" />
              </div>
            </div>
          </>
        </Field>
        <div className="button-row">
          <Link className={`App-btn App-btn-back`} to="/">
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