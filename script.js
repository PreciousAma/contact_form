const contactForm = document.forms.contactForm;
const firstName = contactForm.elements.firstname;
const lastName = contactForm.elements.lastname;
const phoneNumber = contactForm.elements.phonenumber;
const submitButton = contactForm.elements.submit_btn;
const contactList = document.getElementById("list");
let contactListState = [ 
    {
    firstname: "Amara",
    lastname: "Godwin",
    phonenumber: 08162345678,
    id: 1
},  
{
    firstname: "Mike",
    lastname: "Jerusalema",
    phonenumber: 08076543218,
    id: 2
} 
]

function addContact(event) {
    event.preventDefault();
    const contact = {
        firstname: firstName.value,
        lastname: lastName.value,
        phonenumber: phoneNumber.value,
        id: contactListState.length + 1
    }
    contactListState.push(contact);
    let listItem = createContact(contact);
    contactList.appendChild(listItem);
}
contactForm.addEventListener("submit", addContact);

function createContact(contact) {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.firstname} ${contact.lastname} ${contact.phonenumber}`

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "list-btn");
    editBtn.setAttribute("data-id", contact.id );
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "list-btn");
    deleteBtn.setAttribute("data-id", contact.id );
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    editBtn.addEventListener("click", editContact);


    deleteBtn.addEventListener("click", deleteContact)

    return listItem;
}

const renderContacts = (contactListState) => {
    for(const contact of contactListState) {
        const listItem = createContact(contact);
        contactList.appendChild(listItem);
    }
}

const editContact = (event) => {
    console.log("edit");
}

const deleteContact = (event) => {
    const filteredContactList = contactListState.filter((contact) => {return event.target.dataset.id != contact.id} );
    contactListState = filteredContactList;
    event.target.parentElement.remove();
}


renderContacts(contactListState);
