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
                                            <input type="text" name="name" class="login__input" placeholder="Username" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="password" name="password" class="login__input" placeholder="Password" />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="companyname" class="login__input" placeholder="Company name" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="phonenumber" class="login__input" placeholder="Contact number" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="text" name="gstno" class="login__input" placeholder="GST No." />
                                        </div>	
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" name="max_loan" class="login__input" placeholder="Max Loan Permissible" />
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