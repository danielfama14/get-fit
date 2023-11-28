export const searchExercises = async (muscle) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
            headers: {
                'X-Api-Key': "CzFOeTT0EtP9tVynDq0F2A==8ThL2SiAyXH3sww9",
            },
        });
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        return console.error('Request failed:', error);
    }
};
