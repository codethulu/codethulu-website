
const projectsList = [
    {
        name: "The Chamber",

        description: "The Chamber is a procedurally generated dungeon crawler with pathfinding enemies, over 1000 hand drawn sprites and over 100 unique items. Each level of the infinitly sprawling dungeon has a procedurally generated floor plan: each with its own random layout, connections, and aesthetic. Enemies, friendly NPCs, and chests full of useful loot can randomly spawn. Beating enemies and exploring the dungeon help level the player up, which allows them to increase their stats using the skill tree. These stat increasements can aid the player in beating the boss that resides at the end of each floor.",
        tags: ["python", "pathfinding", "games", "favourites"],
        image: "chamber",
    },
    {
        name: "Robot Maze",

        description: "I created a pathfinding controller to guide a robot through a randomly generated maze. This project was written in java and made use of my research into pathfinding algorithms such as djikstra and the A* algorithm. ",
        tags: ["java", "pathfinding"],
        image: "robot-maze",

    },
    {
        name: "Large Arithmetic Collider",

        description: "The Large Arithmetic Collider is a complex puzzle that involved rotating, transposing and manipulating lists in haskell. I wrote my own tree structure to consider the different decisions in order to solve the puzzle as efficiently as possible.",
        tags: ["haskell", "functional", "favourites"],
        image: "ldc",

    },
    {
        name: "Ncurses Text Editor",
        description: "I created a text editor written in C using the ncurses library in order to deliver a text-user-interface to allow the user to navigate through menus. I added the functionality to scroll, manipulate files and copy and paste within files.",
        tags: ["c"],
        image: "ncurses",
    },
    {
        name: "How should society adapt to the autonomy of labour?",
        description: "An essay contemplating the future of automation in the workplace and possible reactions society might take.",
        tags: ["essay"],
        image: "essay",
    },
    {
        name: "Investigating security vulnerabilities in Linux",
        description: "An investigation into linux security, where I identified possible security errors in a linux filesystem and webserver.",
        tags: ["linux"],
        image: "security-linux",
    },
    {
        name: "SYTES: A task managing web app",
        description: "SYTES is a task managing application, where users can create and log into accounts and create their own 'syte' which contains a number of tasks the user has created. Users can invite other people to their 'syte', sort their tasks, and send email notifications.",
        tags: ["html", "css", "javascript", "SQL", "PHP", "web-dev"],
        image: "sytes",
    },
    {
        name: "Scratch Clone",

        description: "Scratch is a high-level visual programming langauge that uses draggable blocks to form procedures. Using Haskell I wrote a back end to interpret blockly blocks. Users of the program can assemble a simple program by dragging blocks to perform arithmetic on values stored in the memory of the program.",
        tags: ["haskell", "functional"],
        image: "scratch-clone",

    },
    {
        name: "WAFFLES: A data structure project",

        description: "A project that emphasised the application of data structures and sorting algorithms content I had learnt at University. The backend for a restaurant review website I wrote utilised AVL trees, binary searches and hashmaps to efficiently store and locate data for the system.",
        tags: ["java"],
        image: "waffles",

    },
    {
        name: "Personal Website 1.0",

        description: "The first iteration of my personal website. I wrote this first iteraton in plain html, css and javascript.",
        tags: ["html", "css", "javascript", "web-dev"],
        image: "old-website",

    },
    {
        name: "Warwick Labour Website Redesign",

        description: "I created a new website for a society at my university. The previous design was created in wordpress and was in much need of a redesign. Using react and typescript I created a flat, modern, simple redesign for the society.",
        tags: ["typescript", "react", "web-dev"],
        image: "warwick-labour-website",

    },
    {
        name: "Multithreaded packet sniffer",

        description: "A multithreaded packet sniffer that applies my packet structure knowledge and threading methods to produce a basic intrusion detection system. The program sniffs packets and informs the user if it detects ARP cache poisoning, SYN flooding or a blacklisted URL.",
        tags: ["c", "favourites"],
        image: "../images/projects/robot-maze.png",

    },
    {
        name: "SQL Gig Scheduler",

        description: "In this project I was tasked to write the SQl queries required for a music production company to book acts for an upcoming festival. This involved designing a system and displaying the appropriate data required to schedule, remove and get information about gigs.",
        tags: ["postgresql", "sql", "java"],
        image: "../images/projects/robot-maze.png",

    },
    {
        name: "Ursina Elements",

        description: "A simple minecraft clone written in python. The player may move, place and destroy blocks, and combine items in their inventory (inspired by the main mechanic in little alchemy) to unlock new building materials. ",
        tags: ["python"],
        image: "ursina-elements",

    },
    {
        name: "GO Tools",

        description: "An app built for a niche board game called GO. The app allows the user to quickly convert between the different currencies, and calculate the cost of journeys between cities easily without having to consult the paper guide.",
        tags: ["swift", "app-dev"],
        image: "go-tools",

    },
    {
        name: "AI Timetable Scheduler",

        description: "Using artificial intelligence concepts and techniques, such as backtracking and simulated annealing, I created the methods required to create valid timetables matching comedians to demographics that they would appeal to.",
        tags: ["python", "ai"],
        image: "ai-timetable",

    },
    {
        name: "Hurdle",

        description: "A haskell implementation of the hit game Wordle. The player must guess a word, and each letter will be highlighted green if it is in the correct place, amber if it exists in the word but incorectly placed, or grey if not present at all.",
        tags: ["haskell", "functional"],
        image: "hurdle",

    },
    {
        name: "Personal Website 2.0",

        description: "The second iteration of my personal website. The layout is largely similar however since writing this version I have learnt more about React and efficient web design, so I have since moved on from this design.",
        tags: ["typescript", "react", "web-dev"],
        image: "website2",

    },
    {
        name: "Mentor Connect",

        description: "Mentor Connect is a web application that matches mentees to mentors based on heuristics obtained through machine learning. This project was undertaken as part of a group for Deutsche Bank, and allowed me to implement complex methods in django, to be deployed for the front end.",
        tags: ["typescript", "react", "web-dev", "python", "django", "postgresql", "sql"],
        image: "mentor-connect",

    },
    {
        name: "Writing a Parser for a PLM",

        description: "Using javacc, I wrote a parser for a Programming Language of the Moment. The parser has protected keywords, rules for matching brackets and a grammar that the language should follow. This project allowed me to apply theory I have enjoyed learning in my degree in a practical way.",
        tags: ["java", "parser", "javacc"],
        image: "parser",

    },

]
export default projectsList;