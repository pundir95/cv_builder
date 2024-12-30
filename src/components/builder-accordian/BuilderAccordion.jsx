import { Accordion, Col } from 'react-bootstrap';
import BasicDetails from './basic-deatils/BasicDetails';
import ProfessionalExperience from './professional-experience/ProfessionalExperience';
import EducationSteps from './education/EducationSteps';
import Skills from './Skills/Skills';
import Summary from './Summary/Summary';
import AdditionalSection from './AdditionalSection/AdditionalSection';

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
      components:<ProfessionalExperience/>
    },
    {
      eventKey: '2',
      header: 'Education',
      components:<EducationSteps/>
    },
    {
      eventKey: '3',
      header: 'Skills',
      components:<Skills/>,
    },
    {
      eventKey: '4',
      header: 'Summary',
      components:<Summary/>,
    },
    {
      eventKey: '5',
      header: 'Additional Section',
      components:<AdditionalSection/>,
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
