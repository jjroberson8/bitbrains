import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Home.css';
import Hero from '../components/Hero';
import computer from "../assets/computer.avif";
import sixFigs from "../assets/six-figs.avif";
import students from "../assets/students.avif";
import tech from "../assets/tech.avif";
import hands from "../assets/hands.avif";
import accessibilitylogo from "../assets/accessibilityLogo.png";

const Sidebar = lazy(() => import('../components/Sidebar'));

function Home() {
  const [isRendered, setIsRendered] = useState(false);

  
  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Bit Brains</title>
        <meta  
          name="description" 
          content="Discover the importance of web accessibility and how Bit Brains 
                  is committed to creating an inclusive digital experience for everyone."
          />  
        <meta name="keywords" content="Accessibility, Web Development, Inclusive Design, Home"/>
        <link rel="stylesheet" href="/styles/Home.css" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="true"/>

        {/* Preload images */}
        <link rel="preload" href={accessibilitylogo} as="image" type="image/png"/>
        <link rel="preload" href={computer} as="image" type="image/avif"/>
        <link rel="preload" href={sixFigs} as="image" type="image/avif"/>
        <link rel="preload" href={students} as="image" type="image/avif"/>
        <link rel="preload" href={tech} as="image" type="image/avif"/>
        <link rel="preload" href={hands} as="image" type="image/avif"/>

        {/* Preload /learnmore if it’s critical for navigation */}
        <link rel="preload" href="/learnmore" as="document" type="text/html"/>
      </Helmet>

      <main className="main" role="main">
        <Suspense fallback={<p>Loading Sidebar...</p>}>
          {isRendered && <Sidebar items={getHeaders()} />}
        </Suspense>

        <div className="home-page">
          <section>
            <h1>Empowering Every Click</h1>
            <h2 id="accessibility-matters">Accessibility Matters</h2>
            <p>
              In today's digital world, each click matters, particularly in promoting equal access to information, services, and opportunities for all. Accessibility is not just
              a feature; it's a fundamental right. It ensures that everyone, regardless of their abilities, can access and benefit from the web.
            </p>
            <img
              className="center-image"
              src={sixFigs}
              alt="Illustration: Six people representing various disabilities."
            />
            <p>
              This illustration underscores how accessibility addresses a broad spectrum of challenges—from visual, auditory, physical, speech, cognitive, language, learning, and
              neurological disabilities to age-related impairments. Inaccessible digital products negatively affect people with disabilities, and certain types of disabilities are impacted
              more significantly in the digital realm than others.
            </p>
            <p>
              <strong>Bit Brains</strong> is committed to making the web a more inclusive place. We believe that everyone should have equal access to information and services, regardless
              of their abilities or disabilities.
            </p>
          </section>

          <section>
            <h2 id="web-accessibility">What is Web Accessibility?</h2>
            <p>
              Web Accessibility means designing and developing websites that are easy for all people to use—even those with disabilities. Web accessibility is not just a technical
              requirement; it's a moral imperative. It ensures that individuals with disabilities can navigate, understand, and interact with web content. Web accessibility is about
              creating an inclusive digital experience for all users.
            </p>
            <p>
              For a 7-minute video with examples of how accessibility is essential for people with disabilities and useful for everyone in a variety of situations, see:
            </p>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/3f31oufqFSM"
                title="Introduction to Web Accessibility"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
            <p>
              The goal of accessibility is to ensure that all individuals, regardless of their abilities or disabilities, can access and benefit from the web. This includes making
              websites, applications, and digital content usable for people with disabilities, as well as improving usability for all users.
            </p>
          </section>

          <section>
            <h2 id="importance">Why is Web Accessibility Important?</h2>
            <p>By achieving web accessibility, we create a world where:</p>
            <img
              className="side-image"
              src={tech}
              alt="Illustration: of various technologies and devices."
              width="350"
              height="auto"
              loading="lazy"
            />
            <ul>
              <li>
                <strong>Inclusivity Prevails:</strong> Everyone, from a student with a learning disability to a professional using assistive technology, can navigate and benefit from our
                digital content.
              </li>
              <li>
                <strong>Equal Opportunities Are Offered:</strong> When everyone can access and interact with our website, we foster a more equitable environment that reflects our commitment
                to social responsibility.
              </li>
              <li>
                <strong>Legal and Ethical Standards Are Met:</strong> Following recognized standards such as the Web Content Accessibility Guidelines (WCAG) ensures that we adhere to
                ethical mandates and, where applicable, legal requirements.
              </li>
              <li>
                <strong>Better User Experience:</strong> Accessible design leads to cleaner layouts, easier navigation, and more intuitive interactions, providing a better experience
                not only for users with disabilities but for all visitors.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="commitment">Our Commitment</h2>
            <img
              className="side-image"
              src={hands}
              alt="Diverse hands high-fiving, symbolizing unity, and teamwork."
              loading="lazy"
              width="350"
              height="auto"
            />
            <p>
              We are continuously working to improve our website’s accessibility because we understand that digital inclusion is a journey, not a destination. Here are some of the key
              measures we take:
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
                <strong>Training and Education:</strong> Our team participates in ongoing education with accessibility experts to stay informed about best practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="get-involved">Get Involved</h2>
            <img
              className="side-image"
              src={students}
              alt="Students with different disabilities working together"
              loading="lazy"
              width="350"
              height="auto"
            />
            <p>
              Join us in our mission to make the web accessible for everyone. Whether you're a developer, designer, or advocate, your contributions can make a significant impact.
              Together, we can ensure that the internet is a place where everyone can thrive. Your involvement matters, and every effort counts.
            </p>
          </section>

          <section>
            <h2 id="learn-more">Learn More</h2>
            <p>
              We invite you to explore our complete guide on web accessibility. This resource dives deeper into the principles and tools we use to create an inclusive online
              experience.
            </p>
            {/* Updated Hero component button text for better link description */}
            <Hero
              cName="hero"
              heroImg={computer}
              loading="lazy"
              heroImgAlt="A computer with a phone right next to it."
              altText="Learn more about web accessibility"
              title="Learn More About Web Accessibility"
              text="Explore the world of web accessibility and make a difference."
              btnText="Explore Now"
              url="bitbrains/learnmore"
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
