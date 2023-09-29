import classNames from "classnames";
import React, { useState } from "react";
import Icon from "../icon/Icon";
import styles from "./Input.module.scss";

const Input = ({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readonly,
  disabled,
  value,
  error: errorProp,
  className = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(password);

  const checkType = () => {
    if (email) return "email";
    if (password) return isPasswordVisible ? "text" : "password";
    return "text";
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const iconType = isPasswordVisible ? "show" : "hide";
  const iconLabel = `비밀번호 ${isPasswordVisible ? "표시" : "감춤"}`;

  return (
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, labelVisible || styles.labelHidden)}
      >
        {label}
      </label>
      <div
        className={classNames(
          styles.inputWrapper,
          errorProp && styles.inputWrapperError
        )}
      >
        {icon && <Icon type={icon} />}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />
        {password && (
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setIsPasswordVisible((prev) => !prev);
            }}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        )}
      </div>
      {errorProp && (
        <span role="alert" className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  );
};

export default Input;
