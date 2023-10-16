import { isLeapYear } from "../../leapYearFunctions";
import { monthsAndDays } from "../../constants"
import { dateDiff } from "../../components/Functions/dateUtils";

export const handleSubmit = (
  day,
  month,
  year,
  formData,
  formError,
  dispatch,
  setFormError,
  setOutput
) => {
    const dayAsNumber = Number(day);
    const monthAsNumber = Number(month);
    const yearAsNumber = Number(year);

    const today = new Date();
    const chosenDate = new Date(year, month - 1, day);

    const currentMonth = monthsAndDays.find(
      (item) => item.month === monthAsNumber
    );

    const validateDaysForFebruary = () => {
      if (monthAsNumber === 2) {
        let maxDays;

        if (isLeapYear(yearAsNumber)) {
          maxDays = currentMonth?.days?.leap;
        } else {
          maxDays = currentMonth?.days?.common;
        }

        if (dayAsNumber <= maxDays) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    };

    const isDayInputValid =
      dayAsNumber >= 1 &&
      ((monthAsNumber !== 2 && dayAsNumber <= (currentMonth?.days || 31)) ||
        validateDaysForFebruary());

    const isMonthInputValid = monthAsNumber >= 1 && monthAsNumber <= 12;
    const isYearInputValid =
      yearAsNumber >= 1 && yearAsNumber <= today.getFullYear();
    const isPastDate = today - chosenDate < 0;

    const updatedFormError = {
      day: day ? "" : "This field is required",
      month: month ? "" : "This field is required",
      year: year ? "" : "This field is required",
      generic: "",
    };
    dispatch(setFormError(updatedFormError));

    const isPrecheckValid =
      isDayInputValid && isMonthInputValid && isYearInputValid;

    if (!isPrecheckValid) {
      if (day && !isDayInputValid) {
        const updatedFormError = {
          ...formError,
          day: "Must be a valid day",
        };
        dispatch(setFormError(updatedFormError));
      }

      if (month && !isMonthInputValid) {
        const updatedFormError = {
          ...formError,
          month: "Must be a valid month",
        };
        dispatch(setFormError(updatedFormError));
      }

      if (year && !isYearInputValid) {
        const updatedFormError = {
          ...formError,
          year: "Must be a valid year",
        };
        dispatch(setFormError(updatedFormError));
      }
    } else if (isPrecheckValid && isPastDate) {
      const updatedFormError = {
        day: "",
        month: "",
        year: "",
        generic: "Must be a date in the past",
      };
      dispatch(setFormError(updatedFormError));
    } else {
      if (Object.values(formError).some((error) => error !== "")) {
        const updatedFormError = {
          day: "",
          month: "",
          year: "",
          generic: "",
        };
        dispatch(setFormError(updatedFormError));
      }
      const formattedDate = `${year}-${month}-${day}`;
      const { years, months, days } = dateDiff(formattedDate);
      const updatedOutput = {
        day: days,
        month: months,
        year: years,
      };
      dispatch(setOutput(updatedOutput));
    }};
