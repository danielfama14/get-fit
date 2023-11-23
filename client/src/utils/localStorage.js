export const getSavedRecipeIds = () => {
    const saveRecipeIds = localStorage.getItem('recipe')
        ? JSON.parse(localStorage.getItem('recipe'))
        : [];

    return saveRecipeIds;
};

export const saveRecipeIds = (recipeIdArr) => {
    if (recipeIdArr.length) {
        localStorage.setItem('recipe', JSON.stringify(recipeIdArr));
    } else {
        localStorage.removeItem('recipe');
    }
};

export const removeRecipeId = (recipeId) => {
    const saveRecipeIds = localStorage.getItem('recipe')
        ? JSON.parse(localStorage.getItem('recipe'))
        : null;

    if (!saveRecipeIds) {
        return false;
    }

    const updatedSavedRecipeIds = saveRecipeIds?.filter((saveRecipeIds) => savedRecipeId !== recipeId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedRecipeIds));

    return true;
};
