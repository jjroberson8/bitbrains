
function getHeaders() {
  
    const sideBarItems = [];
    const headers = document.querySelectorAll('h2');
  
    headers.forEach(header => {
      sideBarItems.push({href: `bitbrains/${header.id}`, label: `${header.textContent}`});
    });
    return (
      sideBarItems
    );
  }

  export default getHeaders