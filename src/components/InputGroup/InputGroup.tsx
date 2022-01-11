import React, { FC } from 'react'
import Text from '../Text/Text';
import styles from "./style.module.scss";
interface FuncGroup {
    className?: string;
    placeholder?: any;
    error?: boolean;
    errorClass?: string;
    helpertext?: string;
    value?: string;
    onChange?: any;
    name?: any;
    type?: string;
    iconImg?: any;
    handleClick?: any;
}
const InputGroup: FC<FuncGroup> = ({
    placeholder = "",
    type,
    className = "",
    iconImg,
    error,
    errorClass,
    helpertext,
    onChange,
    value,
    name,
}) => {
    return (
        <div className={styles.inputDesign}>
            <div className={`input-group`}>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    className={`form-control ${styles.inputGroup}`}
                    onChange={onChange}
                />
                <div className="input-group-prepend">
                    <span className={`input-group-text ${styles.inputGroupText}`} >
                        {iconImg}
                    </span>
                </div>
            </div>
            {error ? (
                <Text smallText>{helpertext}</Text>
            ) : null}
        </div>
    )
}

export default InputGroup
