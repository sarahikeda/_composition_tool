import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DraftTemplates from '../TemplateTypes/DraftTemplates';
import AllTemplates from '../TemplateTypes/AllTemplates';
import OtherTemplates from '../TemplateTypes/OtherTemplates';

class TemplateSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  removeTemplate = () => {
    console.log('removal underway')
    // make call to api with template id number to delete api
    // re-render the templates
  }

  render() {
    return (
      <div className="template-section">
        <div className="template-container">
          <DraftTemplates
            removeTemplate={this.removeTemplate}
            handleClick={this.props.handleClick}/>
          <AllTemplates
              removeTemplate={this.removeTemplate}
              handleClick={this.props.handleClick}/>
          <Container style={{paddingLeft: '30px'}}>
            <Row>
              <Col className="template-columns" xs="6">
                <p className="template-section-name">Standard Templates</p>
              </Col>
              <Col className="template-columns" xs="6">
                <p className="template-section-name">My Templates</p>
              </Col>
            </Row>
          </Container>
          <OtherTemplates
            handleClick={this.props.handleClick}
            removeTemplate={this.removeTemplate}/>
        </div>
      </div>
    );
  }
}

export default TemplateSection;
