import React from "react";
import styles from "./FormField.module.css";

// PropsTypes
type FormFieldProps = {
  fieldValue?: string;
  fieldName: string;
  fieldType?: string;
  fieldPlaceHolder?: string;
  label?: string;
  fieldError?: string;
  handleFieldChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormField = ({
  fieldValue,
  fieldName,
  fieldType = "text",
  label,
  fieldError = "",
  fieldPlaceHolder,
  handleFieldChange,
  ...props
}: FormFieldProps) => {
  return (
    <div className={styles.field_container} {...props}>
      <label htmlFor={fieldName} className={styles.field_label}>
        {label}
      </label>

      <input
        type={fieldType}
        name={fieldName}
        value={fieldValue}
        id={fieldName}
        placeholder={fieldPlaceHolder}
        onChange={handleFieldChange}
        className={styles.field}
        style={{ borderColor: fieldError && "red" }}
      />

      {fieldError && <p className={styles.error}>{fieldError}</p>}
    </div>
  );
};

export default FormField;
