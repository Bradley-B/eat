import { createSlice } from '@reduxjs/toolkit'

const initialMealState = {
    "monday": {"breakfast": false, "lunch": false, "dinner": false},
    "tuesday": {"breakfast": false, "lunch": false, "dinner": false},
    "wednesday": {"breakfast": false, "lunch": false, "dinner": false},
    "thursday": {"breakfast": false, "lunch": false, "dinner": false},
    "friday": {"breakfast": false, "lunch": false, "dinner": false},
    "saturday": {"breakfast": false, "lunch": false, "dinner": false},
    "sunday": {"breakfast": false, "lunch": false, "dinner": false}
};

export const mealSlice = createSlice({
    name: 'meals',
    initialState: initialMealState,
    reducers: {
        reset: state => {
            let keys = Object.keys(initialMealState);
            for(let day of keys) {
                state[day].breakfast = false;
                state[day].lunch = false;
                state[day].dinner = false;
            }
        },
        updateMeal: (state, action) => {
            // TODO do something here based on action
        }
    }
});

export const { reset, updateMeal } = mealSlice.actions;

export default mealSlice.reducer;
