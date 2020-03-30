import initialCards from "./helpers/initialCards";
import ProfileFormPopup from "./popups/ProfileFormPopup";
import BigImagePopup from "./popups/BigImagePopup";
import ProfileForm from "./forms/ProfileForm";
import ProfileView from "./views/Profile";
import EditProfileButton from "./views/EditProfileButton";
import CardList from "./cards/CardList";
import { validateLengthStr, validateUrl } from "./helpers/validators";
import AddCardPopup from "./popups/AddCardPopup";
import AddCardButton from "./views/AddCardButton";
import AddCardForm from "./forms/AddCardForm";

{
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
}
