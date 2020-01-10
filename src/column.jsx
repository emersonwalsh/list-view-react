import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task.jsx'

const Container = styled.div`
    margin: 8px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
    background-color: white;
    color: #484850;
    font-size: 1.2em;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? '#d1d8e0' : 'white')};
    flex-grow: 1;
    min-height: 40px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>
                    {this.props.column.title}
                </Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}