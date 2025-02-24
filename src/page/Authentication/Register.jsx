import logo from '../../assets/flowlogo.png'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";



const Register = () => {
    
    const {
        register,
        reset,
        handleSubmit,
        
        formState: { errors },
    } = useForm();
    const {createUser, updateUserProfile,signInWithGoogle}=useAuth();
    const axiosPublic= useAxiosPublic()
    const navigate=useNavigate()




    const handleGoogleSignIn = () => {
        signInWithGoogle().then((result) => {
          console.log(result.user);
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            
          };
    
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            navigate('/sidebar');
          });
        });
      };

        
        const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                return updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        };

                        axiosPublic.post('/users', userInfo).then((res) => {
                            if (res.data.insertedId) {
                                console.log('User added to Database');
                                reset();
                                toast.success('User Registration Successful');
                                navigate('/sidebar');
                            }
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Registration failed!.your email alreaddy use');
            });
            console.log(data);
            createUser(data.email, data.password).then((result)=>{
                const loggedUser=result.user;
                console.log(loggedUser);
        
            return updateUserProfile(data.name, data.photoURL).then(()=>{
                const userInfo={
                    name: data.name,
                    email: data.email
                };

                axiosPublic.post('/users', userInfo).then((res)=>{
                    if(res.data.insertedId){
                        console.log('User added to Database')
                        reset()
                        toast.success('User Registration Successfull')
                    }
                    navigate('/sidebar')
                    
                })
                
            })


            })

        }


    return (
    <section className=" dark:bg-gray-900">
            
    <div className="container flex items-center justify-center  px-6 mx-auto">

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md rounded-2xl  shadow-3xl mt-12 p-2 lg:p-4 border border-slate-50 bg-gray-800 lg:mt-28">
            <div className="flex flex-col justify-center items-center gap-2 mt-2">
                <img className="w-16 h-10 sm:h-8" src={logo} alt="" />
                <span className='font-roboto text-3xl font-semibold text-white'>Task<span className='text-3xl font-roboto text-orange-500'>FLOW</span></span>
            </div>
            
            <div className="flex items-center justify-center mt-6">
            

                <a href="#" className="w-1/3 pb-4 text-3xl font-roboto text-center text-white capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                    sign up
                </a>
            </div>
            <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full mt-4 border rounded-lg border-white dark:text-white  dark:hover:bg-gray-600">
            <div className="px-4 py-2">
            <FcGoogle className='text-2xl' />
            </div>
            <span className="w-5/6 px-4 py-3 text-white font-bold text-center">
                Sign in with Google
            </span>
            </button>
            

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" {...register("name", {
                    required: "Name is required",
                    minLength: 2,
                    })} name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                    
            </div>
            {errors.name && (
                    <span className="text-red-600">Name is required</span>
                )}

            <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                <input id="dropzone-file" type="file"  {...register("photoURL", { required: true })}
                placeholder="Photo URL" className="hidden" />
                    
            </label>
                {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                    )}

            <div className="relative flex items-center mt-6">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" {...register("email", { required: true })}
                name='email'   className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    
            </div>
            {errors.email && (
                    <span className="text-red-600">Email is required</span>
                    )}

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password"   {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        
            </div>
            {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                    Password must be less than 20 characters
                    </p>
                )}
                {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                    </p>
                )}

            <div className="mt-6">
                <button type='submit' className="w-full px-6 rounded-xl py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign Up
                </button>
                

                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                        Already have an account?
                    </a>
                    <Link to='/login' className='text-white font-semibold ml-2'>Login</Link>
                </div>
                
            </div>
            
        </form>
        
    </div>
</section>
);
};

export default Register;