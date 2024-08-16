
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../../assets/images/ceramics_images/image.jpg'

const SubContent4 = () => {
  return (
  
        <Col id='sub-content1' className='m-0' style={{backgroundImage: `url(${Image})`, backgroundSize: '100vw 100%', height: '34rem', backgroundRepeat: 'no-repeat'}}>, 
            <p className='display-4' style={{color: "white"}}>SUSTAINABLE MATERIALS</p>
            <p className='pt-2'><a className='fs-6' style={{ textDecorationColor: 'orange', textUnderlineOffset: '5.8px', letterSpacing: '0.47px', color: '#fff'}} href="#"> LEARN MORE</a></p>
        </Col>
   
  )
}

export default SubContent4
