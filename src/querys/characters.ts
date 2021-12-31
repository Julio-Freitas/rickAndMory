import { gql } from "@apollo/client";

export const Characters = gql`
    query ($species: String, $name: String) {
        characters(filter: { species: $species, name: $name }) {
            info {
                count
                pages
                next
                prev
            }

            results {
                name
                id
                species
                gender
                image
                origin {
                    id
                    name
                }
                location {
                    id
                    name
                }
                status
            }
        }
    }
`;
