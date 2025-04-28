import React, { useState, useEffect, lazy, Suspense } from 'react';
import getHeaders from '../helper_functions/getHeaders';
import '../styles/LearnMore.css';
import helmet, { Helmet } from 'react-helmet';
import DiverseTech from '../assets/DiverseTech.avif';
import accessibilitylogo from '../assets/accessibilitylogo.png';
import Audit from '../assets/Audit.avif';
import ADA from '../assets/ADA.avif';
import WCAG from '../assets/WCAG.avif';
import websymbols from '../assets/websymbols.avif';

const Sidebar = lazy(()=> import('../components/Sidebar'));

function Learnmore() {
  const [isRendered, setIsRendered] = useState(false);


  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <>
    <Helmet>
      <title>Learn More | Bit Brains</title>
      <meta
          name="description" 
            content="An exhaustive compendium on web accessibility including guidelines (WCAG, ARIA), historical context, and tools to create an inclusive web experience."/>
      <meta 
          name="keywords" 
            content="web accessibility, WCAG, ARIA, ADA compliance, inclusive design, web development, accessibility tools, semantic HTML"/>
      <link rel="stylesheet" href="/styles/LearnMore.css"/>
      
      <link rel="preconnect" href="https://www.youtube.com" crossOrigin="true"/>
      
      <link rel="preload" href={DiverseTech} as="image" type="image/avif"/>
      <link rel="preload" href={accessibilitylogo} as="image" type="image/png"/>
      <link rel="preload" href={Audit} as="image" type="image/avif"/>
      <link rel="preload" href={ADA} as="image" type="image/avif"/>
      <link rel="preload" href={WCAG} as="image" type="image/avif"/>
      <link rel="preload" href={websymbols} as="image" type="image/avif"/>
      <link rel="preconnect" href={accessibilitylogo} as="image" type="image/png"/>

      <link rel="preconnect" href="https://www.w3.org/WAI/" crossOrigin="true"/>
      <link rel="preconnect" href="https://www.ada.gov/resources/web-guidance/" crossOrigin="true"/>
      <link rel="preconnect" href="https://webaim.org/" crossOrigin="true"/>
      <link rel="preconnect" href="https://www.a11yproject.com/" crossOrigin="true"/>
      <link rel="preconnect" href="https://developers.google.com/web/tools/lighthouse" crossOrigin="true"/>
      <link rel="preconnect" href="https://www.section508.gov/" crossOrigin="true"/>
    </Helmet>
  

      <main className="main" role="main">
      <Suspense fallback={<p>Loading Sidebar... </p>}>
        {isRendered &&<Sidebar items={getHeaders()}/>}
      </Suspense>

      
        <div className="learnmore-page"> 
          <section>
            <h2 id="the-ultimate-guide-to-web-accessibility">The Ultimate Guide to Web Accessibility</h2>
              <p>
                <strong>In the early days of the internet,</strong> websites were built with little thought for users with disabilities. Accessibility wasn’t even on most developers’ radars. 
                As technology evolved—and with the passage of laws such as the Americans with Disabilities Act (ADA) and the drive of disability rights movements—the web began a long journey toward inclusivity. 
                Today, accessible design isn’t just a legal or ethical obligation; it’s a smart practice that improves the user experience for everyone. 
              </p>
                  <img
                    className="center-image"
                    src={DiverseTech}
                    alt="Illustration of diverse hands holding smartphones, tablets, and laptops displaying connectivity icons on a teal background."
                    width="800"   
                    height="420"
                  />
              <p>
                In the sections below, you will explore historical milestones, core guidelines, advanced techniques, code examples, resource links, and even real-world success stories.
              </p>
          </section>

          <section>
              <h2 id="a-turing-point-from-neglect-to-inclusion">A Turning Point: From Neglect to Inclusion</h2>
                <p>
                  A major leap forward was made with the <strong>introduction of the Web Content Accessibility Guidelines (WCAG)</strong> by the World Wide Web Consortium (W3C).
                These guidelines defined what accessible web design should look like and sparked a shift in digital strategies worldwide.
                Developers began to adopt a mindset that embraced accessibility as a core principle of modern web design.            
                </p>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/5H1JGdqLrWo"
                title="Video for beginners on WCAG, the Web Content Accessibility Guidelines"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
              <p>
                In the section below, we will delve into the differences between ADA and WCAG, the POUR principles, and how to implement them in your projects.
              </p>
          </section>

          <section>
              <h2 id="ada-vs-wcag-understanding-the-difference">ADA vs. WCAG: Understanding the Difference</h2>
              <img
                src={ADA}
                alt="Illustration of the ADA logo, symbolizing the Americans with Disabilities Act."
                width="350"
                height="200"
                loading="lazy"
              />

              <img
                src={WCAG}
                alt="Illustration of the WCAG logo."
                width="300"
                height="200"
                loading="lazy"
              />
                <ul>
                  <li>
                    <strong>Americans with Disabilities Act (ADA):</strong> A legal framework in the United States that mandates equal access for individuals with disabilities. Non-compliance can result in legal action.
                  </li>
                  <li>
                    <strong>Web Content Accessibility Guidelines (WCAG):</strong> These international standards—encompassing WCAG 2.0, 2.1, and 2.2—define the technical criteria for creating accessible web content. While not legally binding, WCAG guidelines are widely regarded as the benchmark in ADA-related cases.
                  </li>
               </ul>
                  <p>
                    In essence, while <strong>ADA is the law, WCAG offers the roadmap</strong> to achieving accessible digital content.
                  </p>

              <h3 id="wcag-conformance-levels">WCAG Conformance Levels</h3>
                <ul>
                  <li>
                    <strong>Level A (Minimum Requirement):</strong> Covers the most basic accessibility features, ensuring that key barriers are removed so that users with disabilities can interact with the content.
                  </li>
                  <li>
                    <strong>Level AA (Industry Standard):</strong> This level builds significantly on the basics by addressing key challenges like adequate color contrast and intuitive navigation. Achieving Level AA is essential for most organizations, as it greatly enhances the overall user experience.
                  </li>
                  <li>
                    <strong>Level AAA (Aspirational Goal):</strong> Representing the gold standard of accessibility, this level offers the highest level of inclusivity. While it demonstrates a superior commitment to accessibility, it may not be practical to implement across every part of a site. 
                  </li>
                </ul>
          </section>
          
          <section>
          <h2 id="the-four-pillars-of-accessibility-the-pour-principles">The Four Pillars of Accessibility: The POUR Principles</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) 2.2 define the standards for accessible web content. They are organized around the POUR principles:
            </p>
              <table>
                <thead>
                  <tr>
                    <th>Principle</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Perceivable</strong></td>
                    <td>Ensure that information and interface components are presented in formats users can perceive. For example, provide text alternatives for non-text content.</td>
                  </tr>
                  <tr>
                    <td><strong>Operable</strong></td>
                    <td>Make sure that users can navigate and interact with your website using a variety of input methods, especially keyboards.</td>
                  </tr>
                  <tr>
                    <td><strong>Understandable</strong></td>
                    <td>All content and operations should be easy to comprehend. This means clear language, predictable navigation, and consistent design patterns.</td>
                  </tr>
                  <tr>
                    <td><strong>Robust</strong></td>
                    <td>Your site should work reliably across different platforms, including various browsers and assistive technologies.</td>
                  </tr>
                </tbody>
              </table>
              <p>
                For example, to meet the perceivability criterion, always include alternative text for images so screen readers can describe visual content.
              </p>
          </section>

          <section>
            <h2 id="compliance-checklist"> Compliance Checklist</h2>
            <p>
              Use the checklist below to verify that your website meets essential web accessibility standards:
            </p>
            <img
              className="side-image"
              src={Audit}
              alt="Illustration of a clipboard with a checklist, symbolizing the importance of auditing for accessibility compliance."
              width="300"
              height="auto"
              loading="lazy"
            />
            <ul>
              <li>
                <input type="checkbox" id="semantic-html" name="semantic-html"/>
                <label htmlFor="semantic-html">
                  <strong>Semantic HTML:</strong> Ensure that your HTML elements are used according to their intended purpose (e.g., replace generic <code>div</code> tags with <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, etc.).
                </label>
              </li>
              
              <li>
                <input type="checkbox" id="keyboard-accessibility" name="keyboard-accessibility"/>
                <label htmlFor="keyboard-accessibility">
                  <strong>Keyboard Navigation:</strong> Confirm that every interactive element is fully accessible via keyboard, with proper <code>tabIndex</code> order and visible focus indicators.
                </label>
              </li>
              <li>
                <input type="checkbox" id="alt-text" name="alt-text"/>
                <label htmlFor="alt-text">
                  <strong>Alt Text:</strong> Verify that all images include descriptive alternative text that conveys meaningful information.
                </label>
              </li>
              <li>
                <input type="checkbox" id="color-contrast" name="color-contrast"/>
                <label htmlFor="color-contrast">
                  <strong>Color and Contrast:</strong> Check that the color contrast between text and background meets WCAG guidelines using contrast checker tools.
                </label>
              </li>
              <li>
                <input type="checkbox" id="accessible-forms" name="accessible-forms"/>
                <label htmlFor="accessible-forms">
                  <strong>Accessible Forms:</strong> Use the <code>&lt;label&gt;</code> element for form controls and apply ARIA attributes where necessary for error handling.
                </label>
              </li>
            </ul>
          </section>


          <section>
            <h2 id="essential-tools-&-resources">Essential Tools &amp; Resources</h2>
            <p>
              Enhance your development process by leveraging the following trusted tools and resources:
            </p>
            <ul>
              <li>
                <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">
                  W3C Web Accessibility Initiative (WAI)
                </a> – The definitive resource for accessibility guidelines, techniques, and best practices.
              </li>
              <li>
                <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">
                  ADA.gov
                </a> – The official site for the Americans with Disabilities Act, providing legal context and resources.  

              </li>
              <li>
                <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer">
                  WebAIM (Web Accessibility in Mind)
                </a> – A comprehensive resource offering tutorials, tools, and practical advice for building accessible content.
              </li>
              <li>
                <a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer">
                  The A11Y Project
                </a> – A community-driven resource with checklists, tutorials, and news about accessibility.
              </li>
              <li>
                <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer">
                  Google Lighthouse
                </a> – A tool built into Chrome DevTools that audits page performance, SEO, and accessibility.
              </li>
              <li>
                <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">
                  Section508.gov
                </a> – A source for accessibility checklists and standards, originally for U.S. federal websites.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="real-world-success-stories">Real-World Success Stories</h2>
            <p>
              Learning from practical examples can provide valuable insights. Here are a few organizations that have successfully implemented accessibility:
            </p>
            <ul>
            <li>
              <strong>1% for the Planet:</strong> A nonprofit organization committed to environmental causes, its website demonstrates accessibility and inclusivity through thoughtful design.
              <p class="reason">Reason: The site uses readable typography, simple navigation, and accessible forms to make it easy for all visitors—including users of assistive technologies—to learn and contribute.</p>
            </li>
            <li>
              <strong>Deque Systems:</strong> A company specializing in accessibility solutions, their website sets an excellent example of an inclusive design.
              <p class="reason">Reason: It provides accessible forms, readable typography, intuitive navigation, and thoroughly tested ARIA attributes to accommodate users of all abilities.</p>
            </li>
            <li>
              <strong>Blackbird Foods:</strong> Known for its visually appealing and easy-to-navigate website, Blackbird Foods embodies accessibility best practices.
              <p class="reason">Reason: It uses high-contrast text, clear navigation, and descriptive alternative text for images, ensuring its site is inclusive and user-friendly.</p>
            </li>
            <li>
              <strong>BBC:</strong> Known for employing detailed ARIA roles and semantic HTML, the BBC’s websites are robust in accessibility.
              <p class="reason">Reason: The site uses proper ARIA landmarks and roles, ensuring all users, including those with assistive technologies, can easily navigate and consume its content.</p>
            </li>
            </ul>
          </section>

          <section>
            <h2 id="final-thoughts">Final Thoughts</h2>

            <p>
              Embracing web accessibility goes beyond legal requirements—it’s about offering an inclusive digital experience for all users.
              Understanding and applying these principles helps ensure compliance and elevates user experience.
              <br />
              <strong>Remember:</strong> Accessibility is not a one-time task; it’s an ongoing commitment to inclusivity.
            </p>
            <img
             className='center-image'
             src={websymbols}
             alt=""
             width="500"
             height="auto"
             loading="lazy"
           />
            <p>
              <em>
                Take action today: Review your website using this checklist and integrate the tools mentioned above to build a truly accessible digital experience.
              </em>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Learnmore;
