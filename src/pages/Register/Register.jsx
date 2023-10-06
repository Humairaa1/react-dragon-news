import { Link } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";

const Register = () => {

    const {createUser} =useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password,photo,name)

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(err => console.error(err))
    }
    
    return (
        <div>
             <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto mt-14">

                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl font-semibold text-center mb-5">Register your account</h1>
                    <hr />
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
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
                        <button type="submit" className="btn btn-secondary">Register</button>
                    </div>
                </form>
                <p className="text-center mb-4">Already have an account ? <Link className="text-blue-700 font-bold" to={"/login"}>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;