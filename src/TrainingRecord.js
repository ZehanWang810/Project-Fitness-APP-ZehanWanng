const Record = require('./Record.js');
/**
 * The TrainingRecord class represents a user's training record.
 * It extends the Record class to inherit common properties and methods.
 * @class TrainingRecord
 */
class TrainingRecord extends Record {
    /**
     * Creates a TrainingRecord instance.
     * @constructor
     * @param {number} recordId - The unique identifier for the training record.
     * @param {Date} trainingDate - The date of the training.
     * @param {number} duration - The duration of the training (in hours or minutes).
     * @param {string} exerciseType - The type of exercise, such as "weightlifting", "running", "yoga", etc.
     * @param {string} intensity - The intensity of the training, with values like "Light", "Moderate", "Intense".
     * @param {number} sets - The number of sets for strength - training exercises.
     * @param {number} reps - The number of repetitions per set for strength - training exercises.
     */
    constructor(recordId, trainingDate, duration, exerciseType, intensity, sets, reps) {
        super(recordId, trainingDate);
        this.duration = duration;
        this.exerciseType = exerciseType;
        this.intensity = intensity;
        this.sets = sets;
        this.reps = reps;
    }

    /**
     * Gets the detailed information of the training record.
     * @returns {string} - A string containing all the information of the training record.
     */
    getTrainingDetails() {
        const basicInfo = this.getBasicInfo();
        return `${basicInfo}\n` +
            `Training Duration: ${this.duration} minutes\n` +
            `Exercise Type: ${this.exerciseType}\n` +
            `Training Intensity: ${this.intensity}\n` +
            `Number of Sets: ${this.sets}\n` +
            `Repetitions per Set: ${this.reps}`;
    }
}

module.exports = TrainingRecord;