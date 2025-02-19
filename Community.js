/**
 * The Observer interface declares the update method, used by subjects.
 */
class Observer {
    /**
     * Receive update from subject.
     * @param {string} event - The event name.
     * @param {any} data - The data associated with the event.
     */
    update(event, data) {
        throw new Error('This method must be overridden!');
    }
}

/**
 * The Community class represents a community platform where users can interact, post, and share information.
 * Now it is also an observable subject.
 * @class Community
 */
class Community {
    /**
     * Creates a Community instance.
     * @constructor
     */
    constructor() {
        this.members = [];
        this.posts = [];
        this.observers = [];
    }

    /**
     * Adds a user to the community.
     * @param {User} user - The user object to be added to the community.
     */
    addMember(user) {
        if (!this.members.includes(user)) {
            this.members.push(user);
            this.notifyObservers('memberAdded', user);
        }
    }

    /**
     * Removes a user from the community.
     * @param {User} user - The user object to be removed from the community.
     */
    removeMember(user) {
        const index = this.members.indexOf(user);
        if (index!== -1) {
            this.members.splice(index, 1);
            this.notifyObservers('memberRemoved', user);
        }
    }

    /**
     * Checks if a user is a member of the community.
     * @param {User} user - The user object to check.
     * @returns {boolean} - Returns true if the user is a member, false otherwise.
     */
    isMember(user) {
        return this.members.includes(user);
    }

    /**
     * Creates a new post in the community.
     * @param {User} author - The user who creates the post.
     * @param {string} content - The content of the post.
     * @returns {CommunityPost} - The newly created post object.
     */
    createPost(author, content) {
        if (this.isMember(author)) {
            const post = new CommunityPost(author, content);
            this.posts.push(post);
            this.notifyObservers('postCreated', post);
            return post;
        }
        return null;
    }

    /**
     * Deletes a post from the community.
     * @param {CommunityPost} post - The post object to be deleted.
     */
    deletePost(post) {
        const index = this.posts.indexOf(post);
        if (index!== -1) {
            this.posts.splice(index, 1);
            this.notifyObservers('postDeleted', post);
        }
    }

    /**
     * Gets all the posts in the community.
     * @returns {CommunityPost[]} - An array of all post objects in the community.
     */
    getAllPosts() {
        return this.posts;
    }

    /**
     * Adds an observer to the community.
     * @param {Observer} observer - The observer object to be added.
     */
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    /**
     * Removes an observer from the community.
     * @param {Observer} observer - The observer object to be removed.
     */
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index!== -1) {
            this.observers.splice(index, 1);
        }
    }

    /**
     * Notifies all observers about an event.
     * @param {string} event - The event name.
     * @param {any} data - The data associated with the event.
     */
    notifyObservers(event, data) {
        this.observers.forEach(observer => {
            observer.update(event, data);
        });
    }
}

/**
 * The CommunityPost class represents a post in the community.
 * @class CommunityPost
 */
class CommunityPost {
    /**
     * Creates a CommunityPost instance.
     * @constructor
     * @param {User} author - The user who creates the post.
     * @param {string} content - The content of the post.
     */
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.createdAt = new Date();
        this.likes = 0;
        this.comments = [];
    }

    /**
     * Adds a like to the post.
     */
    addLike() {
        this.likes++;
    }

    /**
     * Adds a comment to the post.
     * @param {User} user - The user who comments on the post.
     * @param {string} comment - The content of the comment.
     */
    addComment(user, comment) {
        this.comments.push({ user, comment });
    }

    /**
     * Gets the details of the post.
     * @returns {string} - A string containing details of the post, including author, content, likes, and comments.
     */
    getPostDetails() {
        let commentInfo = "";
        this.comments.forEach(({ user, comment }) => {
            commentInfo += `${user.username}: ${comment}\n`;
        });

        return `Author: ${this.author.username}\n` +
            `Content: ${this.content}\n` +
            `Created At: ${this.createdAt.toLocaleString()}\n` +
            `Likes: ${this.likes}\n` +
            `Comments:\n${commentInfo}`;
    }
}

export { Community, CommunityPost, Observer };