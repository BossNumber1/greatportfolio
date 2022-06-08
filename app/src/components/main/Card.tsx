import { useState } from "react";
import DefaultCard from "./DefaultCard";
import DescriptionCard from "./DescriptionCard";
import EmptyCard from "./EmptyCard";

type PropTypes = {
    name?: string;
    description?: string;
}

function Card(props: PropTypes) {
    // карточка перевёрнута?
    const [upsideDown, setUpsideDown] = useState(false);

    // перевернуть карточку
    const turnOver = () => {
        setUpsideDown(!upsideDown);
    }

    return (
        <>
            {
                props.name ? 
                    upsideDown 
                        ? <DescriptionCard turnOver={turnOver} description={props.description} /> 
                        : <DefaultCard turnOver={turnOver} name={props.name} />
                : <EmptyCard />
            }
        </>
    );
}

export default Card;
