import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import {AiOutlineCheck} from 'react-icons/ai'

const Desktop = () => {
  const [width, setWidth] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:500});
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])

  const astimTrainings = [
    { head:'ASTM A53/A 53M', def:"This standard relates to specification for Steel, Pipe, Black and Hot-Dipped, Welded, Zinc-Coated, and Seamless. This specification covers seamless and welded black and hot-dipped galvanized steel pipe in NPS 1/8 to NPS 26." },
    { head:"ASTM A193/A193 AM", def:"Standard Specification for Alloy-Steel and Stainless-Steel Bolting for High Temperature or High-Pressure Service and Other Special Purpose Applications" },
    { head:"A325 - 14", def:"Standard Specification for Structural Bolts, Steel, Heat Treated, 120/105 KSI Minimum Tensile Strength" },
    { head:"A354", def:"This specification covers the chemical and mechanical requirements of quenched and tempered alloy steel bolts, studs, and other externally threaded fasteners covering two strength Levels, 4” diameter and smaller" },
    { head:"A490", def:"Standard Specification for Structural Bolts, Alloy Steel, Heat Treated, 150 KSI Minimum Tensile Strength" },
    { head:"ASTM A514/A514M", def:"Standard Specification for High-Yield-Strength, Quenched, and Tempered Alloy Steel Plate, Suitable for Welding" },
    { head:"ASTM C1270", def:"Standard Practice for Detection Sensitivity Mapping of In-Plant Walk-Through Metal Detectors" },
    { head:"ASTM C1349", def:"Standard Specification for Architectural Flat Glass Clad Polycarbonate" },
    { head:"NOACK Volatility test or ASTMD5800", def:"Standard Test Method for Evaporation Loss of Lubricating Oils by the Noack Method" },
    { head:"ASTM D6751", def:"Standard Specification for Biodiesel Fuel Blend Stock (B100) for Middle Distillate Fuels" },
    { head:"ASTM E1714", def:"Standard Guide for Properties of a Universal Healthcare Identifier (UHID)" },
    { head:"ASTMF2322", def:"Standard Test Methods for Physical Assault on Vertical Fixed Barriers for Detention and Correctional Facilities" }
  ]

  const ashTrainings = [
    {head:"Standard 62.1	", def:  "Ventilation for Satisfactory Indoor Air Quality"},
    {head:"Standard 62.2	", def:  "Ventilation and Satisfactory Indoor Air Quality in Low-Rise Residential Buildings"},
    {head:"Standard 90.1	", def:  "Energy Standard for High-Rise Buildings"},
    {head:"Standard 135	", def:  "BACnet - A Data Communication Protocol for Building Automation and Regulatory Systems"},
    {head:"Standard 189.1", def:   "The standard for the Strategy of High Performance, High-Rise Eco- friendly Constructions"}
  ]

  return (
    <div>
      {!load &&
        <>
        <div className="shared-styles">
          <div className='hero-bg text-center py-5'>
            <h1 className='blue py-5 my-5'><strong>Centers of Excellence</strong></h1>
          </div>
        </div>

        <div>
          <Container> 
            <Row className='px-5'>
              <Col md={12}>
                <h3 style={{fontWeight:300}}>Technology Training Centers</h3>
                <p className="my-4 grey">
                  Through TechDC’s advanced research labs we would help our members to generate innovative ideas for pursuing a solution to technological problems of the modern world. We are committed to establishing a research facility center equipped with modern technologies for development to test emerging technologies under a secure and controlled environment. TechDC also preserves a considerable focus towards instituting multidisciplinary research centers in association with multiple institutions and aims to connect with government and industries for evolving engineering structures for the students of Engineering Technologists, Diploma of Associate Engineers, professional engineering technologists and associate engineers.
                </p>
                <p className="my-4 grey">We at TechDC assure that our students are facilitated at large by our services. For this, we make sure that our centers are at nearby places to the students so that they can easily avail of our all training and development programs by marking their presence there.</p>
                <p className="my-4 grey">Currently, we have our nine development centers virtually operating in pretty much every corner of the town, they are</p>
              
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Malir 15</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Gulshan-e-Iqbal</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> P.E.C.H.S</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Orangi Town</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Nazimabad</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Gulshan-e-Hadeed</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> S.I.T.E Area</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Korangi Industrial Area</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Sakhi Hassan</p>
                <p> In these development centers, <span className='white dark-blue-bg px-2 f-600'>we have well-equipped labs, professional researchers, and skilled faculty</span> which make us unique in society.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='mt-5'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1iYm8UerviIdMepVam0SeLSLW95q_m8Mq&hl=en" width="100%" height="480"></iframe>
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