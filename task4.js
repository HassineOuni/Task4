const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
const registeredList = document.getElementById("registered");
const vaccinatedList = document.getElementById("vaccinated");

let registeredPeople = [];
let vaccinatedPeople = [];

function addPerson() {
  const name = nameInput.value;
  const personLi = document.createElement("li");
  personLi.textContent = name;

  const vaccinated = document.createElement("button");
  vaccinated.textContent = "X";
  
  vaccinated.addEventListener("click", moveToVaccinated);
  personLi.appendChild(vaccinated);

  registeredList.appendChild(personLi);

  registeredPeople.push({ name, element: personLi });

  nameInput.value = "";
}

function moveToVaccinated(event) {
  const button = event.target;

  const personLi = button.parentNode;

  personLi.removeChild(button);

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.style.backgroundColor = "red";
  removeButton.addEventListener("click", removePerson);
  personLi.appendChild(removeButton);

  vaccinatedList.appendChild(personLi);

  const index = registeredPeople.findIndex(person => person.element === personLi);
  registeredPeople.splice(index, 1);

  vaccinatedPeople.push({ name: personLi.textContent, element: personLi });
}

function removePerson(event) {
  const button = event.target;

  const personLi = button.parentNode;

  vaccinatedList.removeChild(personLi);

  const index = vaccinatedPeople.findIndex(person => person.element === personLi);
  vaccinatedPeople.splice(index, 1);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addPerson();
});
