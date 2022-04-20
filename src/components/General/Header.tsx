import React from 'react';
import styles from "./header.module.css";
import DataForm from "../UI/DataForm";

const Header = () => {
    return (
        <header className={styles.header}>
            <DataForm />
        </header>
    );
};

export default Header;
