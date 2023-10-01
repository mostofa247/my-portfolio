/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Mostofa",
  logo_name: "Mostofa()",
  nickname: "Mostofa / Sakib",
  full_name: "Md Mostofa Kamal",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1DH1-xRrsl9TX3JvujfPot8x2yJH5f4vf/view?usp=sharing",
  mail: "mdmostofakamal5596@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mostofa247",
  linkedin: "https://www.linkedin.com/in/md-mostofa-kamal-0884b11aa/",
  gmail: "mdmostofakamal5596@gmail.com",

  facebook: "https://www.facebook.com/profile.php?id=100036697402595",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Redux",
        "⚡ Developing mobile applications using React native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Developer Associate and Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by Udemy and Stanford Online",
        "⚡ Experience with 3+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Daffodil International University",
      subtitle: "BSC. in Software Engineering",
      logo_path: "diu.png",
      alt_name: "diu",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have studied core subjects like Software Architecture, Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Software Engineering course. ",
      ],
      website_link: "https://www.daffodilvarsity.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics on AWS",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://coursera.org/share/f77a04f2c185cdaa336f67ffd45aca42",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Python (Basic) Certificate",
      subtitle: "Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/74dd54bb46f4",
      alt_name: "Hackerrank",
      color_code: "#e1fba2",
    },
    {
      title: "React (Basic) Certificate",
      subtitle: "Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/5265caa85e5a",
      alt_name: "Hackerrank",
      color_code: "#e1fba2",
    },
    {
      title: "Data Science Course",
      subtitle: "Udemy",
      logo_path: "udmey.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-68c165d7-a1b4-4197-bc48-f6807ee35a84/",
      alt_name: "Udemy",
      color_code: "#eee3e0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Mern Stack Developer",
          company: "Upwork",
          company_url: "",
          logo_path: "upwork.png",
          duration: "June 2022 - running",
          location: "Freelancer",
          description: "Mern stack developer",
          color: "#2962FF",
        },
        {
          title: "Full Stack Developer",
          company: "Fiverr",
          company_url: " ",
          logo_path: "fi.png",
          duration: "2020-2022",
          location: "Freelancer",
          description: "As a freelancer full stack developer",
          color: "#800000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Childo Education Research and Development Foundation",
          company_url:
            "https://drive.google.com/file/d/1beWBfJZXYGlBRB0UDZfyerSBgmNg2YBG/view?usp=sharing",
          logo_path: "internshala.png",
          duration: "September 2020",
          location: "Remote",
          description: "Teaching (Frontend Web Development)",
          color: "#56A4D3",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Daffodil International University Volunteerships",
          company: "",
          company_url: "",
          logo_path: "diu.png",
          duration: "2020 - 2021",
          location: " ",
          description:
            "Mentorship responsibilities were to help students plan.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mostofakamal.jpg",
    resumeLink:
      "https://drive.google.com/file/d/1DH1-xRrsl9TX3JvujfPot8x2yJH5f4vf/view?usp=sharing",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Doctor Portal",
      url: "https://github.com/mostofa247/Doctor-Appointment-System.git",
      description: "Doctor Appointment System",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Pos System",
      url: "https://github.com/mostofa247/super-shop-mern-project.git",
      description: "Mern stack Pos System Application",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Robotics Lab Website",
      url: "https://github.com/mostofa247/Robotic-Lab-Website.git",
      description: "Robotics Lab Application using mern stack",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Book Shop Website",
      url: "https://github.com/mostofa247/book-shop-mern-stack-project.git",
      description: "Book Shop web Application",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Data Science Project",
      url: "https://github.com/mostofa247/Machine-Learning-Project.git",
      description: "Some data science related Project here",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Air Agency Website",
      url: "https://github.com/mostofa247/air-portfolio.git",
      description: "Air Agency Website using ReactJs",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
      ],
    },
    {
      name: "Social Media Web Application",
      url: "https://github.com/mostofa247/Django-social-media-project.git",
      description: "Social Media web application using python django",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      name: "Ecommerce Web App",
      url: "https://github.com/mostofa247/E-commerce-Django-project.git",
      description: "Ecommerce web application using python and django",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
