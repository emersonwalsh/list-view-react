import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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

const TaskOwner = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #17b317;
    color: white;
    margin: 5px 0;
    text-align: center;
    line-height: 20px;
    cursor: default;
`;

const EditButton = styled.div`
    width: 30px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
	:hover {
		background-color: lightgrey;
	}
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
            width: '20%'
        };
        const rowItemButtonIconStyle = {
            paddingLeft: '12px'
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
                                <a href="mailto:name@email.com">{this.props.task.ceo}</a>                            
                            </div>
                            <div style={rowItemStyle}>{this.props.task.days} days</div>
                            <div style={rowItemStyle}>
                                <TaskOwner title={this.props.task.owner}>{this.props.task.owner.charAt(0)}</TaskOwner>
                            </div>
                            <div style={rowItemStyle}>
                                <a href="https://products.office.com/en-us/onedrive-for-business/online-cloud-storage" target="_blank">Material</a>
                            </div>
                            <EditButton>
                                <FontAwesomeIcon style={rowItemButtonIconStyle} icon={faEllipsisV} />
                            </EditButton>
                        </div>
                    </Container>
                )}
            </Draggable>
        )
    }
}