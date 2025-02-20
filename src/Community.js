/**
 * The Community class represents a community platform where users can interact, post, and share information.
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
    }

    /**
     * Adds a user to the community.
     * @param {User} user - The user object to be added to the community.
     */
    addMember(user) {
        if (!this.members.includes(user)) {
            this.members.push(user);
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
            const CommunityPost = require('./CommunityPost.js');
            const post = new CommunityPost(author, content);
            this.posts.push(post);
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
        }
    }

    /**
     * Gets all the posts in the community.
     * @returns {CommunityPost[]} - An array of all post objects in the community.
     */
    getAllPosts() {
        return this.posts;
    }
}

module.exports = Community;