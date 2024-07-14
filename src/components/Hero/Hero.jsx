 

function Hero() {
  return (
      <section className="hero-section section simple-bottom">
          <div className="container">
              <div className="hero-wrapper home">
                  <div className="hero-text-block">
                      <div className="heading-64">
                          <h1>Build UX design skills<span className="yellow-highlight online">online</span>
                          </h1>
                          <p className="subtitle font-size-l opacity-88">Learn and improve your design skills with interactive UX courses and skill tests built specifically for professional designers.</p>
                          <div className="btns centered margin-bottom-16">
                              <a href="/" className="btn btn-xl primary-btn w-inline-block"><div>Get started for free</div></a>
                              <a className="btn btn-xl grey-btn mobile-hidden w-inline-block" href="/">Uxcel for Teams</a>
                          </div>
                      </div>
                  </div>
                  <div className="hero-img-wrapper">
                      <div className="home-graph-wrap">
                          <img src="./images/skill-graph.svg" width="408" height="432" alt="Skill Graph" />
                      </div>
                  </div>
              </div>
              <div className="logos-and-ratings">
                  <div className="font-size-s opacity-60 mobile-only">Trusted by users at</div>
                  <div className="w-layout-grid inner-logos-list">
                      <img src="./images/apple.svg" width="134" height="64" alt="Apple" />
                      <img src="./images/amazon.svg" width="134" height="64" alt="Amazon" />
                      <img src="./images/microsoft.svg" width="134" height="64" alt="Microsoft" />
                      <img src="./images/tiktok.svg" width="134" height="64" alt="TikTok" className="mobile-hidden" />
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Hero;

