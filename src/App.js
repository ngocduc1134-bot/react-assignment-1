import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile.js';
import imageAvatar from './images/avatar.jpg';


function App() {
  const profile = {
    name: "Trần Ngọc Đức",
    age: 28,
    gender: "Nam",
    career: "LTV",
    avatar: imageAvatar
  }
  return (
    <>
      <Profile
        name={profile.name}
        age={profile.age}
        gender={profile.gender}
        career={profile.career}
        avatar = {profile.avatar}
      />
    </>
  );
}

export default App;
