// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some of my relevant projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Scientific Publication list",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Pinned Repo",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-casio-ct-s1-midi-controller",
          title: 'Casio CT-S1 Midi Controller',
          description: "Basic and raw Android app to contol some Midi functionalities of the Casio CT-S1 keyboard",
          section: "Projects",handler: () => {
              window.location.href = "/projects/casio_midi_controller/";
            },},{id: "projects-neural-network-laser-pointer-tracking",
          title: 'Neural Network Laser Pointer Tracking',
          description: "Detect (and practically track) in the ROS world a laser spot emitted from a common laser pointer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/laser_track/";
            },},{id: "projects-awesome-robotics-conferences-list",
          title: 'Awesome Robotics Conferences List',
          description: "An interactive table for choosing your next robotic-related conference or school.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/list/";
            },},{id: "projects-nicla-vision-ros",
          title: 'nicla_vision_ros',
          description: "ROS/ROS2 interface for the Arduino Nicla Vision board.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nicla_vision_ros/";
            },},{id: "projects-point-cloud2-filters",
          title: 'point_cloud2_filters',
          description: "Wrappers for some of the pcl filters ROS messages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pc_filter/";
            },},{id: "projects-humanoids24-poster",
          title: 'Humanoids24 Poster',
          description: "Poster for the Humanoids24 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_humanoids24/";
            },},{id: "projects-icra22-poster",
          title: 'ICRA22 Poster',
          description: "Poster for the ICRA22 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_icra/";
            },},{id: "projects-icra24-poster",
          title: 'ICRA24 Poster',
          description: "Poster for the ICRA24 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_icra24/";
            },},{id: "projects-irim22-poster",
          title: 'IRIM22 Poster',
          description: "Poster for the IRIM22 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_irim/";
            },},{id: "projects-iros22-poster",
          title: 'IROS22 Poster',
          description: "Poster for the IROS22 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_iros/";
            },},{id: "projects-phd-poster",
          title: 'PhD Poster',
          description: "A recap of my PhD in a poster",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poster_phd/";
            },},{id: "projects-ros-end-effector",
          title: 'ROS End-Effector',
          description: "A ROS-based set of standard interfaces to command robotics end-effectors in an agnostic fashion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rosee/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%6F%72%69%64%65%62%72%61%75%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/torydebra", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37089227580/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/davide-torielli-838298192", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9711-3006", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Davide_Torielli/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=KPZ7hz0AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57446004100", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.iit.it/it/people-details/-/people/davide-torielli", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@Belintoridebraus", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
