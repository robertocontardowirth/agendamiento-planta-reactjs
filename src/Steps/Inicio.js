import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form, Input } from "../Forms";
import FeatherIcon from 'feather-icons-react';
 
export const Inicio = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    //watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  //const watchPassword = watch("password");
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/residuo");
  };
 
  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <h2>Inicio</h2>
        <Field label="RUT Cliente" error={errors?.rutCliente}>
          <Input
            {...register("rutCliente", { required: "El RUT de Cliente es requerido" })}
            id="rut-cliente"
          />
        </Field>
        <Field label="Correo de Notificación" error={errors?.email}>
          <Input
            {...register("email", { required: "El correo de notificación es requerido" })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="RUT Transportista" error={errors?.rutTransportista}>
          <Input
            {...register("rutTransportista", { required: "El RUT de Transportista es requerido" })}
            id="rut-transportista"
          />
        </Field>
        <Field label="Patente" error={errors?.patente}>
          <Input
            {...register("patente", { required: "La patente del vehículo es requerido" })}
            id="rut-transportista"
          />
        </Field>
        <Field label="Comuna" error={errors?.comuna}>
          <Input
            {...register("comuna", { required: "La comuna es requerida" })}
            id="comuna"
          />
        </Field>
        <Field label="Dirección" error={errors?.direccion}>
          <Input
            {...register("direccion", { required: "La direccion es requerida" })}
            id="direccion"
          />
        </Field>
        <Button variant="next">Siguiente <FeatherIcon icon="chevron-right" size="18" /></Button>
    </Form>
  );
};