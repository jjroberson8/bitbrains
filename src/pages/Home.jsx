
import React, { useState, useEffect } from 'react'
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Home.css';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isRendered, setIsRendered] = useState(false);
  
    useEffect(() => {
      setIsRendered(true);
    }), [];

  return (
    <>
      <title>Home - Empowering Every Click</title>
      <div className='main'>
        {isRendered ? (
        <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
        <h1>Empowering Every Click</h1>

        <h2 id="accessibility-matters">Accessibility Matters</h2>
        <p>
          We are committed to ensuring that the internet is accessible to everyone, no matter their abilities.
          Our goal is to eliminate obstacles and foster an inclusive online environment for all users.
        </p>
        <section>
          <h2 id="web-accessibility">What is Web Accessibility?</h2>
          <p>
            Web accessibility ensures that websites, tools, and technologies are designed and developed to be usable by everyone, including individuals
            with disabilities. This concept includes a broad range of disabilities, such as those affecting hearing, cognition, neurological functions, physical
            abilities, speech, and vision. By prioritizing web accessibility, we create an inclusive online environment that allows all users, regardless of their
            abilities, to access information, services, and resources without barriers. Ensuring that digital content is navigable and usable can empower
            individuals with disabilities to fully participate in the digital world, enhancing their experience and facilitating equal opportunities.
          </p>
        </section>
        <section>
          <h2 id="importance">Why is Web Accessibility Important?</h2>
          <ul>
            <li>
              <strong>Inclusivity: </strong>
              Ensuring your website is accessible allows individuals with disabilities to effectively view, understand, navigate, and interact with the online content you provide.
            </li>
            <li>
              <strong>Legal Compliance: </strong>
              By making certain that your website aligns with established accessibility standards, you can comply with important regulations like the Americans with Disabilities Act (ADA).
            </li>
            <li>
              <strong>Better User Experience: </strong>
              Websites that focus on accessibility tend to offer a more user-friendly experience for everyone, including those who may be dealing with temporary disabilities or specific situational challenges.
            </li>
          </ul>
        </section>
        <section>
          <h2 id="commitment">Our Commitment</h2>
          <p>
            We are committed to adhering to global web standards and guidelines to ensure that the internet is accessible to everyone. Our team puts in
            continuous effort to make certain that our content is usable for all individuals, no matter their hardware, software, language, location, or
            abilities.
          </p>
        </section>
        <section>
          <h2 id="get-involved">Get Involved</h2>
          <p>
            Be a part of our effort to create a more inclusive online environment. No matter if you're a developer, designer, or simply someone passionate about accessibility, you are welcome here.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home
