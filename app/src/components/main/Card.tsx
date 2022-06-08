import { useState } from "react";

type PropTypes = {
    name?: string;
}

function Card(props: PropTypes) {
    // карточка перевёрнута?
    const [upsideDown, setUpsideDown] = useState(false);

    const turnOver = () => {
        setUpsideDown(!upsideDown);
    }

    return (
        <>
            {
                props.name ? 
                    upsideDown ? 
                        <div className="main__descriptionColumn" onClick={turnOver}>
                            <div>{"Находит сочетание цветов"}</div>
                        </div> : <div className="main__column" onClick={turnOver}>
                            <div>{props.name}</div>
                        </div>
                : 
                    <div className="main__emptyColumn">
                        
                    </div>
            }
        </>
    );
}

export default Card;
