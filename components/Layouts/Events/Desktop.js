import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import { Modal } from 'antd';

const Desktop = () => {
  const [load, setLoad] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [record, selectedRecord] = useState({});
  const showModal = (x) => {
    selectedRecord(x)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init({duration:500});
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])

  const data = [
    {
      title:"TechDC's Corporate Meetup",
      date:"28 AUGUST, 2021",
      desc:"Last weekend of August, TechDC hosted a corporate meetup with leading HR and field experts to discuss the challenges faced by them while recruiting and retaining candidates in the technical industry.",
      image:"1"
    },
    {
      title:"Orientation of Batch 2.0 for PLC'S and Industrial Automation",
      date:"28 AUGUST, 2021",
      desc:"From yesterday's orientation session for Industrial Automation and PLC certification. Our new batch is all set to begin their trainings are keen on learning for the prosperity of their professional journey.",
      image:"2"
    },
    {
      title:"TechDC at Hamdard University for BSc Engineering Technology",
      date:"12 JULY 2021",
      desc:"Technology Development Council Team at Hamdard University for the orientation session of BSc Engineering Technology for 250 students. These future technologists will be trained for the professional world together by TechDC and Hamdard University.",
      image:"3"
    },
    {
      title:"TechDC and Higher Authorities",
      date:"16 AUGUST 2021",
      desc:"Special visit by Mir Sameer Sheikh from PTI Sindh leadership with his team at TechDC's Development Center, Pak Askari Education System. The team was welcomed by chairman TechDC, Brigadier Tariq Hussain Khan (retd), and Head of Training partner Pakistan Askari System, Rao Ehsan ul Haq.",
      image:"4"
    },
    {
      title:"TechDC in Press Releases",
      date:"09 JULY 2021",
      desc:"On 9th of July 2021, TechDC was everywhere in the headlines of Pakistan's renowned press releases such as Pakistan Observer, The Morning News, Daily Parwan Karachi, Roznama 92 News, Daily Nai Baat and more because of its newsworthy work for the development of over 300 technologists at a time while partnering with Hamdard University for the greater development cause in the long run.",
      image:"5"
    },
    {
      title:"Orientation Session Held at Hamdard University of over 250 Technologists of TechDC altogether",
      date:"09 JULY 2021",
      desc:"Orientation Session for BSc. Engineering Technology at Hamdard University held today. 250 Engineering Technologists students will be prepped for their future here in the next 4 years; ready to join professional world.",
      image:"6"
    },
    {
      title:"Orientation of BS Industrial Management with collaboration of Hamdard University",
      date:"20 MARCH 2021",
      desc:"TechDC kicked off it's technical training on Industrial Automation and PLCs today. Here's a glimpse of the session.",
      image:"7"
    },
    {
      title:"First batch of Engineering Technicians",
      date:"16 FEBRUARY 2020",
      desc:"TechDC feels proud to announce that its first batch of Engineering Technicians has been enrolled in Hamdard University today for B.SC (Engineering Technology).",
      image:"8"
    },
    {
      title:"TechDC Job Fair and Project Exhibition at Expo",
      date:"1 FEBRUARY 2020",
      desc:"A Career Fair and Project Exhibition event organized by Occasions Group in collaboration with Hamdard University happened on Saturday, Feb 1, 2020, at Expo Center. TechDC worked as a Technical Learning Partner at the event.",
      image:"9"
    },
    {
      title:"Professional Development Training Saint Patrick's Institute of Science and Technology Students",
      date:"25 FEBRUARY 2020",
      desc:"And here TechDC is done with its first level of the training (Professional Development) of the students of Saint Patrick's Institute of Science and Technology.",
      image:"10"
    },
    {
      title:"Collaboration with Hamdard University for Training & Development Programs",
      date:"27 JANUARY 2020",
      desc:"TechDC now announces its official collaboration with Hamdard University to enhance its training and development programs and to expand diploma to degree opportunities for its students.",
      image:"11"
    },
    {
      title:"Mega Training of The Students of Saint Patrick's Institute of Science & Technology",
      date:"17 JANUARY 2020",
      desc:"The kind of positive impact that our team members noticed in the students on the day of second training was tremendously satisfying while knowing that this positive response from the students is just after the one training session of TechDC",
      image:"12"
    },
    {
      title:"Mou signing with Saint Patrick's Institute of Science & Technology",
      date:"14 JUNE 2019",
      desc:"We are pleased to announce the signing of Memorandum of Understanding (MoU) between Saint Patrick's Institute of Science &Technology and TechDc.",
      image:"13"
    },
    {
      title:"Orientation of PLC'S and Industrial Automation Batch 1.0",
      date:"20TH MARCH",
      desc:"TechDC kicked off it's technical training on Industrial Automation and PLCs today. Here's a glimpse of the session.",
      image:"14"
    },
  ]

  return (
    <div>
      {!load &&
        <>
        <div className="shared-styles">
          <div className='hero-bg text-center py-5'>
            <h1 className='blue py-5 my-5'><strong>News and Events</strong></h1>
          </div>
        <Container className='my-5'>
          <Row className=''>
            {
              data.map((x, i)=>{
                return(
                  <Col key={i} md={3} className="m-5 event-card pt-2 pb-4" data-aos="fade-in" style={{border:"1px solid #dad8da"}}
                    onClick={()=>showModal(x)}
                  >
                    <img src={`events/${x.image}.jpg`} height={230} />
                    <div className='grey f-12 my-2'>{x.date}</div>
                    <h5 className='f-700 my-3 card-heading'>{x.title}</h5>
                    <div className='f-12 grey'>{x.desc.slice(0, 40)} .....</div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        <Modal title={record.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        footer={false} width={600} centered
        >
          <hr/>
          <img src={`events/${record.image}.jpg`} style={{width:'100%'}} />
          <p className='mt-3'>{record.desc}</p>
        </Modal>
        </div>
        </>
      }
      {
      load && 
      <div style={{ overflowX:'hidden', overflowY:'hidden', textAlign:'center', padding:'20%'}} data-aos="fade-up">
          <img src='/loader.svg' height={100}  />
      </div>
      }
      <Cursor style={{zIndex:1}} hollow color={'rgb(32, 89, 169)'} duration={0.8} size={45} />
    </div>
  )
}

export default Desktop