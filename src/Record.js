/**
 * The Record class is a base class for different types of records.
 * It contains common properties and methods that can be shared by subclasses.
 * @class Record
 */
class Record {
    /**
     * Creates a Record instance.
     * @constructor
     * @param {number} recordId - The unique identifier of the record.
     * @param {Date} date - The date when the record was created.
     */
    constructor(recordId, date) {
        this.recordId = recordId;
        this.date = date;
    }

    /**
     * Gets the basic information of the record.
     * @returns {string} - A string containing the basic information of the record.
     */
    getBasicInfo() {
        return `Record ID: ${this.recordId}\nDate: ${this.date.toDateString()}`;
    }
}

module.exports = Record;