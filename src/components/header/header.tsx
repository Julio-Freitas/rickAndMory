import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../../public/imagem/header/logo.png";

type PropsType = {
    fallbackSearch: (value: string) => void;
};

const Header = ({ fallbackSearch }: PropsType) => {
    const [valueInput, setValueInput] = useState("");
    const _handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValueInput(target.value);
    };

    const _handleButton = () => {
        fallbackSearch(valueInput);
        setValueInput("");
    };
    return (
        <div className={styles["container"]}>
            <menu className={styles["menu"]}>
                <div className={styles["logo"]}>
                    <Image src={logo} layout="fill" alt="logo rick and morty" />
                </div>
                <div className={styles["search"]}>
                    <label htmlFor="search"></label>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        onChange={_handleSearch}
                        value={valueInput}
                    />
                    <button
                        type="button"
                        className={styles["button"]}
                        onClick={_handleButton}
                    >
                        Buscar
                    </button>
                </div>
            </menu>
        </div>
    );
};

export default Header;
