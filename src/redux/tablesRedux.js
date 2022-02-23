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
export const fetchTables = dispach => {
  return(dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  }
}
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    // case 'CHANGE_TABLE':
    //   return [...statePart, { ...action.payload, id: shortid() }];
    case 'UPDATE_TABLES':
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;
