import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations'
import Auth from '../utils/auth';
import { removeRecipeId } from '../utils/localStorage';
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';
// import recipe pop up modal here

const SavedRecipes = () => {
    const { loading, data } = useQuery(QUERY_ME);

    // for removing recipes
    const [removeRecipe] = useMutation(REMOVE_RECIPE, {
        refetchQueries: [{ query: QUERY_ME }],
    })

    // fetching saved recipes
    const userData = data?.me || {};

    const handleDeleteRecipe = async (recipeId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeRecipe({
                variables: { recipeId }
            });

            // upon success, remove book's id from localStorage
            removeRecipeId(recipeId);
        } catch (err) {
            console.error(err);
        }
    };
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    return (
        <>
            <div fluid className="text-light bg-dark p-5">
                <Container>
                    <h1>Viewing saved recipes!</h1>
                </Container>
            </div>
            <Container>
                <h2 className='pt-5'>
                    {userData?.savedRecipes.length
                        ? `Viewing ${userData?.savedRecipes.length} saved ${userData?.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:`
                        : 'You have no saved recipes!'}
                </h2>
                <Row>
                    {userData?.savedRecipes.map((recipe) => {
                        return (
                            <Col md="4">
                                <Card key={recipe.recipeId} border='dark'>
                                    {recipe.image ? <Card.Img src={recipe.image} alt={`The cover for ${recipe.title}`} variant='top' /> : null}
                                    <Card.Body>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Text>{recipe.description}</Card.Text>
                                        <p className='small'>Ingredients: {recipe.recipe_ingredients}</p>

                                        <Card.Text>{recipe.instruction}</Card.Text>
                                        <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(recipe.recipeId)}>
                                            Delete this Recipe!
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default SavedRecipes;




