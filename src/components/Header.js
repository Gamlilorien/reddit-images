import React from 'react';
import {Row, Col} from 'reactstrap';
import './Header.css';

const Header = () => {

    return (
      <div className="header">
        <Row>
          <Col><h1>r/Funnypics</h1></Col>
        </Row>
      </div>
    )
}

export default Header;