const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'AirBnB', ceo: 'Brian', ceoEmail: 'brian@gmail.com', lastContact: '01/01/2020', owner: 'Spencer', priority: 5, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-2': { id: 'task-2', content: 'Stripe', ceo: 'Patrick', ceoEmail: 'patrick@gmail.com', lastContact: '01/11/2020', owner: 'John', priority: 1, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-3': { id: 'task-3', content: 'SoFi', ceo: 'Anthony', ceoEmail: 'anthony@gmail.com', lastContact: '12/01/2019', owner: 'Spencer', priority: 0, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-4': { id: 'task-4', content: 'Palantir', ceo: 'Alex', ceoEmail: 'alex@gmail.com', lastContact: '01/01/2020', owner: 'Spencer', priority: 3, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage'},
        'task-5': { id: 'task-5', content: 'Compass', ceo: 'Robert', ceoEmail: 'robert@gmail.com', lastContact: '01/03/2020', owner: 'John', priority: 0, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-6': { id: 'task-6', content: 'Appnexus', ceo: 'Brian', ceoEmail: 'brian@gmail.com', lastContact: '01/05/2020', owner: 'Spencer', priority: 2, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-7': { id: 'task-7', content: 'Box', ceo: 'Dylan', ceoEmail: 'dylan@gmail.com', lastContact: '01/01/2020', owner: 'John', priority: 1, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-8': { id: 'task-8', content: 'DoorDash', ceo: 'Tony', ceoEmail: 'tony@gmail.com', lastContact: '01/24/2020', owner: 'Spencer', priority: 1, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-9': { id: 'task-9', content: 'Houzz', ceo: 'Adi', ceoEmail: 'adi@gmail.com', lastContact: '02/04/2020', owner: 'Spencer', priority: 0, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
        'task-10': { id: 'task-10', content: 'SnowFlake', ceo: 'Frank', ceoEmail: 'frank@gmail.com', lastContact: '01/01/2020' , owner: 'John', priority: 3, link: 'https://products.office.com/en-us/onedrive-for-business/online-cloud-storage' },
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