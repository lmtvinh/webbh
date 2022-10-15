function open_signup() {
    document.getElementById("modal").hidden = false;
    onchangetosignup();
}
function close_signup() {
    document.getElementById("modal").hidden = true;
}

function open_signin() {
    document.getElementById("modal").hidden = false;
    onchangetosignin();
}

function onchangetosignin() {
    document.getElementById("formauth").innerHTML = `
        <div id="signin">
            <div id="close">
              <input type="button" class="close" value="x" onclick="close_signup()" />
            </div>
            <div>
              <label for="username">User Name</label>
              <input type="text" id="username" name="username" placeholder="User Name">
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Newpassword">
            </div>
            <div>
              <input type="submit" value="Sign In" onclick="close_signup()">
            </div>
        </div>
    `
}

function onchangetosignup() {
    document.getElementById("formauth").innerHTML = `
        <div id="signup">
            <div id="close">
                <input type="button" class="close" value="x" onclick="close_signup()" />
            </div>
            <h2>SIGN UP</h2>
            <div>
              <label for="fullname">Full name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label for="pnumber">Phone number</label>
              <input
                type="text"
                id="pnumber"
                name="pnmuber"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="New password"
              />
            </div>
            <div>
              <label for="birthday">Date of Birth</label>
              <input type="date" id="birthday" name="birthday" />
            </div>
            <div>
              <label for="gender">Gender</label>
              <input type="radio" id="gender" name="gender" />
              <label for="male">Male</label>
              <input type="radio" id="gender" name="gender" />
              <label for="female">Female</label>
            </div>
            <div>
                <input type="submit" value="Sign Up" onclick="close_signup()" />
            </div>

        </div>
    `
}