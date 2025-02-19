/**
 * The CommunityPost class represents a post in the community.
 * It is used to manage information related to a post, such as its author, content, likes, and comments.
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
        // The user who created the post
        this.author = author;
        // The content of the post
        this.content = content;
        // The creation time of the post
        this.createdAt = new Date();
        // The number of likes for the post, initially 0
        this.likes = 0;
        // An array to store comments on the post
        this.comments = [];
    }

    /**
     * Adds a like to the post.
     * Increments the like count of the post by 1.
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
     * @returns {string} - A string containing details of the post, including author, content, creation time, likes, and comments.
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

export default CommunityPost;