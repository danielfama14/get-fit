export const getSavedWorkoutIds = () => {
    const saveWorkoutIds = localStorage.getItem('workout')
        ? JSON.parse(localStorage.getItem('workout'))
        : [];

    return saveWorkoutIds;
};

export const saveWorkoutIds = (workoutIdArr) => {
    if (workoutIdArr.length) {
        localStorage.setItem('workout', JSON.stringify(workoutIdArr));
    } else {
        localStorage.removeItem('workout');
    }
};

export const removeWorkoutId = (workoutId) => {
    const saveWorkoutIds = localStorage.getItem('workout')
        ? JSON.parse(localStorage.getItem('workout'))
        : null;

    if (!saveWorkoutIds) {
        return false;
    }

    const updatedSavedWorkoutIds = saveWorkoutIds?.filter((savedWorkoutId) => savedWorkoutId !== workoutId);
    localStorage.setItem('workout', JSON.stringify(updatedSavedWorkoutIds));

    return true;
};
