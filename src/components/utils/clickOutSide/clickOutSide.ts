import { RefObject, useEffect } from "react";

const UseOutSideClick = (
    ref: RefObject<HTMLElement>,
    handleEvent: () => void
) => {
    const handleClick = (event: Event) => {
        if (ref.current && !ref.current?.contains(event?.target as Node)) {
            console.log("clicou fora");
            handleEvent();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [ref, handleEvent]);
};

export default UseOutSideClick;
