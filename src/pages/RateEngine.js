import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import TableComponent from '../components/TableComponent';
// eslint-disable-next-line
import { useSelector, useDispatch, connect } from 'react-redux';
import { createColumns, fetchAllData } from '../actions/table_actions';
// import TestTable from '../components/TestTable';
const RateEngine = () => {
    const tableCols = ['Id', 'Name', 'Standard', 'Rate_Product', 'Rate_Entity', 'Rate_Method', 'Rate_Type'];
    const dataUrl = 'http://rateengine-stage.carco2.local/api/v1/rate_engines/summary';

    useEffect(() => console.log('mounted'))
    useEffect(() => createColumns(tableCols))
    useEffect(() => fetchAllData(dataUrl))

    return (
        <Container textAlign={"center"}>
            <h1>Rate Engine</h1>
            <TableComponent columns={tableCols} data={useSelector(state => state.data)} url={dataUrl}/>
        </Container>
    )
}

const mapStateToProps = (state) => { return { data: state.data, columns: state.columns } }
const mapDispatchToProps = { createColumns, fetchAllData }

export default connect(mapStateToProps, mapDispatchToProps )(RateEngine);