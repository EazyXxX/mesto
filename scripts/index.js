const popupEdit = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_card');
const editPopupForm = document.querySelector('.popup__form_type_edit');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const openButtonEdit = document.querySelector('.profile__edit-button');
const openButtonCard = document.querySelector('.profile__plus-button');
const closeButtonEdit = document.querySelector('.popup__cross-button_type_edit');
const closeButtonCard = document.querySelector('.popup__cross-button_type_card');
const saveButton = popupEdit.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__description');

const openPopupEdit = function () {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubname.textContent;
}

const closePopupEdit = function () {
    popupEdit.classList.remove('popup_opened');
}

const openPopupCard = function () {
    popupCard.classList.add('popup_opened');
}

const closePopupCard = function () {
    popupCard.classList.remove('popup_opened');
}

openButtonEdit.addEventListener('click', openPopupEdit);
closeButtonEdit.addEventListener('click', closePopupEdit);
openButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', closePopupCard)

let nameInput = popupEdit.querySelector('.popup__input_type_name');
let jobInput = popupEdit.querySelector('.popup__input_type_subname');

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    closePopupEdit();
}

editPopupForm.addEventListener('submit', editFormSubmitHandler);


const elementsList = document.querySelector('#list');


function cardFormSubmitHandler(evt) {
    evt.preventDefault();
    let cardInput = document.querySelector('.popup__input_type_card-name').value;
let linkInput = document.querySelector('.popup__input_type_link').value;

const html = `
<li class="elements__card">
<img class="elements__image" src="${linkInput}" alt="${cardInput}">
<div class="elements__card-footer">
    <h2 class="elements__name">${cardInput}</h2>
    <button class="elements__like" type="button" aria-label="лайк">
    </button>
</div>
</li>
`
    elementsList.insertAdjacentHTML('afterbegin', html);
    closePopupCard();
}

cardPopupForm.addEventListener('submit', cardFormSubmitHandler);

const like = document.querySelectorAll('.elements__like');

console.log(like)

const getLike = function() {
    like.forEach(like.classList.toggle("elements__like_active"));
    like.addEventListener("click", getLike);
}

console.log(getLike)



