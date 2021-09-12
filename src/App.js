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
                      <a href="" class="subtitle text-muted">
                        Lihat Selengkapnya <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">Web Developer</span>
                      <br></br>
                      <a href="" class="subtitle text-muted">
                        Lihat Selengkapnya <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">Frontend Developer</span>
                      <br></br>
                      <a href="" class="subtitle text-muted">
                        Lihat Selengkapnya <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li class="listgroup-items">
                      <span class="title-head">BAckend Developer</span>
                      <br></br>
                      <a href="" class="subtitle text-muted">
                        Lihat Selengkapnya <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 p-md-3 space-atas tengah">
            <div class="card card-light content-warna">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
            </div>

            <div class="card card-light mt-3 content-warna">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
            </div>

            <div class="card card-light mt-3 content-warna">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
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
            <div class="card card-light content-warna">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
