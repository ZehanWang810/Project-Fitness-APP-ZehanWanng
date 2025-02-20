const Record = require('./Record.js');

/**
 * The DietRecord class represents a user's diet record.
 * It extends the Record class to inherit common properties and methods.
 * @class DietRecord
 */
class DietRecord extends Record {
    /**
     * Creates a DietRecord instance.
     * @constructor
     * @param {number} recordId - The unique identifier of the diet record.
     * @param {Date} date - The date when the diet was recorded.
     * @param {string} mealType - The type of meal, such as "Breakfast", "Lunch", "Dinner", "Snack", etc.
     * @param {string[]} foods - An array of names of the foods eaten.
     * @param {number[]} quantities - An array of quantities corresponding to each food. The unit can vary according to the food (e.g., grams, servings, etc.).
     * @param {number} totalCalories - The total number of calories consumed in this meal.
     */
    constructor(recordId, date, mealType, foods, quantities, totalCalories) {
        super(recordId, date);
        this.mealType = mealType;
        this.foods = foods;
        this.quantities = quantities;
        this.totalCalories = totalCalories;
    }

    /**
     * Gets the detailed information of the diet record.
     * @returns {string} - A string containing all the information of the diet record.
     */
    getDietDetails() {
        const basicInfo = this.getBasicInfo();
        let foodInfo = "";
        for (let i = 0; i < this.foods.length; i++) {
            foodInfo += `${this.foods[i]}: ${this.quantities[i]} `;
        }
        return `${basicInfo}\n` +
            `Meal Type: ${this.mealType}\n` +
            `Foods and Quantities: ${foodInfo}\n` +
            `Total Calories: ${this.totalCalories}`;
    }

    /**
     * Updates the food information in the diet record.
     * @param {string[]} newFoods - An array of new food names.
     * @param {number[]} newQuantities - An array of new food quantities.
     * @param {number} newTotalCalories - The new total number of calories.
     */
    updateFoods(newFoods, newQuantities, newTotalCalories) {
        this.foods = newFoods;
        this.quantities = newQuantities;
        this.totalCalories = newTotalCalories;
    }
}

module.exports = DietRecord;