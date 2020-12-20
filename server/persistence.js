const storage = require('node-persist');

const dayObject = {
    "breakfast": false,
    "lunch": false,
    "dinner": false
};
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let defaults = {
    "notes": ""
};

for(const day of days) {
    defaults[day] = dayObject;
}

module.exports = class Persistence {
    async init() {
        await storage.init();

        const promise1 = this.getItem('thing1').catch(()=>{
            storage.setItem('thing1', defaults);
        });

        const promise2 = this.getItem('thing2').catch(()=>{
            storage.setItem('thing2', defaults);
        });

        return Promise.all([promise1, promise2]);
    }

    async getItem(item) {
        let value = await storage.getItem(item);
        if(value === undefined) {
            throw Error('key not found');
        }
        return value;
    }

    async updateNotes(person, newNotes) {
        let object = await this.getItem(person);
        object.notes = newNotes;
        storage.setItem(person, object);
    }
};
