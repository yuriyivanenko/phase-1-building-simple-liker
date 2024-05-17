// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const handleServerError = (err) => {
  const modal = document.querySelector('#modal')
  modal.querySelector('#modal-message').textContent = err
  modal.className = ''
  setTimeout(hideErrorModal,3000)
}

const hideErrorModal = () => {
  document.querySelector('#modal').className = 'hidden'
}

const handleServerSuccess = (res) => {
  const heart = document.querySelector('.like').firstElementChild
  if(heart.className === 'like-glyph'){
    heart.textContent = FULL_HEART
    heart.className = 'activated-heart'
  }else if(heart.className === 'activated-heart'){
    heart.textContent = EMPTY_HEART
    heart.className = 'like-glyph'
  }
}

const handleLikeComment = () => {
  mimicServerCall()
  .then(handleServerSuccess)
  .catch(handleServerError)
}

document.querySelectorAll('.like').forEach(item => item.addEventListener('click', handleLikeComment))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

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

