import React from 'react'
import { Container } from 'semantic-ui-react';
import TableComponent from '../components/TableComponent';
// eslint-disable-next-line
import { useSelector, useDispatch, connect } from 'react-redux';
// eslint-disable-next-line
import {bindActionCreators} from 'redux';
// eslint-disable-next-line
import { setdata, setcol } from '../actions/table_actions';

const RateEngine = () => {
    const dispatch = useDispatch();
    const url = 'http://rateengine-stage.carco2.local/api/v1/rate_engines/summary';
    const data = dispatch(setdata(url))

    // eslint-disable-next-line
    const columns = useSelector(state => state.columns)

    return (
        <Container>
            <h1>Rate Engine</h1>
            <TableComponent
                columns={['ID', 'Name', 'Standard', 'Rate Product', 'Rate Entity', 'Rate Method', 'Rate Type', '']}
                //columns={() => useDispatch(setcol()/*(url)*/)} 
                data={data}
            />
        </Container>
    )
}

const mapStateToProps = (state) => { return { data: state.data } }

export default connect(mapStateToProps)(RateEngine);