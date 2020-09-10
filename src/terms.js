const terms = [
    {
        id: 1,
        name: "Callback",
        description: "A callback is a function that is to be executed after another function (normally asynchronous) has finished executing — hence the name ‘call back’.",
        benefits: ["Allows for actions to be taken that require previous action to have been taken, and avoids the 'call back' being called too early."],
        disadvantages: ["When scaled, can lead to the code becoming hard to read, and hard to debug."],
        layman: "A Barista is making a coffee, they have two actions: make the coffee & serve the coffee. They don't want to serve the coffee before it's made, therefore make the serving of the coffee an action that can only be taken once the coffee is made."
    },
    {
        id: 2,
        name: "Encapsulation",
        description: "Encapsulation is the restricting of direct access to an object's components.",
        benefits: [
                "Protects an object from unwanted access by users", 
                "Simplifies the code, making it easier to read & maintain"
             ],
        disadvantages: [
            "Difficult to reuse code",
            "Contradicts other coding priciples such as Inheritance"],
        layman: ""
    },
    {
        id: 3,
        name: "Concurrency",
        description: "Concurrency is when two tasks overlap in execution. In programming, these situations are encountered: When two processes are assigned to different cores on a machine by the kernel, and both cores execute the process instructions at the same time. When more connections arrive before earlier connections are finished, and need to be handled immediately.",
        benefits: ["Reduce waiting and/or reponse times", "Increases resource utilzation"],
        disadvantages: [
            "Can lead to errors if actions require other actions to have taken place before being able to be exectued effectivley"
        ],
        layman: "A waiter takes an order to the kitchen. Instead of waiting for that order to be complete, they are able to take another order and the kitchen are able to handle both orders at the same time, rather than waiting for one to be complete before moving on to the next one"
    },
    {
        id: 4,
        name: "Inheritance",
        description: "Inheritance is the process of giving one or many objects/classes the same properties as a 'parent' object/class",
        benefits: ["Code is shorter and more readable", "Implementing new functionality to similar objects/classes can be done once, rather than for each"],
        disadvantages: ["Objects/classes can have unused functionality", "As an application grows, previous inheritance can become redundant and make code difficult to read"],
        layman: ""
    },
    {
        id: 5,
        name: "Open-close principle",
        description: "The Open-close principle is the concept of whether software 'entities' should be open to extension, or closed to modification",
        benefits: [],
        disadvantages: [],
        layman: ""
    },
    {
        id: 6,
        name: "Continuous Integration",
        description: "Continuous Integration is a practice of regularly merging 'working' branches of code into the live version, rather than waiting for scheduled released dates",
        benefits: ["New features get released faster", "Increased team transparency and responsibility", "Easier maintenance/debuggin"],
        disadvantages: ["Higher chance of errors being put into production", "Requires greater business coordination inorder to be effective"],
        layman: ""
    },
    {
        id: 7,
        name: "Polymorphism",
        description: "Polymorphism is the ability of an object to take many forms",
        benefits: ["Makes code reusable", "Single variable name can be used to store variables of multiple data types(Float, double, Long, Int etc)."],
        disadvantages: ["Reduces the readability of the program as one needs to identify the runtime behavior of the program to identify actual execution time.", "Developers find it difficult to implement polymorphism in codes."],
        layman: "A human can take many forms, but all will be human, and share core charecteristics (arms, face, etc.)"
    },
    {
        id: 8,
        name: "HTTPS (Hypertext Transfer Protocol Secure)",
        description: "HTTPS is HTTP with with encryption. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL)",
        benefits: ["Ensures that the connection cannot be hacked"],
        disadvantages: [],
        layman: ""
    },
    {
        id: 9,
        name: "HTTP (Hypertext Transfer Protocol)",
        description: "HTTP is an application protocol that forms the foundation for communication on the World Wide Web",
        benefits: [],
        disadvantages: [],
        layman: ""
    },
    {
        id: 10,
        name: "SSL Certificate (Secure Sockets Layer)",
        description: "SSL Certificates are small data files that digitally bind a cryptographic key to an organization's details. When installed on a web server, it activates the padlock and the https protocol and allows secure connections from a web server to a browser.",
        benefits: [],
        disadvantages: [],
        layman: "An ID card proves that the people talking are who they are"
    },
]

module.exports = terms