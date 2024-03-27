import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.wrapper}>
        <HiUser />
        <div> {contact.name} </div>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <div> {contact.number} </div>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
