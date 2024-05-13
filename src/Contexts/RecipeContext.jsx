import React, { createContext, useState } from 'react'

export const Recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([])
    return (
        <Recipecontext.Provider>
            {props.childern}
        </Recipecontext.Provider>
    )
}

export default RecipeContext