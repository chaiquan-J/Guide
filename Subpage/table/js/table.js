// 页面加载
window.onload = function () {
  var item = document.getElementsByClassName("table_item");
  var it = item[0].getElementsByTagName("div");

  var content = document.getElementsByClassName("table_center");
  var con = content[0].getElementsByTagName("div");

  for (let i = 0; i < it.length; i++) {
    it[i].onclick = function () {
      for (let j = 0; j < it.length; j++) {
        it[j].className = '';
        con[j].style.display = "none";
      }
      this.className = "active";
      it[i].index = i;
      con[i].style.display = "block";
    }
  }
}

function checkName() {
  var flag_name = false;
  var name = document.getElementById('name');
  var span_name = document.getElementById('span_name');
  if (name.value.length == 0) {
    span_name.style.display = "initial";
    flag_name = false;
  } else {
    span_name.style.display = "none";
    flag_name = true;
  }
  return (flag_name);
}

function checkPwd() {
  var flag_pwd = false;
  var reg_fpwd = /^[0-9]{6,}$/;
  var pwd = document.getElementById("pwd").value;
  var span_pwd = document.getElementById("span_pwd");
  if (pwd.length < 6) {
    span_pwd.style.display = "initial";
    flag_pwd = false;
  } else {
    if (!reg_fpwd.test(pwd)) {
      span_pwd.style.display = "initial";
      flag_pwd = false;
    } else {
      span_pwd.style.display = "none";
      flag_pwd = true;
    }
  }
  return (flag_pwd);
}

function checkUsername() {
  var flag_username = false;
  var username = document.getElementById('username');
  var span_username = document.getElementById('span_username');
  if (username.value.length == 0) {
    span_username.style.display = "initial";
    flag_username = false;
  } else {
    span_username.style.display = "none";
    flag_username = true;
  }
  return (flag_username);
}

function checkUserpwd() {
  var flag_userpwd = false;
  var reg_fpwd = /^[0-9]{6,}$/;
  var userpwd = document.getElementById("userpwd").value;
  var span_userpwd = document.getElementById("span_userpwd");
  if (userpwd.length < 6) {
    span_userpwd.style.display = "initial";
    flag_userpwd = false;
  } else {
    if (!reg_fpwd.test(userpwd)) {
      span_userpwd.style.display = "initial";
      flag_userphone = false;
    } else {
      span_userpwd.style.display = "none";
      flag_userphone = true;
    }
  }
  return (flag_userpwd);
}

function checkUserphone() {
  var flag_userphone = false;
  var reg_phone = /^[1]{1}[0-9]{10}$/;
  var userphone = document.getElementById("userphone").value;
  var span_userphone = document.getElementById("span_userphone");
  if (userphone.length < 6) {
    span_userphone.style.display = "initial";
    flag_userphone = false;
  } else {
    if (!reg_phone.test(userphone)) {
      span_userphone.style.display = "initial";
      flag_userphone = false;
    } else {
      span_userphone.style.display = "none";
      flag_userphone = true;
    }
  }
  return (flag_userphone);
}

function chlik_sub() {
  console.log(checkName());
  // checkName()
  // checkPwd()
  // checkUsername()
  // checkUserpwd()
  // checkUserphone()
}

function checkForm() {
  var flag = checkName()
  console.log(flag)
  return flag;
  // if(this.flag_pwd){
  //   console.log(123456)
  //   window.location.href="../../index.html";
  // }
  // window.location.href="../../index.html";
  //   console.log(789)
  // }

}

function resetBtn() {
  document.getElementById("Resetform").reset();
}