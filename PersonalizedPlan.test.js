import PersonalizedPlan from '../PersonalizedPlan.js';
import User from '../User.js';
import TrainingRecord from '../TrainingRecord.js';
import DietRecord from '../DietRecord.js';
import { createInterface } from 'readline';

// 模拟 readlineSync.question 函数
const readlineSync = {
    question: jest.fn()
};

describe('PersonalizedPlan Class', () => {
    test('getUserGoal valid input', () => {
        readlineSync.question.mockReturnValueOnce('Muscle Gain');
        const user = new User('test_user', 'password', 'test@example.com');
        const personalizedPlan = new PersonalizedPlan(user, [], []);
        expect(personalizedPlan.getUserGoal()).toBe('Muscle Gain');
    });

    test('generateTrainingPlan', () => {
        readlineSync.question.mockReturnValueOnce('Muscle Gain');
        const user = new User('test_user', 'password', 'test@example.com');
        const personalizedPlan = new PersonalizedPlan(user, [], []);
        expect(personalizedPlan.generateTrainingPlan()).toBe('Conduct 3 - 4 strength - training sessions per week, including exercises for large muscle groups such as chest, back, and legs, with each session lasting 60 - 90 minutes.');
    });

    test('generateDietPlan', () => {
        readlineSync.question.mockReturnValueOnce('Muscle Gain');
        const user = new User('test_user', 'password', 'test@example.com');
        const personalizedPlan = new PersonalizedPlan(user, [], []);
        expect(personalizedPlan.generateDietPlan()).toBe('Increase the intake of protein, such as chicken breast, eggs, and milk, while ensuring an adequate intake of carbohydrates and healthy fats.');
    });

    test('getFullPersonalizedPlan', () => {
        readlineSync.question.mockReturnValueOnce('Muscle Gain');
        const user = new User('test_user', 'password', 'test@example.com');
        const personalizedPlan = new PersonalizedPlan(user, [], []);
        const trainingPlan = personalizedPlan.generateTrainingPlan();
        const dietPlan = personalizedPlan.generateDietPlan();
        const expectedPlan = `Personalized Training Plan:\n${trainingPlan}\n\nPersonalized Diet Plan:\n${dietPlan}`;
        expect(personalizedPlan.getFullPersonalizedPlan()).toBe(expectedPlan);
    });
});