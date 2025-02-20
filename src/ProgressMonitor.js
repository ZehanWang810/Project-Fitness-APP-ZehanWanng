/**
 * The ProgressMonitor class is used to monitor and analyze a user's progress in fitness and diet.
 * @class ProgressMonitor
 */
class ProgressMonitor {
    /**
     * Creates a ProgressMonitor instance.
     * @constructor
     * @param {User} user - The user object whose progress is to be monitored.
     * @param {TrainingRecord[]} trainingRecords - Array of the user's training records over time.
     * @param {DietRecord[]} dietRecords - Array of the user's diet records over time.
     */
    constructor(user, trainingRecords, dietRecords) {
        // The user object for whom progress is being monitored
        this.user = user;
        // Array to store the user's training records
        this.trainingRecords = trainingRecords;
        // Array to store the user's diet records
        this.dietRecords = dietRecords;
    }

    /**
     * Analyzes the user's training progress.
     * Checks for changes in training duration, intensity, and frequency over time.
     * @returns {string} - A summary of the training progress analysis.
     */
    analyzeTrainingProgress() {
        if (this.trainingRecords.length === 0) {
            return "No training records available for analysis.";
        }

        let averageDuration = 0;
        let averageIntensity = 0;
        let totalRecords = this.trainingRecords.length;

        for (let record of this.trainingRecords) {
            averageDuration += record.duration;
            if (record.intensity === "Light") {
                averageIntensity += 1;
            } else if (record.intensity === "Moderate") {
                averageIntensity += 2;
            } else if (record.intensity === "Intense") {
                averageIntensity += 3;
            }
        }

        averageDuration /= totalRecords;
        averageIntensity /= totalRecords;

        let progressSummary = `Average training duration: ${averageDuration} minutes.\n`;
        if (averageIntensity < 1.5) {
            progressSummary += "Your training intensity has been relatively light on average. Consider increasing it for better results.";
        } else if (averageIntensity < 2.5) {
            progressSummary += "Your training intensity is moderate on average. Keep up the good work.";
        } else {
            progressSummary += "Your training intensity has been high on average. Make sure to balance it with proper rest.";
        }

        return progressSummary;
    }

    /**
     * Analyzes the user's diet progress.
     * Checks for changes in calorie intake and food variety over time.
     * @returns {string} - A summary of the diet progress analysis.
     */
    analyzeDietProgress() {
        if (this.dietRecords.length === 0) {
            return "No diet records available for analysis.";
        }

        let totalCalories = 0;
        let foodVariety = new Set();
        let totalRecords = this.dietRecords.length;

        for (let record of this.dietRecords) {
            totalCalories += record.totalCalories;
            for (let food of record.foods) {
                foodVariety.add(food);
            }
        }

        let averageCalories = totalCalories / totalRecords;
        let varietySummary = `You have consumed an average of ${averageCalories} calories per meal. `;
        if (foodVariety.size < 10) {
            varietySummary += "Consider increasing the variety of foods in your diet for better nutrition.";
        } else {
            varietySummary += "Your diet has a good variety of foods, which is beneficial for balanced nutrition.";
        }

        return varietySummary;
    }

    /**
     * Gets a comprehensive progress report including both training and diet analysis.
     * @returns {string} - The comprehensive progress report.
     */
    getComprehensiveProgressReport() {
        let trainingReport = this.analyzeTrainingProgress();
        let dietReport = this.analyzeDietProgress();
        return `Training Progress Report:\n${trainingReport}\n\nDiet Progress Report:\n${dietReport}`;
    }
}

module.exports = ProgressMonitor;