import myfetch from "@/services/myfetch";


export function getWorkouts() {
  return myfetch<ListEnvelope<Workout>>('workouts');
}

export function getWorkout(id: number) {
  return myfetch<Workout>(`workouts/${id}`);
}

export interface ListEnvelope<T> {
    Workouts: T[];
    total: number;
    skip: number;
    limit: number;
}

export interface Workout {
    id: number;
    name: string;
    details: string;
}