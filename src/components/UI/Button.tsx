import React from 'react';
import styles from "./button.module.css";
interface ButtonProps {
    text: string
}

const Button = (props:ButtonProps) => {
    return (
        <button className={styles.button}>
            {props.text}
        </button>
    );
};

export default Button;
