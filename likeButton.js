function likeButton() {
    // Get the image element
    var likeIcon = document.querySelector('.newsfeed-vector01');
  
    // Check if the button has already been clicked
    var buttonClicked = localStorage.getItem('likeButtonClicked');
    if (buttonClicked === 'true') {
      // Button has already been clicked, change the image source to the original icon
      likeIcon.src = 'public/playground_assets/likes.png';
  
      // Clear the flag in local storage
      localStorage.removeItem('likeButtonClicked');
    } else {
      // Button has not been clicked, change the image source to the red version of the icon
      likeIcon.src = 'public/playground_assets/likes-red.png';
  
      // Save a flag in local storage to indicate that the button has been clicked
      localStorage.setItem('likeButtonClicked', 'true');
    }
  }
  function likeButton2() {
    // Get the image element
    var likeIcon2 = document.querySelector('.likes2');
  
    // Check if the button has already been clicked
    var buttonClicked2 = localStorage.getItem('likeButton2Clicked');
    if (buttonClicked2 === 'true') {
      // Button has already been clicked, change the image source to the original icon
      likeIcon2.src = 'public/playground_assets/likes.png';
  
      // Clear the flag in local storage
      localStorage.removeItem('likeButton2Clicked');
    } else {
      // Button has not been clicked, change the image source to the red version of the icon
      likeIcon2.src = 'public/playground_assets/likes-red.png';
  
      // Save a flag in local storage to indicate that the button has been clicked
      localStorage.setItem('likeButton2Clicked', 'true');
    }
  }
  function likeButton3() {
    // Get the image element
    var likeIcon3 = document.querySelector('.likes3');
  
    // Check if the button has already been clicked
    var buttonClicked3 = localStorage.getItem('likeButton3Clicked');
    if (buttonClicked3 === 'true') {
      // Button has already been clicked, change the image source to the original icon
      likeIcon3.src = 'public/playground_assets/likes.png';
  
      // Clear the flag in local storage
      localStorage.removeItem('likeButton3Clicked');
    } else {
      // Button has not been clicked, change the image source to the red version of the icon
      likeIcon3.src = 'public/playground_assets/likes-red.png';
  
      // Save a flag in local storage to indicate that the button has been clicked
      localStorage.setItem('likeButton3Clicked', 'true');
    }
  }
  
  
  // Check the local storage for the flag when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    var likeIcon = document.querySelector('.newsfeed-vector01');
    var likeIcon2 = document.querySelector('.likes2');
    var likeIcon3 = document.querySelector('.likes3');

    var buttonClicked = localStorage.getItem('likeButtonClicked');
    var buttonClicked2 = localStorage.getItem('likeButton2Clicked');
    var buttonClicked3 = localStorage.getItem('likeButtonC3licked');
  
    // If the button has been clicked, update the image source to the red version of the icon
    if (buttonClicked === 'true') {
        likeIcon.src = 'public/playground_assets/likes-red.png';
    }
    if (buttonClicked2 === 'true') {
        likeIcon2.src = 'public/playground_assets/likes-red.png';
    }
    if (buttonClicked3 === 'true') {
        likeIcon3.src = 'public/playground_assets/likes-red.png';
    }
  });
  