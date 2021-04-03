import { configureStore } from '@reduxjs/toolkit'
import mealReducer from './mealSlice'
import noteReducer from './noteSlice';

export default configureStore({
    reducer: {
        meals: mealReducer,
        notes: noteReducer
    }
});
