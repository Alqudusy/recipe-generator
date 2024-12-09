import { useEffect, useState } from "react";
import Recipes from "./Recipes";

const RecipeContainer = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchRandomRecipes();
    }, []);

    const fetchRandomRecipes = async () => {
        try {
            const promises = Array.from({ length: 10 }, () =>
                fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json())
            );
            const results = await Promise.all(promises);
            const randomRecipes: any = results.map(result => result.meals[0]);
            setRecipes(randomRecipes);
        } catch (err) {
            console.error("Error fetching random recipes:", err);
        }
    };

    const fetchRecipesBySearch = async (query: any) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (err) {
            console.error("Error fetching recipes by search:", err);
        }
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            fetchRecipesBySearch(searchTerm);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <div className="card border-0 rounded-3 p-3 d-flex align-items-center">
                    <form
                        className="d-flex align-items-center justify-content-between w-100 p-1"
                        style={{ background: "#f8f9fa", borderRadius: "3rem" }}
                        onSubmit={handleSearch}
                    >
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                name="ingredient"
                                id="ingredient"
                                className="form-control"
                                placeholder="Search for a recipe (e.g., chicken)"
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "500",
                                    color: "#495057",
                                    backgroundColor: "#00000000",
                                    paddingRight: "1rem",
                                    borderRadius: "3rem",
                                    border: "none"
                                }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-20 rounded-3 py-2"
                            style={{
                                padding: "0.5rem 1.5rem",
                                color: "#fff",
                                border: "none",
                                borderRadius: "3rem",
                            }}
                        >
                            <i className="fas fa-search text-primary fs-1" style={{ transform: "translateY(-0.1rem)" }} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center mb-4 text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {recipes.length ? "Discover Delicious Recipes" : "No Recipes Found"}
                </h2>
                <div className="row g-4 justify-content-evenly">
                    {recipes.map((recipe: any) => (
                        <div className="col-md-4" key={recipe.idMeal}>
                            <Recipes
                                image={recipe.strMealThumb}
                                name={recipe.strMeal}
                                ingredients={Object.keys(recipe)
                                    .filter(key => key.startsWith("strIngredient") && recipe[key])
                                    .map(key => recipe[key])}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RecipeContainer;
