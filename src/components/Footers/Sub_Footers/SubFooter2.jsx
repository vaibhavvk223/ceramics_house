
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo_Footer from '../../../assets/images/Logo/Logo_Footer.png';

const SubFooter2 = () => {
  return (
    
    <Row id='sub_footer2'>
      <Col className='text-start'>
        <Row>
            <Col sm={2} className='pb-3'>
              <img src={Logo_Footer} alt="website logo" width="120" height="80" />
            </Col>
        </Row>
        <Row>
            <Col  className='w-50 text-break'>
            <p style={{color: 'orange', fontSize: '20.7px', letterSpacing: '0.58px'}}><a href="#">INFO@CERAMICSHOUSE.COM</a></p>
            </Col>

        </Row>
        <Row id='social-icons'>
            insta icon
            linkedin icon
        </Row>
        <Row id='terms'>
            <Col sm={2}>
                <p><a href="#">Terms of Use</a></p>
            </Col>
            <Col sm={7} className='text-start'>
                <p><a href="#">Privacy & Cookie Policy</a></p>
            </Col>
        </Row>
      </Col>
      <Col id='footer-contents'>
        <Row className='justify-content-end'>
            <Col md={4}>
                <Row className='pb-4'>
                    <p><a href="#" alt="">FIND A SHOWROOM</a></p>
                    <p><a style={{ color: 'white'}} href="#" alt="">Map of all Showrooms</a></p>
                </Row>
                <Row className='pb-4'>
                    <p><a href="#" alt="">CONTACT US</a></p>
                    <p><a style={{ color: 'white'}} href="#" alt="">News letter Sign Up</a></p>
                </Row>
                <Row className='pb-4'>
                    <p><a href="#" alt="">OUTLET</a></p>
                </Row>
            </Col>
            <Col md={4} >
                <Row id="footer-contents2">
                    <p><a style={{color: '#b5fb0b'}} href="#" alt="">ABOUT</a></p>
                    <p><a href="#" alt="">Our Brand Beliefs</a></p>
                    <p><a href="#" alt="">Our Story</a></p>
                    <p><a href="#" alt="">The Team</a></p>
                    <p><a href="#" alt="">Sustainable Materials</a></p>
                    <p><a href="#" alt="">Visit Paris Tile</a></p>
                </Row>
            </Col>
        </Row>
      </Col>
    </Row>

  )
}

export default SubFooter2
