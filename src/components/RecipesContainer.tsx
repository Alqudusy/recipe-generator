import Recipes from "./Recipes";

const RecipeContainer = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>
                Discover Delicious Recipes
            </h2>
            <div className="row g-4">
                {/* Render multiple Recipes cards */}
                <div className="col-md-4">
                    <Recipes
                        image="https://via.placeholder.com/150"
                        name="Spaghetti Bolognese"
                        ingredients={["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"]}
                    />
                </div>
                <div className="col-md-4">
                    <Recipes
                        image="https://via.placeholder.com/150"
                        name="Chicken Curry"
                        ingredients={["Chicken", "Curry powder", "Coconut milk", "Onion", "Ginger"]}
                    />
                </div>
                <div className="col-md-4">
                    <Recipes
                        image="https://via.placeholder.com/150"
                        name="Vegetable Stir-Fry"
                        ingredients={["Broccoli", "Carrot", "Bell pepper", "Soy sauce", "Ginger"]}
                    />
                </div>
            </div>
        </div>
    );
};
export default RecipeContainer;
