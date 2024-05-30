import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            {/* <h5>Follow Us</h5> */}
            <h5>Stay connected with us on social media!</h5>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="https://www.facebook.com" className="text-white mx-3" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="text-white mx-3" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="text-white mx-3" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" className="text-white mx-3" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.youtube.com" className="text-white mx-3" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Atif Online Shop, All rights reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
    </>
  )
}

export default Footer