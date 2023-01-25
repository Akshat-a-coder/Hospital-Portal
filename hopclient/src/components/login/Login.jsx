// import React from 'react'
// import "./login.css";

// import { FaChevronRight } from 'react-icons/fa';

// function App () {
  
//   return (
// 	<div class="main">  	
// 		<input type="checkbox" id="chk" aria-hidden="true"></input>

// 			<div class="signup">
// 				<form>
// 				 <label for="chk" aria-hidden="true">Patient's Registration</label>
//                   <div className='form'>
// 					<input type="text" name="txt" placeholder="Name" required=""></input>
//                     <select id="cars" name="cars" placeholder='Gender'>
//                        <option value="volvo">Male</option>
//                        <option value="saab">Female</option>
//                        <option value="fiat">Others</option>
//                     </select>
// 					<input type="number" name="ummr" placeholder="Age" required=""></input>
// 					<input type="tel" name="call" placeholder="Mobile Number" required=""></input>
// 					<button>Register</button>
//                    </div> 
// 				</form>
// 			</div>

// 			<div class="login">
// 				<form>
// 					<label for="chk" aria-hidden="true" className='doc'>Doctor's Login</label>
// 					<input type="email" name="email" placeholder="Email" required=""></input>
// 					<input type="password" name="pswd" placeholder="Password" required=""></input>
// 					<button>Login</button>
// 				</form>
// 			</div>
// 	</div>
//   )
// }



// export default App




import React from 'react'
import "./login.css";
import {FaChevronRight} from 'react-icons/fa';



function App () {
  
  return (
    <div class="login--container">
	<div class="login--screen">
		<div class="login--screen__content">
			<form class="login--login">
                <label> Doctor's Login</label>
				<div class="login--login__field">
					<i class="login--login__icon fas fa-user"></i>
					<input type="text" class="login--login__input" placeholder="User name / Email"></input>
				</div>
				<div class="login--login__field">
					<i class="login--login__icon fas fa-lock"></i>
					<input type="password" class="login--login__input" placeholder="Password"></input>
				</div>
				<button class="login--button login__submit">
					<span class="login--button__text">Log In Now</span>
					<FaChevronRight class='login--button__icon' />
				</button>				
			</form>
		</div>
		<div class="login--screen__background">
			<span class="login--screen__background__shape screen__background__shape4"></span>
			<span class="login--screen__background__shape screen__background__shape3"></span>		
			<span class="login--screen__background__shape screen__background__shape2"></span>
			<span class="login--screen__background__shape screen__background__shape1"></span>
		</div>	
        <input type="checkbox" id='login--chk' ></input>
        <div class="login--create">
				<form>
					<label for='login--chk' >Create an Account</label>
                    <input type="text" class="login--login__input" placeholder="Name"></input>
                    <input type="text" class="login--login__input" placeholder="User name / Email"></input>
                    <input type="text" class="login--login__input" placeholder="Mobile Number"></input>
                    <input type="password" name="pswd" class="login--login__input" placeholder="Password" ></input>
					<button class="login--btn">
					     <span class="login--button__text">Create an Account</span>
					     <FaChevronRight class='login--button__icon' />
				    </button>	
				</form>
		</div>	
	</div>
</div>
  )
}



export default App