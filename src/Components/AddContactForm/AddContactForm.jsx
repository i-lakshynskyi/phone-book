import React, {useState} from 'react';
import AddPhoto from "../AddPhoto/AddPhoto";
import "./add-contact-form.scss";


function AddContactForm({toggleFormVisible, addContact, listContacts, activeItem, statusEdit, setStatusEdit}) {
    const [formValue, setFormValue] = useState(() => {
        if (!statusEdit) {
            return {
                name: "",
                surname: "",
                tel: '',
                email: "",
            }
        }
        return activeItem;
    });

    const cancel = () => {
        toggleFormVisible();
        setStatusEdit(false);
        setFormValue({
            name: "",
            surname: "",
            tel: '',
            email: "",
        });
    }

    const createNewContact = () => {
        if (formValue.name && formValue.tel){
            const newContact = {
                name: formValue.name,
                surname: formValue.surname,
                tel: formValue.tel,
                email: formValue.email,
                active: true,
            }
            if (statusEdit) {
                newContact.id = activeItem.id;
            } else if (!statusEdit) {
                newContact.id = listContacts.length + 1
            }
            addContact(newContact);
            cancel();
        }
    }

    const change = (e) => {
        const {name, value} = e.target;
        setFormValue({
                ...formValue,
                [name]: value
            }
        );
    }

    return (
        <div className="addContact-form">
            <div className="addContact-form__avatar">
                <AddPhoto/>
            </div>
            <form className="addContact-form__info" onSubmit={createNewContact}>
                <input  name="name" placeholder="name" onChange={change}
                       value={formValue.name}/>
                <input  name="surname" placeholder="surname" onChange={change}
                       value={formValue.surname}/>
                <input  name="tel"
                        type="number"
                       placeholder="tel" onChange={change}
                       value={formValue.tel}/>
                <input name="email" placeholder="email" onChange={change}
                       value={formValue.email}/>
                <div className="buttons">
                    <button disabled={!(formValue.name && formValue.tel)} className="buttons__button">{statusEdit ? "Edit" : "Add contact"}</button>
                    <button onClick={cancel} className="buttons__button buttons__button-grey">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddContactForm;
