import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.conteiner}>
      <div className={css.header}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
