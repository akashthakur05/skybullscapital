import { Route } from 'react-router-dom';
const RouteOrRedirect = (props) => {
    return (
      <div>
        {isMatch(props) ? (
          <Route path={props.path} element={props.component} />
        ) : (
          <>{handleRedirect(props)}</>
        )}
      </div>
    )
  }
  
  const handleRedirect = (props) => {
    // return <Reedirect to="/">{props.recipeNotFound()}</Redirect>
  }
  
  const isMatch = (props) => {
    const targetRecipe = props.computedMatch.params.recipeId
    const matched = props.recipes.some((recipe) => {
      return recipe.id === targetRecipe
    })
    return matched
  }