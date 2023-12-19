import React from "react";
import { projects } from "../../data";
import ProjectItems from "./ProjectItems";
import "./Project.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Project = () => {
  return (
    <motion.section
      className="project Work"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2 className="section_title" variants={textVariants}>
        My <span>Projects</span>
      </motion.h2>

      <div className="project_container container">
        <motion.div className="row">
          {projects.map((item) => (
            <div key={item.id} className="col-md-4">
              <ProjectItems {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;


// import React from "react";
// import "./Work.scss";
// import Project1 from "../../Img/Project1.png";
// import Project2 from "../../Img/Project2.png";
// import Project3 from "../../Img/Project3.png";
// import Project4 from "../../Img/Project4.png";
// import Project5 from "../../Img/Project5.png";
// import Project6 from "../../Img/Project6.png";
// import Project7 from "../../Img/Project7.png";
// import Project8 from "../../Img/Project8.png";
// import Project9 from "../../Img/Project9.png";
// import Project10 from "../../Img/Project10.png";
// import Project11 from "../../Img/Project11.jpg";

// const Work = () => {
//   return (
//     <div className="Work container-md">
//       <div className="titleContainer">
//         <h1>My Works</h1>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project1} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <modiv className="workDes">
//             <h3>Tic-Tac-Toe Game</h3>
//             <p>
//               Tic Tac Toe is a classic two-player game where opponents take
//               turns marking a 3x3 grid with their symbol, aiming to form a line
//               of three of their symbols vertically, horizontally, or diagonally
//               to win.
//             </p>
//           </modiv>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project2} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>To-Do List App</h3>
//             <p>
//               A to-do list app lets you easily organize tasks and stay on top of
//               your priorities by adding, editing, and deleting tasks with
//               simplicity and efficiency.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project3} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Pokedex App</h3>
//             <p>
//               Pokedex app: Your ultimate pocket guide to explore and identify
//               many Pokémon species, with detailed information and stats at your
//               fingertips.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project4} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Quiz App</h3>
//             <p>
//               Test your knowledge against the clock! Answer questions with 4
//               options in 30 seconds. Score points for correct answers, and see
//               your earned score if you choose incorrectly.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project5} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Food Reciepe App</h3>
//             <p>
//               This is Food Recipe App that allows users to search for recipes by
//               typing the name of the food or selecting the first letter from the
//               keyboard.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project6} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>News Monkey App</h3>
//             <p>
//               NewsMonkey is a news app that provides top general headlines in a
//               user-friendly interface.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project7} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Music Player</h3>
//             <p>
//               This is a Music Player app that allows users to listen to their
//               favorite songs. It has a sleek and modern design.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project8} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>CRUD Form App</h3>
//             <p>
//               This is a Form App created using CRUD methods and API.The page has
//               an Add user button.It has a table with fields for Name, Email,
//               Password and Contact no. The table has edit, view and remove
//               buttons. The table has pagination to go to specific pages.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project9} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Note App</h3>
//             <p>
//               Note App is a versatile task management app that allows users to
//               easily create, store, and organize their tasks. Users can add,
//               delete, archive, and restore tasks, making it a convenient tool
//               for efficient task management and organization.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project10} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Gme Dashboard</h3>
//             <p>
//               Explore a world of gaming at your fingertips with our
//               game-dashboard app. Dive into the Home section for detailed game
//               information, navigate through Categories to find and organize your
//               favorites, curate your Library with liked games, and keep track of
//               your gaming wishlist in the Bag.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="workImg">
//             <img src={Project11} alt="" />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="workDes">
//             <h3>Movie App</h3>
//             <p>
//               Explore a cinematic universe at our movies and TV shows hub,
//               featuring a user-friendly search bar. Immerse yourself in each
//               film with trailers, director and writer details, ratings, and cast
//               information. Discover the latest trends, popular picks, and
//               top-rated gems for an unparalleled entertainment experience.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
