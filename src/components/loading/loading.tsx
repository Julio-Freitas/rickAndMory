import React from "react";
import Image from "next/image";

import styles from "./Loading.module.css";
import loading from "../../../public/gif/loading.gif";
const Loading = () => {
    return (
        <div className={styles["container-loading"]}>
            <div className={styles["loading"]}>
                <Image
                    src={loading}
                    width={500}
                    height={500}
                    alt="Fazendo pesquisa..."
                    layout="responsive"
                />
            </div>
        </div>
    );
};
export default Loading;
