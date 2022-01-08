// import './header.js' //引入组件

class Movie extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.template();
    }
    template() {
        return `
        <style>
            * {
            margin: 0;
            padding: 0;
            text-decoration: none;
            list-style: none;
            box-sizing: border-box;
            }

            body {
                font-family: montserrat;
            }
            nav {
                background: #2e3458;
                height: 80px;
                width: 100%;
                position: fixed;
                top: 0;
                z-index: 99;
                /* display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between; */
            }
            nav ul {
                float: right;
                margin-right: 20px;
            }
            nav ul li {
                display: inline-block;
                list-style: none;
                line-height: 80px;
                margin: 0 5px;
            }
            nav ul li a {
                color: #fff;
                font-size: 18px;
                padding: 7px 13px;
                border-radius: 3px;
                text-transform: uppercase;
            }
            nav a.action,
            nav a:hover {
                background: #1b9bff;
                transition: 0.5s;
            }
            nav .checkbtn {
                float: right;
                line-height: 100px;
                margin-right: 40px;
                cursor: pointer;
                display: none;
            }
            nav #check {
                display: none;
            }
            nav .checkbtn_img {
                width: 35px;
                height: 35px;
            }
            label .logo {
                color: #fff;
                font-size: 30px;
                line-height: 80px;
                padding: 0 100px;
                font-weight: bold;
            }
            label .logo_img {
                width: 113px;
                margin-left: 50px;
            }

            @media (max-width: 950px) {
                label .logo {
                  font-size: 30px;
                  padding-left: 50px;
                }
                nav ul {
                  position: fixed;
                  width: 100%;
                  height: 70vh;
                  background: #2c3e50;
                  top: 80px;
                  left: -100%;
                  text-align: center;
                  transition: all 0.5s;
                }
                nav ul li {
                  display: block;
                }
                nav ul li a {
                  font-size: 20px;
                }
                nav a.action,
                nav a:hover {
                  background: none;
                  color: #6dadee;
                }
                nav .checkbtn {
                  display: block !important;
                }
                nav #check:checked ~ ul {
                  left: 0;
                }
              }
        </style>

        
        <nav>
            <input type="checkbox" id="check">
            <label class="checkbtn" for="check">
                <img class="checkbtn_img" src="images/ul.png" alt="列表">
            </label>
            <label>
                <img src="images/logo.png" alt="" class="logo_img">
            </label>
            <ul>
                <li><a href="#">精选</a></li>
                <li><a href="#">电视剧</a></li>
                <li><a class="action" href="#">电影</a></li>
                <li><a href="#">综艺</a></li>
                <li><a href="#">纪录片</a></li>
                <li><a href="Subpage/table/table.html">注册/登录</a></li>
            </ul>
            <!-- <form action="#">
            <input type="search" placeholder="search" class="search_data" required>
            <button type="submit">
                <img src="images/search.png" alt="" srcset="">
            </button>
            </form> -->
        </nav>
		`;
    }
    // 生命周期：首次被插入文档DOM时
    connectedCallback() {
        console.log('template element is connected');
    }
    // 生命周期：从文档DOM中删除时
    disconnectedCallback() {
        console.log(1111);
    }
    // 生命周期：被移动到新的文档时
    adoptedCallback() {
        console.log(22222);
    }

    // 生命周期：监听属性变化
    attributeChangedCallback() {
        console.log(3333333);
    }
}
// 组件暴露接口
customElements.define('movie-nav', Movie);