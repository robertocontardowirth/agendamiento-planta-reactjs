import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form, Input } from "../Forms";
import FeatherIcon from 'feather-icons-react';
import { validate, format } from 'rut.js';
 
export const Inicio = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { isDirty, isValid, errors },
	setValue
  } = useForm({ defaultValues: state, mode: "onChange" });
  //const watchPassword = watch("password");
  const navigate = useNavigate();

  console.log(errors)
 
  const saveData = (data) => {
	console.log(data)
    setState({ ...state, ...data });
    navigate("/residuo");
  };
 
  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <h2>Inicio</h2>
        <Field label="RUT Cliente" error={errors?.rutCliente}>
          <Input
            {...register("rutCliente", {
				required: {
					value: true,
					message: "El RUT de Cliente es requerido"
				},
				validate: (value) => {
					return validate(value) || "RUT inválido"
				},
				onChange: (event) => {
					const formattedRut = format(event.target.value)
					setValue('rutCliente', formattedRut)
				}
			})}
			minLength="9"
			maxLength="12"
            id="rut-cliente"
          />
        </Field>
        <Field label="Correo de Notificación" error={errors?.email}>
          <Input
            {...register("email", { 
				required: "El correo de notificación es requerido",
				pattern: {
					value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					message: 'Correo inválido',
				},
			})}
            type="email"
            id="email"
          />
        </Field>
        <Field label="RUT Transportista" error={errors?.rutTransportista}>
          <Input
            {...register("rutTransportista", { 
				required: {
					value: true,
					message: "El RUT de Transportista es requerido"
				},
				validate: (value) => {
					return validate(value) || "RUT inválido"
				},
				onChange: (event) => {
					const formattedRut = format(event.target.value)
					setValue('rutTransportista', formattedRut)
				}
			})}
			minLength="9"
			maxLength="12"
            id="rut-transportista"
          />
        </Field>
        <Field label="Patente" error={errors?.patente}>
          <Input
            {...register("patente", { 
				required: "La patente del vehículo es requerido" 
			})}
            id="patente"
          />
        </Field>
		<Field label="RUT Generador" error={errors?.rutGenerador}>
          <Input
            {...register("rutGenerador", { 
				required: {
					value: true,
					message: "El RUT de Generador es requerido"
				},
				validate: (value) => {
					return validate(value) || "RUT inválido"
				},
				onChange: (event) => {
					const formattedRut = format(event.target.value)
					setValue('rutGenerador', formattedRut)
				}
			})}
			minLength="9"
			maxLength="12"
            id="rut-generador"
          />
        </Field>
        <Field label="Comuna" error={errors?.comuna}>
          <Input
            {...register("comuna", { 
				required: "La comuna es requerida" 
			})}
            id="comuna"
          />
        </Field>
        <Field label="Dirección" error={errors?.direccion}>
          <Input
            {...register("direccion", { 
				required: "La direccion es requerida" 
			})}
            id="direccion"
          />
        </Field>
        <Button variant="next" disabled={!isDirty || !isValid}>Siguiente <FeatherIcon icon="chevron-right" size="18" /></Button>
        <pre>
			{JSON.stringify(watch(), null, 2)}
		</pre>
        
    </Form>
  );
};