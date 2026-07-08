import './Profile.css';
import React, {useState} from 'react';
function Profile({name, age, gender, career, avatar}) {
    // const like = document.getElementById("btn-like");
    const [count, setCount] = useState(0);
    const totalLike = () => {
        setCount(count+1);
    }
    // like.addEventListener("click", () => {
    //     setCount(count+1);  
    // });

    return(
        <>
            <header>
                <h1 className="header-title">Personal Profile</h1>
                <ul className="list-contact">
                    <li className="contact-item"><a href="#" className="contact-link"><i className="fa-brands fa-facebook" title="go to facebook"></i></a></li>
                    <li className="contact-item"><a href="#" className="contact-link"><i className="fa-brands fa-github" title="go to bithub"></i></a></li>
                    <li className="contact-item"><a href="#" className="contact-link"><i className="fa-brands fa-instagram" title="go to instagram"></i></a></li>
                </ul>
            </header>
            <main>
                <section className="profile-section">
                    <button onClick={totalLike} className="btn-count-click" id="btn-like">Like</button>
                    <span className="total-click">Số lượt like: {count}</span>
                    <div className="section-content">
                        <div className="profile-image-wrapper">
                            <img src={avatar} alt="Ảnh đại diện" className="profile-image" />
                        </div>
                        <div className="profile-details">
                            <h2 className="profile-title">Thông tin cá nhân</h2>
                            <ul className="list-detail">
                                <li className="detail-item name">Họ và tên: {name}</li>
                                <li className="detail-item age">Tuổi: {age}</li>
                                <li className="detail-item gender">Giới tính: {gender}</li>
                                <li className="detail-item career">Nghề nghiệp: {career}</li>
                            </ul>
                        </div>
                        <div className="profile-skills">
                            <h2 className="profile-title">Các môn đã học</h2>
                            <ul className="list-skill">
                                <li className="skill-item"><abbr title="Prerequiresite">PRE</abbr></li>
                                <li className="skill-item"><abbr title="Foundations of Programming with C">FOUC</abbr></li>
                                <li className="skill-item"><abbr title="AI-driven Dynamix Website development">HTML 5</abbr></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
        
    );
}

export default Profile;