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