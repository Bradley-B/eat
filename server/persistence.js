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
        await storage.setItem('thing1', defaults);
        await storage.setItem('thing2', defaults);
    }

    getThing1() {
        return storage.getItem('thing1');
    }
};
