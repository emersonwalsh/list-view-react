import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import EditMenu from './editMenu.jsx';
import NameAvatar from './nameAvatar.jsx';
import PriorityInput from './priorityInput.jsx';
import CEO from './ceo.jsx';
import LastContact from './lastContact.jsx';
import MaterialLink from './materialLink.jsx';
import NextStepsInput from './nextStepsInput.jsx';

const Container = styled.div`
    border: ${props => (props.isDragging ? '1px solid #ecebeb' : '1px solid #ecebeb')};
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'white' : 'white')};
    display: flex;
    box-shadow: ${props => (props.isDragging ? '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)' : '0 0 0px')};
    height: 40px;
`;

const Handle = styled.div`
    width: 40px;
    height: 40px;
    background-color: #2684ff;
    border-radius: 4px 0 0 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
        const rowStyle = {
            width: '100%',
            lineHeight: '40px',
            display: 'flex',
            justifyContent: 'space-between',
        };

        const rowItemStyle = {
            width: '15%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            // backgroundColor: 'white'
        };

        const rowItemButtonIconStyle = {
            paddingLeft: '15px',
            backgroundColor: 'white'
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
                            <div style={rowItemStyle}>
                                <CEO name={this.props.task.ceo} email={this.props.task.ceoEmail} />                           
                            </div>
                            <div style={rowItemStyle}>
                                <LastContact lastContact={this.props.task.lastContact} />                            
                            </div>
                            <div style={rowItemStyle}>
                                {/* Next Steps */}
                                <NextStepsInput />
                            </div>
                            <div style={rowItemStyle}>
                                <PriorityInput priority={this.props.task.priority} id={this.props.task.id} />
                            </div>
                            <div style={rowItemStyle}>
                                <MaterialLink link={this.props.task.link} />
                            </div>
                            <div style={rowItemStyle}>
                                <NameAvatar title={this.props.task.owner} name={this.props.task.owner} />
                            </div>
                            <EditMenu />
                        </div>
                    </Container>
                )}
            </Draggable>
        )
    }
}