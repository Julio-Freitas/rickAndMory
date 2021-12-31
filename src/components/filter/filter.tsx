import React, { useRef, useState, MouseEvent } from "react";
import { UseOutSideClick } from "../utils/index";

import styles from "./Filter.module.css";

type PropsType = {
    fallbackFilter: (type: string) => void;
};
const Filter = ({ fallbackFilter }: PropsType) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [itemActive, setItemActive] = useState<string>("");
    const [showOptions, setShowOptions] = useState(false);

    UseOutSideClick(divRef, () => setShowOptions(false));

    const _handleOptions = () => setShowOptions(true);

    const _handleClickOption = (event: MouseEvent<HTMLSpanElement>) => {
        const { value } = event.currentTarget.dataset;
        setItemActive(`${value}`);
        fallbackFilter(`${value}`);
    };

    return (
        <div
            ref={divRef}
            onClick={_handleOptions}
            className={`${styles["filter"]} ${styles["filter-alien"]} ${
                showOptions ? styles["active"] : ""
            } `}
        >
            <div className={styles["svg"]} />

            <div className={styles["filter-optGroup"]}>
                <span
                    data-value="alien"
                    className={`${styles["filter-alien"]} ${
                        itemActive === "alien" ? styles["active-clicked"] : ""
                    } `}
                    onClick={_handleClickOption}
                >
                    Alian
                </span>
                <span
                    data-value="human"
                    onClick={_handleClickOption}
                    className={`${styles["filter-human"]} ${
                        itemActive === "human" ? styles["active-clicked"] : ""
                    }`}
                >
                    Human
                </span>
            </div>
        </div>
    );
};

export default Filter;
