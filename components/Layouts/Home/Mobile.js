import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import Button from '../../Shared/Button';
import { AiFillCheckCircle } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import { SiExpertsexchange } from "react-icons/si";
import Aos from 'aos';
import Cursor from "react-cursor-follow";
import CountUp from 'react-countup';
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Mobile = () => {

  const [width, setWidth] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:500});
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])

  return (
    <>
    {!load &&
      <div data-aos="fade-up">
      {/* ========== Hero Section ========== */}
      <div className="bg px-3 py-5">
          <h1 className='main-head'>
          TECHDC
          </h1>
          <p className='hero-cntn' >
          <span className='blue'>First time in Pakistan</span>, One-window solution to cater your needs to thrive in your 
          Technological Career!
          </p>
          <p className='grey' >
          From training to getting a ticket of proving yourself in technical industry to manage your higher-studies
          expenses with manageable schedule to your technical-recruitment in well-known organizations, TechDC has you covered.
          </p>
          {/* <div style={{minHeight:200}}></div> */}
  
          <div style={{backgroundColor:'white'}} className="text-center py-5 px-4">
            <h6 className='my-3'>Groom Yourselves With Field Experts</h6>
            <p className='grey'>We ensure your overall personality development. Now, your industrial training needs will be fulfilled here. From Soft Skills to technical skills, all are here</p>
          </div>
      </div>
  
      <Container className='my-5' data-aos="fade-up">
        <Row>
          <Col xs={12} className="text-center">
            <button className='mobile-btn'>Apply Online For Hamdard University</button>
          </Col>
          <Col xs={12} className="text-center">
          <img src="/home/about.png" className='my-2' style={{width:'85vw'}} />
          </Col>
        </Row>
      </Container>
  
      <div className='px-3 text-center' data-aos="fade-up">
      <p><span className='bg-highlight'>ABOUT US</span></p>
      <h2><strong>Technology Development Council- TechDC</strong></h2>
      <p className='grey my-3' >
          aims to maintain the internationally recognized standards of professional capability and morals which rule the award and preservation of these titles. To make sure that students, employers, government, and broader society can have assurance in the knowledge, skills, and assurance of professionally trained engineering technicians and technologists.
      </p>
      </div>
  
      <hr className='my-5' />
  
      <div className='px-3 text-center ' data-aos="fade-up">
      <p><span className='bg-highlight'>WHAT WE DO</span></p>
      <h2><strong>Our Premium Services</strong></h2>
      <p className='grey mb-5' >
          TechDC accumulates together the students (technicians and technologists) from all over the technology-related platforms with an ultimate objective to mold them by providing them the professional technical-training and opportunities to pursue their higher studies (bachelor’s and master’s programs) from HEC recognized universities for their bright career in the professional world out there. On the other hand, TechDC assures the deployment of its trained technicians and technologists for employee transformation and guarantees their retention in the long term to its client organizations.
      </p>
      </div>
  
      <div className='px-3  trainings-mobile'>
      <div className='text-center'>
      <p><span className='bg-highlight' style={{color:'#00c7a6'}}>Training & Skills</span></p>
      <h2 className='white'>TechDC Training Programs</h2>
      <p className='grey my-4'>
        TechDC provides its technical training programs to its engineering Technologists and Technicians to have what it takes required by the modern industries. These training and workshops would include sessions and classes from experts and technologists at the professional level. These technical training programs have been divided into the following levels according to the needs of the industries.
      </p>
  
      </div>
        <div data-aos="slide-right">
        <Row>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>Training regarding Soft Skills</p> </Col>
      </Row>
      <Row>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>Training regarding Health, Safety & Environment</p> </Col>
      </Row>
      <Row>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>ISO {"("}International Standardization for Organizations{")"} Training</p> </Col>
      </Row>
      <Row>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>ASTM {"("}American Society for Testing Materials{")"} Training</p> </Col>
      </Row>
      <Row>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>ASHRAE {"("}American Society of Heating, Refrigerating & Air-Conditioning Engineers{")"} Training</p> </Col>
      </Row>
      <Row className='pb-5'>
        <Col xs={2}><AiOutlineCheckCircle color='#00c7a6' size={50} /> </Col>
        <Col xs={10}><p className='grey py-3'>Training regarding Soft Skills</p> </Col>
      </Row>
        </div>
      </div>
  
      <div className='pt-5 my-4' >
      <Container>
          <Row className=''>
          <Col md={12}>
              <h3 className='text-center'>Our Academic Partners</h3>
          </Col>
          </Row>
          <Row className=''>
          <Col xs={12}>
              <div className='text-center'>
                  <img src="/home/st-pt-logo.jpg" className='' height={120} />
                  <img src="/home/hamdard.jpg" className='' height={120} />
              </div>
          </Col>
          </Row>
      </Container>
      </div>
  
      <div className='py-5' >
      <Container>
          <Row className='text-center'>
          <Col md={12} >
          <p><span className='bg-highlight'>News & Events</span></p>
          <h1 className='mt-3 mb-4'>TechDC Mega Events</h1>
          </Col>
          </Row>
          <Row className=''>
          <Col xs={12} className="my-4" data-aos="flip-left">
            <div className="card mx-4">
              <img src="/home/events-2.png" alt="Avatar"  style={{width:'100%', height:220}} />
              <div className="p-3">
                  <h6><>Event</></h6> 
                  <p className='fw-700' style={{fontWeight:800}}>MOU signing with St. Patrick’s Institute of Science & Technology</p> 
              <Link className='my-3 view-btn' href="/events">View</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} className="my-4" data-aos="flip-left">
            <div className="card mx-4">
            <img src="/home/events-3.png" alt="Avatar" style={{width:'100%', height:220}} />
              <div className="p-3">
                  <h6><>Event</></h6> 
                  <p className='fw-700' style={{fontWeight:800}}>MOU signing between TechDC & Hamdard University</p> 
              <Link className='my-3 view-btn' href="/events">View</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} className="my-4" data-aos="flip-left">
            <div className="card mx-4">
            <img src="/home/events-4.png" alt="Avatar" style={{width:'100%', height:220}} />
              <div className="p-3">
                  <h6><>Event</></h6> 
                  <p className='fw-700' style={{fontWeight:800}}>TechDC Career Fair at Expo as Technical Learning Partner</p> 
              <Link className='my-3 view-btn' href="/events">View</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} className="my-4" data-aos="flip-left">
            <div className="card mx-4">
            <img src="/home/events-1.png" alt="Avatar" style={{width:'100%', height:220}} />
              <div className="p-3">
                  <h6><>Event</></h6> 
                  <p className='fw-700' style={{fontWeight:800}}>MOU signing with St. Patrick’s Institute of Science & Technology</p> 
              <Link className='my-3 view-btn' href="/events">View</Link>
              </div>
            </div>
          </Col>
          </Row>
      </Container>
      </div>
  
      <Container className='count-section-mobile text-center py-5' data-aos="slide-up">
          <Row className='white'>
              <Col xs={12} >
                  <span style={{fontSize:25}}>Over{' '}</span>
              </Col>
              <Col xs={12}>
              <span className='' style={{fontSize:50, fontWeight:700}}>
                  <CountUp end={100000} duration={1} separator="," enableScrollSpy={true} />
              </span>
              </Col>
              <Col xs={12} className="text-center py-3">
              Technologists enrolled in BSc Engineering Technology program
              </Col>
              <Col xs={12} className=" py-3">
                  <div>
                      Peerless Position in the industry to train over  technicians at a time
                  </div>
                  <div>
                  Over <span style={{fontSize:30}}>10,000</span> Trainee Members
                  </div>
              </Col>
          </Row>
      </Container>
  
      <div style={{backgroundColor:'silver', padding:20}} className="text-center" data-aos="fade-in">    
        <div className='blue my-3'><strong>TESTIMONIALS</strong></div>
        <h1 className=''><strong>What People Say</strong></h1>
        <Container className=' my-4'>
        <div style={{backgroundColor:'white'}} className="shadow py-5">
            <img src='/home/shafaq-testimonial.jpg' height={60} style={{borderRadius:100}} />
  
            <div className='mb-3 mt-5 px-5'>
                TechDC is doing an amazing job. Such a cause-oriented initiative. Their concern for skill development for the technical education graduates is commendable. A feel-good platform with young vibes and enthusiasm. All the Best Team TechDC for future endeavors.
            </div>
            <h4><strong>Shafaq Zehra</strong></h4>
            <div>Former Asst. Manager,<br/> Learning & Strategic Projects,<br/> PharmEvi Pvt Ltd</div>
        </div>
        </Container>
      </div>
  
      </div>
    }
    {load &&       
    <div style={{ overflowX:'hidden', textAlign:'center', marginTop:'80%'}} data-aos="fade-up">
      <img src='/loader.svg' height={100}  />
    </div>
    }
    </>
  )
}

export default Mobile