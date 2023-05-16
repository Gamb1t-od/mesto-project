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
const ButtonEdit = document.querySelector('.profile__edit-button');
const popupAddForm = document.querySelector('#popup__add_form');
const ButtonAdd = document.querySelector('.profile__add-button');

for(let i=0;i<initialCards.length;i++){
    const element = tempElement.cloneNode(true);
    element.querySelector('.element__image').src = initialCards[i].link
    element.querySelector('.element__text').textContent = initialCards[i].name
    elements.append(element);
}


const openPopup = function(popup){
  return function()
  {
    popup.classList.add('popup_opened');
  }
}

ButtonEdit.addEventListener('click', openPopup(popupEditForm));
ButtonAdd.addEventListener('click', openPopup(popupAddForm));

const formElementProfile = document.querySelector('#form_edit');
const formElementCard = document.querySelector('#form_add');
const nameInputProfile = formElementProfile.querySelector('#popup__input-name-edit');
const jobInputProfile = formElementProfile.querySelector('#popup__input-description-edit');
const nameInputCard = formElementCard.querySelector('#popup__input-name-add');
const jobInputCard = formElementCard.querySelector('#popup__input-description-add');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputProfile.value;
    profileDescription.textContent = jobInputProfile.value;
    closePopup(popupEditForm)();
}

const ButtonCloseEdit = document.querySelector('#close_edit');
const ButtonCloseAdd = document.querySelector('#close_add');
const ButtonClosePic = document.querySelector('#close_pic');

const closePopup = function(popup){
  return function()
  {
  popup.classList.remove('popup_opened');
  }
}
ButtonCloseEdit.addEventListener('click', closePopup(popupEditForm));
ButtonCloseAdd.addEventListener('click', closePopup(popupAddForm));

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', AddCard);

function AddCard(evt){
  evt.preventDefault();
  const element = tempElement.cloneNode(true);
  element.querySelector('.element__image').src = jobInputCard.value;
  element.querySelector('.element__text').textContent = nameInputCard.value;
  elements.prepend(element);
}

const like = document.querySelectorAll('#like');
const trash = document.querySelector('#element__delete');
const ElementImage = document.querySelector('#element__image');
const ElementEditText = document.querySelector('#element__text');
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
    target.parentElement.remove('element');
  }
  if (target.id === 'element__image'){
    popupEditPic.src = target.src;
    popupEditText.textContent = target.nextElementSibling.firstElementChild.textContent;
    console.log(target);

    openPopup(popupPicOpen)();
  }
})

ButtonClosePic.addEventListener('click', closePopup(popupPicOpen));

