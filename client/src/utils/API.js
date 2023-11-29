export const searchExercises = (muscle) => {
    return fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'CzFOeTT0EtP9tVynDq0F2A==8ThL2SiAyXH3sww9'
        }
    }
    )
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
};
