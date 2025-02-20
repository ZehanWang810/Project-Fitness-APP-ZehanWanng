/**
 * The UserManagement class is responsible for handling user - related management operations,
 * such as user creation, login, and information update.
 * @class UserManagement
 */
const User = require('./User.js');

class UserManagement {
    /**
     * Creates a UserManagement instance.
     * @constructor
     */
    constructor() {
        // Array to store user objects
        this.users = [];
    }

    /**
     * Creates a new user.
     * @param {string} username - The username of the new user.
     * @param {string} password - The password of the new user.
     * @param {string} email - The email of the new user.
     * @returns {User | null} - Returns the newly created User object if successful, or null if the username already exists.
     */
    createUser(username, password, email) {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
            return null;
        }
        const newUser = new User(username, password, email);
        this.users.push(newUser);
        return newUser;
    }

    /**
     * Allows a user to log in.
     * @param {string} username - The username of the user attempting to log in.
     * @param {string} password - The password of the user attempting to log in.
     * @returns {User | null} - Returns the User object if the login is successful, or null if the credentials are incorrect.
     */
    loginUser(username, password) {
        const user = this.users.find(user => user.username === username && user.password === password);
        return user || null;
    }

    /**
     * Updates user information.
     * @param {User} user - The User object whose information is to be updated.
     * @param {Object} newInfo - An object containing the new information to update. For example: { email: 'new@example.com' }.
     * @returns {boolean} - Returns true if the update is successful, false otherwise.
     */
    updateUserInfo(user, newInfo) {
        const index = this.users.indexOf(user);
        if (index!== -1) {
            this.users[index] = {
               ...this.users[index],
               ...newInfo
            };
            return true;
        }
        return false;
    }

    /**
     * Deletes a user.
     * @param {User} user - The User object to be deleted.
     * @returns {boolean} - Returns true if the deletion is successful, false otherwise.
     */
    deleteUser(user) {
        const index = this.users.indexOf(user);
        if (index!== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Gets all users.
     * @returns {User[]} - An array of all User objects.
     */
    getAllUsers() {
        return this.users;
    }
}


module.exports = UserManagement;