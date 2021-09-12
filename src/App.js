import logo from "./logo.svg";
import "./App.css";

function App() {
  // Responsive Navigasi Bar
  const menu = document.querySelector(".menu-list");
  const menuBtn = document.querySelector(".menu-btn");
  const cencelBtn = document.querySelector(".cencel-btn");
  const body = document.querySelector("body");

  menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("active");
    body.classList.add("disabledScroll");
  };

  cencelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("disabledScroll");
  };

  return (
    <main>
      <section id="home">
        <div class="row content">
          <div class="col-3 p-md-3 space-atas kiri">
            <div class="card card-light content-warna">
              <div class="container p-md-3">
                <h3 id="cate">Category</h3>
                <hr></hr>
                <div class="isi-cate">
                  <ul class="listgroup-container">
                    <li class="listgroup-items">
                      <span class="title-head">Famework</span>
                      <br></br>
                      <a href="#" class="subtitle text-muted">
                        See more <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">Web Developer</span>
                      <br></br>
                      <a href="#" class="subtitle text-muted">
                        See more <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">Frontend Developer</span>
                      <br></br>
                      <a href="#" class="subtitle text-muted">
                        See more <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">Backend Developer</span>
                      <br></br>
                      <a href="#" class="subtitle text-muted">
                        See more <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 p-md-3 space-atas tengah">
            <div class="card card-light content-warna">
              <div class="cointainer p-md-3">
                <h1 id="title-content">What's React?</h1>
                <hr></hr>
                <div class="cointainer text-center ">
                  <img
                    class="react"
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  ></img>
                </div>

                <h6>
                  ReactJS offers graceful solutions to some of front-end
                  programming’s most persistent issues, allowing you to build
                  dynamic and interactive web apps with ease. It’s fast,
                  scalable, flexible, powerful, and has a robust developer
                  community that’s rapidly growing. There’s never been a better
                  time to learn React.
                  <a
                    class="see-more"
                    href="https://www.codecademy.com/learn/react-101?g_network=g&g_device=c&g_adid=518718871323&g_keyword=%2Breact.js&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=126771679424&g_keywordid=kwd-302016649835&g_campaign=ROW+Language%3A+Basic+-+Broad&g_campaignid=10947274266&utm_id=t_kwd-302016649835:ag_126771679424:cp_10947274266:n_g:d_c&utm_term=%2Breact.js&utm_campaign=ROW%20Language%3A%20Basic%20-%20Broad&utm_source=google&utm_medium=paid-search&utm_content=518718871323&hsa_acc=2430397011&hsa_cam=10947274266&hsa_grp=126771679424&hsa_ad=518718871323&hsa_src=g&hsa_tgt=kwd-302016649835&hsa_kw=%2Breact.js&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwyvaJBhBpEiwA8d38vLfOxmaSelMqayphde5iWeUrDKOxZtMaQ8mTtn7xOz9y6TIAmUVguhoC_boQAvD_BwE"
                  >
                    See more
                  </a>
                </h6>
              </div>
            </div>

            <div class="card card-light mt-3 content-warna">
              <div class="cointainer p-md-3">
                <h1 id="title-content">How to use Laravel?</h1>
                <hr></hr>
                <div class="cointainer text-center mb-3">
                  <img
                    class="laravel"
                    src="https://www.duniailkom.com/wp-content/uploads/2020/03/Laravel-Featured-Image.png"
                  ></img>
                </div>

                <h6>
                  Laravel is a web application framework with expressive,
                  elegant syntax. We believe development must be an enjoyable
                  and creative experience to be truly fulfilling. Laravel
                  attempts to take the pain out of development by easing common
                  tasks used in most web projects.
                  <a class="see-more" href="https://laravel.com/">
                    See more
                  </a>
                </h6>
              </div>
            </div>

            <div class="card card-light mt-3 content-warna">
              <div class="cointainer p-md-3">
                <h1 id="title-content">How to be a Frontend Developer?</h1>
                <hr></hr>
                <div class="cointainer text-center ">
                  <img
                    class="frontend"
                    src="https://cdn-ak.f.st-hatena.com/images/fotolife/s/serip39/20200715/20200715002753.png?changed=1594740743"
                  ></img>
                </div>

                <h6>
                  Vue.js and React.js are two frontend JavaScript frameworks
                  popular in the developer world, with React taking the top spot
                  on the podium for three consecutive years now. Both tools
                  offer developers a productive approach to building various Web
                  applications, but each has its own best use cases and responds
                  to different business needs. In this article, we’ll explore
                  what those use cases can be, along with perks that make Vue.js
                  and React unique.
                  <a
                    class="see-more"
                    href="https://www.monterail.com/blog/vue-vs-react-2021"
                  >
                    See more
                  </a>
                </h6>
              </div>
            </div>
          </div>

          <div class="col-3 pencarian">
            <div class="card card-light content-warna">
              <div class="container cari">
                <input
                  type="text"
                  class="form-control cc"
                  name="search"
                  placeholder="Search..."
                ></input>
              </div>
            </div>
          </div>

          <div class="col-3 p-md-3 space atas kanan">
            <div class="card card-light content-warna p-md-3">
              <h3 id="cate">Popular Post</h3>
              <hr></hr>
              <div class="isi-cate">
                <ul class="listgroup-container">
                  <li class="listgroup-items">
                    <span class="title-head">What's React?</span>
                    <br></br>
                    <a href="#" class="subtitle text-muted">
                      See more <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="listgroup-items">
                    <span class="title-head">How to use Laravel?</span>
                    <br></br>
                    <a href="#" class="subtitle text-muted">
                      See more <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li class="listgroup-items">
                    <span class="title-head">
                      How to be a Frontend Developer?
                    </span>
                    <br></br>
                    <a href="#" class="subtitle text-muted">
                      See more <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
