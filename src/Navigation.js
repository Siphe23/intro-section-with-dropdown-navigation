import React from 'react';
import Logo from './logo.svg';
import './Navigation.css';
import FeaturesIcon from './images/icon-arrow-up.svg'; 
import TodoIcon from './images/icon-todo.svg';
import CalendarIcon from './images/icon-calendar.svg'; 
import RemindersIcon from './images/icon-reminders.svg'; 
import PlanningIcon from './images/icon-planning.svg'; 
import CompanyIcon from './images/icon-arrow-down.svg';



function Navigation() {
  return (
    <header className="App-header">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="dropdown-content">
        <ul>
          <li>
            <a href="#">
              <img src={FeaturesIcon} alt="Features" /> Features <span><i className="fas fa-chevron-up"></i></span>
            </a>
            <div className="dropdown-menu">
              <a href="#"><img src={TodoIcon} alt="Todo List" /> Todo List</a>
              <a href="#"><img src={CalendarIcon} alt="Calendar" /> Calendar</a>
              <a href="#"><img src={RemindersIcon} alt="Reminders" /> Reminders</a>
              <a href="#"><img src={PlanningIcon} alt="Planning" /> Planning</a>
            </div>
          </li>
          <li>
            <a href="#">
              <img src={CompanyIcon} alt="Company" /> Company <span><i className="fas fa-chevron-down"></i></span>
            </a>
            <div className="dropdown-menu">
              <a href="#">History</a>
              <a href="#">Our Team</a>
              <a href="#">Blog</a>
            </div>
          </li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About</a></li>
    
        </ul>
      </nav>
      <div className="login">
        <a href="#">Login</a>
        <button><a href="#">Register</a></button>
     
      </div>
    </header>
  );
}

export default Navigation;










// import React from 'react';
// import Logo from './logo.svg';
// import './Navigation.css';

// function Navigation() {
//   return (
//     <header className="App-header">
//       <div className="Logo">
//         <img src={Logo} alt="Logo" />
//       </div>
//       <nav className="dropdown-content">
//         <ul>
//           <li>
//             <a href="#">Features</a>
//             <div className="dropdown-menu">
//               <a href="#">Todo List</a>
//               <a href="#">Calendar</a>
//               <a href="#">Reminders</a>
//               <a href="#">Planning</a>
//             </div>
//           </li>
//           <li>
//             <a href="#">Company</a>
//             <div className="dropdown-menu">
//               <a href="#">History</a>
//               <a href="#">Our Team</a>
//               <a href="#">Blog</a>
//             </div>
//           </li>
//           <li><a href="#">Careers</a></li>
//           <li><a href="#">About</a></li>
//         </ul>
//       </nav>
//       <div className="login">
//         <a href="#">Login</a>
//         <button><a href="#">Register</a></button>
//       </div>
//     </header>
//   );
// }

// export default Navigation;



