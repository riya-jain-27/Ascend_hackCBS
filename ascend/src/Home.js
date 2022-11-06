/* eslint-dsable*/
import "./Home.css";
function Home() {
    return (
        <section class="coloured">
            <div class="container-fluid">
                {/* <!----------------NAV BAR-----------------------> */}
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#">
                        <img class="logo" src="./images/logo.png" alt="" />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text active "
                                    aria-current="page"
                                    href="http://localhost:3001/logins"
                                    target="_"
                                >
                                    Login as Student
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="http://localhost:3001/loginc"
                                    target="_"
                                >
                                    Login as Company
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!---------------------------MAIN BODY------------------------> */}
                <div class="row main-row main">
                    <div class="col">
                        <h1>Simplifying Loans and Scholarships for Students</h1>
                    </div>
                    <div class="col web-col">
                        <img class="web-img" src="./images/loan.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
