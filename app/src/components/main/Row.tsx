import Card from './Card';

type PropTypes = {
    content: Array<string>;
}

function Row(props: PropTypes) {
    return (
        <div className="main__row">
            {
                props.content.map((name, index) => {
                    return (
                        <Card key={index} name={name} />
                    )
                })
            }
        </div>
    );
}

export default Row;
