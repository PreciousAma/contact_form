const contactForm = document.forms.contactForm;
const firstName = contactForm.elements.firstname;
const lastName = contactForm.elements.lastname;
const phoneNumber = contactForm.elements.phonenumber;
const submitButton = contactForm.elements.submit_btn;
const contactList = document.getElementById("list");
const formatBtn = (listNode, contactId) => {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "list-btn");
    editBtn.setAttribute("data-id", contactId);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "list-btn");
    deleteBtn.setAttribute("data-id", contactId );

    listNode.appendChild(editBtn);
    listNode.appendChild(deleteBtn);

    editBtn.addEventListener("click", editContact);
    deleteBtn.addEventListener("click", deleteContact);
}

let contactListState = [ 
{
    firstname: "Amara",
    lastname: "Godwin",
    phonenumber: "08162345678",
    id: 1
},

{
    firstname: "Mike",
    lastname: "Jerusalema",
    phonenumber: "08076543218",
    id: 2
} 
]

let editState = {
    edit: false,
    editNode: null,
    editId: null
}

function addContact(event) {
    event.preventDefault();
    if (editState.edit) {
        const contact = {
            firstname: firstName.value,
            lastname: lastName.value,
            phonenumber: phoneNumber.value,
            id: editState.editId
        }
        const filteredContactList = contactListState.filter((contact) => {return editState.editId != contact.id} );
        contactListState = filteredContactList;
        contactListState.push(contact);
        editState.editNode.textContent = `${contact.firstname} ${contact.lastname} ${contact.phonenumber}`
        formatBtn(editState.editNode, contact.id);
       
        editState = {
            edit: false,
            editNode: null,
            editId: null
        }

    } else {
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
    
    firstName.value = '';
    lastName.value = '';
    phoneNumber.value = ''; 
}

contactForm.addEventListener("submit", addContact);

function createContact(contact) {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.firstname} ${contact.lastname} ${contact.phonenumber}`
    formatBtn(listItem, contact.id);    
    return listItem;
}

const renderContacts = (contactListState) => {
    for(const contact of contactListState) {
        const listItem = createContact(contact);
        contactList.appendChild(listItem);
    }
}

const editContact = (event) => {
    const editId = event.target.dataset.id;
    const contact = contactListState.find((contact) => {return editId == contact.id });

    firstName.value = contact.firstname;
    lastName.value = contact.lastname;
    phoneNumber.value = contact.phonenumber;
    editState.edit = true;
    editState.editNode = event.target.parentElement;
    editState.editId = editId;
}

const deleteContact = (event) => {
    const filteredContactList = contactListState.filter((contact) => {return event.target.dataset.id != contact.id} );
    contactListState = filteredContactList;
    event.target.parentElement.remove();
}


renderContacts(contactListState);
