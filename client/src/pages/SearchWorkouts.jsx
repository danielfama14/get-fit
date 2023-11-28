import { useState, useEffect } from 'react';
import {
    Container,
    Col,
    Form,
    Button,
    Card,
    Row
} from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { searchExercises } from '../utils/API';
import { saveWorkoutIds, getSavedWorkoutIds } from '../utils/localStorage'
//import { QUERY_ME } from '../utils/queries';
//import { ADD_WORKOUT } from '../utils/mutations'
const SearchWorkouts = () => {

    // create state for holding returned google api data
    const [searchedWorkouts, setSearchedWorkouts] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved bookId values
    const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());


    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveWorkoutIds(savedWorkoutIds);
    });

    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchExercises(searchInput);
            // response console logged works. API communicates
            console.log('Response from the API', response)
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const { items } = await response.json();

            const workoutData = items.map((workout) => ({
                //workoutId: workout.id,
                name: workout.name,
                type: workout.type,
                muscle: workout.muscle,
                equipment: workout.equipment,
                instructions: workout.instructions
            }));

            setSearchedWorkouts(workoutData);
            setSearchInput('');

        } catch (err) {
            console.error(err);
        }
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

            <Container>
                <h2 className='pt-5'>
                    {searchedWorkouts.length
                        ? `Viewing ${searchedWorkouts.length} results:`
                        : 'Search for a workout to begin'}
                </h2>
                <Row>
                    {searchedWorkouts.map((workout) => (
                        <Col md="4" >
                            <Card border='dark'>
                                <Card.Body>
                                    <Card.Title>{workout.name}</Card.Title>
                                    <p className='small'>Type: {workout.type}</p>
                                    <p className='small'>Muscle: {workout.muscle}</p>
                                    <p className='small'>Equipment: {workout.equipment}</p>
                                    <Card.Text>{workout.instructions}</Card.Text>
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