import { useEffect } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.conteiner}>
      <div className={css.header}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <SearchBox />
        <ContactList />
        {loading && !error && <Loader />}
        {error && <ErrorMessage />}
      </div>
    </div>
  );
}

export default App;
