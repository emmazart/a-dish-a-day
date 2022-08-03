// imports


// function Navigation() {
//     return (
//         <div></div>
//     )
// }


// export default Navigation;

import React from "react";

function Navigation(props) {
  const tabs = ["Login", "Protein Search", "View All Recipes", "About"];
  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;