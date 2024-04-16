function displayItinerary(response) {
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: Plan a travel Itinerary for things to do in ${instructionsInput.value}`;
  let context =
    "You are a travel expert and you love to plan itineraries on what to do in each city. Your mission is to generate a concise itinerary in basic HTML. Make sure to follow the user instructions.";
  let apiKey = "13926dce13oc4b425t4aaa2e80fe149a";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<span class="generating">⏳</span> Generating the itinerary for ${instructionsInput.value}...`;

  axios.get(apiURL).then(displayItinerary);
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);
