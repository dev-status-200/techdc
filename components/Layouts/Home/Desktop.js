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

const Desktop = () => {
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
    <div className='home-styles' data-aos="fade-up">
    {/* ========== Hero Section ========== */}
    <div className="bg py-2">
    <Row style={{padding:0, margin:0}}>
    <Col style={{padding:0, margin:0}}>
    <div className='hero-left'>
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
        <div style={{minHeight:200}}></div>
    </div>
    </Col>
    <Col md={6}>
    <img src="/home/hero.gif" className={'fr'} />
    </Col>

    </Row>
    </div>

    {/* ========== Slider Section ========== */}
    <div style={{overflowX:'hidden'}} className='slider-container'>
    <div className="sliding-background"></div>
    </div>

    {/* ========== Groom Section ========== */}
    <div className="floating groom" data-aos="fade-up" data-aos-duration={2000}>
    <h5>Groom Yourselves With Field Experts</h5>
    <img src="/home/expert.png" className='mt-3' height={80} />
    <div className='my-4'></div>
    <p className='grey'>We ensure your overall personality development. Now, your industrial training needs will be fulfilled here. From Soft Skills to technical skills, all are here</p>
    <Link href={"/"} className="global-link">See More</Link>
    </div>

    {/* ========== About Us Section ========== */}
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

    {/* ========== Services Section ========== */}
    <div className='service-bg text-center' data-aos="slide-up">
        <Container>
        <p><span className='bg-highlight'>WHAT WE DO</span></p>
        <h2><strong>Our Premium Services</strong></h2>
        <p className='grey my-5' >
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
        </Container>
    </div>
    
    <div className='trainings-bg' style={{position:'relative', top:-47}} data-aos="slide-up">
    <Container>
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

    {/* ========== Academic Partners ========== */}
    <div className='' data-aos="slide-up">
    <Container>
        <Row className='pb-4'>
        <Col md={12}>
            <h3 className='text-center'>Our Academic Partners</h3>
        </Col>
        </Row>
        <Row className='py-4'>
        <Col md={12}>
            <div className='text-center'>
                <img src="/home/st-pt-logo.jpg" className='' height={170} />
                <img src="/home/hamdard.jpg" className='' height={170} />
            </div>
        </Col>
        </Row>
    </Container>
    </div>
    <hr/>
    <div className='py-5' data-aos="slide-up">
        <div className='text-center'>
        <p><span className='bg-highlight'>News & Events</span></p>
        <h1 className='mt-5 mb-4'>TechDC Mega Events</h1>
        </div>
        <Container className='px-5'>
            <Row className='px-5'>
                <Col>
                <div className="card">
                <img src="/home/events-2.png" alt="Avatar" height={170} width={230}/>
                <div className="p-3">
                    <h6><>Event</></h6> 
                    <p className='fw-700' style={{fontWeight:800}}>MOU signing with St. Patrick’s Institute of Science & Technology</p> 
                <Link className='my-3' href="/">View</Link>
                </div>
                </div>
                </Col>
                <Col >
                <div className="card">
                <img src="/home/events-3.png" alt="Avatar" height={170} width={230}/>
                <div className="p-3">
                    <h6><>Event</></h6> 
                    <p className='fw-700'>MOU signing between TechDC & Hamdard University</p> 
                    <Link className='my-3' href="/">View</Link>
                </div>
                </div>
                </Col>
                <Col>
                <div className="card">
                <img src="/home/events-4.png" alt="Avatar" height={170} width={230}/>
                <div className="p-3">
                    <h6><>Event</></h6> 
                    <p className='fw-700'>Event
                        TechDC Career Fair at Expo as Technical Learning Partner</p> 
                    <Link className='my-3' href="/">View</Link>
                </div>
                </div>
                </Col>
                <Col>
                <div className="card">
                <img src="/home/events-1.png" alt="Avatar" height={170} width={230}/>
                <div className="p-3">
                    <h6><>Event</></h6> 
                    <p className='fw-700'>MOU signing with St. Patrick’s Institute of Science & Technology</p> 
                    <Link className='my-3' href="/">View</Link>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className='count-section'>
        <Row className='white'>
            <Col md={1} className="px-5">
                <span style={{fontSize:25, position:'relative', top:15}}>Over{' '}</span>
            </Col>
            <Col md={2}>
            <span className='mx-3' style={{fontSize:50, fontWeight:700}}>
                <CountUp end={100000} duration={1} separator="," enableScrollSpy={true} />
            </span>
            </Col>
            <Col md={3} className="text-center py-3">
            Technologists enrolled in BSc Engineering Technology program
            </Col>
            <Col md={6} className=" py-3">
                <div>
                    Peerless Position in the industry to train over  technicians at a time
                </div>
                <div>
                Over <span style={{fontSize:30}}>10,000</span> Trainee Members
                </div>
            </Col>
        </Row>
    </div>
    <div className='testimonials-bg text-center'>
        <div className='bg-highlight'>TESTIMONIALS</div>
        <h1 className=''>What People Say</h1>
        <Container className='px-5 my-5'>
        <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
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

export default Desktop