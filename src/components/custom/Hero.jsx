import { Button } from '../ui/button';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen'>
      {/* Background Video */}
      <video
        src="https://cdn.pixabay.com/video/2019/04/23/23011-332483109_large.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className='relative z-10 flex flex-col items-center gap-6 text-white text-center'>
        <h1 className='font-extrabold text-[40px] max-w-4xl'>
          <span className='text-[#f04731]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at your Fingertips
        </h1>
        <p className='text-xl text-gray-200 max-w-2xl'>
          Your Personal Trip Planner, custom Itineraries tailored for your Interests and Budget
        </p>

        <Link to={'/create-trip'}>
             <Button>Get Started, Today!</Button>
        </Link>
      </div>
      
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-15 z-1"></div>
    </div>
  );
}

export default Hero;
