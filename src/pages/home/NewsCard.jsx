import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {

    const { title,image_url,details,_id } = aNews;

    return (
        <div className="card bg-base-100 shadow-xl mb-10 p-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <figure><img src={image_url}alt="Shoes" /></figure>
            <div className='mt-6'>
                {
                    details.length >200 ? <p>{details.slice(0,200)} 
                    <Link to={`/newsDetails/${_id}`} className='text-blue-600 font-bold'> Read more.....</Link></p>
                    :
                    <p>{details}</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNews: PropTypes.object
}

export default NewsCard;