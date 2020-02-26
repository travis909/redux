import React from "react";
// import axios from 'axios';
import { connect } from "react-redux";
// eslint-disable-next-line
import { Table, Button, Icon, Container } from 'semantic-ui-react';
// eslint-disable-next-line
import { setdata } from "../actions/table_actions";
// eslint-disable-next-line
import _ from 'lodash';

const TableComponent = (props) => {
  // const headers = ['ID', 'Name', 'Standard', 'Rate Product', 'Rate Entity', 'Rate Method', 'Rate Type', ''];
  // this will be passed as columns

  return (
    <Table sortable celled striped fixed selectable={true}>
        <Table.Header>
            <Table.Row>
              {props.columns.map((header) => {
                return (
                  <Table.HeaderCell
                    key={header}
                    //sorted={column === 'id' ? direction+'ending' : null}
                    //onClick={this.handleSort('id')}
                  >
                      {header}
                  </Table.HeaderCell>
                )
              })}
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {_.map(props.data.data,
                ({ id, name, standard, rate_product, rate_entity, rate_method, rate_type }) => (
                    <Table.Row key={id}>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{standard ? 'True' : 'False'}</Table.Cell>
                        <Table.Cell>{rate_product}</Table.Cell>
                        <Table.Cell>{rate_entity}</Table.Cell>
                        <Table.Cell>{rate_method}</Table.Cell>
                        <Table.Cell>{rate_type}</Table.Cell>
                        <Table.Cell>
                            <Container className={"ico-button"}>
                                <Button icon className="ui button"><Icon name='pencil' /></Button>
                                <Button icon className="ui button"><Icon name='trash' /></Button>
                            </Container>
                        </Table.Cell>
                    </Table.Row>
                ))}
        </Table.Body>
    </Table>
  )
}

const mapStateToProps = (state) => { return { data: state.data } }

export default connect(mapStateToProps)(TableComponent);