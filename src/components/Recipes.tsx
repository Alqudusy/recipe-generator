const Recipes = ({ image, name, ingredients }: any) => {
    return (
        <div className="card shadow-lg border-0 rounded-3" style={{ height: "100%" }}>
            <img
                src={image}
                alt={name}
                className="card-img-top rounded-top-3"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title text-center text-primary fw-bold">{name}</h5>
                <ul className="list-group list-group-flush">
                    {ingredients.map((ingredient: string, index: string) => (
                        <li
                            key={index}
                            className="list-group-item text-muted"
                            style={{ fontSize: "14px" }}
                        >
                            <i className="bi bi-dot text-success"></i> {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Recipes;
