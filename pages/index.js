import React, { useEffect, useState } from "react";
import Cursor from "react-cursor-follow";
import { Row, Col, Container } from 'react-bootstrap';
import aos from 'aos';
import 'aos/dist/aos.css'   ;

const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
  // "#ffa500",
  // "#ffff00",
  // "#008000",
  // "#0000ff",
  // "#4b0082",
  // "#ee82ee"
];
export default function App() {

  const [i, setI] = useState(0);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    aos.init({duration:500});
    setTimeout(() => {
      if (i === colors.length) setI(0);
      else setI(i + 1);
    }, 1000);
    
    setTimeout(() => {
      setLoad(false)
    }, 2000);

  }, [i]);
  return (
    <div className="home-styles" style={{overflowX:'hidden', overflowY:'hidden'}} data-aos="flip-up">
      {!load && <div className="bg" data-aos="fade-in">
      <Cursor hollow color={colors[i]} duration={0.8} size={45} />
      <Row style={{minHeight:'100vh'}}>
        <Col style={{padding:50}}>
          <div>
          <Row>
            <Col  md={2} style={{ paddingLeft:30}}>
              <img src="/logo.png" style={{height:90}} />
            </Col>
            <Col  style={{paddingTop:10, paddingLeft:0, justifyContent:'center', alignContent:'center', alignItems:'center'}} md={2}>
              <div style={{color:'#366caf', fontWeight:500, lineHeight:1.2}}>Technology Development Council</div>
            </Col>
          </Row>
          </div>
          <div style={{textAlign:'center', paddingTop:100}}>
          <div style={{color:'#366caf', fontSize:50, lineHeight:0.5}}>UNDER</div>
          <div style={{color:'#2f2a28', fontSize:50}}>CONSTRUCTION</div>
          <button className="btn-custom my-4">Contact Us</button>
          </div>
        </Col>
        <Col></Col>
      </Row>
      </div>
      }
      {load && 
        <div style={{height:'90vh', overflowX:'hidden', textAlign:'center', padding:'18%'}}>
          <img src='/loader.svg' height={100} />
        </div>
      }
    </div>
    
  );
}
