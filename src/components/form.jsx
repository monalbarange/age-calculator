import React from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/formSlice";

const Form = ({ formData, formError, output, handleSubmit, arrowIcon }) => {
  const dispatch = useDispatch();

  const handleDayChange = (e) => {
    dispatch(setFormData({ ...formData, day: e.target.value }));
  };

  const handleMonthChange = (e) => {
    dispatch(setFormData({ ...formData, month: e.target.value }));
  };

  const handleYearChange = (e) => {
    dispatch(setFormData({ ...formData, year: e.target.value }));
  };

  return (
    <div className="card-container">
      <div className="inputs-container">
        <div className="input-label-container">
          <label
            htmlFor="day"
            style={{
              color: formError.day ? "var(--Light-red)" : "var(--Smokey-grey)",
            }}
          >
            Day
          </label>
          <input
            type="number"
            id="day"
            placeholder="DD"
            min={1}
            value={formData.day}
            onChange={handleDayChange}
            style={{
              border: formError.day
                ? "1px solid var(--Light-red)"
                : "1px solid var(--Off-white)",
            }}
          />
          {formError.day && <p className="error">{formError.day}</p>}
        </div>
        <div className="input-label-container">
          <label
            htmlFor="month"
            style={{
              color: formError.month
                ? "var(--Light-red)"
                : "var(--Smokey-grey)",
            }}
          >
            Month
          </label>
          <input
            type="number"
            id="month"
            placeholder="MM"
            min={1}
            value={formData.month}
            onChange={handleMonthChange}
            style={{
              border: formError.month
                ? "1px solid var(--Light-red)"
                : "1px solid var(--Off-white)",
            }}
          />
          {formError.month && <p className="error">{formError.month}</p>}
        </div>
        <div className="input-label-container">
          <label
            htmlFor="year"
            style={{
              color: formError.year ? "var(--Light-red)" : "var(--Smokey-grey)",
            }}
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            placeholder="YYYY"
            min={1}
            value={formData.year}
            onChange={handleYearChange}
            style={{
              border: formError.year
                ? "1px solid var(--Light-red)"
                : "1px solid var(--Off-white)",
            }}
          />
          {formError.year && <p className="error">{formError.year}</p>}
        </div>
      </div>
      {formError.generic && (
        <p className="error generic">{formError.generic}</p>
      )}
      <div className="divider-container">
        <div className="divider"></div>
        <button
         type="submit"
          onClick={() =>
            handleSubmit(formData.day, formData.month, formData.year)
          }
          className="btn"
        >
          <img src={arrowIcon} alt="arrowIcon" />
        </button>
      </div>
      <div className="output-container">
        <h1>
          <span className="highlighted">
            {output.year === "" ? "--" : output.year}{" "}
          </span>
          {output.year === 1 ? "year" : "years"}
        </h1>

        <h1>
          <span className="highlighted">
            {output.month === "" ? "--" : output.month}{" "}
          </span>
          {output.month === 1 ? "month" : "months"}
        </h1>

        <h1>
          <span className="highlighted">
            {output.day === "" ? "--" : output.day}{" "}
          </span>
          {output.day === 1 ? "day" : "days"}
        </h1>
      </div>{" "}
    </div>
  );
};

export default Form;
