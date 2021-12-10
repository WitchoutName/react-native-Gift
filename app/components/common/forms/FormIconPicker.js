import React from "react";
import { useFormikContext } from "formik";

import IconPicker from "../IconPicker";
import ErrorMessage from "./ErrorMessage";

const FormIconPicker = ({ items, name, color, setColor }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <IconPicker
        icons={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
          !color && setColor && setColor(item.hex);
        }}
        selectedItem={values[name]}
        color={color}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormIconPicker;
