
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubFooter1 = () => {
  return (
    <Row id='sub_footer1' className='text-start'>
      <Col className='fw-bold px-4 py-2'>
        <p>COLLECTIONS</p>
      </Col>
      <Col>
        <Row>
          <p><a href="#">CERAMIC TILE</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Limestone</a></p>
              <p><a href="#">Marble</a></p>
              <p><a href="#">Antique Ceramic Tile</a></p>
          </nav>
        </Row>
      </Col>
      <Col>
        <Row>
          <p><a href="#">TERRACOTTA</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Antique Reclaimed Terracotta</a></p>
              <p><a href="#">Teracotta</a></p>
          </nav>
        </Row>
      </Col>
      <Col>
        <Row>
          <p><a href="#">WOOD</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Engineered</a></p>
              <p><a href="#">Solid</a></p>
              <p><a href="#">Patterned Wood</a></p>
              <p><a href="#">Antique Reclaimed</a></p>
          </nav>
        </Row>
      </Col>
      <Col>
        <Row>
          <p><a href="#">SPECIALITY ITEMS</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Zellige</a></p>
              <p><a href="#">Hammered German Silver</a></p>
              <p><a href="#">Antique Reclaimed Encaustic</a></p>
              <p><a href="#">Portugal Patterns</a></p>
          </nav>
        </Row>
      </Col>
   
      <Col>
        <Row>
          <p><a href="#">PORCELAIN</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Limestone Look</a></p>
              <p><a href="#">Marble Look</a></p>
              <p><a href="#">Wood Look</a></p>
          </nav>
        </Row>
      </Col>
      <Col>
        <Row>
          <p><a href="#">ARCHITECTURALS</a></p>
        </Row>
        <Row>
          <nav className='pt-4'>
              <p><a href="#">Fireplace Surrounds</a></p>
              <p><a href="#">Mouldings</a></p>
          </nav>
        </Row>
      </Col>
    </Row>
  )
}

export default SubFooter1
