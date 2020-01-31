import React from 'react';
import styled from 'styled-components';
import NewDealButton from './newDealButton.jsx';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: white;
    z-index: 2;
    box-shadow: 0px 0px 8px -0px #ecebeb;    
`;

const Name = styled.div`
    float: left;
    line-height: 50px;
    font-size: 1.7em;
    padding-left: 8px;
`;

export default function TopBar() {  
    return (
        <Container>
            <Name>Deal Board</Name>
            <NewDealButton />
        </Container>
    );
}