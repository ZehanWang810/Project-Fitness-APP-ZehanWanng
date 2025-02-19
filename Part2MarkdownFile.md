1. Singleton Pattern
class ReminderNotification {
    /**
     * Singleton instance
     * @type {ReminderNotification}
     * @private
     */
    static #instance;

    /**
     * Array to store reminder tasks
     * @type {Array}
     */
    reminders = [];

    /**
     * Private constructor to prevent direct instantiation
     * @constructor
     * @private
     */
    constructor() {
        if (ReminderNotification.#instance) {
            return ReminderNotification.#instance;
        }
        ReminderNotification.#instance = this;
    }

    /**
     * Static method to get the singleton instance
     * @returns {ReminderNotification}
     */
    static getInstance() {
        if (!ReminderNotification.#instance) {
            ReminderNotification.#instance = new ReminderNotification();
        }
        return ReminderNotification.#instance;
    }

    // Other methods...
}

// Example usage
const reminderInstance1 = ReminderNotification.getInstance();
const reminderInstance2 = ReminderNotification.getInstance();

console.log(reminderInstance1 === reminderInstance2); // Output: true



Why is this a good application of object-oriented programming (OOP)?

Encapsulation:
The singleton pattern encapsulates the instantiation process of the class by making the constructor private (using the private static property #instance). External code cannot directly create a new instance of ReminderNotification using the new keyword. It can only obtain the unique instance through the getInstance method. This way, the internal implementation details are hidden, preventing external code from accidentally creating multiple instances.

Single Responsibility Principle:
The main responsibility of the ReminderNotification class is to manage reminder tasks. The singleton pattern ensures that there is only one instance to manage these tasks, avoiding the confusion in task management that may be caused by multiple instances. Each instance focuses only on its core responsibility.

Global Access Point:
The singleton pattern provides a global access point. Through the getInstance method, any code that needs to use the reminder function can conveniently obtain the unique instance of ReminderNotification, thereby accessing and operating the reminder tasks.

Hypothetical examples that may violate these concepts

Violation of Encapsulation
If the constructor is made public, external code can directly create multiple instances, thus violating the encapsulation of the singleton pattern.

class BadReminderNotification {
    reminders = [];

    constructor() {}

    // Other methods...
}

//External code can directly create multiple instances.
const badInstance1 = new BadReminderNotification();
const badInstance2 = new BadReminderNotification();

console.log(badInstance1 === badInstance2); // Output: false


2. Constructor Pattern
/**
 * The User class represents a user in the system.
 * @class User
 */
class User {
    /**
     * Creates a User instance.
     * @constructor
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     * @param {string} email - The email address of the user.
     */
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

export default User;


Why is this a good application of object-oriented programming (OOP)?

Encapsulation: 
The constructor encapsulates the process of initializing the User object. It clearly defines the necessary data (username, password, and email) that a User object should have. This way, the internal state of the User object is protected and can only be accessed and modified through appropriate methods (although not shown fully in this simple example, the concept is there).

Abstraction: 
The User class provides an abstract representation of a user in the system. By using the constructor, we can create multiple User objects without having to worry about the internal implementation details of how the object is initialized.

Hypothetical Examples That Would Break Each Concept

Breaking Encapsulation
If we were to directly access and modify the internal properties of the User object without using the constructor or appropriate methods, it would break encapsulation.

const user = new User("test_user", "test_password", "test@example.com");
// Breaking encapsulation by directly modifying the property
user.username = "new_username"; 


3. Observer Pattern 
code is in Community.js

Why is this a good application of Object-Oriented Programming (OOP)?
Encapsulation
In the Community class, the observers array is a private member (implemented through JavaScript closures), and it cannot be directly accessed or modified from the outside. The addObserver, removeObserver, and notifyObservers methods provide controlled access to the observers array, encapsulating the internal state and behavior.
In the Observer class, the update method is an abstract method that defines an interface. Specific observer classes need to implement this method, encapsulating the update behavior of the observers.
Inheritance
Although there is no explicit inheritance relationship in the code, the Observer class can serve as a base class. Other specific observer classes can inherit from the Observer class and implement the update method. This way, code reuse and extension can be achieved.
Polymorphism
The notifyObservers method of the Community class notifies all observers by calling the observer.update(event, data) method. Here, the observer can be any object that implements the Observer interface, which reflects polymorphism. Different observer classes can have different implementations of the update method. The Community class does not need to know the specific implementation details and only needs to call the unified interface.

Hypothetical examples of breaking these concepts
Breaking encapsulation

// Suppose the `observers` array of the Community class is directly accessed.
const community = new Community();
const observer = new Observer();
community.addObserver(observer);

// Directly modifying the `observers` array breaks encapsulation.
community.observers = [];

In this example, the external code directly modifies the `observers` array of the Community class, bypassing the `addObserver` and `removeObserver` methods, which breaks encapsulation.




GenAI Resources
Doubao (ByteDance's language model) was used in the process of writing this project.

Prompt Usage:
Please help me write the required js file through the pdf of Part1.
Are there any applications in the code that include the pillars of OOP?
Does the code contain SOLID Principles?
Please help me find the design patterns in the code
Please help me write hypothetical examples that break down each concept
Please help me write test file