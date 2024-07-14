

import React from 'react';


import "../../styles.css"


function UxDesignCertificationsSection() {
    return (
        <section className="section yellow-section">
            <div className="container">
                <div className="w-layout-grid grid-2-col">
                    <div className="grid-text-content">
                        <div className="preheader">UX Design Certifications</div>
                        <h2>Stand out with professional UX certification</h2>
                        <p className="font-size-l opacity-88">Earn reputable UX certification and prove your design knowledge.</p>
                        <div className="btns">
                            <a href="/" className="btn linear-btn">Learn more</a>
                        </div>
                    </div>
                    <div className="grid-img-wrapper">
                        <img src="https://assets.website-files.com/61f9082050036c5b7a4899f5/63cacd406a9a302881f9a73b_ux-certification.svg" width="640" height="395" alt="Product designer certificate" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UxDesignCertificationsSection;
