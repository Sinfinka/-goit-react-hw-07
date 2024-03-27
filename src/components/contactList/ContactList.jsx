import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectFilter } from "../../redux/filtersSlice";

const contactsFilter = (contacts, filterName) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector(selectFilter);
  const actualContacts = contactsFilter(contacts, filterName);

  return (
    <ul className={css.contactList}>
      {actualContacts.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
