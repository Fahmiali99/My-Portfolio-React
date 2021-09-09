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
      <section id="home"></section>
    </main>
  );
}

export default App;
