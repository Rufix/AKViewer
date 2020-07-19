import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './shared/components/NavMenu';
import Sidebar from './sidebar/components/Sidebar';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
        <Sidebar>
        </Sidebar>
    </React.Fragment>
);
