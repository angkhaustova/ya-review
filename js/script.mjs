import initialCards from "./helpers/initialCards.mjs";
import ProfileFormPopup from "./popups/ProfileFormPopup.mjs";
import BigImagePopup from "./popups/BigImagePopup.mjs";
import ProfileForm from "./forms/ProfileForm.mjs";
import ProfileView from "./views/Profile.mjs";
import EditProfileButton from "./views/EditProfileButton.mjs";
import CardList from "./cards/CardList.mjs";
import { validateLengthStr, validateUrl } from "./helpers/validators.mjs";
import AddCardPopup from "./popups/AddCardPopup.mjs";
import AddCardButton from "./views/AddCardButton.mjs";
import AddCardForm from "./forms/AddCardForm.mjs";

/**
 * Popups
 */
const addCardPopup = new AddCardPopup();
const profilePopup = new ProfileFormPopup();
const imagePopup = new BigImagePopup();

/**
 * Views
 */
const profileView = new ProfileView();
const editProfileButton = new EditProfileButton();
const addCardButton = new AddCardButton();

/**
 * Forms
 */
const profileForm = new ProfileForm({
  form: document.forms.profile,
  inputs: [
    {
      input: document.forms.profile.elements.name,
      validator: value => validateLengthStr(value, 2, 30),
      value: "Jaques Causteau"
    },
    {
      input: document.forms.profile.elements.job,
      validator: value => validateLengthStr(value, 2, 30),
      value: "Sailor, Researcher"
    }
  ]
});

const addCardForm = new AddCardForm({
  form: document.forms.new,
  inputs: [
    {
      input: document.forms.new.elements.name,
      validator: value => validateLengthStr(value, 2, 30)
    },
    {
      input: document.forms.new.elements.link,
      validator: value => validateUrl(value)
    }
  ]
});

/**
 * Card list
 */
const cardList = new CardList(
  document.querySelector(".places-list"),
  initialCards
);
cardList.renderCards();
