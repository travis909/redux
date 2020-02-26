import React from 'react'
import { Container } from 'semantic-ui-react';
import TableComponent from '../components/TableComponent';
// eslint-disable-next-line
import { useSelector, useDispatch, connect } from 'react-redux';
// eslint-disable-next-line
import {bindActionCreators} from 'redux';
// eslint-disable-next-line
import { setdata, setcol, FETCH_DATA, fetchAllData } from '../actions/table_actions';

// store.dispatch(fetchAllData('https://jsonplaceholder.typicode.com/posts'));

const RateEngine = (props) => {
    // const dispatch = useDispatch();
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    const tableData = useSelector(state => state.data)

    // eslint-disable-next-line
    const columns = useSelector(state => state.columns)

    return (
        <Container>
            <h1>Rate Engine</h1>
            <TableComponent
                columns={['userId', 'id', 'title' /*'ID', 'Name', 'Standard', 'Rate Product', 'Rate Entity', 'Rate Method', 'Rate Type', ''*/]}
                //columns={() => useDispatch(setcol()/*(url)*/)} 
                data={tableData}
            />
        </Container>
    )
}

const mapStateToProps = (state) => { return { data: state.data } }

export default connect(mapStateToProps)(RateEngine);