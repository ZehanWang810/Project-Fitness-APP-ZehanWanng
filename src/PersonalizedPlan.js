const readlineSync = require('readline - sync');

/**
 * The PersonalizedPlan class is used to generate personalized plans for users, such as fitness plans and diet plans.
 * @class PersonalizedPlan
 */
class PersonalizedPlan {
    /**
     * Creates a PersonalizedPlan instance.
     * @constructor
     * @param {User} user - The associated user object, used to obtain user information for generating personalized plans.
     * @param {TrainingRecord[]} trainingRecords - The array of user's training records, used to analyze the user's training situation.
     * @param {DietRecord[]} dietRecords - The array of user's diet records, used to analyze the user's diet situation.
     */
    constructor(user, trainingRecords, dietRecords) {
        // The associated user object
        this.user = user;
        // The array of user's training records
        this.trainingRecords = trainingRecords;
        // The array of user's diet records
        this.dietRecords = dietRecords;
    }

    /**
     * Gets the user's goal.
     * @returns {string} - The user's goal, such as "Muscle Gain", "Fat Loss", "Maintain the Current State".
     */
    getUserGoal() {
        let userGoal;
        while (true) {
            userGoal = readlineSync.question("Please enter your goal (Muscle Gain/Fat Loss/Maintain the Current State): ");
            if (userGoal === "Muscle Gain" || userGoal === "Fat Loss" || userGoal === "Maintain the Current State") {
                break;
            } else {
                console.log("Invalid input. Please enter 'Muscle Gain', 'Fat Loss', or 'Maintain the Current State'.");
            }
        }
        return userGoal;
    }

    /**
     * Generates a personalized training plan.
     * Develops a plan based on the user's training records and goals.
     * @returns {string} - The content of the generated personalized training plan.
     */
    generateTrainingPlan() {
        const userGoal = this.getUserGoal();
        if (userGoal === "Muscle Gain") {
            return "Conduct 3 - 4 strength - training sessions per week, including exercises for large muscle groups such as chest, back, and legs, with each session lasting 60 - 90 minutes.";
        } else if (userGoal === "Fat Loss") {
            return "Conduct 4 - 5 aerobic exercises per week, such as running and swimming, for 30 - 60 minutes each time, combined with 2 - 3 strength - training sessions.";
        } else if (userGoal === "Maintain the Current State") {
            return "Maintain the current training frequency and intensity.";
        }
        return "Unrecognized goal. Please confirm the goal setting.";
    }

    /**
     * Generates a personalized diet plan.
     * Develops a plan based on the user's diet records and goals.
     * @returns {string} - The content of the generated personalized diet plan.
     */
    generateDietPlan() {
        const userGoal = this.getUserGoal();
        if (userGoal === "Muscle Gain") {
            return "Increase the intake of protein, such as chicken breast, eggs, and milk, while ensuring an adequate intake of carbohydrates and healthy fats.";
        } else if (userGoal === "Fat Loss") {
            return "Control calorie intake, increase the intake of vegetables and fruits, and reduce the intake of high - calorie and high - fat foods.";
        } else if (userGoal === "Maintain the Current State") {
            return "Maintain the current diet structure and pay attention to a balanced diet.";
        }
        return "Unrecognized goal. Please confirm the goal setting.";
    }

    /**
     * Gets the full personalized plan, including the training plan and the diet plan.
     * @returns {string} - The content of the full personalized plan.
     */
    getFullPersonalizedPlan() {
        let trainingPlan = this.generateTrainingPlan();
        let dietPlan = this.generateDietPlan();
        return `Personalized Training Plan:\n${trainingPlan}\n\nPersonalized Diet Plan:\n${dietPlan}`;
    }
}

export default PersonalizedPlan;