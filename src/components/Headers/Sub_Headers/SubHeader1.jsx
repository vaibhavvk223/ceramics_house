
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Img1 from '../../../assets/images/carousel-images/img1.jpg';
import img2 from '../../../assets/images/carousel-images/img2.jpg';
import img3 from '../../../assets/images/carousel-images/img3.jpg';



const SubHeader1 = () => 
{

  return (

        <Carousel id='sub-header1' fade style={{width: '100vw'}}  >
          
              <Carousel.Item interval={1600} style={{ height: '530px'}}>
                  <img
                      
                      src={Img1}
                      alt="First slide"
                      className='img-fluid d-block'
                      style={{filter: 'brightness(67%)', width: '100%', height: '530px'}}      
                  />
                  <Carousel.Caption>
                      <p>Welcome to Ceramics House</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1600} style={{height: '530px'}}>
                  <Image
                      src={img2}
                      alt="Second slide"
                      className='img-fluid d-block'
                      style={{filter: 'brightness(78%)', width: '100%', height: '530px'}}
                  />
                  <Carousel.Caption>
                      <p>Various different ceramics available here</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1600} style={{height: '530px'}}>
                  <img
                      className="d-block img-fluid"
                      src={img3}
                      alt="Third slide"
                      style={{filter: 'brightness(67%)', width: '100%', height: '530px'}} 
                  />
                  <Carousel.Caption>
                      <p>Also, we provide discounts for some ceramics</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
          
  )
}

export default SubHeader1
