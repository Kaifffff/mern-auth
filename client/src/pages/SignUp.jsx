import{Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign Up</h1>
      <form className='flex flex-col gap-3'>
        <input id='username' type='text' placeholder='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input id='email' type='text' placeholder='email' className='bg-slate-100 p-3 rounded-lg'/>
        <input id='password' type='password' placeholder='password' className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5' >
        <p>Have an account ?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
