const contactForm = document.forms.contactForm;
const firstName = contactForm.elements.firstname;
const lastName = contactForm.elements.lastname;
const phoneNumber = contactForm.elements.phonenumber;
const submitButton = contactForm.elements.submit_btn;
const contactList = document.getElementById("list");
const contactListState = [ 
    {
    firstname: "Amara",
    lastname: "Godwin",
    phonenumber: 08162345678
},  
{
    firstname: "Mike",
    lastname: "Jerusalema",
    phonenumber: 08076543218,
} 
]


console.log({firstName, lastName, phoneNumber, submitButton, contactList});
function addContact(event) {
    event.preventDefault();
    const contact = {
        firstname: firstName.value,
        lastname: lastName.value,
        phonenumber: phoneNumber.value
    }
    console.log(contact);
    const listItem = createContact(contact);
    contactList.appendChild(listItem);
}
contactForm.addEventListener("submit", addContact);

function createContact(contact) {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.firstname} ${contact.lastname} ${contact.phonenumber}`

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "list-btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "list-btn");
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    console.log(listItem);

    return listItem;
}

const renderContacts = (contactListState) => {
    for(const contact of contactListState)
} 