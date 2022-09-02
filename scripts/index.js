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
const linkInput = document.querySelector('.popup__input_type_link').value;
const cardInput = document.querySelector('.popup__input_type_card-name').value;
const templateElement = document.querySelector('.template');

function addCard(e) {
    e.preventDefault();
    const newCardElement = templateElement.content.cloneNode(true);
    const linkInput = document.querySelector('.popup__input_type_link').value;
    const cardInput = document.querySelector('.popup__input_type_card-name').value;
    newCardElement.querySelector('.elements__name').textContent = cardInput;
    newCardElement.querySelector('.elements__image').alt = cardInput;
    newCardElement.querySelector('.elements__image').src = linkInput;

    //deletion
    newCardElement.querySelector('.elements__delete-button').addEventListener("click", (e) => {
        const elementItem = e.target.closest('.elements__card');
        elementItem.remove();
    }
    );

    elementsList.prepend(newCardElement);
    closePopupCard();

    //like
    const newLike = document.querySelector('.elements__like');
    const getNewLike = function (button) {
        button.addEventListener("click", () => {
            button.classList.toggle('elements__like_active');
        })
    };
    getNewLike(newLike);
}

cardPopupForm.addEventListener('submit', addCard);

const like = document.querySelectorAll('.elements__like');

const getLike = like.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle('elements__like_active');
    });
});

const cards = document.querySelectorAll('.elements__card');

const glebCard = document.querySelector('.elements__card_type_gleb');
const ilyaCard = document.querySelector('.elements__card_type_ilya');
const germanCard = document.querySelector('.elements__card_type_german');
const jurezCard = document.querySelector('.elements__card_type_jurez');
const pashaCard = document.querySelector('.elements__card_type_pasha');
const mishaCard = document.querySelector('.elements__card_type_misha');

glebCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

ilyaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

germanCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

jurezCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

pashaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

mishaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);

