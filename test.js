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

function check(event) {
    var fullname = document.getElementById("fname");
    var checkfn = /^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ]+$/gm;
    console.log(fullname);
    if(fullname.value == "" || !fullname.value.match(checkfn)) {
      alert("Nhap full name");
      fullname.style.borderColor="red";
      fullname.focus();
      event.preventDefault();
      return false;
    }
    var pnmuber = document.getElementById("pnumber");
    var checkpn = /^[\d]{10}$/gm;
    console.log(pnumber);
    if(!pnumber.value.match(checkpn)) {
      alert("Invalid Phone Number");
      pnumber.style.borderColor="red";
      pnumber.focus();
      event.preventDefault();
      return false;
    }
    var password = document.getElementById("password");
    console.log(password);
    if(password.value=="") {
        alert("Nhap password");
        password.style.borderColor="red";
        password.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if(x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
              <br>
              <input
                required
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label for="pnumber">Phone number</label>
              <br>
              <input
                required
                type="text"
                id="pnumber"
                name="pnmuber"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <br>
              <input required type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label for="password">Password</label>
              <br>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="New password"
              />
            </div>
            <div>
              <label for="password">
            </div>
            <div>
              <label for="birthday">Date of Birth</label>
              <br>
              <input required type="date" id="birthday" name="birthday" />
            </div>
            <div>
              <label for="gender">Gender</label>
              <input required type="radio" id="gender" name="gender" />
              <label for="male">Male</label>
              <input required type="radio" id="gender" name="gender" />
              <label for="female">Female</label>
            </div>
            <div>
                <input type="submit" value="Sign Up"/>
            </div>

        </div>
    `
}

var searchParams = location.search.split("?");
switch (searchParams[1]) {
 
  case '1':
     renderCar()
    break;
  case '2':
    renderMoHinh()    
    break;
  case '3':

  default :
    renderDragonBall()
  break;
}

function renderHome() {
  document.getElementById("cmenu").innerHTML = `        <div class="container">
        </div>`
}

function renderDragonBall() {
  document.getElementById("cmenu").innerHTML = `        <div class="container">
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://github.com/lmtvinh/webbh/raw/main/image/son_go_ku.jpg" alt="Mô hình sản phẩm" >
          </div>
        </div>`
}

function renderCar() {
  document.getElementById("cmenu").innerHTML = `        <div class="container">
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
        </div>`
}

function renderNaruto() {
  document.getElementById("cmenu").innerHTML `
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
          <div id="sp_img">
            <img src="https://th.bing.com/th/id/OIP.N64Owy-0ThsI3k8xX8vjDQHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="Mô hình sản phẩm" >
          </div>
  `
}