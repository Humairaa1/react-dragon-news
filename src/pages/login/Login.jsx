import { Link } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-14">

                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-semibold text-center mb-5">Login Your Account</h1>
                    <hr />
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </div>
                </form>
                <p className="text-center mb-4">Do not have an account ? <Link className="text-blue-700 font-bold" to={"/register"}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;