import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    width: 100%;
`;

const Name = styled.div`
    float: left;
    line-height: 50px;
    font-size: 1.7em;
    padding-left: 8px;
`;

const Search = styled.div`
    float: right;
    line-height: 50px;
    padding-right: 8px;
`;




export default class Topbar extends React.Component {
    render() {
        const searchStyle = {
            borderRadius: '5px',
            border: '1px solid lightgrey',
            fontSize: '1em'
        };
        return (
            <Container>
                <Name>Deal Board</Name>
                <Search>
                    <input style={searchStyle} type="text" placeholder="Add Company..." />
                </Search>
            </Container>
        );
    }
}