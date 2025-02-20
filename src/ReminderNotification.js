/**
 * The ReminderNotification class is used to manage reminder and notification functions,
 * such as setting training reminders and diet - record reminders.
 * @class ReminderNotification
 */
class ReminderNotification {
    /**
     * Singleton instance
     * @type {ReminderNotification}
     * @private
     */
    static #instance;

    /**
     * Array to store reminder tasks
     * @type {Array}
     */
    reminders = [];

    /**
     * Private constructor to prevent direct instantiation
     * @constructor
     * @private
     */
    constructor() {
        if (ReminderNotification.#instance) {
            return ReminderNotification.#instance;
        }
        ReminderNotification.#instance = this;
    }

    /**
     * Static method to get the singleton instance
     * @returns {ReminderNotification}
     */
    static getInstance() {
        if (!ReminderNotification.#instance) {
            ReminderNotification.#instance = new ReminderNotification();
        }
        return ReminderNotification.#instance;
    }

    /**
     * Add a reminder task
     * @param {string} title - The title of the reminder, e.g., "Today's Training"
     * @param {Date} remindTime - The time of the reminder
     * @param {string} description - The description of the reminder, e.g., "Remember to do 30-minute aerobic exercise"
     */
    addReminder(title, remindTime, description) {
        const reminder = {
            title,
            remindTime,
            description,
            isTriggered: false
        };
        this.reminders.push(reminder);
    }

    /**
     * Trigger reminders
     * Checks if the current time has reached the reminder time. If so, sets `isTriggered` to true and returns the reminder messages.
     * @returns {string[]} - An array of triggered reminder messages. If no reminders are triggered, returns an empty array.
     */
    triggerReminders() {
        const currentTime = new Date();
        const triggeredReminders = [];
        for (let reminder of this.reminders) {
            if (reminder.remindTime <= currentTime && !reminder.isTriggered) {
                reminder.isTriggered = true;
                triggeredReminders.push(`Reminder: ${reminder.title} - ${reminder.description}`);
            }
        }
        return triggeredReminders;
    }

    /**
     * Get information of all reminder tasks
     * @returns {string[]} - An array containing information of all reminders
     */
    getReminderInfo() {
        return this.reminders.map(reminder => {
            return `Title: ${reminder.title}, Time: ${reminder.remindTime.toLocaleString()}, Description: ${reminder.description}, Triggered: ${reminder.isTriggered}`;
        });
    }
}

// Example usage
const reminderInstance1 = ReminderNotification.getInstance();
const reminderInstance2 = ReminderNotification.getInstance();

console.log(reminderInstance1 === reminderInstance2); // Output: true
