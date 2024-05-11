import { Link } from 'react-router-dom';
import './styles.scss';

const HomeScreen = () => {
  return (
    <div className="home">
      <main>
        <h1>Qu Challenge</h1>
        <h2>To start the Jokes Challenge, press the button!</h2>
        <Link to="/jokes">Go to Jokes</Link>
      </main>
    </div>
  );
};

export default HomeScreen;
