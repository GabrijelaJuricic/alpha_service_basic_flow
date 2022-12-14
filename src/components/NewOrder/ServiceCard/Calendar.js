import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRecoilState } from "recoil";
import { dateSelectedState, dateTimePickerState } from "../../../atoms";
import dayjs from "dayjs";

const Calendar = () => {
  const [dateAndTime, setDateAndTime] = useRecoilState(dateTimePickerState);
  const [, setIsSelected] = useRecoilState(dateSelectedState);

  const handleDateChange = (newValue) => {
    setDateAndTime(newValue);
    setIsSelected(true);
  };

  const tomorrow = dayjs().add(1, "day");
  const eightAM = dayjs().set("hour", 8);
  const fivePM = dayjs().set("hour", 17);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Choose an appointment"
        value={dateAndTime}
        minDate={tomorrow}
        minTime={eightAM}
        maxTime={fivePM}
        minutesStep={30}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
