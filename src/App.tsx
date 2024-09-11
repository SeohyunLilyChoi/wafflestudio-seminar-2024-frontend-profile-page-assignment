import './App.css';

import profPic from './assets/prof_pic.jpg';

function App() {
  return (
    <>
      <h1>Profile</h1>
      <div id="info-box">
        <div className="info">
          <img src={profPic} id="profile-pic" alt="profile picture" />
        </div>

        <div className="info">
          <div className="info-name">
            <p id="name">최서현</p>
            <p id="name_eng">Choi Seohyun</p>
          </div>

          <div className="info-details">
            <p id="major">언어학과 21학번</p>
            <p id="mbti">INFP</p>
            <p id="email">lily_choi7@snu.ac.kr</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
