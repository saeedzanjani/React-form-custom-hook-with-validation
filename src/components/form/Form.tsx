import { memo } from "react";
import useForm from "../../hooks/useForm";
import FormField from "../../common/forms/formField/FormField";
import styles from "./Form.module.css";
import FormButton from "../../common/buttons/formButton/FormButton";
import * as Yup from "yup";
import { handleFormError } from "../../utils/formValidation";
import { SchemaType } from "../../models";

// validation schema
const schema: SchemaType = Yup.object().shape({
  username: Yup.string().min(4).required("No username provided."),
  email: Yup.string().email().required("No email provided."),
  password: Yup.string().min(5).required("No password provided."),
});

const Form = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    {username: '', email: '', password: ''},
    handleFormError,
    schema
  );

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <FormField
        fieldName="username"
        fieldValue={values.username}
        fieldPlaceHolder="username"
        label="Username"
        handleFieldChange={handleChange}
        fieldError={errors["username"]}
      />
      <FormField
        fieldName="email"
        fieldValue={values.email}
        fieldPlaceHolder="email"
        label="Email"
        handleFieldChange={handleChange}
        fieldError={errors["email"]}
      />
      <FormField
        fieldName="password"
        fieldValue={values.password}
        fieldPlaceHolder="password"
        label="Password"
        handleFieldChange={handleChange}
        fieldError={errors["password"]}
      />
      <FormButton btnType="submit" btnText="submit" />
    </form>
  );
};

export default memo(Form);
