// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like");

  likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const likeGlyph = button.querySelector(".like-glyph");
      if (likeGlyph.innerHTML === EMPTY_HEART) {
        mimicServerCall()
          .then(function (response) {
            likeGlyph.innerHTML = FULL_HEART;
            likeGlyph.style.color = "red";
          })

          .catch(function (error) {
            const modal = document.querySelector(".hidden");
            const modalMessage = document.querySelector("#modal-message");
            modalMessage.innerHTML = error;
            modal.classList.remove("hidden");
            setTimeout(() => {
              modal.classList.add("hidden");
            }, 3000);
          });
      } else {
        likeGlyph.innerHTML = EMPTY_HEART;
      }
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
