// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




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

const hideErrorModal = () => {
  document.querySelector('#modal').className = 'hidden'
}

const handleError = (err) => {
  const modal = document.querySelector('#modal')
  modal.querySelector('#modal-message').textContent = err
  modal.className = ''
  setTimeout(hideErrorModal,3000)
}

const likeComment = () => {
  mimicServerCall()
  .then(res => console.log(res))
  .catch(handleError)
}

document.querySelectorAll('.like').forEach(item => item.addEventListener('click', likeComment))
