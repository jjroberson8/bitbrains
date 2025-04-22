import React, { useState, useEffect } from 'react'
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Showcase.css';
import Sidebar from '../components/Sidebar';

function Showcase() {
  const [isRendered, setIsRendered] = useState(false);
    
  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <>
      <title>Accessibility Showcase</title>
      <meta name='description' content='Compare accessible vs non-accessible web elements'/>
      <meta name='keywords' content='Accessibility, Comparison, Showcase'/>
      <div className='main' role='main'>
        {isRendered ? (
          <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
        
        <h1>Web Accessibility Showcase</h1>
        <h2>See the Difference Between Accessible and Non-Accessible Elements</h2>
        <p>
          This page demonstrates common web elements with both accessible and non-accessible implementations.
          Understanding these differences helps create more inclusive digital experiences for all users.
        </p>

        <section>
          <h2 id="visual">Visual Elements Showcase</h2>
          <p>
            Visual accessibility ensures that users with visual impairments can perceive and understand content.
            Below are examples of common visual elements with both accessible and problematic implementations.
          </p>
          
          <div className="showcase-example">
            <h3>Image With and Without Alt Text</h3>
            <div className="example-row">
              <div className="bad-example">
                <h4>Non-Accessible</h4>
                <img src="/example-image.jpg" />
                <p>No alt text - screen readers can't interpret this image.</p>
              </div>
              <div className="good-example">
                <h4>Accessible</h4>
                <img 
                  src="/example-image.jpg" 
                  alt="A smiling woman holding a cup of coffee while working on her laptop"
                />
                <p>Descriptive alt text conveys the image's content and purpose.</p>
              </div>
            </div>
          </div>

          <div className="showcase-example">
            <h3>Color Contrast Examples</h3>
            <div className="example-row">
              <div className="bad-example">
                <h4>Low Contrast (Fails WCAG)</h4>
                <p style={{ color: '#aaaaaa', backgroundColor: '#f0f0f0' }}>
                  This text has very low contrast (2:1 ratio)
                </p>
              </div>
              <div className="good-example">
                <h4>Good Contrast (Meets WCAG AA)</h4>
                <p style={{ color: '#333333', backgroundColor: '#f0f0f0' }}>
                  This text has good contrast (4.5:1 ratio)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 id="forms">Form Elements Showcase</h2>
          <p>
            Accessible forms ensure all users can complete and submit information,
            regardless of their abilities or assistive technologies they use.
          </p>

          <div className="showcase-example">
            <h3>Labeled vs Unlabeled Inputs</h3>
            <div className="example-row">
              <div className="bad-example">
                <h4>Non-Accessible</h4>
                <form>
                  <input type="text" placeholder="Enter your name" />
                  <button>Submit</button>
                </form>
                <p>No labels, no proper focus states, and poor contrast.</p>
              </div>
              <div className="good-example">
                <h4>Accessible</h4>
                <form>
                  <label htmlFor="name-input">Full Name</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    aria-describedby="name-help"
                  />
                  <small id="name-help">Enter your first and last name</small>
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
                <p>Proper labels, instructions, and focus states.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 id="navigation">Navigation Showcase</h2>
          <p>
            Accessible navigation ensures all users can move through your site,
            whether they use a mouse, keyboard, or assistive technologies.
          </p>

          <div className="showcase-example">
            <h3>Navigation Menu Examples</h3>
            <div className="example-row">
              <div className="bad-example">
                <h4>Non-Accessible</h4>
                <div className="nav-example">
                  <span>Home</span>
                  <span>Products</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
                <p>Divs used instead of semantic elements, no keyboard navigation.</p>
              </div>
              <div className="good-example">
                <h4>Accessible</h4>
                <nav aria-label="Main navigation">
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
                <p>Semantic HTML, proper focus states, and ARIA labels.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 id="keyboard">Keyboard Navigation</h2>
          <p>
            Many users navigate websites using only a keyboard.
            These examples show the importance of proper keyboard support.
          </p>

          <div className="showcase-example">
            <h3>Focus States</h3>
            <div className="example-row">
              <div className="bad-example">
                <h4>Non-Accessible</h4>
                <button style={{ outline: 'none' }}>Click Me</button>
                <p>No visible focus state - keyboard users can't see where they are.</p>
              </div>
              <div className="good-example">
                <h4>Accessible</h4>
                <button style={{ outline: '2px solid #0066cc' }}>Click Me</button>
                <p>Clear focus indicator shows which element has keyboard focus.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Showcase;
