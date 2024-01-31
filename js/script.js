countryCode = document.getElementById('country-code');
number = document.getElementById('number');
message = document.getElementById('message');
displayLink = document.getElementById('display-link');

function generateLink() {
	if (countryCode.value && number.value) {
		link = 'https://wa.me/' + countryCode.value + number.value;

		if (message.value) {
			link += '?text=' + encodeURIComponent(message.value);
		}

		displayLink.value = link;
	}
}

function copy() {
	// Get the text field
	var copyText = document.getElementById("display-link");
	var urls = document.getElementById("url-copy");
	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	urls.textContent = copyText.value;
	my_modal_1.showModal();
	// Alert the copied text
	// alert("Copied the text: " + copyText.value);
  }