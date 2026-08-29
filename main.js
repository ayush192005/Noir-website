import './style.css'

const service = document.querySelectorAll(".services");
const perviewImage = document.querySelectorAll(".perview-image1");

service.forEach((service) => {

  service.addEventListener("mouseenter", () => {

    const image = service.dataset.image;

    previewImage.src = image;

  });

});