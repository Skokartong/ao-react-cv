import { useState } from "react";
import "../About/about.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/img.jpg";

export default function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main>
      <section id="about">
        <div className="about-container">
          <div className="facts-item">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div className="img">
                  <img src={ExampleCarouselImage} />
                </div>
                <Carousel.Caption>
                  <div className="facts-title">
                    <h3>Quick facts</h3>
                  </div>
                  <div className="facts-description">
                    <p>
                      <span>Go on. </span> Swipe!
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="img">
                  <img src={ExampleCarouselImage} />
                </div>
                <Carousel.Caption>
                  <div className="facts-title">
                    <h3>#1</h3>
                  </div>
                  <div className="facts-description">
                    <p>
                      <span>Feel home at concerts </span>screaming my lungs out!
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="img">
                  <img src={ExampleCarouselImage} />
                </div>
                <Carousel.Caption>
                  <div className="facts-title">
                    <h3>#2</h3>
                  </div>
                  <div className="facts-description">
                    <p>
                      <span>Professional goofball </span>(according to friends).
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="img">
                  <img src={ExampleCarouselImage} />
                </div>
                <Carousel.Caption>
                  <div className="facts-title">
                    <h3>#3</h3>
                  </div>
                  <div className="facts-description">
                    <p>
                      <span>Obsessed with seals. </span>I mean, who wouldn't be?
                      So chonky.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="paragraph-item">
            <h2>
              <span>
                {" "}
                <i className="fa-solid fa-pen-to-square" />
              </span>
              About me
            </h2>
            <p>
              {" "}
              Ever since I was a kid, I've loved being creative and curious as
              an individual. With a pen and a paper, I found myself escaping the
              world - as If time didn't exist!
            </p>
            <p>
              {" "}
              This curiosity led me to a ton of experiences as the years went
              by: from studying and living in London, to trying out different
              jobs and embarking engineering studies at KTH. However, I found
              myself not really haven found my passion. This is where
              programming took in place! I had friends studying computer science
              that nudged me to try it out - and man, was I hooked!
            </p>
            <p>
              {" "}
              That passion led me to where I am now – a full-stack developer
              student at Chas Academy. Right now, I'm on the lookout for
              internships in development from December 2024 to late may 2025.
              I'm pumped to share what I know and learn from other pros in the
              field.
            </p>
            <p> Feel free to message me!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
