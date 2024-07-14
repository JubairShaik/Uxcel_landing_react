import React from 'react';
import "../../styles.css";


const ProSection = () => {
  return (
    <section className="section last-section grey-section wf-section">
      <div className="container">
        <div className="w-layout-grid grid-2-col vertically-centered">
          <div className="grid-img-wrapper">
            <img src="./images/bef_img-3-min.webp" alt="uxcel PRO" width="454" srcSet="./images/bef_img-3-min-p-500.webp 500w, ./images/bef_img-3-min.webp 908w" sizes="(max-width: 767px) 93vw, 454px" />
          </div>
          <div className="grid-text-content width-l">
            <div className="preheader">uxcel PRO</div>
            <h2>Learn 4x faster with Uxcel Pro membership</h2>
            <p className="font-size-l opacity-88">Bring your design game to the next level. Become a part of the continuous UX learners community.</p>
            <div className="btns">
              <a href="/" className="btn linear-btn">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProSection;
