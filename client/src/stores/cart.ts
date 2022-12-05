import { reactive, watch } from "vue";
import type {  Workout } from "./workouts";
import session from "./session";

export interface CartItem{
    quantity: number;
    workout: Workout;
}

