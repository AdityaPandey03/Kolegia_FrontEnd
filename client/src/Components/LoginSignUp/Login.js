import './Login.css'

const LoginSignUp = () => {

const handleClick1=()=>{
    document.getElementById("container").classList.add("right-panel-active");
}
const handleClick2=()=>{
    document.getElementById("container").classList.remove("right-panel-active");
}

    return ( 
        <div className="body">
        <div className="logo">
          <h1 className="title">Kolegia</h1>
        </div>
    
        <div className="container" id="container">
          <div className="form">
            <div className="form-container sign-up-container">
              <form className="signup-form" action="">
                <h1>Create Account</h1>
    
                <div>
                  <input
                    className="signup-name"
                    type="text"
                    name="name"
                    placeholder=" &#xf007;  Name"
                  />
                </div>
                <div>
                  <input
                    className="signup-email"
                    type="email"
                    name="email"
                    placeholder=" &#xf0e0;  Email"
                  />
                </div>
                <div>
                  <input
                    className="signup-password"
                    type="password"
                    name="password"
                    placeholder="&#xf023;  Password"
                  />
                </div>
                <button className="submit">SignUp</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="signin-form" action="#">
                <h1>Sign In</h1>
                <div>
                  <input
                    className="signin-email"
                    type="email"
                    name="email"
                    placeholder=" &#xf0e0;  Email"
                  />
                </div>
                <div>
                  <input
                    className="signin-password"
                    type="password"
                    name="password"
                    placeholder=" &#xf023;  Password"
                  />
                </div>
    
                <button className="submit">Sign In</button>
              </form>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>You're Welcome</h1>
                <p>Login to Enter the Kolegia</p>
                <button className="ghost" id="signIn" onClick={handleClick2}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hey, Buddy!</h1>
    
                <p>Oops! don't have an account? Signup</p>
                <button className="ghost" id="signUp" onClick={handleClick1}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
     );
}
 
export default LoginSignUp;