import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import arrowIcon from "./images/icon-arrow.svg";
import Form from "./components/form";
import { handleSubmit } from "./components/Functions/formUtils";
import { setFormError, setOutput } from "./redux/formSlice";

const App = () => {
  const { formData, formError, output } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleFormSubmit = (day, month, year) => {
    handleSubmit(
      day,
      month,
      year,
      formData,
      formError,
      dispatch,
      setFormError,
      setOutput    
    );
  };
  return (
    <Form
    formData={formData}
    formError={formError}
    output={output}
    handleSubmit={handleFormSubmit}
    arrowIcon={arrowIcon}
    />
  );
};

export default App;
