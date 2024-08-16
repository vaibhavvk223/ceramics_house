
import './App.css'
import Container from 'react-bootstrap/Container';
import Header from './components/Headers/Header';
import Content from './components/Contents/Content';
import Footer from './components/Footers/Footer';

function App() 
{
  return (
    <>
      <Header />
      <Container fluid>
        <Content />
        <Footer />
      </Container>
    </>

  )
}

export default App
