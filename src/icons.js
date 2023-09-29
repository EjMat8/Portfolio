import chakra from "./assets/logos/chakra.png";
import css from "./assets/logos/css.png";
import html from "./assets/logos/html.png";
import git from "./assets/logos/git.png";
// import nosql from "./assets/logos/nosql.png";
import sequelize from "./assets/logos/sequelize.png";
import redux from "./assets/logos/redux.png";
import javascript from "./assets/logos/javascript.png";
// import mongo from "./assets/logos/mongo.png";
// import mongoose from "./assets/logos/mongoose.png";
import next from "./assets/logos/next.png";
import react from "./assets/logos/react.png";
import postgres from "./assets/logos/postgres.png";

class Logo {
  constructor() {
    this.logos = [
      html,
      css,
      javascript,
      chakra,
      react,
      redux,
      next,
      sequelize,
      postgres,
      git,
    ];
  }
  generateLogo() {
    this.logos.forEach((el, i) => {
      document.querySelector(`.logo--${i + 1}`).src = el;
    });
  }
}

export default new Logo();
