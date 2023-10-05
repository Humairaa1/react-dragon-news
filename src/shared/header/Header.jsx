import logo from '../../assets/photos/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='mt-12 text-center'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>
            {moment().format("dddd, MMMM D, YYYY")}
            </p>
        </div>
    );
};

export default Header;