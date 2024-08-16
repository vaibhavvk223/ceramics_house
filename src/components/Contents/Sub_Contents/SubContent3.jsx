
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import face1 from '../../../assets/images/designers/face1.jpg'
import face2 from '../../../assets/images/designers/face2.jpg'
import face3 from '../../../assets/images/designers/face3.jpg'
import face4 from '../../../assets/images/designers/face4.jpg'



const data =
[
    {
        src: face1,
        name: 'Matthew James',
        location: 'NEW YORK'
    }, 
    {
        src: face2,
        name: 'Kyle Wilson',
        location: 'LOS ANGELES'
    }, 
    {
        src: face3,
        name: 'Carolina Shepherd',
        location: 'DENVER'
    },
    {
        src: face4,
        name: 'Barbara Anderson',
        location: 'DALLAS'
    },   
]

const SubContent3 = () => {
  return (
    <Row id='sub-section3' className='justify-content-center py-4'>
      <Col md={4} className='p-4'>
      <Row>
        <Col>
            <p className='display-6 text-black'>
                MEET YOUR DESIGNERS
            </p>
            <p className='fs-5 text-black'>
              We Provide affordable ceramics equipment and professional opportunities that encourage participation by national and international ceramic artists who produce ceramic products of the highest quality. Our designers are well suited for our superior quality works.
            </p>
        </Col>
      </Row>
      </Col>
          <Col md={6} className='p-4'>
          <Row className='gy-4'> 
            {
              data.map((e, i)=>{
                return (
                    <Col key={i}>
                        <Col className='d-flex align-items-end mx-auto' style={{backgroundImage: `url(${e.src})`, backgroundSize: '100% 94.4%', borderRadius: '2px', width: '18rem', height: '18rem', backgroundRepeat: 'no-repeat'}}>
                            
                        <p className='fs-4 mt-2 text-center ps-4  py-4 text-white' style={{backgroundColor: 'rgba(0,0,0,0.4)', width: '100%'}}>
                                {e.name}
                              </p>
                           
                        </Col>
                        <div className='mx-auto' style={{width: '285px'}}>
                      
                            <p className='fs-4 mt-2'>{e.location}</p>
                            <Button variant="outline-success" className='rounded-1 me-2'>CALL</Button>
                            <Button variant="outline-primary" className='rounded-1 ms-2'>EMAIL</Button>
                        </div>
                    </Col>
                )
            })}
          </Row>
          </Col>
    </Row>
  )
}

export default SubContent3
