import ImagePopup from '../components/ImagePopup.js';
import ImagePopupWithCaption from '../components/ImagePopupWithCaption.js'

const photosGrid = document.querySelectorAll('.photo-grid__item');
const places = document.querySelectorAll('.place');
const footer = document.querySelector('.footer__copyright');

const year = new Date().getFullYear();

footer.textContent = `© ${year}. Курганова Юлия`;

const imagePopup = new ImagePopup('.popup_type_image');
const imagePopupWithCaption = new ImagePopupWithCaption('.popup_type_image-caption');

photosGrid.forEach((photo) => {
  photo.addEventListener('click', () => {
    imagePopup.keepInformation(photo);
    imagePopup.open();
  });
});

places.forEach((place) => {
  const image = place.querySelector('.place__image');
  const title = place.querySelector('.place__title');

  image.addEventListener('click', () => {
    imagePopupWithCaption.keepInformation(image);
    imagePopupWithCaption.open(title);
  });
})

imagePopup.setEventListeners();
imagePopupWithCaption.setEventListeners();
