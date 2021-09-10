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
        <div class="row">
          <div class="col-3 p-md-3  space-atas kiri">
            <div class="card card-light">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
            </div>
          </div>

          <div class="col-6 p-md-3 space-atas">
            <div class="card card-light">
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
              <h1>Hello h1</h1>
            </div>
          </div>

          <div class="col-3 p-md-3  space-atas kanan">
            <div class="card card-light">
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
