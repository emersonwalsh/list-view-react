import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    width: calc(100% - 95px);
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
`;

const ColumnItem = styled.div`
    line-height: 30px;
    width: 15%;
    text-overflow: ellipsis;
    overflow: hidden;
    color: white;
`;

export default class ColumnHeader extends React.Component {
    render() {
        const searchStyle = {
            borderRadius: '5px',
            border: '1px solid lightgrey',
            fontSize: '1em'
        };
        return (
            <Container>
                <ColumnItem>Company</ColumnItem>
                <ColumnItem>POC</ColumnItem>
                <ColumnItem>Last Contact</ColumnItem>
                <ColumnItem>Owner</ColumnItem>
                <ColumnItem>Next Steps</ColumnItem>
                <ColumnItem>Priority</ColumnItem>
                <ColumnItem>Company</ColumnItem>

            </Container>
        );
    }
}