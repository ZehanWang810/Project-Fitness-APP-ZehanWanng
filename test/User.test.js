const User = require('../src/User.js');

test('User class constructor initializes properties correctly', () => {
    const user = new User('testUser', 'testPassword', 'test@example.com');
    expect(user.username).toBe('testUser');
    expect(user.password).toBe('testPassword');
    expect(user.email).toBe('test@example.com');
});