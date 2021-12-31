import React, { useEffect, useState } from "react";

import { Characters } from "../../../types/types";

import styles from "./Cards.module.css";
import Card from "../card";

type PropsType = {
    characters: Characters | undefined;
};

const Cards = ({ characters }: PropsType) => {
    return (
        <div className={styles["container-cards"]}>
            {characters?.results?.map((character) => (
                <Card
                    key={`${character?.id}${character?.name}`}
                    name={character?.name}
                    id={character?.id}
                    image={character?.image}
                />
            ))}
        </div>
    );
};

export default Cards;
