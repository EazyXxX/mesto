const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_card');
const popupPicture = document.querySelector('.popup_type_picture');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const buttonEditOpen = document.querySelector('.profile__edit-button');
const buttonCardOpen = document.querySelector('.profile__plus-button');
const closeButtonEdit = document.querySelector('.popup__cross-button_type_edit');
const closeButtonCard = document.querySelector('.popup__cross-button_type_card');
const closeButtonPicture = document.querySelector('.popup__cross-button_type_picture');
const popupBigPicture = document.querySelector('.popup__picture');
const popupPicMoniker = document.querySelector('.popup__pic-moniker');
const saveButton = popupEdit.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__description');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

buttonEditOpen.addEventListener('click', () => openPopup(popupEdit));
closeButtonEdit.addEventListener('click', () => closePopup(popupEdit));
buttonCardOpen.addEventListener('click', () => openPopup(popupCard));
closeButtonCard.addEventListener('click', () => closePopup(popupCard));
closeButtonPicture.addEventListener('click', () => closePopup(popupPicture));

const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_subname');

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    closePopup(popupEdit);
}

popupFormEdit.addEventListener('submit', editFormSubmitHandler);


const elementsList = document.querySelector('#list');


const templateElement = document.querySelector('.template');


function addCard(moniker, link) {
    const newCardElement = templateElement.content.cloneNode(true);
    const cardWhole = newCardElement.querySelector('.elements__card');
    const cardImage = newCardElement.querySelector('.elements__image');
    const newLike = newCardElement.querySelector('.elements__like');
    const elementName = newCardElement.querySelector('.elements__name');

    elementName.textContent = moniker;
    cardImage.alt = moniker;
    cardImage.src = link;

    //deletion
    newCardElement.querySelector('.elements__delete-button').addEventListener("click", () => {
        cardWhole.remove();
    }
    );

    //like
    const getNewLike = function () {
        newLike.addEventListener("click", () => {
            newLike.classList.toggle('elements__like_active');
        })
    };
    getNewLike();

    return newCardElement
}

const boys = [

    {
        name: 'Мишган',
        link: './images/Misha.png'
    },
    {
        name: 'Паша',
        link: './images/Pasha.png'
    },
    {
        name: 'Юрец',
        link: './images/Jurez.png'
    },
    {
        name: 'Герман',
        link: './images/German.png'
    },
    {
        name: 'Илья',
        link: './images/Ilya.png'
    },
    {
        name: 'Глеб',
        link: './images/Gleb.png'
    }
];

//creating boys
boys.forEach((el) => {
    const boyCards = addCard(el.name, el.link)

    const newLike = boyCards.querySelector('.elements__like');
    const getNewLike = function () {
        newLike.addEventListener("click", () => {
            newLike.classList.toggle('elements__like_active');
        })
    };
    getNewLike();
    elementsList.prepend(boyCards);
    //bigPicture    
    const cardImage = document.querySelector('.elements__image');
    cardImage.addEventListener("click", () => openPopup(popupPicture));
    const newPhoto = function () {
        popupBigPicture.src = `${el.link}`;
        popupBigPicture.alt = `${el.name}`;
        popupPicMoniker.textContent = `${el.name}`;
    };
    cardImage.addEventListener("click", newPhoto);
});

//creating new card
function newCardCreation(evt) {
    evt.preventDefault();
    const linkInput = document.querySelector('.popup__input_type_link').value;
    const cardInput = document.querySelector('.popup__input_type_card-name').value;
    elementsList.prepend(addCard(cardInput, linkInput));
    closePopup(popupCard);
    const cardImage = document.querySelector('.elements__image');
    //bigPicture    
    cardImage.addEventListener("click", () => openPopup(popupPicture));
    const newPhoto = function () {
        popupBigPicture.src = `${linkInput}`;
        popupBigPicture.alt = `${cardInput}`;
        popupPicMoniker.textContent = `${cardInput}`;
    };
    cardImage.addEventListener("click", newPhoto);
}


cardPopupForm.addEventListener('submit', newCardCreation);

const like = document.querySelectorAll('.elements__like');

const getLike = like.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle('elements__like_active');
    });
});