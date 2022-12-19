import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRecoilState } from "recoil";
import { dateTimePickerState } from "../../../atoms";

const Calendar = () => {
  const [dateAndTime, setDateAndTime] = useRecoilState(dateTimePickerState);

  const handleDateChange = (newValue) => {
    setDateAndTime(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="New appointment"
        value={dateAndTime}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
