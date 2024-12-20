import { Accordion, Col } from 'react-bootstrap';
import BasicDetails from './basic-deatils/BasicDetails';

const BuilderAccordion = () => {
  const accordionItems = [
    {
      eventKey: '0',
      header: 'Basic Details',
      components:<BasicDetails/>
    },
    {
      eventKey: '1',
      header: 'Professional Experience',
      components:<BasicDetails/>
    },
    {
      eventKey: '2',
      header: 'Education',
      components:<BasicDetails/>
    },
    {
      eventKey: '3',
      header: 'Skills',
      components:<></>,
    }
  ];

  return (
    <Col md={7} className="bg-light p-3">
      <Accordion defaultActiveKey="0">
        {accordionItems.map((item, index) => (
          <Accordion.Item eventKey={item.eventKey} key={index}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.components}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>
  );
};

export default BuilderAccordion;
