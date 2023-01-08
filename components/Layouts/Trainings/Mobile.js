import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import CountUp from 'react-countup';


const Mobile = () => {
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
            <h1 className='blue py-5 my-5'><strong>Trainings</strong></h1>
          </div>
        </div>

        <div>
          <Container> 
            <Row className='px-1'>
              <Col md={12}>
                <h3 style={{fontWeight:300}}>Technical Trainings with TechDC</h3>
                <p className="my-4 grey">Technology industry with its combinations of high-velocity competitions, complexity, worldwide talent, and interdependence among rivals makes it a truly exclusive environment, requiring a discrete set of skills. Today in a time of rapid changes the traditional styles of leadership archetypes need not apply. TechDC provides technology training programs to its engineering technicians and technologists to possess those skills needed by the industrial sector. These technology training programs would involve sessions and seminars for technologists to help them know about trends and practices in surrounding industries. Training sessions will be given by international and qualified trainers who have industry knowledge and expertise.</p>
                <h2 className="my-4" style={{fontWeight:300}}>Soft Skills</h2>
                <p className="my-4 grey">Soft skills are in high demand in all technological fields. TechDC provides training to its members to enhance their soft skills. The training of soft skills allows engineering technicians and technologists to gain a better understanding of workplace relationships and how to mark their presence in the industry. The soft skills training under TechDC covers a range of areas including:</p>
              
              {/* table */}
              <div className='my-5 f-15'>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 9001 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is related to the fundamentals of a quality management system (QMS). This training will let you understand a QMS and its implementation.
                  </Col>
                </Row>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 9004 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is related to the requirements of QMS. This training will empower you to develop a process-based quality management system and to achieve and sustain corporate success.
                  </Col>
                </Row>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 14001 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is related to the requirements of QMS. This training will empower you to develop a process-based quality management system and to achieve and sustain corporate success.
                  </Col>
                </Row>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 16949 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is related to the technical requirement for the design and manufacture of products associated with automotive. This training will provide you with information for QMS requirements for the design and manufacture, installation, and provision of products associated with automotive.
                  </Col>
                </Row>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 18001 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is associated with occupational health and safety. This training will empower you to maintain top standards for health and safety in your organization.
                  </Col>
                </Row>
                <Row>
                  <Col md={1} className='border-trainings'>
                    <strong>ISO 31000 Training</strong>
                  </Col>
                  <Col md={11} className='border-trainings'>
                  This standard is associated with principles and guidelines for risk management. This training will provide you with wide-ranging awareness of the essential principles, structure, and practices of Risk Management.
                  </Col>
                </Row>
              </div>
              {/* table */}

              <h3 style={{fontWeight:300}}>ASTM Trainings</h3>
                <p className="my-4 grey">ASTM International is an international standards organization that provides a voluntary consensus technical standard for a range of products, systems, materials, and services. The standards are designed to enhance the performance of industries around the globe. ASTM training courses that TechDC offers which are also helpful for engineering technicians & technologists are:</p>

              {/* table */}
              <div className='my-5 f-15'>

                {astimTrainings.map((x, i)=>{
                  return(
                    <Row key={i}>
                    <Col md={2} className='border-trainings'>
                      <strong>{x.head}</strong>
                    </Col>
                    <Col md={10} className='border-trainings'>
                      {x.def}
                    </Col>
                  </Row>
                  )
                })}
              </div>
              {/* table */}

              <h3 style={{fontWeight:300}}>ASHRAE HVAC Trainings</h3>
                <p className="my-4 grey">ASHRAE (American Society of Heating, Refrigerating, and Air-Conditioning Engineers) has developed as an international society, which serves as a source of technical standards and guidelines for the design and construction of heating, ventilation, air conditioning and refrigeration (HVAC&R) systems in buildings. At TechDC, we offer ASHRAE certification training related to energy, building, ventilation, and air quality.</p>
                  {ashTrainings.map((x, i)=>{
                    return(
                      <Row key={i}>
                      <Col md={2} className='border-trainings'>
                        <strong>{x.head}</strong>
                      </Col>
                      <Col md={10} className='border-trainings'>
                        {x.def}
                      </Col>
                    </Row>
                    )
                  })}
              </Col>
            </Row>
          </Container>
          <div style={{marginTop:50}}>
            <Container className='' fluid>
              <Row>
                <Col md={8} style={{backgroundColor:"rgb(30, 30, 30)", paddingTop:60, paddingBottom:60}}>
                <h1 className='white'>Health, Safety & Environment</h1>
                <p className='grey'>
                  The safety management and technical training programs are designed to get trainees proficient in suggesting the course of action required to address the Health, Safety, and Environment concerns for the entire team. This training would not only introduce trainees to safety management but also support them to learn how to access risks, how to control risks, and how to protect the environment. These training programs aware, engineering technicians and technologists to understand their responsibilities, identify hazards, and investigate incidents and accidents, measure performance.
                  We fully consider the most recent health and safety environment laws while designing our health and safety environment training programs. The training will be offered by professionally trained staff having an extensive range of expertise along with technical experience in the industry. TechDC tender workshops in Health and Safety environment to support members to secure knowledge associated with the reason behind the occurrence of everyday incidents and severe hazards and learn how to evaluate the associated risks and also learn how to regulate or eradicate these risks:
                  </p>
                  <ul className='grey'>
                    <li>Environment</li>
                    <li>Occupational health and safety</li>
                    <li>Community health and safety</li>
                    <li>Construction and decommissioning</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>

        </div>
        </>
      }
      {
      load && 
      <div style={{ overflowX:'hidden', overflowY:'hidden', textAlign:'center', padding:'20%'}} data-aos="fade-up">
          <img src='/loader.svg' height={100}  />
      </div>
      }
    </div>
  )
}

export default Mobile