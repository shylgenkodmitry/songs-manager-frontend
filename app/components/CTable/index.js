import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu, Table } from 'semantic-ui-react';
import Wrapper from './Wrapper';

function CTable(props) {
  const {
    headItemComponent: HeadItem,
    bodyItemComponent: BodyItem,
    singleComponent: SingleItem,
    bodyItems,
    itemFieldsCount,
  } = props;

  if (!bodyItems) {
    return (
      <Wrapper><SingleItem /></Wrapper>
    );
  }

  const headerContent = (<Table.Header><HeadItem /></Table.Header>);
  const innerContent = bodyItems.map((item) => (
    <BodyItem key={`item-${item._id}`} item={item} />  // eslint-disable-line no-underscore-dangle
  ));
  const bodyContent = (<Table.Body>{innerContent}</Table.Body>);
  const footerContent = (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan={itemFieldsCount}>
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="left chevron" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="right chevron" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );

  return (
    <Wrapper>
      <Table celled>
        {headerContent}
        {bodyContent}
        {footerContent}
      </Table>
    </Wrapper>
  );
}

CTable.propTypes = {
  itemFieldsCount: PropTypes.number,
  bodyItems: PropTypes.array,
  headItemComponent: PropTypes.func,
  bodyItemComponent: PropTypes.func,
  singleComponent: PropTypes.func,
};

export default CTable;
