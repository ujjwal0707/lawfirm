document.addEventListener("DOMContentLoaded", function() {
  var popupOverlay = document.getElementById("popup-overlay");
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementById("close-popup");

  // Show the popup
  function showPopup() {
    popupOverlay.style.display = "block";
    popup.style.display = "block";
  }

  // Hide the popup
  function hidePopup() {
    popupOverlay.style.display = "none";
    popup.style.display = "none";
  }

  // Close button click event
  closeBtn.addEventListener("click", hidePopup);

  // Show the popup when the page loads
  showPopup();
});
