import React from 'react';
import './Home.css';
import './Content.css';

const Home = () => {
  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="home-container">
        {/* Add content as needed */}
        <h1>VIMUKUL LIFE SCIENCE</h1>
        <p>Nature's Wisdom, Your Wellness</p>
      </div>

      <div className="main-body">
        {/* Writing content */}
        
        <div className="baap">
          <div className="cont">
            <h2>Welcome to Vimukul Life Science!</h2>
            <hr style={{ color: 'red' }} />
            <div className="para">
              <h3>
                <p>
                  Vimukul Life Science, established in 2019, is a pioneering company specializing in ophthalmic equipment and surgical knives, blades, and pharmaceuticals. With a commitment to enhancing medical practices, our products are designed with precision and innovation to meet the highest standards of quality and reliability. Over the past five years, we have built a strong reputation in the healthcare industry, catering to the diverse needs of ophthalmologists and surgeons.
                </p>
                <p>
                  Our dedicated team of over 30 professionals works diligently to ensure the continuous advancement and improvement of our product line. At Vimukul Life Science, we prioritize customer satisfaction, providing exceptional service and support to our clients. Our state-of-the-art facilities and rigorous quality control processes guarantee that every product we deliver performs optimally in the most critical surgical environments.
                </p>
              
              <p>
                Vimukul Life Science is more than just a supplier; we are a partner in healthcare innovation, committed to improving patient outcomes and advancing medical technology. Join us in our mission to elevate the standards of ophthalmic and surgical care worldwide.
              </p></h3>
            </div>
            {/* <div className="img">
              {/* Add image or style background here */}
            {/* </div> */}
          </div>
          <button className="scroll-button" onClick={scrollToTop}>
            <b style={{ fontSize: 'larger' }}>↑</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
