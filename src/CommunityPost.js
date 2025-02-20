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

module.exports = CommunityPost;