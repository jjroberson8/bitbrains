import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import getHeaders from '../helper_functions/getHeaders';
import Hero from '../components/Hero';
import '../styles/LearnMore.css';
import accessibilityLogo from '../assets/accessibilitylogo.png'; // Placeholder for the logo image

function Learnmore() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Mark the component as mounted so the Sidebar can be correctly rendered.
    setIsRendered(true);
  }, []);

  return (
    <>
      {/* Setting detailed page metadata for SEO and clarity */}
      <title>Learn More - In-Depth Web Accessibility Guide</title>
      <meta
        name="description"
        content="An exhaustive compendium on web accessibility including guidelines (WCAG, ARIA), historical context, best practices, coding examples, and tools to create an inclusive web experience."
      />
      <div className="learnmore-page">
      <div className="wrap-content">
        {isRendered ? (
          <Sidebar items={getHeaders()} />
        ) : (
          <p>Loading Sidebar...</p>
        )}

        <div className="main" role="main">
          
          {/* 1. Introduction */}
          <section>
            <h1>Comprehensive Web Accessibility: From Fundamentals to Advanced Techniques</h1>
            <p>
              Welcome to the ultimate guide on web accessibility. This resource is designed to benefit developers, designers, and digital content creators by detailing why accessibility is essential. By applying these practices, you not only meet legal standards—you create an inviting, user-friendly, and inclusive online environment.
            </p>
            <p>
              In the sections below, you will explore historical milestones, core guidelines, advanced techniques, code examples, resource links, and even real-world success stories.
            </p>
          </section>

          {/* 2. Historical Context */}
          <section>
            <h2 id="introduction"> The Historical Evolution of Web Accessibility</h2>
            <p>
              Initially, websites were built without regard for users with disabilities. In the early stages of the web, accessibility wasn’t even on the radar of most developers. However, with the enactment of legislation such as the Americans with Disabilities Act (ADA) and the rise of disability rights movements, there was a significant push towards building more accessible web experiences.
            </p>
            <p>
              A major turning point was the introduction of the Web Content Accessibility Guidelines (WCAG) by the W3C. These guidelines laid the foundation for what accessible web design should look like, inspiring countless developers to rethink their digital strategies.
            </p>
          </section>

          {/* 3. In-Depth Look at WCAG */}
          <section>
            <h2 id="In-Depth">Unpacking WCAG: Principles and Standards</h2>
            <p>
              The Web Content Accessibility Guidelines define the standards for accessible web content. They are organized around the POUR principles:
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
                  <td>Perceivable</td>
                  <td>Ensure that information and interface components are presented in formats users can perceive. For example, provide text alternatives for non-text content.</td>
                </tr>
                <tr>
                  <td>Operable</td>
                  <td>Make sure that users can navigate and interact with your website using a variety of input methods, especially keyboards.</td>
                </tr>
                <tr>
                  <td>Understandable</td>
                  <td>All content and operations should be easy to comprehend. This means clear language, predictable navigation, and consistent design patterns.</td>
                </tr>
                <tr>
                  <td>Robust</td>
                  <td>Your site should work reliably across different platforms, including various browsers and assistive technologies.</td>
                </tr>
              </tbody>
            </table>
            <p>
              For example, to meet the perceivability criterion, always include alternative text for images so screen readers can describe visual content.
            </p>
          </section>

          {/* 4. Advanced ARIA Techniques */}
          <section>
            <h2 id="ARIA">Enhancing Accessibility with ARIA</h2>
            <p>
              Accessible Rich Internet Applications (ARIA) fill in the gaps when native HTML elements do not fully convey interactive content. ARIA provides additional roles, states, and properties to ensure that dynamic elements on your page are announced properly to users of assistive technologies.
            </p>
            <p>
              Consider the <code>aria-live</code> attribute—this allows screen readers to receive updates on content that changes dynamically.
            </p>
            <pre>
              {`<div aria-live="polite">
  This content will update automatically.
</div>`}
            </pre>
            <p>
              You can also use attributes like <code>aria-label</code> to add context to buttons and links, ensuring that even non-standard components are fully accessible.
            </p>
          </section>

          {/* 5. Accessibility Compliance Checklist */}
          <section id="accessibility-checklist">
            <h2>Accessibility Compliance Checklist</h2>
            <p>
              Use the checklist below to verify that your website meets essential web accessibility standards:
            </p>
            <img
              className="side-image"
              src="src\assets\Audit.jpg"
              alt="Accessibility illustration"
            />
            <ul>
              <li>
                <input type="checkbox" id="semantic-html" />
                <label htmlFor="semantic-html">
                  <strong>Semantic HTML:</strong> Ensure that your HTML elements are used according to their intended purpose (e.g., replace generic <code>div</code> tags with <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, etc.).
                </label>
              </li>
              
              <li>
                <input type="checkbox" id="keyboard-accessibility" />
                <label htmlFor="keyboard-accessibility">
                  <strong>Keyboard Navigation:</strong> Confirm that every interactive element is fully accessible via keyboard, with proper <code>tabIndex</code> order and visible focus indicators.
                </label>
              </li>
              <li>
                <input type="checkbox" id="alt-text" />
                <label htmlFor="alt-text">
                  <strong>Alt Text:</strong> Verify that all images include descriptive alternative text that conveys meaningful information.
                </label>
              </li>
              <li>
                <input type="checkbox" id="color-contrast" />
                <label htmlFor="color-contrast">
                  <strong>Color and Contrast:</strong> Check that the color contrast between text and background meets WCAG guidelines using contrast checker tools.
                </label>
              </li>
              <li>
                <input type="checkbox" id="accessible-forms" />
                <label htmlFor="accessible-forms">
                  <strong>Accessible Forms:</strong> Ensure that form elements are correctly labeled (using <code>&lt;label&gt;</code>) and that ARIA attributes manage errors and focus appropriately.
                </label>
              </li>
            </ul>
          </section>


          {/* 6. Accessibility Tools & External Resources */}
          <section>
            <h2 id="tools">Essential Accessibility Tools & Resources</h2>
            <p>
              Enhance your development process by leveraging the following trusted tools and resources:
            </p>
            <ul>
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">
                  WCAG Quick Reference
                </a> – A comprehensive guide directly from W3C.
              </li>
              <li>
                <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">
                  WebAIM WAVE Tool
                </a> – An excellent tool for evaluating the accessibility of your web content.
              </li>
              <li>
                <a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer">
                  The A11Y Project
                </a> – A community-driven resource offering tutorials, checklists, and practical advice.
              </li>
              <li>
                <a href="https://deque.com/" target="_blank" rel="noopener noreferrer">
                  Deque Systems
                </a> – Provides comprehensive accessibility testing and enterprise solutions.
              </li>
            </ul>
          </section>

          {/* 7. Advanced Topics & Future Trends */}
          <section>
            <h2 id="trends">Exploring Advanced Topics and Emerging Trends</h2>
            <p>
              As digital experiences evolve, new challenges and solutions in accessibility come to the forefront. Consider these emerging areas:
            </p>
            <ul>
              <li>
                <strong>Voice Interaction:</strong> With the rise of smart devices and virtual assistants, ensuring voice navigability is becoming more critical.
              </li>
              <li>
                <strong>AI for Accessibility:</strong> Innovative tools are using artificial intelligence to identify and remediate accessibility issues in real time.
              </li>
              <li>
                <strong>Immersive Content:</strong> As augmented and virtual reality applications grow, so does the need for accessible navigation within these immersive experiences.
              </li>
            </ul>
          </section>

          {/* 8. Real-World Case Studies */}
          <section>
            <h2 id="realworld"> Real-World Success Stories and Case Studies</h2>
            <p>
              Learning from practical examples can provide valuable insights. Here are a few organizations that have successfully implemented accessibility:
            </p>
            <ul>
              <li>
                <strong>GOV.UK:</strong> The United Kingdom’s government portal continually refines its content to exceed accessibility standards.
              </li>
              <li>
                <strong>BBC:</strong> Known for employing detailed ARIA roles and semantic HTML, the BBC’s websites are robust in accessibility.
              </li>
              <li>
                <strong>Airbnb:</strong> By incorporating flexible design practices, Airbnb has embraced accessible design to cater to a diverse global audience.
              </li>
            </ul>
          </section>

          {/* 9. Frequently Asked Questions */}
          <section>
            <h2 id="questions">Frequently Asked Questions</h2>
            <ul>
              <li>
                <strong>Why is web accessibility crucial?</strong>
                <p>
                  Accessible websites ensure that all users, regardless of their abilities, can access and interact with content. This promotes inclusivity and ultimately improves the overall user experience.
                </p>
              </li>
              <li>
                <strong>How do ARIA attributes contribute to accessibility?</strong>
                <p>
                  ARIA attributes offer additional context and descriptive semantics for elements that plain HTML might not cover, making them integral in dynamically updated or custom elements.
                </p>
              </li>
              <li>
                <strong>What common mistakes should I avoid?</strong>
                <p>
                  Frequently overlooked aspects include poor semantic HTML usage, lack of keyboard-focused navigation, inadequate contrast ratios, and missing or vague alt text for images.
                </p>
              </li>
            </ul>
          </section>
         </div>
        </div>
      </div>
    </>
  );
}

export default Learnmore;
