import React from 'react';
import { Container } from 'reactstrap';

import './index.css';

function DashBoard(props: any) {

    const { name, political_believes, views_on_science, true_name } = props;

    return (
        <Container>
            <h6>{name}</h6>
            <p>{name} heißt eigentlich {true_name}</p>
            <p>Politische Ansichten</p>
            <p>{political_believes}</p>
            <p>Ansichten zur Verantwortung der Wissenschaft</p>
            <p>{views_on_science}</p>
        </Container>
    );
}

export default DashBoard;