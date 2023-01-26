import Letter from '../Letter/Letter';
import './titles.css';

const Titles = ({ first, second }) => {
  return (
    <div>
      <h3 className="first-title">{first}</h3>
      <h2 className="second-title">
        {second.split('').map((letter, i) =>
          letter === ' ' ? (
            <span key={i} className="space">
              {' '}
            </span>
          ) : (
            <Letter letter={letter} key={i} />
          )
        )}
      </h2>
    </div>
  );
};

export default Titles;
