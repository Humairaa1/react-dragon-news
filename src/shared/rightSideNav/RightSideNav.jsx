import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import qZone1 from '../../assets/photos/qZone1.png'
import qZone2 from '../../assets/photos/qZone2.png'
import qZone3 from '../../assets/photos/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
            <h1 className="text-xl font-semibold mb-5">Login With</h1>
            <button className="btn btn-outline  w-full mb-2">
                <FaGoogle></FaGoogle>
                Log in with Google
                </button>
            <button className="btn btn-outline  w-full">
                <FaGithub></FaGithub>
                Log in with Github
                </button>
            </div>

            <div className='mt-8'>
            <h1 className="text-xl font-semibold mb-5">Find us on</h1>

            <div className='border flex items-center p-3 rounded-t-lg'>
                <FaFacebook className='text-2xl'></FaFacebook>
                <span className='ml-3 font-medium'>Facebook</span>
            </div>
            <div className='border-x flex items-center p-3 '>
                <FaTwitter className='text-2xl'></FaTwitter>
                <span className='ml-3 font-medium'>Twitter</span>
            </div>
            <div className='border flex items-center p-3 rounded-b-lg'>
                <FaInstagram className='text-2xl'></FaInstagram>
                <span className='ml-3 font-medium'>Instagram</span>
            </div>
            </div>

            <div className='mt-8 bg-slate-100 p-3 rounded-md'>
            <h1 className="text-xl font-semibold mb-5">Q-Zone</h1>

            <div className='space-y-5'>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>

            </div>
        </div>
    );
};

export default RightSideNav;