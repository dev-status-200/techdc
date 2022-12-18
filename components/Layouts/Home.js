import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import Button from '../Shared/Button';
import { AiFillCheckCircle } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import { SiExpertsexchange } from "react-icons/si";
import Aos from 'aos';
import Cursor from "react-cursor-follow";

const Home = () => {

  const [width, setWidth] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:500});
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])
  
  useEffect(() => {
    window.addEventListener("resize", resize)
    const timer = setTimeout(() => { resize() }, 1000);
    return () => clearTimeout(timer)
  }, [width])
  
  function resize(){
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth)
      }
  }

  return (
    <>
    
    {!load &&
    <div className='home-styles' data-aos="fade-up">
      {/* ========== Hero Section ========== */}
      <div className="bg py-2">
      <Row style={{padding:0, margin:0}}>
      <Col style={{padding:0, margin:0}}>
        <div className={width>400?'hero-left':'mx-3'}>
          <h1 className='main-head'>
            TECHDC
          </h1>
          <p className='hero-cntn' style={{maxWidth:450}}>
            <span className='blue'>First time in Pakistan</span>, One-window solution to cater your needs to thrive in your 
            Technological Career!
          </p>
          <p className='grey' style={{maxWidth:450}}>
            From training to getting a ticket of proving yourself in technical industry to manage your higher-studies
            expenses with manageable schedule to your technical-recruitment in well-known organizations, TechDC has you covered.
          </p>
        </div>
      </Col>
      {width>400&&
      <Col md={6}>
        <img src="/home/hero.GIF" className={'fr'} />
      </Col>
      }
      {width<400&&
      <Col xs={12}>
        <img src="/home/hero.GIF" style={{width:'100%'}} />
      </Col>
      }
      </Row>
      </div>

      {/* ========== Slider Section ========== */}
      {width>400 &&
      <div style={{overflowX:'hidden'}} className='slider-container'>
        <div className="sliding-background"></div>
      </div>
      }
      {/* ========== Groom Section ========== */}
      <div className={width>400?"floating groom":"groom"} data-aos="fade-up" data-aos-duration={2000}>
        <h5>Groom Yourselves With Field Experts</h5>
        <img src="/home/expert.png" className='mt-3' height={80} />
        <div className='my-4'></div>
        <p className='grey'>We ensure your overall personality development. Now, your industrial training needs will be fulfilled here. From Soft Skills to technical skills, all are here</p>
        <Link href={"/"} className="global-link">See More</Link>
      </div>

      {/* ========== About Us Section ========== */}
      {width>400 &&
      <Container style={{marginTop:0, position:'relative', top:-100}} data-aos="fade-up" data-aos-duration={2000} data-aos-once={true}>
        <Row>
          <Col>
            <div className='mb-5'>
            <span className='btn-custom-back-apply'>
              <span className='btn-custom-top-apply'>
                <p className='white'>Apply Online For Hamdard University</p>
              </span>
            </span>
            </div>
            <img src="/home/about.png" className='my-2' height={500} />
          </Col>
          <Col className='py-5' style={{maxWidth:550}}>
            <p><span className='bg-highlight'>ABOUT US</span></p>
            <h2><>Technology Development Council- TechDC</></h2>
            <p className='grey my-3' >
              aims to maintain the internationally recognized standards of professional capability and morals which rule the award and preservation of these titles. To make sure that students, employers, government, and broader society can have assurance in the knowledge, skills, and assurance of professionally trained engineering technicians and technologists.
            </p>
            <div className='my-5'></div>
            <Button title={'Read More'} width={150} />
          </Col>
        </Row>
      </Container>
      }
      {width<400 &&
      <Container className='text-center' data-aos="slide-up" > 
        <Button title={'Apply Online For Hamdard University'} />
        <img src="/home/about.png" width={300} />
        <div>
        <p className='my-3'><span className='bg-highlight'>ABOUT US</span></p>
          <h2><>Technology Development Council- TechDC</></h2>
          <p className='grey my-3' >
            aims to maintain the internationally recognized standards of professional capability and morals which rule the award and preservation of these titles. To make sure that students, employers, government, and broader society can have assurance in the knowledge, skills, and assurance of professionally trained engineering technicians and technologists.
          </p>
          <div className='my-5'></div>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col><Button title={'Read More'} width={150} /></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
      }

      {/* ========== Services Section ========== */}

      <div className='service-bg text-center pb-5' data-aos="slide-up" >
        <p><span className='bg-highlight'>WHAT WE DO</span></p>
        <h2><strong>Our Premium Services</strong></h2>
        <p className='grey my-5' style={{paddingLeft:width<400?1:300, paddingRight:width<400?1:300}}>
          TechDC accumulates together the students (technicians and technologists) from all over the technology-related platforms with an ultimate objective to mold them by providing them the professional technical-training and opportunities to pursue their higher studies (bachelor’s and master’s programs) from HEC recognized universities for their bright career in the professional world out there. On the other hand, TechDC assures the deployment of its trained technicians and technologists for employee transformation and guarantees their retention in the long term to its client organizations.
        </p>
        <Row className='my-5'>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col><Button title={'Read More'} width={150} /></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>

      {/* ========== Services Section ========== */}

      {width>400 &&
        <div className='trainings-bg py-5' data-aos="slide-up" >
        <Container style={{paddingTop:width>400?150:10}}>
          <Row className='py-5'>
            <Col md={6}>
              <h1 className='white' style={{marginTop:200, fontSize:100}}>TRAININGS</h1>
            </Col>
            <Col md={6}>
              <p className='green f-20'>
                Training & Skills
              </p>
              <h2 className='white'>TechDC Training Programs</h2>
              <p className='grey'>
              TechDC provides its technical training programs to its engineering Technologists and Technicians to have what it takes required by the modern industries. These training and workshops would include sessions and classes from experts and technologists at the professional level. These technical training programs have been divided into the following levels according to the needs of the industries.
              </p>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>Training regarding Soft Skills</p></Col>
              </Row>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>Training regarding Health, Safety & Environment</p></Col>
              </Row>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>ISO {"("}International Standardization for Organizations{")"} Training</p></Col>
              </Row>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>ASTM {"("}American Society for Testing Materials{")"} Training</p></Col>
              </Row>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>ASHRAE {"("}American Society of Heating, Refrigerating & Air-Conditioning Engineers{")"} Training</p></Col>
              </Row>
              <Row>
                <Col md={1}><GrCheckmark className='icon f-35'/></Col>
                <Col md={9}><p className='grey py-1'>Training regarding Soft Skills</p></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
      }
      {width<400 &&
        <div className='trainings-bg-2 py-5 mt-5 px-3' data-aos="slide-up" >
          <p className='green f-20 mt-5 pt-1'>Training & Skills</p>
          <p className='grey'>
              TechDC provides its technical training programs to its engineering Technologists and Technicians to have what it takes required by the modern industries. These training and workshops would include sessions and classes from experts and technologists at the professional level. These technical training programs have been divided into the following levels according to the needs of the industries.
              </p>
              <Row>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>Training regarding Soft Skills</p></Col>
              </Row>
              <Row className='mt-2'>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>Training regarding Health, Safety & Environment</p></Col>
              </Row>
              <Row>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>ISO {"("}International Standardization for Organizations{")"} Training</p></Col>
              </Row>
              <Row>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>ASTM {"("}American Society for Testing Materials{")"} Training</p></Col>
              </Row>
              <Row>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>ASHRAE {"("}American Society of Heating, Refrigerating & Air-Conditioning Engineers{")"} Training</p></Col>
              </Row>
              <Row>
                <Col xs={2}><GrCheckmark className='icon f-35'/></Col>
                <Col xs={10}><p className='grey py-1'>Training regarding Soft Skills</p></Col>
              </Row>
        </div>
      }
    </div>
    }
    {
      load && 
      <div style={{ overflowX:'hidden', textAlign:'center', marginTop:'20%'}} data-aos="fade-up">
          <img src='/loader.svg' height={100}  />
      </div>
    }
    {width>400 && <Cursor style={{zIndex:1}} hollow color={'rgb(32, 89, 169)'} duration={0.8} size={45} />}
    </>
  )
}

export default Home