import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick } : any) => (
      <button className="example-custom-input" onClick={onClick}>
        {value}
      </button>
    );
    return (
      <ReactDatePicker
        selected={startDate}
        onChange={(date:Date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    );
  };

  export default DatePickerComponent