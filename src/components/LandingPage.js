import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import feather from 'feather-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/App.css';
import profil from '../img/profil.jpg';

function App() {
    React.useEffect(() => {
        feather.replace();
        AOS.init();
    }, []);

    return (
        <div className="App">
            <header className="bg-dark text-center py-3">
                <a
                    href="https://instagram.com/bang_jarrrz"
                    data-aos="fade-down"

                    className="text-white text-decoration-none fs-4 fw-bold"
                >
                    ALFAJJAR
                </a>
            </header>

            <section className="bio-section d-flex flex-column align-items-center my-5">
                <div className="profile-picture" data-aos="fade-up" data-aos-delay="100">
                    <img src={profil} alt="Profil" className="img-fluid rounded-circle border border-purple shadow" width={200} />
                </div>
                <div className="bio-info text-center mt-4">
                    <div className="d-flex justify-content-center my-5 mx-0">
                        <h2 data-aos="fade-right" data-aos-delay="200" className="text-warning shadow-text border-bottom w-50 text-center ">
                            Alfajjar || Just a student
                        </h2>
                    </div>
                    <p data-aos="fade-left" data-aos-delay="300" className="mb-0 text-warning">
                        I tend to prefer keeping quiet and not being too fond of speaking in
                        front of many people. However, an interesting aspect of my habits is
                        how I can switch to being a humorous person when among close friends.
                    </p>
                    <p data-aos="fade-right" data-aos-delay="400" className="mb-5 text-warning">
                        I really enjoy relaxed moments among those I know well, and this habit
                        allows me to showcase my humorous side that might not be apparent when
                        first meeting me.
                    </p>
                    <div className="sosmed my-5" data-aos="fade-down" data-aos-delay="300">
                        <a href="https://github.com/alfajarjaya" target='_blank' rel="noreferrer" className="text-dark mx-2"><i data-feather="github" color='#fff'></i></a>
                        <a href="https://www.linkedin.com/in/alfajjar-putra-4a2a83290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer" className="text-dark mx-2"><i data-feather="linkedin" color='#fff'></i></a>
                        <a href="https://x.com/PutraSnjaya?t=z39qpVDJ1jPKyHjnOZqMTQ&s=09" target='_blank' rel="noreferrer" className="text-dark mx-2"><i data-feather="twitter" color='#fff'></i></a>
                        <a href="https://www.facebook.com/alfajjar.alfajjar.90?mibextid=9R9pXO" target='_blank' rel="noreferrer" className="text-dark mx-2"><i data-feather="facebook" color='#fff'></i></a>
                        <a href="https://www.youtube.com/@AlfajjarSyachputra" target='_blank' rel="noreferrer" className="text-dark mx-2"><i data-feather="youtube" color='#fff'></i></a>
                    </div>
                    <div className="link-bio d-flex flex-column justify-content-center align-items-center">
                        <h3 data-aos="fade-down" data-aos-delay="300" className="text-warning shadow-text">About Me</h3>
                        <ul className="list-unstyled text-center w">
                            <li>
                                <a href="https://alfajjar.vercel.app" target='_blank' rel="noreferrer" className="text-decoration-none">
                                    <div className="bio-link d-flex justify-content-center align-items-center text-center my-3 bg-dark text-white rounded-pill py-3 px-5" data-aos="fade-down" data-aos-delay="300">
                                        <i data-feather="user" className="me-2"></i>
                                        <p className="mb-0">My Portfolio</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <h3 data-aos="fade-down" data-aos-delay="300" className="text-warning shadow-text">Source Code</h3>
                        <ul className="list-unstyled text-center w">
                            <li>
                                <a href="https://github.com/alfajarjaya" target='_blank' rel="noreferrer" className="text-decoration-none">
                                    <div className="bio-link d-flex justify-content-center align-items-center text-center my-3 bg-dark text-white rounded-pill py-3 px-5" data-aos="fade-down" data-aos-delay="350">
                                        <i data-feather="code" className="me-2"></i>
                                        <p className="mb-0">Code</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <h3 data-aos="fade-down" data-aos-delay="400" className="text-warning shadow-text">Contact Me</h3>
                        <ul className="list-unstyled text-center w">
                            <li>
                                <a href="https://instagram.com/bang_jarrrz" target='_blank' rel="noreferrer" className="text-decoration-none">
                                    <div className="bio-link d-flex justify-content-center align-items-center text-center my-3 bg-dark text-white rounded-pill py-3 px-5" data-aos="fade-down" data-aos-delay="500">
                                        <i data-feather="instagram" className="me-2"></i>
                                        <p className="mb-0">Instagram</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Njir_18" target='_blank' rel="noreferrer" className="text-decoration-none">
                                    <div className="bio-link d-flex justify-content-center align-items-center text-center my-3 bg-dark text-white rounded-pill py-3 px-5" data-aos="fade-down" data-aos-delay="550">
                                        <i data-feather="message-square" className="me-2"></i>
                                        <p className="mb-0">Telegram</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer className="text-center py-3 bg-dark text-white">
                <p>&copy; 2023 <a href="https://bangjarrr.github.io" className="text-decoration-none text-white">alfajjar</a></p>
            </footer>
        </div>
    );
}

export default App;
