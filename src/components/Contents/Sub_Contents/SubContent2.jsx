
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../assets/images/ceramics_images/img1.jpg';
import img2 from '../../../assets/images/ceramics_images/img2.jpg'
import img3 from '../../../assets/images/ceramics_images/img3.jpg'
import img4 from '../../../assets/images/ceramics_images/img4.jpg'
import img5 from '../../../assets/images/ceramics_images/img5.jpg'
import img6 from '../../../assets/images/ceramics_images/img6.jpg'
import img7 from '../../../assets/images/ceramics_images/img7.jpg'


const data = [
    {
        src: img2,
        name: 'TERRACOTTA'
    },
    {
        src: img3,
        name: 'WOOD'
    }, 
    {
        src: img4,
        name: 'SPECIALITY ITEMS'
    }, 
    {
        src: img5,
        name: 'CERAMIC TILE'
    }, 
    {
        src: img6,
        name: 'PORCELAIN'
    }, 
    {
        src: img7,
        name: 'ARCHITECTURALS'
    }
]

const SubContent2 = () => {
  return (

      <Row className='justify-content-center gy-4'>
        {
            data.map((e, i)=>{
                return (
                    
                    <Col sm={4} id='ceramics-items' key={i} className='mx-2 mb-3 mx-auto' style={{cursor: 'pointer'}}>

                        <img src={e.src} className='img-fluid d-block' />
                        <p className='fs-3 text-center pt-4'>
                            {e.name}
                        </p>
                    </Col>
                       
                    
                  
                                            
                );
            })
        }
      </Row>

  )
}

export default SubContent2
