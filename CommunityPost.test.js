import CommunityPost from '../CommunityPost.js';
import User from '../User.js';

describe('CommunityPost Class', () => {
    test('CommunityPost constructor and methods', () => {
        const user = new User('test_user', 'password', 'test@example.com');
        const post = new CommunityPost(user, 'Test content');

        expect(post.author).toBe(user);
        expect(post.content).toBe('Test content');
        expect(post.createdAt instanceof Date).toBe(true);
        expect(post.likes).toBe(0);
        expect(post.comments.length).toBe(0);

        post.addLike();
        expect(post.likes).toBe(1);

        post.addComment(user, 'Test comment');
        expect(post.comments.length).toBe(1);
        expect(post.comments[0].user).toBe(user);
        expect(post.comments[0].comment).toBe('Test comment');
    });
});