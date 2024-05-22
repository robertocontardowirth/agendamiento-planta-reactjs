import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../State";
import { Button, Field, Form } from "../Forms";
import FeatherIcon from 'feather-icons-react';
 
export const Fecha = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirmacion");
  };
 
  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <Field label="About me">
          <textarea
            {...register("about")}
            id="about"
            className="form-control"
          />
        </Field>
        <div className="button-row">
          <Link className={`App-btn App-btn-back`} to="/residuo">
            <FeatherIcon icon="chevron-left" size="18" /> Volver
          </Link>
          <Button variant="next">Siguiente <FeatherIcon icon="chevron-right" size="18" /></Button>
        </div>
    </Form>
  );
};