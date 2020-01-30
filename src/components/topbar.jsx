import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

export default class Topbar extends React.Component {
    addDeal = () => {
        // todo add to initial-data
        // can we use some state management (Redux)
        console.log('Add new deal!')
    }
    render() {
        const searchStyle = {
            float: 'right',
            right: '8px',
            top: '7px',
            backgroundColor: '#2684ff'
        };
        return (
            <Container>
                <Name>Deal Board</Name>
                <Button
                    variant="contained"
                    color="primary"
                    style={searchStyle}
                    onClick={this.addDeal}
                    startIcon={<AddIcon />}
                >
                    Add Deal
                </Button>
            </Container>
        );
    }
}