import './App.css';

import profPic from './assets/prof_pic.jpg';

function App() {
  return (
    <>
      <div>
        <h1>Profile</h1>
        <a rel="noreferrer">
          <img src={profPic} className="profile pic" alt="profile picture" />
        </a>
      </div>

      <p className="info">최서현</p>
    </>
  );
}

export default App;
