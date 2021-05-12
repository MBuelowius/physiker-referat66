import React from 'react';
import NavMenu from '../navigation/NavMenu';
import { Container } from 'reactstrap';

function Layout(props: any) {
    
    const {children} = props;

    return (
      <React.Fragment>
        <NavMenu/>
        <Container>
          {children}
        </Container>
      </React.Fragment>
    );
}

export default Layout;