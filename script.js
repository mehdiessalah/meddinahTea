window.onload = function() {
    // Extract token code from URL
    var urlParams = new URLSearchParams(window.location.search);
    var tokenCode = urlParams.get('tokencode');
    if (tokenCode) {
        document.getElementById("tokenCode").value = tokenCode;
        checkCode(); // Automatically check the code when the page loads
    }
}

function checkCode() {
    var tokenCode = document.getElementById("tokenCode").value;
    // Here you would perform an AJAX request to your server to check if the token code exists in the winner list
    // For demonstration purposes, I'll assume a simple array of winning codes
    var winnerList = ["abc123", "def456", "ghi789"];
    if (winnerList.includes(tokenCode)) {
        document.getElementById("result").innerHTML = "Congratulations! You're a winner!";
    } else {
        document.getElementById("result").innerHTML = "Sorry, better luck next time!";
    }
}
