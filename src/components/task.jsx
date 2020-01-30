import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import EditMenu from './editMenu.jsx';
import NameAvatar from './nameAvatar.jsx';
import PriorityInput from './priorityInput.jsx';
// import NextStepsInput from './nextStepsInput.jsx';

const Container = styled.div`
    border: ${props => (props.isDragging ? '1px solid #ecebeb' : '1px solid #ecebeb')};
    border-radius: 1px;
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
    border-radius: 1px;
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
            backgroundColor: 'white'
        };

        const rowItemButtonIconStyle = {
            paddingLeft: '15px',
            backgroundColor: 'white'
        };

        const linkStyle = {
            backgroundColor: 'white',
            color: '#2684ff'
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
                                <a style={linkStyle} href="mailto:name@email.com">{this.props.task.ceo}</a>                            
                            </div>
                            <div style={rowItemStyle}>{this.props.task.days} days</div>
                            <div style={rowItemStyle}>
                                <NameAvatar title={this.props.task.owner} name={this.props.task.owner} />
                            </div>
                            <div style={rowItemStyle}>
                                Next Steps
                                {/* <NextStepsInput /> */}
                            </div>
                            <div style={rowItemStyle}>
                                <PriorityInput priority={this.props.task.priority} />
                            </div>
                            <div style={rowItemStyle}>
                                <a style={linkStyle} href="https://products.office.com/en-us/onedrive-for-business/online-cloud-storage" target="_blank">Material</a>
                            </div>
                            <EditMenu />
                        </div>
                    </Container>
                )}
            </Draggable>
        )
    }
}