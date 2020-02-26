import React from "react";
import { useTable, useFilters, useSortBy } from 'react-table';
// import { connect } from "react-redux";
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHeaderCell, Container } from 'semantic-ui-react';

const TestTable = ({columns, data}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable(
        {
          columns,
          data
        },
        useFilters,
        useSortBy
      );
      
  return (
      <Container>
        <Table {...getTableProps()}>
            <TableHeader>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableHeaderCell
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={
                                    column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : ""
                                }
                            >
                                {column.render("Header")}
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Container>
  );
}

// const mapStateToProps = (state) => { return { data: state.data, columns: state.columns } }

// export default connect(mapStateToProps)(TestTable);

export default TestTable;