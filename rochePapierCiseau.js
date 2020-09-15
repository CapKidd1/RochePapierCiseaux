const Play = document.querySelector(".btn");
const Replay = document.querySelector(".btnReplay");

//Bouton Play
Play.addEventListener("click", () => {
  /*document.querySelector(".form").classList.add("none");
  document.querySelector(".game").classList.remove("none"); */

  const game = new Game();

  const tl = gsap
    .timeline({
      defaults: {
        ease: "linear"
      }
    })
    .to(".form", { ease: "back.in(1)", y: "100vh", duration: 1 })
    .to(".form", {
      opacity: 0,
      onComplete: () => {
        document.querySelector(".form").classList.add("none");
        document.querySelector(".game").classList.remove("none");
      }
    })
    .from(".game", { opacity: 0 })
    .to(".game", { opacity: 1 });
});

class Game {
  constructor() {
    this.weapons = [
      ["✊", "✋", "✌️"],
      ["✊🏻", "✋🏻", "✌🏻"],
      ["✊🏽", "✋🏽", "✌🏽"],
      ["✊🏿", "✋🏿", "✌🏿"]
    ];
    this.showName();
    this.showChoice();
    this.showCPU();
    this.showResult();
  }

  //Enter name
  showName() {
    const name = document.getElementById("nickname").value;
    document.getElementById("playerName").innerHTML = name;
  }

  showChoice() {
    const choiceColorList = document.querySelector("[name = gender]:checked")
      .value;
    this.handSelection = document.querySelector("[name = wepon]").value;

    const playerColor = this.weapons[choiceColorList];
    const playerWeapon = playerColor[this.handSelection];

    const playerResult = document.getElementById("handPlayer");
    playerResult.innerHTML = playerWeapon;
  }

  showCPU() {
    const randomColor = Math.round(Math.random() * 3);
    const cpuColor = this.weapons[randomColor];

    this.actionRandom = Math.round(Math.random() * 2);
    const actionCpu = cpuColor[this.actionRandom];

    const resultatCpu = document.getElementById("handCpu");
    resultatCpu.innerHTML = actionCpu;
  }

  showResult() {
    const playerSide = document.querySelector(".player1");
    const opponentSide = document.querySelector(".opponent");
    const resultat = document.querySelector(".evenement");

    if (this.handSelection == this.actionRandom) {
      playerSide.style.setProperty("background-color", "#3F88C5");
      opponentSide.style.setProperty("background-color", "#3F88C5");
      resultat.innerHTML = "What a Shame!";
    } else if (
      (this.handSelection == 0 && this.actionRandom == 1) ||
      (this.handSelection == 1 && this.actionRandom == 2) ||
      (this.handSelection == 2 && this.actionRandom == 0)
    ) {
      playerSide.style.setProperty("background-color", "#D16D82");
      opponentSide.style.setProperty("background-color", "#7FD8BE");
      resultat.innerHTML = "Too bad!";
    } else {
      playerSide.style.setProperty("background-color", "#7FD8BE");
      opponentSide.style.setProperty("background-color", " #D16D82");
      resultat.innerHTML = "That's A - win";
    }
  }
}

//bouton replay
Replay.addEventListener("click", () => {
  /*document.querySelector(".game").classList.add("none");
  document.querySelector(".form").classList.remove("none");*/

  const tl = gsap
    .timeline({
      defaults: {
        ease: "linear"
      }
    })
    .from(".game", { opacity: 1 })
    .to(".game", { opacity: 0 })
    .to(".form", {
      onStart: () => {
        document.querySelector(".form").classList.remove("none");
      },
      opacity: 1,

      onComplete: () => {
        document.querySelector(".game").classList.add("none");
      }
    })

    .to(".form", { ease: "back.out(1)", y: "0vh", duration: 1 });
});
