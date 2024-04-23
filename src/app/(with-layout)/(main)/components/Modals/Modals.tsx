"use client";

import useAppContext from "@/context/useAppContext";
import Modal from "@/components/shared/Modal";
import Contacts from "@/components/shared/Contacts";
import Form from "@/components/shared/Form";

export default function Modals() {
  const {
    contactsModalIsOpen,
    requestModalIsOpen,
    setContactsModalIsOpen,
    setRequestModalIsOpen,
  } = useAppContext();

  return (
    <div>
      <Modal isOpen={contactsModalIsOpen} setIsOpen={setContactsModalIsOpen}>
        <Contacts />
      </Modal>
      <Modal isOpen={requestModalIsOpen} setIsOpen={setRequestModalIsOpen}>
        <Form />
      </Modal>
    </div>
  );
}
