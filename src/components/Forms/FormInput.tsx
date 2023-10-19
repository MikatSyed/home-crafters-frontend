"use client"
import { Input } from 'antd';
import {useFormContext,Controller} from 'react-hook-form'
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
    customStyle?: React.CSSProperties;
  }

const FormInput = ({name,
    type,
    size,
    value,
    id,
    placeholder,
    validation,
    label,
    customStyle
}:IInput
) => {
        const { control, formState: { errors },} = useFormContext();
        const errorMessage = getErrorMessageByPropertyName(errors, name);
    return (
       <>
       {label ? label : null}
       <Controller
        control={control}
        name={name}
        render={({field}) => (
           type === "password" ? (
            <Input.Password
            type={type}
            size={size}
            placeholder={placeholder}
            style={customStyle}
            {...field}
            value={value ? value : field.value}
          />
           ) : (
            <Input
            type={type}
            size={size}
            placeholder={placeholder}
            style={customStyle}
            {...field}
            value={value ? value : field.value}
          />
           )
        )}
      />
       <small style={{ color: "red",margin:'5px' }}>{errorMessage}</small>
       </>
    );
};

export default FormInput;