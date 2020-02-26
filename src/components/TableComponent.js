import React, { /*useEffect*/ } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line
import { Table, Button, Icon, Container } from 'semantic-ui-react';
// eslint-disable-next-line
import { setdata } from "../actions/table_actions";
// eslint-disable-next-line
import _ from 'lodash';

let TableComponent = (props) => {
    return (
      <Table sortable celled striped fixed selectable={true}>
          <Table.Header>
              <Table.Row>
                {props.columns.map((col) => {
                  return (
                    <Table.HeaderCell
                      key={col.accessor}
                      //sorted={column === 'id' ? direction+'ending' : null}
                      //onClick={this.handleSort('id')}
                    >
                        {col.Header}
                    </Table.HeaderCell>
                  )
                })}
              </Table.Row>
          </Table.Header>
          <Table.Body>
              {_.map(props.data.slice(0,12), ({ id, name, standard, rate_type }) => (
                <Table.Row key={id}>
                    <Table.Cell>{id}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{standard ? 'True' : 'False'}</Table.Cell>
                    <Table.Cell>{rate_type}</Table.Cell>
                    <Table.Cell>
                      <Button icon className="ui button"><Icon name='pencil' /></Button>
                      <Button icon className="ui button"><Icon name='trash' /></Button>
                    </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
      </Table>
    )
}

const mapStateToProps = (state) => { return { data: state.data, columns: state.columns } }

export default connect(mapStateToProps)(TableComponent);