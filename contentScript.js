// Copyright 2024 maximusf

let scrolling = false;
let liking = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startScrolling") {
    scrolling = true;
    autoScroll();
  } else if (message.action === "startLiking") {
    liking = true;
    autoLike();
  } else if (message.action === "stop") {
    scrolling = false;
    liking = false;
  }
});

function autoScroll() {
  if (scrolling) {
    window.scrollBy(0, 1000);
    setTimeout(autoScroll, 2000); // Scroll every 2 seconds
  }
}

function autoLike() {
  if (liking) {
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    if (likeButton) {
      likeButton.click();
    }
    setTimeout(autoLike, 3000); // Like every 3 seconds
  }
}
