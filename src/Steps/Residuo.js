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
    setValue
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/fecha");
  };

  const restarPesaje = (e) => {
    const pesaje_agenda = watch('pesaje_agenda')
    let nuevo_pesaje = watch('pesaje_agenda')
    if (pesaje_agenda > 0){
      nuevo_pesaje = (parseFloat(pesaje_agenda) - .1).toFixed(1)
    }
    setValue("pesaje_agenda", nuevo_pesaje, { shouldValidate : true } )
    e.preventDefault();
  }

  const agregarPesaje = (e) => {
    const pesaje_agenda = watch('pesaje_agenda')
    let nuevo_pesaje = watch('pesaje_agenda')
    if (pesaje_agenda < 50){
      nuevo_pesaje = (parseFloat(pesaje_agenda) + .1).toFixed(1)
    }
    setValue("pesaje_agenda", nuevo_pesaje, { shouldValidate : true } )
    e.preventDefault();
  }

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
            <div className="row">
              <div className="col-auto">
                <Button variant="icon" onClick={restarPesaje}>
                  <FeatherIcon icon="minus" size="16" />
                </Button>
              </div>
              <div className="col">
                <Range
                  {...register("pesaje_agenda", {
                    required: "El Tonelaje es requerido",
                    validate: (value) => {
                      const pesaje = parseFloat(value)
                      return (pesaje > 0 && pesaje <= 50) || "Tonelaje inválido"
                    }
                  })}
                  min="0"
                  max="50"
                  step="0.1"
                  id="pesaje_agenda"
                />
              </div>
              <div className="col-auto">
                <Button variant="icon" onClick={agregarPesaje}>
                  <FeatherIcon icon="plus" size="16" />
                </Button>
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