// const techtabs = (id) => {
//     document.getElementById('tech-title').innerText = "The Best Managed Cloud Hosting for " + id;
//     document.querySelector('.tech-group-row-active').classList.remove('tech-group-row-active');
//     document.getElementById(id).classList.add('tech-group-row-active');
// }

document.addEventListener("DOMContentLoaded", () => {
  contchange("Wordpress");
});

const contchange = (id) => {
  // console.log("functioniscalling")
  document.getElementById(
    "langcont"
  ).innerHTML = `<div class="tech-title" id="tech-title">
    <h3>The Best Managed Cloud Hosting for ${id}</h3>
    <p>
      We live and breathe ${id}. Our managed hosting for ${id} and
      WooCommerce takes away cloud server related hassles so you can
      scale your website the way you want.
    </p>
    <div class="band">
      <img src="Vector.png" alt="vactor" id="vector" />
      <h5>Unlimited Bandwidth</h5>
      <img src="Vector.png" alt="vector" id="vector" />
      <h4>Network Speed</h4>
    </div>
    <div class="power">
      <img src="Vector.png" alt="vector" id="vector" />
      <h5>Turbo Power</h5>
      <img src="Vector.png" alt="vector" id="vector" />
      <h4>Xtreme Freedom</h4>
    </div>
    <button class="morede">More Detail</button>
  </div>`;
};

const scroller = (id) => {
  if (id == "left") {
    document.getElementById("infinite-row").scrollLeft -= 200;
  } else if (id == "right") {
    document.getElementById("infinite-row").scrollLeft += 200;
  }
};
