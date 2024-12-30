import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ColorConfiguration from "../../common/ColorConfiguration";

const FilterPanel = () => {
  return (
    <Container className="mt-4">
      <div className="filter-panel">
        <h5 className="mb-3">Color</h5>
        <ColorConfiguration />
        <hr />

        <h5 className="mb-3">Filters</h5>
        <Form.Group className="mb-2">
          <Form.Check type="checkbox" label="With photo" />
          <Form.Check type="checkbox" label="Without photo" />
        </Form.Group>

        <hr />

        <h5 className="mb-3">Columns</h5>
        <Form.Group>
          <Form.Check type="checkbox" label="1 Column" />
          <Form.Check type="checkbox" label="2 Columns" />
        </Form.Group>

        <div className="mt-3 text-center">
          <Button variant="link" className="p-0 text-primary">
            Clear Filters
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FilterPanel;
