import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTitle } from '../Components/Exports';
import { ImSpinner7 } from 'react-icons/im'
import { useResetPasswordMutation } from '../Redux/APIs/AuthApi';
const ResetPassword = () => {
    useTitle('Forget Password');
    const navigate = useNavigate();
    const userRef = useRef();
    useEffect(() => {
        if (localStorage.getItem("persist") === true) {
            navigate("/");
        }
    })
    const [searchQuery] = useSearchParams();
    const email = searchQuery.get('email')
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({
        password: '',
        confirmpassword: ''
    });
    const handleChange = ({ currentTarget: input }) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    useEffect(() => {
        if (localStorage.getItem("persist") === true) {
            navigate("/");
        }
    })

    useEffect(() => {
        userRef.current.focus()
    }, []);
    const [ResetPassword, { isError, error: errorres, isLoading }] = useResetPasswordMutation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { confirmpassword, password } = inputs;
        const data = { confirmpassword, password, email }
        if (!password || !confirmpassword) {
            return setError('Fill all fields');
        }
        if (password !== confirmpassword) {
            return setError('Passwords do not match');
        }
        if (password.length <= 6) {
            return setError('Passowrd must be more than 6 characters');
        }
        await ResetPassword(data).unwrap()
            .then((payload) => {
                navigate(`/`)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] mb-5 md:mb-28'>
                <div className='container px-3 max-w-md md:mt-16'>
                    <div className='md:border rounded-lg  border-gray-300 md:max-w-[90%] xsm:px-5 md:px-12 items-center text-center md:bg-white'>
                        <Link to="/">
                            <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                                <img className='w-10 h-10 rounded-xl'
                                    src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                                <p className='text-2xl font-bold'>Doctris</p>
                            </div>
                        </Link>
                        <div className='text-lg space-y-2 py-4'>
                            <p className='font-medium'>Reset Password</p>
                            <p className='text-gray-400 text-sm'>Please Enter your new password</p>
                        </div>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <input type='password' ref={userRef} onChange={handleChange} name='password' className='inputfield' placeholder='Password' />
                            <input type='password' onChange={handleChange} name='confirmpassword' className='inputfield' placeholder='Confirm Password' />
                            <button type='submit' className='btn-primary mt-4 !mb-8' disabled={isLoading}>
                                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'><ImSpinner7 /> </span> : 'Confirm'}</button>
                            <div className='flex justify-center mt-4'>
                                <hr className='w-[40%] mt-3'></hr>
                                <p className='mx-3 font-semibold text-gray-500'>OR</p>
                                <hr className='w-[40%] mt-3'></hr>
                            </div>

                            <Link to='/signup' className='text-blue-800 focus:text-blue-300 md:mb-7 text-sm font-medium mt-3'>Create New Account ?</Link>
                            {isError && <span className="text-red-500 pb-3 font-poppins font-medium">{errorres?.data?.msg}</span>}
                            {error && <span className="text-red-500 pb-3 font-poppins font-medium">{error}</span>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
