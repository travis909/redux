import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setdata, setcol } from '../actions/index';
import { Container } from 'semantic-ui-react';

const TableComponent = () => {
  // const counter = useSelector(state => state.counter);
  // const logged = useSelector(state => state.logged);
  const columns = useSelector(state => state.columns);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const headings = () => dispatch(setcol(['name', 'type', 'language', 'status']));
  const select_data = () => dispatch(setdata());

  // const columns = useMemo(
  // () => /*const new2 = (x) => { return [{Header: x}, {accessor: 'item.'+x}] }*/
  // let i = ['header1', 'header2', ...]
  // let j = i.map(new2)
  // columns j

  //       <h1>Counter: {counter}</h1>
  //       <button onClick={() => dispatch(increment())}>+</button>
  //       <button onClick={() => dispatch(decrement())}>-</button>
  //       <h1>Logged In: {logged ? 'Yes' : 'No'}</h1>
  //       <button onClick={() => dispatch(sign_in())}>Log In/Out</button>

  //let url = "https://api.tvmaze.com/search/shows?q=snow";

  return (
    <Container>
      <h1>Table</h1>
      <button onClick={console.log(data)}>Data</button>
      <button onClick={console.log(columns)}>Columns</button>

    </Container>
  );
}

export default TableComponent;
