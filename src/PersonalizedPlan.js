const readline = require('readline');

class PersonalizedPlan {
    constructor(user, trainingRecords, dietRecords) {
        this.user = user;
        this.trainingRecords = trainingRecords;
        this.dietRecords = dietRecords;
        this.userGoal = null;
    }

    // 修改为返回Promise
    _getUserGoal() {
        return new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            const askOnce = () => {
                rl.question("Please enter your goal (Muscle Gain/Fat Loss/Maintain the Current State): ", (answer) => {
                    if (answer === "Muscle Gain" || answer === "Fat Loss" || answer === "Maintain the Current State") {
                        rl.close();
                        resolve(answer);
                    } else {
                        console.log("Invalid input. Please enter 'Muscle Gain', 'Fat Loss', or 'Maintain the Current State'.");
                        askOnce();
                    }
                });
            };
            askOnce();
        });
    }

    // 统一返回Promise
    generateTrainingPlan() {
        return this._getUserGoal().then((userGoal) => {
            if (userGoal === "Muscle Gain") {
                return "Conduct 3 - 4 strength - training sessions per week, including exercises for large muscle groups such as chest, back, and legs, with each session lasting 60 - 90 minutes.";
            } else if (userGoal === "Fat Loss") {
                return "Conduct 4 - 5 aerobic exercises per week, such as running and swimming, for 30 - 60 minutes each time, combined with 2 - 3 strength - training sessions.";
            } else if (userGoal === "Maintain the Current State") {
                return "Maintain the current training frequency and intensity.";
            }
            return "Unrecognized goal. Please confirm the goal setting.";
        });
    }

    // 统一返回Promise
    generateDietPlan() {
        return this._getUserGoal().then((userGoal) => {
            if (userGoal === "Muscle Gain") {
                return "Increase the intake of protein, such as chicken breast, eggs, and milk, while ensuring an adequate intake of carbohydrates and healthy fats.";
            } else if (userGoal === "Fat Loss") {
                return "Control calorie intake, increase the intake of vegetables and fruits, and reduce the intake of high - calorie and high - fat foods.";
            } else if (userGoal === "Maintain the Current State") {
                return "Maintain the current diet structure and pay attention to a balanced diet.";
            }
            return "Unrecognized goal. Please confirm the goal setting.";
        });
    }

    async getFullPersonalizedPlan() {
        const userGoal = await this._getUserGoal();
        const trainingPlan = await this.generateTrainingPlan();
        const dietPlan = await this.generateDietPlan();
        return `Personalized Training Plan:\n${trainingPlan}\n\nPersonalized Diet Plan:\n${dietPlan}`;
    }
}

module.exports = PersonalizedPlan;