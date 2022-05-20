import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errMessage;

    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    } ,[user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errMessage = <p className="text-red-500">{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (gUser) {
        // console.log(gUser)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2lx font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }

                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.pattern?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Password needs to be 6 characters or longer'
                                    }

                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errMessage}
                        <input className="btn w-full max-w-xs" type="submit" value="login" />
                    </form>
                    <small><p>New to Doctors Portal? <Link to="/signup" className="text-primary">Create New Account</Link> </p></small>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;