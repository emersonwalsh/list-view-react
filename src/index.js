import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Topbar from './components/topbar.jsx';
import ColumnHeader from './components/columnHeader.jsx';
import Column from './components/column.jsx';

class App extends React.Component {
    state = initialData;

    onDragStart = () => {
        // document.body.style.color = 'orange';
        // document.body.style.transition = 'background-color 0.2s ease';
    }

    // onDragUpdate = update => {
    //     const { destination } = update;
    //     const opacity = destination
    //         ? destination.index / Object.keys(this.state.tasks).length
    //         : 0;
    //     document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    // }

    onDragEnd = result => {
        // document.body.style.color = 'inherit';
        // document.body.style.backgroundColor = 'inherit';

        const {destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        // Movement within a column
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };
    
            this.setState(newState);
            return;
        }

        // Movement across columns
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        };

        this.setState(newState);
        
        // todo call endpoint to save state (server-side)
    }

    render() {
        const rowStyle = {
            position: 'absolute',
            top: '50px',
            left: '25px',
            right: '25px',
            zIndex: '1'
        };

        return (
            <DragDropContext 
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                // onDragUpdate={this.onDragUpdate}
            >
                <Topbar></Topbar>
                {/* <ColumnHeader></ColumnHeader> */}
                <div style={rowStyle}>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks} />
                    })}
                </div>
                {/* <Footer></Footer> */}
            </DragDropContext>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

