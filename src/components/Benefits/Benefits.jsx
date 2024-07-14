// import React from 'react'
// import BenefitImg from "../../assets/benefits.svg"
// import SliderImg from "../../assets/image 169.png"
// import "./benefits.css"

// function Benefits() {
//   return (
//     <div className="Benefits">
//       <div className="benefits-one">
//       <div className="benefits-container">
//         <div className="benefits-image">
//             <img src={BenefitImg} alt="" />
//         </div>

//         <div className="benefits-contant">
//         <div className='contant-header'>
//           LEARN UX DESIGN
//         </div>
//         <div className="contant-body">
//           <h2>Learn and improve your design skills faster</h2>
//           <p>Our interactive, bite-sized courses and lessons help you improve your UX skills in just 5 minutes per day.</p>
//           <div className="benefits-btn">
//           <a href="#">Learn More</a>
//           </div>
//         </div>
//         </div>
//       </div>
//       </div>

      
//       <div className="benefits-one">
//       <div className="benefits-container">
//         <div className="benefits-contant">
//         <div className='contant-header'>
//         UX SKILLS ASSESSMENTS
//         </div>
//         <div className="contant-body">
//           <h2>Test & measure your design knowledge</h2>
//           <p>Measure your design knowledge and get insights on how to improve your skills.</p>
//           <div className="benefits-btn">
//           <a href="#">Learn More</a>
//           </div>
//         </div>
//         </div>
//         <div className="benefits-image">
//             <img src={SliderImg} alt="" />
//         </div>
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default Benefits

import React from 'react';
import BenefitImg from "../../assets/benefits.svg";
import SliderImg from "../../assets/image 169.png";
import "./benefits.css";

function Benefits() {
  return (
    <section className="section grey-section">
            <div className="container">
                <div className="w-layout-grid grid-2-col">
                    <div className="grid-img-wrapper">
                        <div className="home-test-block">
                            <img src="./images/browser.svg" width="500" height="30" className="home-test-block-top" alt="Browser" />
                            <div className="home-test-question-wrap">
                                <div>Select the complementary color scheme:</div>
                                <div className="home-test-variants">
                                    <div className="home-test-variant">
                                        <img src="./images/Complementary1.svg" className="home-test-illustration" alt="Complementary 1" />
                                    </div>
                                    <div className="home-test-variant">
                                        <img src="./images/Complementary2.svg" className="home-test-illustration" alt="Complementary 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-text-content">
                        <div className="preheader">Learn UX Design</div>
                        <h2>Learn and improve your design skills faster</h2>
                        <p className="font-size-l opacity-88">Interactive, bite-sized courses and lessons help you improve your UX skills in just 5 minutes per day. </p>
                        <div className="btns">
                            <a href="/" className="btn linear-btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Benefits;


