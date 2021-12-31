import React from "react";
import Image from "next/image";

import { Character } from "../../../types/types";

import styles from "./Card.module.css";

const Card = ({
    id,
    image,
    name,
}: Pick<Character, "id" | "image" | "name">) => {
    return (
        <div className={styles["container-card"]}>
            <div className={styles["wrapper-image"]}>
                {image ? (
                    <Image layout="fill" src={image} alt="Imagem da série" />
                ) : (
                    <div className={styles["without-image"]} />
                )}
                <p>{name}</p>
            </div>
            {/* <div className={styles['wrapper-info']}>
        <div className={styles['wrapper-detatils']}>
          <h3>{name}</h3>
          <p
            className={`${styles['status']} ${
              status !== 'unknown'
                ? styles[`${status?.toLocaleLowerCase()}`]
                : styles['noStatus']
            }`}
          >
            {status !== 'unknown' ? `${status} - ` : null}
            {species}
          </p>
        </div>
        <div className={styles['wrapper-detatils']}>
          <h3>Ultima localização conhecida</h3>
          <p>{location?.name}</p>
        </div>
        <div className={styles['wrapper-detatils']}>
          <h3>Primeira vez visto:</h3>
          <p>{origin?.name}</p>
        </div>
      </div> */}
        </div>
    );
};

export default Card;
