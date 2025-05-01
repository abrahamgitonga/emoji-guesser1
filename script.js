const emojiAnswer = "🦇";

function checkAnswer() {
  const input = document.getElementById("guess").value.trim();
  const feedback = document.getElementById("feedback");
  const shareBtn = document.getElementById("shareBtn");

  if (input === emojiAnswer) {
    feedback.textContent = "🎉 Correct! You guessed it!";
    feedback.style.color = "lightgreen";
    shareBtn.style.display = "inline-block";
  } else {
    feedback.textContent = "❌ Nope! Try again.";
    feedback.style.color = "salmon";
    shareBtn.style.display = "none";
  }
}

function shareResult() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("🎉 I guessed the emoji correctly! Can you? Play here:");
  const twitterURL = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(twitterURL, "_blank");
}
