import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type FormDatePickerProps = {
  onChange?: (valOne: Dayjs  | null  , valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: FormDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  const disabledDate = (current: Dayjs) => {
    // Disable dates before today
    return current && current.isBefore(dayjs(), "day");
  };

  
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || undefined }
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
            disabledDate={disabledDate}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
