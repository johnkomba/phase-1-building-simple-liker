
document.addEventListener('DOMContentLoaded', () => {
  const EMPTY_HEART = '♡';
  const FULL_HEART = '♥';
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const likeGlyphs = document.querySelectorAll('.like-glyph');
// Don't change the code below: this function mocks the server response
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

  likeGlyphs.forEach(likeGlyph => {
    likeGlyph.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (likeGlyph.innerText === EMPTY_HEART) {
            likeGlyph.innerText = FULL_HEART;
            likeGlyph.classList.add('activated-heart');
          } else {
            likeGlyph.innerText = EMPTY_HEART;
            likeGlyph.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          modalMessage.innerText = error;
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });

  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
