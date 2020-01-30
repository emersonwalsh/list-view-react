const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'AirBnB', ceo: 'Brian', days: 24, owner: 'Spencer', priority: 5 },
        'task-2': { id: 'task-2', content: 'Stripe', ceo: 'Patrick', days: 16, owner: 'John', priority: 1 },
        'task-3': { id: 'task-3', content: 'SoFi', ceo: 'Anthony', days: 14, owner: 'Spencer', priority: 0 },
        'task-4': { id: 'task-4', content: 'Palantir', ceo: 'Alex', days: 12, owner: 'Spencer', priority: 3 },
        'task-5': { id: 'task-5', content: 'Compass', ceo: 'Robert', days: 3, owner: 'John', priority: 0 },
        'task-6': { id: 'task-6', content: 'Appnexus', ceo: 'Brian', days: 1, owner: 'Spencer', priority: 2 },
        'task-7': { id: 'task-7', content: 'Box', ceo: 'Dylan', days: 8, owner: 'John', priority: 1 },
        'task-8': { id: 'task-8', content: 'DoorDash', ceo: 'Tony', days: 31, owner: 'Spencer', priority: 1 },
        'task-9': { id: 'task-9', content: 'Houzz', ceo: 'Adi', days: 9, owner: 'Spencer', priority: 0},
        'task-10': { id: 'task-10', content: 'SnowFlake', ceo: 'Frank', days: 18 , owner: 'John', priority: 3 },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Of Interest',
            taskIds: [ 'task-1', 'task-2', 'task-6', 'task-7', 'task-8', 'task-9' ]
        },
        'column-2': {
            id: 'column-2',
            title: 'Due Dilligence',
            taskIds: [ 'task-3', 'task-4' ]
        },
        'column-3': {
            id: 'column-3',
            title: 'Portfolio',
            taskIds: [ 'task-10' ]
        },
        'column-4': {
            id: 'column-4',
            title: 'Pass',
            taskIds: [ 'task-5' ]
        },
    },
    columnOrder: [ 'column-1', 'column-2', 'column-3', 'column-4' ]
};

export default initialData;