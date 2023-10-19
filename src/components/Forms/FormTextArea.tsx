"use client"
import {  Input } from 'antd';
import {useFormContext,Controller} from 'react-hook-form'

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
  };


const FormTextArea = ({ 
  name,
  label,
  rows,
  value,
  placeholder,
    
}:TextAreaProps
) => {
        const { control } = useFormContext();
    return (
       <>
       {label ? label : null}
       <Controller
        control={control}
        name={name}
        render={({field}) => (
            <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
          )}
          />
       </>
    );
};

export default FormTextArea;