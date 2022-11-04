/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Skills Section
import { faPython, faSass, faHtml5, faCss3, faJs, faReact, faNodeJs, faNpm, } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud, faMicrochip, faPieChart } from '@fortawesome/free-solid-svg-icons';


const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    // skills: [
    //     emoji(
    //         "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    //     ),
    //     emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    //     emoji(
    //         "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    //     )
    // ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */


    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: faHtml5
        },
        {
            skillName: "sass",
            fontAwesomeClassname: faSass
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: faJs
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: faReact
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: faNodeJs
        },
        {
            skillName: "npm",
            fontAwesomeClassname: faNpm
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: faDatabase
        },
        {
            skillName: "GCP",
            fontAwesomeClassname: faCloud
        }
    ],

    softwareSkillsml: [
        {
            skillName: "python",
            fontAwesomeClassname: faPython
        },
        {
            skillName: "Machine Learning",
            fontAwesomeClassname: faMicrochip
        },
        {
            skillName: "Data Analytics",
            fontAwesomeClassname: faPieChart
        }
    ],



    display: true // Set false to hide this section, defaults to true
};

export {

    skillsSection,

};