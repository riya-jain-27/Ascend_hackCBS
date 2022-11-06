import React from "react";
import { Grid, Button } from "@mui/material";
import logo from "../../images/logo1.png";
import vector from "../../images/help.png";
import "./styles.css";

const Login = () => {   
    return(
        <>
            <Grid container className="root">
                <Grid item lg={6} md={6} sm={12} xs={12} className="leftItem">
                    <p className="text">Welcome to</p>
                    <img src={logo} className="image" alt=""></img>
                    <Button variant="contained" class="submit_button">Sign Up!</Button>
                    <img src={vector} className="right_image" alt="" />                    
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}> 
                    <div class="container">
                        <div class="screen">
                            <div class="screen__content">
                                <form class="login">
                                    <div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="email" name="email" class="login__input" placeholder="Email" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="password" name="password" class="login__input" placeholder="Password" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="name" class="login__input" placeholder="Full Name" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="Mygender" class="login__input" placeholder="Gender" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="phonenumber" class="login__input" placeholder="Phone Number" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="about" class="login__input" placeholder="About Yourself" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="address" class="login__input" placeholder="Address" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="location" class="login__input" placeholder="Location" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="category" class="login__input" placeholder="Category (SC/ST etc.)" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="familyincome" class="login__input" placeholder="Family Income" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="amount" class="login__input" placeholder="Loan Amount needed" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="stream" class="login__input" placeholder="Stream" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="specification" class="login__input" placeholder="Specification" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="currentclass" class="login__input" placeholder="Current qualification" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="marks10" class="login__input" placeholder="CPGA in 10th" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="marks12" class="login__input" placeholder="CPGA in 12th" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="marksGPA" class="login__input" placeholder="CPGA in college" />
                                        </div>	
                                        <div class="login__field">
                                            <label class="login__icon fas fa-lock" for="resume" style={{marginTop: "-20px"}}>Resume:</label>
                                            <input type="file" name="resume" class="login__input" placeholder="Resume" />
                                        </div>	
                                        <div class="login__field">
                                            <label class="login__icon fas fa-lock" for="resume" style={{marginTop: "-20px"}}>Official documents (single pdf):</label>
                                            <input type="file" name="gradegree" class="login__input" placeholder="Official docs" />
                                        </div>	
                                        <div class="login__field">
                                            <label class="login__icon fas fa-lock" for="resume" style={{marginTop: "-20px"}}>Profile photo:</label>
                                            <input type="file" name="picture" class="login__input" placeholder="Profile picture" />
                                        </div>	
                                    </div>			
                                </form>
                            </div>
                            <div class="screen__background">
                                <span class="screen__background__shape screen__background__shape4"></span>
                                <span class="screen__background__shape screen__background__shape3"></span>		
                                <span class="screen__background__shape screen__background__shape2"></span>
                                <span class="screen__background__shape screen__background__shape1"></span>
                            </div>		
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;