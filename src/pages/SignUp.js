import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <img className="hidden sm:block absolute w-full h-full object-cover" src="https://previews.123rf.com/images/olegdudko/olegdudko1907/olegdudko190705921/128026353-movie-clapper-and-film-reel-on-a-wooden-background.jpg" alt="background auth" />
      <div className='absolute bg-black/60 top-0 left-0 w-full h-screen '></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form className='w-full flex flex-col py-4'>
              <input className="p-3 my-2 bg-gray-700 rounded " type="email" placeholder='Email' autoComplete='email'/>
              <input className="p-3 my-2 bg-gray-700 rounded " type="password" placeholder='Password' autoComplete='current-password'/>
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p className='mr-2'>
                  <input type="checkbox" />Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span className='text-gray-600'>Already subscribed to NetFlix? </span> <Link to='/login'>Log In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp