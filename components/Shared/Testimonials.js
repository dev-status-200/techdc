import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="home-styles">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper desktop"
      >
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
                <img src='/people/shafaq-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="px-5">
                        <div className='mb-3 mt-5 px-5'>
                            TechDC is doing an amazing job. Such a cause-oriented initiative. Their concern for skill development for the technical education graduates is commendable. A feel-good platform with young vibes and enthusiasm. All the Best Team TechDC for future endeavors.
                        </div>
                    </div>
                <h4><strong>Shafaq Zehra</strong></h4>
                <div>Former Asst. Manager,<br/> Learning & Strategic Projects,<br/> PharmEvi Pvt Ltd</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
                <img src='/people/samreen-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="px-5">
                        <div className='mb-3 mt-5 px-5'>
                            It is a privilege for me to assist TechDC in their pursuit of spreading knowledge and expertise to the overlooked part of our society; who can be a source of social and economic growth of Pakistan, if trained and given a chance to perform better.
                            <br/>
                            My best wishes are with TechDc for their future endeavours in this regard.
                        </div>
                    </div>
                <h4><strong>Sumreen Noman Ansari</strong></h4>
                <div>Lead Consultant & Trainer.<br/> She's been working with NUST, K Electrics, ABC Technologies and many more organizations at a time.</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
                <img src='/people/taha-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="px-5">
                        <div className='mb-3 mt-5 px-5'>
                        TECHDC unlike any other institution is not only imparting hope but a concrete road map of transforming young Talent into future skilled workforce. Their Pragmatic approach of blending Soft skills and technical trainings has really moved the needle and have convinced me to inspire lives of many being a part of TECHDC TEAM.
                        </div>
                    </div>
                <h4><strong>Taha Owais Khanzada</strong></h4>
                <div>Deputy Manager HRBP.<br/> Premier Group of Companies</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
                <img src='/people/usama-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="px-5">
                        <div className='mb-3 mt-5 px-5'>
                        It was a good experience with productive discussion on way forward to develop & nurture tech students who have limited access to such exposures, it's a good cause, thus will try to contribute from my heart.<br/>Jazak ALLAH U Khair.<br/><br/>
                        </div>
                    </div>
                <h4><strong>Usama Khanzada</strong></h4>
                <div>Manager L&D<br/> M&P Express & Logistics</div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>

      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mobile"
      >
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:20}} className="shadow ">
                <img src='/people/shafaq-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="">
                        <div className='mb-3 mt-5'>
                            TechDC is doing an amazing job. Such a cause-oriented initiative. Their concern for skill development for the technical education graduates is commendable. A feel-good platform with young vibes and enthusiasm. All the Best Team TechDC for future endeavors.
                        </div>
                    </div>
                <h4><strong>Shafaq Zehra</strong></h4>
                <div className="f-12">Former Asst. Manager,<br/> Learning & Strategic Projects,<br/> PharmEvi Pvt Ltd</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <div style={{backgroundColor:'white', padding:20}} className="shadow ">
                <img src='/people/samreen-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="">
                        <div className='mb-3 mt-5'>
                            It is a privilege for me to assist TechDC in their pursuit of spreading knowledge and expertise to the overlooked part of our society; who can be a source of social and economic growth of Pakistan, if trained and given a chance to perform better.
                            <br/>
                            My best wishes are with TechDc for their future endeavours in this regard.
                        </div>
                    </div>
                <h4><strong>Sumreen Noman Ansari</strong></h4>
                <div className="f-12">Lead Consultant & Trainer.<br/> She's been working with NUST, K Electrics, ABC Technologies and many more organizations at a time.</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <div style={{backgroundColor:'white', padding:20}} className="shadow ">
                <img src='/people/taha-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="">
                        <div className='mb-3 mt-5'>
                        TECHDC unlike any other institution is not only imparting hope but a concrete road map of transforming young Talent into future skilled workforce. Their Pragmatic approach of blending Soft skills and technical trainings has really moved the needle and have convinced me to inspire lives of many being a part of TECHDC TEAM.
                        </div>
                    </div>
                <h4><strong>Taha Owais Khanzada</strong></h4>
                <div className="f-12">Deputy Manager HRBP.<br/> Premier Group of Companies</div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div style={{backgroundColor:'white', padding:20}} className="shadow ">
                <img src='/people/usama-testimonial.jpg' height={60} style={{borderRadius:100}} />
                    <div className="">
                        <div className='mb-3 mt-5'>
                        It was a good experience with productive discussion on way forward to develop & nurture tech students who have limited access to such exposures, it's a good cause, thus will try to contribute from my heart.<br/>Jazak ALLAH U Khair.<br/><br/>
                        </div>
                    </div>
                <h4><strong>Usama Khanzada</strong></h4>
                <div className="f-12">Manager L&D<br/> M&P Express & Logistics</div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>
//         <div style={{backgroundColor:'white', padding:40}} className="shadow mx-5">
//             <img src='/home/shafaq-testimonial.jpg' height={60} style={{borderRadius:100}} />

//             <div className='mb-3 mt-5 px-5'>
//                 TechDC is doing an amazing job. Such a cause-oriented initiative. Their concern for skill development for the technical education graduates is commendable. A feel-good platform with young vibes and enthusiasm. All the Best Team TechDC for future endeavors.
//             </div>
//             <h4><strong>Shafaq Zehra</strong></h4>
//             <div>Former Asst. Manager,<br/> Learning & Strategic Projects,<br/> PharmEvi Pvt Ltd</div>
//         </div>
//     </div>
//   )
// }

// export default Testimonials