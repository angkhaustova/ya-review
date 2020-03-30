import EventAggregator from "../events/EventAggregator.mjs";

export default class ProfileView {
  constructor() {
    this.userInfoName = document.querySelector(".user-info__name");
    this.userInfoJob = document.querySelector(".user-info__job");

    EventAggregator.subscribe("ProfileForm.submit", ({ name, job }) => {
      this.userInfoName.textContent = name;
      this.userInfoJob.textContent = job;
    });
  }
}
