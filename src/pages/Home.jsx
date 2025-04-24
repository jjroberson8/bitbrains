import React, { useState, useEffect } from 'react';
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Home.css';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import computer from "../assets/computer.jpg";

function Home() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);


  return (
    <>
    
      <title>Home - Empowering Every Click</title>
      <meta name="description" content="Empowering Every Click - Accessibility Matters" />
      <meta name="keywords" content="Accessibility, Web Development, Inclusive Design" />
      <meta name="author" content="Bit Brains" />

      <div className="home-page">

        {isRendered ? (
          <Sidebar items={getHeaders()} />
        ) : (
          <p>Rendering Sidebar...</p>
        )}

        <main className="main" role="main">

          <section>
            <h1>Empowering Every Click</h1>
            <h2 id="accessibility-matters">Accessibility Matters</h2>
            <p>
            In today's digital world, each click matters, particularly in promoting equal access to information, services, 
            and opportunities for all. At Bit Brains, we are committed to creating a web that is open and inclusive, embracing everyone, 
            no matter their abilities.
            </p>
          </section>
          <section>
            <h2 id="web-accessibility">What is Web Accessibility?</h2>
            <p>
            Web Accessibility means designing and developing websites that are easy for all people to use—even those with disabilities.
              Web accessibility is not just a technical requirement; it's a moral imperative.
              It ensures that individuals with disabilities can navigate, understand, and interact with web content.
              This includes visual impairments, hearing impairments, cognitive disabilities, and more.
              Web accessibility is about creating an inclusive digital experience for all users.
            </p>
            <img
              className="center-image"
              src={import.meta.env.BASE_URL  + "src/assets/six-figs.png"}
              alt="Six people representing various disabilities. Each character is represented."
            />
            <p>
              It encompasses a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
              It also includes considerations for older individuals with age-related impairments.
            </p>
          </section>

          <section>
            <h2 id="importance">Why is Web Accessibility Important?</h2>
            <p>
            By achieving web accessibility, we create a world where:
            </p>
            <img
              className="side-image"
              src={import.meta.env.BASE_URL  + "src\assets\tech.png"}
              alt="Accessibility illustration"
            />
            <ul>
              <li>
                <strong>Inclusivity Prevails:</strong> Everyone, from a student with a learning disability to a professional using assistive technology, can navigate and benefit from our digital content.
              </li>
              <li>
                <strong>Equal Opportunities Are Offered:</strong> When everyone can access and interact with our website, we foster a more equitable environment that reflects our commitment to social responsibility.
              </li>
              
              <li>
                <strong>Legal and Ethical Standards Are Met:</strong> Following recognized standards such as the Web Content Accessibility Guidelines (WCAG) ensures that we adhere to ethical mandates and, where applicable, legal requirements.
              </li>
              <li>
                <strong>Better User Experience:</strong> Accessible design leads to cleaner layouts, easier navigation, and more intuitive interactions, providing a better experience not only for users with disabilities but for all visitors.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="commitment">Our Commitment</h2>
            <p>
            We are continuously working to improve our website’s accessibility because we understand that digital inclusion is a journey, not a destination. Here are some of the key measures we take:
            </p>
            <ul>
              <li>
                <strong>User-Centered Design:</strong> Every element—from color contrast to button placement—is designed keeping our diverse audience in mind.
              </li>
              <li>
                <strong>Regular Audits and Updates:</strong> We regularly test and update our digital content to ensure it meets and exceeds modern accessibility standards.
              </li>
              <li>
                <strong>Community Feedback:</strong> We value the feedback of our users and welcome suggestions on how to improve our site’s accessibility further.
              </li>
              <li>
                <strong>Training and Collaboration:</strong> Our team participates in ongoing education and collaborates with accessibility experts to stay informed about best practices.
              </li>
            </ul>
          </section>

          <section>

            <h2 id="get-involved">Get Involved</h2>
            <img
              className="side-image"
              src={import.meta.env.BASE_URL + "src\assets\students.png"}
              alt="Students with different disabilities working together"
            />
            <p>
              Join us in our mission to make the web accessible for everyone. Whether you're a developer, designer, or advocate,
              your contributions can make a significant impact.
              Together, we can ensure that the internet is a place where everyone can thrive.
              Your involvement matters, and every effort counts. 
            </p>   
          </section>

          <section>
          <h2 id="learn-more">Learn More</h2>
          <p>
          We invite you to explore our complete guide on web accessibility. This resource dives deeper into the principles and tools we use to create an inclusive online experience.
          </p>
          <Hero
            cName="hero"
            heroImg={computer}          
            altText="Learn about web accessibility"
            title="Learn About Web Accessibility"
            text="Explore the world of web accessibility and make a difference."
            btnText="Learn More"
            url="/learnmore"
          />
          </section>
       </main>
      </div>
    </>
  );
}

export default Home;
