import Container from "../../shared/container";

function Ending(props: any) {

    const {title, content} = props;

    return (
        <Container>
           <h6>{title}</h6>
           <p>{content}</p>
        </Container>
    );


}

export default Ending;