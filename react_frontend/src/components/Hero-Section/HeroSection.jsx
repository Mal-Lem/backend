import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import './HeroSection.css'
import hero from '../../assets/hero.jpg'


const HeroSection = () => {
  return (
    <section >
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2><span>Take your Time <br /></span> and learn from anywhere</h2>                
                           <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. 
                             Possimus nobis officiaamet .
                             
                            </p>
                          <Col className='search'>
                            <div className="searche">
                              <input type="text" form='form1'  placeholder=" Search Courses" name="search" />
                            </div>
                            
                          </Col>
                            <img src={hero} alt=" "className="w-50" /> 
                    </div>   
                        
                    </Col>
            </Row>
        </Container>
    </section>
  )
};
export default HeroSection;