import React,{ FC} from 'react';
import styles from "./style.module.scss";

interface FuncProp {
  className?: string;
  id?: any ;
  rows?: any;
  value?:any
  placeholder?: string;
  onChange?:any;
  maxlength?:number;
  
}
const TextArea: React.FC<FuncProp> = ({ 
  className,
  id,
  rows,
  value,
  placeholder,
  onChange,
  maxlength,
}) => { 
  return (
    <div className="form-group">
      <textarea
        className={`form-control custom-textarea ${className}`}
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        onChange={onChange}
      />
    </div>
  );
}
export default React.memo(TextArea);