import React from 'react';
import '../styles/Sidebar.css';
import { useLocation } from 'react-router';

function Sidebar ({ items })  {
  const location = useLocation();
  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => ( //maps through the items array and creates a list item for each element
          <li key={index}> {/* key is a unique identifier for each list item, using index as a fallback */}
            <a href={`${location.pathname.slice(1)}#${item.href}`}>{item.label}</a> {/* href is the link to the section and label is the text that will be displayed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
