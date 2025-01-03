import { useState } from 'react';
import{Link , useNavigate} from 'react-router-dom';

export default function SignUp() {
  const [formData , setFormData] = useState({});
  const [error , setError] = useState(false);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormData({...formData , [e.target.id]:e.target.value});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
   try{
    setLoading(true);
    setError(false);
    const res = await fetch('/api/auth/signup' ,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }
    );
    const data = await res.json();
    setLoading(false);
    if(data.success === false){
      setError(true);
      return;
    } 
     navigate('/sign-in');
   }catch(error){
    setFormData(false);
    setError(true);
   }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input id='username' type='text' placeholder='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='email' type='text' placeholder='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input id='password' type='password' placeholder='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading....' : 'Sign-Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5' >
        <p>Have an account ?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'> {error && "something went wrong "} </p>
    </div>
  )
}
