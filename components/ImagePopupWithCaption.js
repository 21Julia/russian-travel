import ImagePopup from './ImagePopup.js';

export default class ImagePopupWithCaption extends ImagePopup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupCaption = this._popup.querySelector('.popup__caption');
  };

  open(title) {
    super.open();

    this._popupCaption.textContent = title.textContent;
  };
};
