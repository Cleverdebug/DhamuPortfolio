import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Connectzify',
        description: "Led the development of a web-based social media application encompassing features like posts comments, stories, and one-to-one chat. Integrated Socket.IO with Express JS on the server-side to manage connections, rooms, and message broadcasting. Implemented features like message history, typing indicators, and real-time notifications to enhance user engagement. used React JS , Express JS and MSSQL",
        tools: ['React JS', 'Express Js', 'MSSQL', 'Socket.io','Node mailer', 'Node JS','Material UI'],
        role: 'Full Stack  Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'SNQS',
        description: 'Led the development of a web-based application for Buying House management, designed and implemented front-end and back-end features, integrated APIs, ensured application security, and optimized performance.Used React JS, Express JS and MSSQL',
        tools: ['React JS', 'Express Js', 'MSSQL','Node JS', 'Material UI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'TOMS',
      description:'Led the development of synchronized mobile and web applications, designed and implemented features for Sales, Purchase, and Inventory Management, and provided team leadership, integrated with an existing Windows application. Used React JS, Express JS, React Native(Android ,IOS) and Managed deployment processes to App Store and Google Play Store, ensuring compliance with platform guidelines and optimizing app listings for visibility',
        tools: ['React Native', 'Express Js', 'MSSQL','Node JS'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Inspection On Go ',
        description:'Led the development of synchronized mobile and web applications, Inspect Garments Designed a robust synchronization process to automatically sync local data with a remote server when network connectivity is restored Implemented SQLite for storing inspection data locally, ensuring that the application remains fully functional without network access . Used React JS,React Native, Expo sqlite, Express JS and MSSQL',
        tools: ['React Native', 'Express Js', 'MSSQL','Node JS','ExpoSQLite'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Enquiry Tracker ',
        description:'Led the development of a chat application integrated with WhatsApp API, designed and implemented features for real-time communication and quotation sending.Successfully deployed the application, improving communication efficiency and enabling seamless quotation sharing for users.Used React Native(Android ,IOS) and Manageddeployment processes to App Store and Google Play Store, ensuring compliance with platform guidelines',
        tools: ['React Native', 'Express Js', 'MSSQL','Node JS','WhatsApp API','Socket.io'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },