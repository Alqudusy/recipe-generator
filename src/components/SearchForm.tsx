
const SearchForm = () => {
    return (
        <div className="container mt-4">
            <div className="card border-0 rounded-3 p-3 d-flex align-items-center">
                <form className="d-flex align-items-center justify-content-between w-100 p-1" style={{ background: "#f8f9fa", borderRadius: "3rem" }}>
                    {/* Input Field */}
                    <div className="" style={{ flex: 1 }}>
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient"
                            className="form-control"
                            placeholder="e.g., chicken, pasta"
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "500",
                                color: "#495057",
                                backgroundColor: '#00000000',
                                paddingRight: "1rem",
                                borderRadius: "3rem",
                                border: "none"
                            }}
                            required
                        />
                    </div>

                    {/* Search Button */}
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
                        <i className="fas fa-search text-primary fs-1" style={{ transform: 'translateY(-0.1rem)' }} /> {/* Font Awesome Search Icon */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
