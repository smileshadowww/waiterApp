import shortid from 'shortid';

//selectors
export const getAllTables = ({ tables }) => tables;
export const getThatTable = ({ tables }, ids ) => tables.filter(table => table.id === ids);
// export const getThatTable = ({ tables }, id ) => tables.filter(table => (table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
// action creators
export const changeTable = payload => ({ type: 'CHANGE_TABLE', payload });
export const updateTables = payload => ({ type: 'UPDATE_TABLES', payload });
const url = 'http://localhost:3131/tables';
export const fetchTables = dispach => {
  return(dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  }
}
export const putTables = (tableUpdated) => {
  return(dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: tableUpdated.id,
        status: tableUpdated.status,
        peopleAmount: tableUpdated.peopleAmount,
        maxPeopleAmount: tableUpdated.maxPeopleAmount,
        bill: tableUpdated.bill
      }),

    };
    console.log(tableUpdated);
    fetch(url + '/' + tableUpdated.id, options)
      .then(() => dispatch(changeTable(tableUpdated)))
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'CHANGE_TABLE':
      return [...statePart, { ...action.payload, id:action.payload.id }];
    case 'UPDATE_TABLES':
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;
