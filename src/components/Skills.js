import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Know us</h2>
                        <p>Our team of skilled professionals is dedicated to ensuring that every space or car that we touch looks its absolute best. Our goal is to provide a fantastic experience for our customers and leave them with a sparkling clean vehicle or place that they can be proud to own. Here you can fin our goals and pillars.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Social Impact</h5>
                                <p>Working with and for BC minorities</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Specialized</h5>
                                <p>Top-quality cleaning services</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Finest Products</h5>
                                <p>Working with the best products</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Eco Friendly</h5>
                                <p>We minimize ecosystem impact</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
