import React, { useState } from "react";
import DatePicker from "react-datepicker";

interface IProps {
  handleDeadline: any;
  date: Date;
}

export default function Calendar({ handleDeadline, date = new Date()}: IProps) {
  const [startDate, setStartDate] = useState(date);

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    handleDeadline(date);
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      inline
      onChange={(date: Date) => handleDateChange(date)}
    />
  );
}
