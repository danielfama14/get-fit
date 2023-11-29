import { useState, useEffect } from 'react';
import {
    Container,
    Col,
    Form,
    Button,
    Card,
    Row
} from 'react-bootstrap';

//import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';
import { searchExercises } from '../utils/API';
//import { saveWorkoutIds, getSavedWorkoutIds } from '../utils/localStorage'
//import { QUERY_ME } from '../utils/queries';
//import { ADD_WORKOUT } from '../utils/mutations'
const SearchWorkouts = () => {

    // create state for holding returned exercise api data
    const [searchedWorkouts, setSearchedWorkouts] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved exerciseId values
    // const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());


    // useEffect(() => {
    //     console.log("In use effect", searchInput)
    //     fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${searchInput}`, {
    //         method: 'GET',
    //         headers: {
    //             'X-Api-Key': 'CzFOeTT0EtP9tVynDq0F2A==8ThL2SiAyXH3sww9'
    //         }
    //       }
    //     )
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //       setSearchedWorkouts(data);
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    //   }, [searchInput]);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await searchExercises(searchInput);
        setSearchedWorkouts(response);
    };

    // create mutation for saving books 
    // const [addWorkout] = useMutation(ADD_WORKOUT, {
    //     refetchQueries: [{ query: QUERY_ME }],
    // })

    // // create function to handle saving a book to our database
    // const handleSaveWorkouts = async (workoutId) => {

    //     // find the book in `searchedWorkouts` state by the matching id
    //     const workoutToSave = searchedWorkouts.find((workout) => workout.workoutId === workoutId);

    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }

    //     try {
    //         const { data } = await addWorkout({
    //             variables: { workoutInput: workoutToSave },
    //         });

    //         // if book successfully saves to user's account, save book id to state
    //         setSavedWorkoutIds([...savedWorkoutIds, workoutToSave.workoutId]);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <>
            <div className="text-light bg-dark p-5">
                <Container>
                    <h1>Search for Workouts!</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a workout'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg'>
                                    Submit Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>

            <Container style={{ paddingBottom: '150px', paddingTop: '40px' }}>

                <Row className="g-4">
                    {searchedWorkouts?.map((exercise, index) => (
                        <Col md="4" key={index}>
                            <Card border='dark' style={{ width: '25rem' }}>
                                <Card.Body>
                                    <Card.Title>{exercise.name}</Card.Title>
                                    <p className='small'>Type: {exercise.type}</p>
                                    <p className='small'>Muscle: {exercise.muscle}</p>
                                    <p className='small'>Equipment: {exercise.equipment}</p>
                                    <Card.Text style={{ maxHeight: '100px', overflowY: 'auto' }}>{exercise.instructions}</Card.Text>
                                    {/*
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout.workoutId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveWorkouts(workout.workoutId)}
                                        >
                                            {savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout.workoutId)
                                                ? 'This workout has already been saved!'
                                                : 'Save this Workout!'}
                                        </Button>
                                    )}
                                    
                                    */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default SearchWorkouts;