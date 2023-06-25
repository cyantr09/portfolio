import Modal from "@/components/Modal";
import { useState } from "react";

export default function Birthday() {
  const deleteModal = () => setShowModal(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <button
        className="w-[50vw] h-[10vh] bg-cyan-300 rounded-2xl"
        onClick={() => setShowModal(true)}
      >
        Make Website
      </button>
      {showModal && <Modal deleteFn={deleteModal} />}
    </main>
  );
}
