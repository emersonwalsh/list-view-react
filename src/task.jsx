import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? '#EFEFEF' : 'white')};
    display: flex;
`;

const Handle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FF3B3F;
    border-radius: 4px 0 0 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
        const rowStyle = {
            width: '100%',
            lineHeight: '30px',
            display: 'flex',
            justifyContent: 'space-between'
        };
        const rowItemStyle = {
            width: '25%'
        };
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Handle {...provided.dragHandleProps} />
                        <div style={rowStyle}>
                            <div style={rowItemStyle}>{this.props.task.content}</div>
                            <div style={rowItemStyle}>{this.props.task.ceo}</div>
                            <div style={rowItemStyle}>{this.props.task.days}</div>
                            <div style={rowItemStyle}>
                                <a href="https://products.office.com/en-us/onedrive-for-business/online-cloud-storage" target="_blank">Material</a>
                            </div>

                        </div>
                    </Container>
                )}
            </Draggable>
        )
    }
}