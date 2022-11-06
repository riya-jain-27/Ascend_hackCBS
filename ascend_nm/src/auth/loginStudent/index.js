import React from "react";
import { Grid } from "@mui/material";
import logo from "../../images/logo1.png";
import vector from "../../images/help.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {  
    const navigate = useNavigate();

    const signinStudent= () => {
        navigate("/signs");
    }
    
    return(
        <>
            <Grid container className="root">
                <Grid item lg={6} md={6} sm={12} xs={12} className="leftItem">
                    <p className="text">Welcome to</p>
                    <img src={logo} className="image" alt=""></img>
                    <img src={vector} className="right_image" alt="" />                    
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}> 
                    <div class="container">
                        <div class="screen">
                            <div class="screen__content">
                                <div style={{padding: "20px", paddingLeft: "22px"}}>
                                    <h4 style={{color: "#c66021"}}>Not a member yet? <span style={{textDecoration: "underline", fontWeight: "800", cursor: "pointer"}} onClick={signinStudent}>Sign Up</span></h4>
                                </div>
                                <form class="login">
                                    <div style={{paddingBottom: "20px"}}>
                                        <h2 style={{color: "#c66021"}}>Student Login</h2>
                                    </div>
                                    <div class="login__field">
                                        <i class="login__icon fas fa-user"></i>
                                        <input type="text" class="login__input" placeholder="User name / Email" />
                                    </div>
                                    <div class="login__field">
                                        <i class="login__icon fas fa-lock"></i>
                                        <input type="password" class="login__input" placeholder="Password" />
                                    </div>
                                    <button class="button login__submit">
                                        <span class="button__text">Log In Now</span>
                                        <i class="button__icon fas fa-chevron-right"></i>
                                    </button>				
                                </form>
                                <div class="social-login">
                                    <h3>log in via</h3>
                                    <div class="social-icons">
                                        <a href="#" class="social-login__icon fab fa-instagram"><InstagramIcon /></a>
                                        <a href="#" class="social-login__icon fab fa-facebook"><FacebookIcon /></a>
                                        <a href="#" class="social-login__icon fab fa-twitter"><TwitterIcon /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="screen__background">
                                <span class="screen__background__shape screen__background__shape4"></span>
                                <span class="screen__background__shape screen__background__shape3"></span>		
                                <span class="screen__background__shape screen__background__shape2"></span>
                                <span class="screen__background__shape screen__background__shape11"></span>
                            </div>		
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;