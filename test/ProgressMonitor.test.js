import ProgressMonitor from '../src/ProgressMonitor.js';
import User from '../src/User.js';
import TrainingRecord from '../src/TrainingRecord.js';
import DietRecord from '../src/DietRecord.js';

describe('ProgressMonitor Class', () => {
    test('analyzeTrainingProgress with no records', () => {
        const user = new User('test_user', 'password', 'test@example.com');
        const progressMonitor = new ProgressMonitor(user, [], []);
        expect(progressMonitor.analyzeTrainingProgress()).toBe('No training records available for analysis.');
    });

    test('analyzeDietProgress with no records', () => {
        const user = new User('test_user', 'password', 'test@example.com');
        const progressMonitor = new ProgressMonitor(user, [], []);
        expect(progressMonitor.analyzeDietProgress()).toBe('No diet records available for analysis.');
    });

    test('getComprehensiveProgressReport', () => {
        const user = new User('test_user', 'password', 'test@example.com');
        const trainingRecord = new TrainingRecord(1, new Date('2025-02-20'), 60, 'weightlifting', 'Moderate', 3, 10);
        const dietRecord = new DietRecord(1, new Date('2025-02-20'), 'Breakfast', ['apple', 'banana'], [1, 2], 300);
        const progressMonitor = new ProgressMonitor(user, [trainingRecord], [dietRecord]);

        const trainingReport = progressMonitor.analyzeTrainingProgress();
        const dietReport = progressMonitor.analyzeDietProgress();
        const expectedReport = `Training Progress Report:\n${trainingReport}\n\nDiet Progress Report:\n${dietReport}`;

        expect(progressMonitor.getComprehensiveProgressReport()).toBe(expectedReport);
    });
});