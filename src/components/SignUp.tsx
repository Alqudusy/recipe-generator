const SignUp = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: "450px", width: "100%" }}>
                <h2 className="text-center mb-4 text-success" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <i className="bi bi-person-circle"></i> Join Us!
                </h2>
                <p className="text-center text-muted">Sign up to discover delicious recipes</p>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control rounded-3"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control rounded-3"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control rounded-3"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-3">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
