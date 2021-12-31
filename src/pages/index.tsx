import { Characters } from "../querys/characters";
import { Character } from "../querys/character";
import { client } from "../server/client";
import styles from "../../styles/Home.module.css";
import { Query } from "../../types/types";
import { InferGetStaticPropsType } from "next";
import Header from "../components/header";
import Cards from "../components/cards";
import Pagination from "../components/pagination";
import { useQuery } from "@apollo/client";
import Filter from "../components/filter";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

export async function getStaticProps() {
    const { data } = await client.query<Query>({
        query: Characters,
        variables: {
            species: "human",
        },
    });

    return {
        props: {
            data,
        },
    };
}

const Home = () => {
    const [species, setSpecies] = useState("");
    const [character, setCharacter] = useState("");

    const { data, loading, error, refetch } = useQuery(Characters, {
        variables: {
            species: "",
            name: "",
        },
    });

    useEffect(() => {
        refetch({
            species,
            name: character,
        });
    }, [species, character]);

    if (loading) return <Loading />;

    return (
        <>
            <Header fallbackSearch={setCharacter} />

            <div className={styles.container}>
                {character && (
                    <p>
                        você está pesquisando por:{" "}
                        <b>{character.toLocaleUpperCase()}</b>
                    </p>
                )}
                <Filter fallbackFilter={setSpecies} />
                {data?.characters?.results?.length && (
                    <Cards characters={data.characters} />
                )}
                <Pagination />
            </div>
        </>
    );
};

export default Home;
