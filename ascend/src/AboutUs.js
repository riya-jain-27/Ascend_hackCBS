import React from "react";
import "./AboutUs.css";
function AboutUs() {
    return (
        <section class="sub-coloured" id="whyuss">
            <div class="sub-not-coloured row">
                <div class="col whyus-col-1">
                    <h5>Why Us?</h5>
                    <p>
                        We act as a bridge between students who need financial
                        assistant and companies with similar CSR policies.
                    </p>
                </div>
                <div class="whyus-col-2 col">
                    <div class="sub-not-coloured">
                        <h3>
                            <img src="./images/paperless.png" />
                            100% Paperless Process
                        </h3>
                    </div>
                    <div class="sub-not-coloured">
                        <h3>
                            <img src="./images/document.png" />
                            Minimal Documentation
                        </h3>
                    </div>
                    <div class="sub-not-coloured">
                        <h3>
                            <img src="./images/shield.png" />
                            Simple & Secure Process
                        </h3>
                    </div>
                    <div class="sub-not-coloured">
                        <h3>
                            <img
                                class="cpp-img"
                                src="./images/credit-score.png"
                            />
                            Unique Credit Score Algo
                        </h3>
                    </div>

                    <div class="sub-not-coloured">
                        <h3>
                            <img src="./images/headphone.png" />
                            24/7 Customer Support
                        </h3>
                    </div>
                </div>
            </div>
            {/* <!------------------CONTACT ME----------------> */}
            <div class="contact-me row" id="contact-me">
                <div class="col">
                    <h4>Contact Us</h4>
                    <p class="p-contact">
                        Raise your queries at
                        <a href="mailto:queries@ascend.tech" target="_">
                            <span> queries@ascend.tech </span>
                        </a>
                        <br></br>
                        or WhatsApp @
                        <span>
                            <a
                                href="https://api.whatsapp.com/send/?phone=919711068667"
                                target="_"
                            >
                                {" "}
                                9711068667{" "}
                            </a>
                        </span>
                        <br />
                        Connect with us using any of the following social media
                        handles.
                    </p>
                </div>
                <div class="col logo-col">
                    <div class="logo-div ">
                        <img
                            target="_blank"
                            class="social-logo"
                            src="./images/linkedin.png"
                            alt="linkedin"
                        />
                    </div>
                    <div class="logo-div ">
                        <img
                            target="_blank"
                            class="social-logo"
                            src="./images/instagram.png"
                            alt="instagram"
                        />
                    </div>
                    <div class="logo-div ">
                        <img
                            target="_blank"
                            class="social-logo"
                            src="./images/email.png"
                            alt="email"
                        />
                    </div>
                    <div class="logo-div ">
                        <img
                            target="_blank"
                            class="social-logo"
                            src="./images/twitter.png"
                            alt="twitter"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutUs;
