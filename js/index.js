var body = document.body;
// 登录窗口
var login_window = document.querySelector('.login_window');
// 登录按钮
var login_btn = document.querySelector('.login_btn');
login_btn.addEventListener('click', function () {
    login_window.style.display = 'block';
    body.style.overflow = 'hidden';
})

// QQ 微信登录切换
var qq_login = document.querySelector('.qq_login');
var wx_login = document.querySelector('.wx_login');
var qq_login_hide = document.querySelector('.qq_login_hide');
var wx_login_hide = document.querySelector('.wx_login_hide');
qq_login.addEventListener('click', function () {
    wx_login.style.color = '#000';
    wx_login_hide.style.display = 'none';
    qq_login_hide.style.display = 'block';
    qq_login.style.color = 'green';
})
wx_login.addEventListener('click', function () {
    qq_login.style.color = '#000';
    qq_login_hide.style.display = 'none';
    wx_login_hide.style.display = 'block';
    wx_login.style.color = 'green';
})

// 关闭按钮
var login_close = document.querySelector('.login_close');
login_close.addEventListener('click', function () {
    login_window.style.display = 'none';
    body.style.overflow = 'visible';
})

// 歌单推荐模块切换导航栏
var gdtj = document.querySelector('.gdtj');
var gd_hide = document.querySelectorAll('.gd_hide')
var gdtj_items = gdtj.querySelectorAll('.gdtj_items');
var wntj_hide = document.querySelector('.wntj_hide');
for (var i = 0; i < gdtj_items.length; i++) {
    gdtj_items[i].setAttribute('index', i);
    gdtj_items[i].onclick = function () {
        gdtj_items[0].style.color = '';
        this.style.color = '#31c27c';
        var index = this.getAttribute('index', i);
        wntj_hide.style.display = 'none';
        for (var i = 0; i < gd_hide.length; i++) {
            gd_hide[i].style.display = 'none';
        }
        gd_hide[index].style.display = 'block';
    }
    gdtj_items[i].onblur = function () {
        this.style.color = '';
    }
}
