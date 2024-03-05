import { useGlobalContext } from '@/context/useGlobalContext';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFileImage, FaHome } from 'react-icons/fa';
import { GoFileMedia } from "react-icons/go";
import { PiAppStoreLogoBold, PiArchiveFill } from "react-icons/pi";

function MenuModal() {
    const {isOpenMenu, setIsOpenMenu} = useGlobalContext();
  return (
    <div className={`w-full min-h-screen fixed top-0 left-0 flex items-end justify-center p-10 z-[9999] gap-4 backdrop-blur-lg transition-all duration-500 ${isOpenMenu ? "opacity-1 visible pointer-events-auto pb-44": "opacity-0 invisible pointer-events-none pb-96"}`}>
    <button onClick={()=> setIsOpenMenu(false)} className='absolute top-12 right-12 text-white text-4xl'><AiOutlineClose className="text-white"  /></button>
    <div className='w-1/2 h-full space-y-4'>
        <Link href="/" onClick={()=> setIsOpenMenu(false)} className='w-full transition-all duration-500 translate-y-0 hover:-translate-y-4  bg-white h-28 rounded-3xl  justify-between text-xl font-semibold  flex-grow flex items-end pb-6 px-12'><span>Introduce</span> <FaHome  className="text-5xl" /></Link>

        <Link href="/project" onClick={()=> setIsOpenMenu(false)} className='w-full h-28 transition-all duration-500 translate-y-0 hover:translate-y-4 rounded-3xl  justify-between text-xl font-semibold flex-grow flex items-end pb-6 px-12 bg-blue-300'><span>Projects</span> <PiArchiveFill  className="text-4xl" /></Link>
    </div>
    <div className='w-1/2 h-full space-y-4'>
        <div className='flex gap-4'>
        <Link href="/work" onClick={()=> setIsOpenMenu(false)} className='h-28 rounded-3xl  justify-between text-xl font-semibold transition-all duration-500 translate-y-0 hover:-translate-y-4 flex-grow flex items-end py-6 px-12 bg-yellow-200'><span className='self-start'>Work</span> <GoFileMedia className="text-4xl" /></Link>

        <Link href="/resume" onClick={()=> setIsOpenMenu(false)} className='h-28 transition-all duration-500 translate-y-0 hover:-translate-y-4 rounded-3xl  justify-between text-xl font-semibold flex items-end pb-6 px-12 bg-zinc-600 flex-grow text-white'><PiAppStoreLogoBold  className="text-4xl" /> <span>About</span> </Link>

        </div>
        <Link href="/contact" onClick={()=> setIsOpenMenu(false)} className='h-28 transition-all duration-500 translate-y-0 hover:translate-y-4 rounded-3xl  justify-between text-xl font-semibold bg-green-300 flex-grow flex items-end pb-6 px-12' ><span>Contact Me</span> <FaFileImage className="text-4xl" /></Link>
    </div>
    </div>
  )
}

export default MenuModal