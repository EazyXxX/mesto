const popupEdit = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_card');
const popupPicture = document.querySelector('.popup_type_picture');
const editPopupForm = document.querySelector('.popup__form_type_edit');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const openButtonEdit = document.querySelector('.profile__edit-button');
const openButtonCard = document.querySelector('.profile__plus-button');
const closeButtonEdit = document.querySelector('.popup__cross-button_type_edit');
const closeButtonCard = document.querySelector('.popup__cross-button_type_card');
const closeButtonPicture = document.querySelector('.popup__cross-button_type_picture');
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

const openPopupPicture = function () {
    popupPicture.classList.add('popup_opened');
}

const closePopupPicture = function () {
    popupPicture.classList.remove('popup_opened');
}

openButtonEdit.addEventListener('click', openPopupEdit);
closeButtonEdit.addEventListener('click', closePopupEdit);
openButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', closePopupCard)
closeButtonPicture.addEventListener('click', closePopupPicture);

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
    newCardElement.querySelector('.elements__image').style = `background-image: url(${linkInput})`;

    //deletion
    newCardElement.querySelector('.elements__delete-button').addEventListener("click", (e) => {
        const elementItem = e.target.closest('.elements__card');
        elementItem.remove();
    }
    );

    //bigPicture    
    newCardElement.querySelector('.elements__image').addEventListener("click", openPopupPicture);
    const newPhoto = function () {
        document.querySelector('.popup__picture').src = `${linkInput}`;
        document.querySelector('.popup__pic-moniker').textContent = `${cardInput}`;
    };
    newCardElement.querySelector('.elements__image').addEventListener("click", newPhoto);

    //creating new card
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
glebCard.querySelector('.elements__image').style = `background-image: url(../../../images/Gleb.png)`;
glebCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const glebInfo = function () {
    document.querySelector('.popup__picture').src = `./images/Gleb.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Глебос';
}
glebCard.querySelector('.elements__image').addEventListener("click", glebInfo);


ilyaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);
ilyaCard.querySelector('.elements__image').style = `background-image: url(../../../images/Ilya.png)`;
ilyaCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const ilyaInfo = function () {
    document.querySelector('.popup__picture').src = `./images/Ilya.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Илья';
}
ilyaCard.querySelector('.elements__image').addEventListener("click", ilyaInfo);


germanCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);
germanCard.querySelector('.elements__image').style = `background-image: url(../../../images/German.png)`;
germanCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const germanInfo = function () {
    document.querySelector('.popup__picture').src = `./images/German.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Герман';
}
germanCard.querySelector('.elements__image').addEventListener("click", germanInfo);


jurezCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);
jurezCard.querySelector('.elements__image').style = `background-image: url(../../../images/Jurez.png)`;
jurezCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const jurezInfo = function () {
    document.querySelector('.popup__picture').src = `./images/Jurez.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Юрец';
}
jurezCard.querySelector('.elements__image').addEventListener("click", jurezInfo);



pashaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);
pashaCard.querySelector('.elements__image').style = `background-image: url(../../../images/Pasha.png)`;
pashaCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const pashaInfo = function () {
    document.querySelector('.popup__picture').src = `./images/Pasha.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Паша';
}
pashaCard.querySelector('.elements__image').addEventListener("click", pashaInfo);



mishaCard.querySelector('.elements__delete-button').addEventListener("click", (e) => {
    const elementItem = e.target.closest('.elements__card');
    elementItem.remove();
}
);
mishaCard.querySelector('.elements__image').style = `background-image: url(../../../images/Misha.png)`;
mishaCard.querySelector('.elements__image').addEventListener('click', openPopupPicture);
const mishaInfo = function () {
    document.querySelector('.popup__picture').src = `./images/Misha.png`;
    document.querySelector('.popup__pic-moniker').textContent = 'Мишган';
}
mishaCard.querySelector('.elements__image').addEventListener("click", mishaInfo);


