import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { increment, decrement, sign_in } from './actions';
import { Container } from 'semantic-ui-react';
import TableComponent from './components/TableComponent';
import { setdata, setcol } from './actions/index';

function App() {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns)
  const data = useSelector(state => state.data)
  return (
    <TableComponent columns={() => dispatch(setcol()/*(url)*/)} data={() => dispatch(setdata())} />
  );
}

export default App;

// function App() {
//   const counter = useSelector(state => state.counter)
//   const logged = useSelector(state => state.logged)
//   const dispatch = useDispatch();
//
//   return (
//     <Container className="App">
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <h1>Logged In: {logged ? 'Yes' : 'No'}</h1>
//       <button onClick={() => dispatch(sign_in())}>Log In/Out</button>
//     </Container>
//   );
// }
//
// export default App;
