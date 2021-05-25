import React, {useEffect, useState} from 'react';
import './contacts.scss'
import book from "./../assets/icons/book.svg";
import {contacts} from '../assets/db';
import ContactInfo from "./ContactInfo/ContactInfo";
import AddContactForm from "./AddContactForm/AddContactForm";
import Sidebar from "./Sidebar/Sidebar";

function Contacts() {
    const [start, setStart] = useState(false);
    const [listContacts, setListContacts] = useState([]);
    const [visibleForm, setVisibleForm] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [statusEdit, setStatusEdit] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');

    const filteredContacts = listContacts.filter(({name}) => {
        let nameItem = name.toLowerCase();
        return nameItem.indexOf(searchInputValue.toLowerCase()) !== -1;
    });


    useEffect(() => {
        const list = contacts.sort((a, b) => {
            return ('' + a.name).localeCompare(b.name);
        });
        setListContacts(list);
    }, []);

    const onStart = () => {
        setStart(!start);
        setVisibleForm(false);
    }

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm);
        setStatusEdit(false);
    }

    const onSearchInput = (e) => {
        setSearchInputValue(e.target.value);
    }


    const addContact = (newContact) => {
        if (!statusEdit) {
            const newLists = [...listContacts, newContact].sort((a, b) => {
                return ('' + a.name).localeCompare(b.name);
            });
            setListContacts(newLists);
            setActiveItem(newContact);
        }
        const newLists = listContacts.filter(item => item.id !== newContact.id);
        setListContacts([...newLists, newContact].sort((a, b) => {
            return ('' + a.name).localeCompare(b.name);
        }));
        setActiveItem(newContact);
        setStatusEdit(false);
    }

    const onActiveItem = (id) => {
        const item = listContacts.filter(item => item.id === id)[0];
        setActiveItem(item);
    }

    const removeContact = (id) => {
        const newLists = listContacts.filter((el) => el.id !== id).sort((a, b) => {
            return ('' + a.name).localeCompare(b.name);
        });
        setListContacts(newLists);
    }

    const onEdit = () => {
        setVisibleForm(true);
        setStatusEdit(true);
    }

    return (
        <div className="contacts-wrapper">
            <div className="contacts">
                {start &&
                <Sidebar
                    toggleFormVisible={toggleFormVisible}
                    listContacts={filteredContacts}
                    onActiveItem={onActiveItem}
                    removeContact={removeContact}
                    searchInputValue={searchInputValue}
                    onSearchInput={onSearchInput}
                    activeItem={activeItem}
                />
                }
                <div className="contacts__contact-info">
                    {!activeItem ?
                        <img onClick={onStart} className="book" src={book} alt="book"/>
                        :
                        <ContactInfo
                            onEdit={onEdit}
                            contInfo={activeItem}/>}
                </div>
            </div>

            {visibleForm &&
            <AddContactForm
                toggleFormVisible={toggleFormVisible}
                addContact={addContact}
                listContacts={listContacts}
                activeItem={activeItem}
                statusEdit={statusEdit}
                setStatusEdit={setStatusEdit}
            />
            }
        </div>
    );
}

export default Contacts;