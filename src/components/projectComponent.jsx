import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";


const ProjectComponent = ({ title, image, description, hrefgit, hrefpub, imgClassName }) => {
    return (
        <>
            <div>
                <div className='sm:max-w-[500px] border p-5 bg-slate-300 rounded-xl grid justify-items-center gap-5 
                hover:shadow-2xl md:transition-transform md:duration-500 md:transform md:hover:scale-110 hover:shadow-gray-600 '>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <img src={image} alt={title} className={`w-[400px] h-[200px] ${imgClassName}`}/> {/* Added alt text for better accessibility */}
                    <p className=''>{description}</p> {/* Fixed the backslash */}
                    <div className='flex sm:gap-24 gap-10 text-4xl cursor-pointer '>
                        <a title='click to open github repositry' href={hrefgit} target='_blank' className='hover:text-gray-500'><FaGithub /></a>
                        <a title='click to open thw website' href={hrefpub} target='_blank' className='hover:text-gray-500'><TbWorldCode /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

// Fixed the typo in propTypes (should be `propTypes` instead of `proptypes`)
ProjectComponent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hrefgit: PropTypes.string.isRequired,
    hrefpub: PropTypes.string.isRequired,
    imgClassName: PropTypes.string.isRequired,
};

export default ProjectComponent;
