const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
const tempElement = document.querySelector('#template-element').content
const elements = document.querySelector('.elements');
const popupEditForm = document.querySelector('#popup__edit_form');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupAddForm = document.querySelector('#popup__add_form');
const buttonAdd = document.querySelector('.profile__add-button');

initialCards.forEach(function(elem) {
    const element = createElement(elem.link, elem.name);

    elements.append(element);
})

function createElement(url, title){
  const element = tempElement.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  elementImage.src = url;
  elementImage.alt = title;
  element.querySelector('.element__text').textContent = title;
  return element;


}


const openPopup = function(popup){
  {
    popup.classList.add('popup_opened');
  }
}

buttonEdit.addEventListener('click', () => openPopup(popupEditForm));
buttonAdd.addEventListener('click', () => openPopup(popupAddForm));

const formElementProfile = document.querySelector('#form_edit');
const formElementCard = document.querySelector('#form_add');
const nameInputProfile = formElementProfile.querySelector('#popup__input-name-edit');
const jobInputProfile = formElementProfile.querySelector('#popup__input-description-edit');
const nameInputCard = formElementCard.querySelector('#popup__input-name-add');
const jobInputCard = formElementCard.querySelector('#popup__input-description-add');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function handleFormSubmitInfo(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputProfile.value;
    profileDescription.textContent = jobInputProfile.value;
    closePopup(popupEditForm)();
}

const buttonCloseEdit = document.querySelector('#close_edit');
const buttonCloseAdd = document.querySelector('#close_add');
const buttonClosePic = document.querySelector('#close_pic');

const closePopup = function(popup){
  {
  popup.classList.remove('popup_opened');
  }
}
buttonCloseEdit.addEventListener('click', () => closePopup(popupEditForm));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAddForm));

formElementProfile.addEventListener('submit', handleFormSubmitInfo);
formElementCard.addEventListener('submit', AddCard);

function AddCard(evt){
  evt.preventDefault();
  const element = createElement(nameInputCard.value, jobInputCard.value)
  elements.prepend(element);
  jobInputCard.value = '';
  nameInputCard.value = '';
  closePopup(popupAddForm)();
}

const like = document.querySelectorAll('#like');
const trash = document.querySelector('#element__delete');
const elementImage = document.querySelector('#element__image');
const elementEditText = document.querySelector('#element__text');
const popupPicOpen = document.querySelector('#popup__pic_open');
const popupEditPic = document.querySelector('#popup__pic');
const popupEditText = document.querySelector('#popup__pic_title');

elements.addEventListener('click',function(evt)
{
  const target = evt.target;
  if (target.id === 'like'){
    target.classList.toggle('element__like_active');
  }
  if (target.id === 'element__delete'){
    target.closest('.element').remove('element');
  }
  if (target.id === 'element__image'){
    popupEditPic.src = target.src;
    popupEditPic.alt = target.alt;
    popupEditText.textContent = target.alt;
    console.log(target);

    openPopup(popupPicOpen)();
  }
})

buttonClosePic.addEventListener('click', () => closePopup(popupPicOpen));

