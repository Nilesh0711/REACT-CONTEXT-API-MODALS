"use client";

import { useModal } from "@/context/modal/modalContext";

export default function Home() {
  const { modalValue, setModalValue } = useModal();
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center space-y-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 text-2xl"
          type="button"
          onClick={() =>
            setModalValue({
              isOpen: true,
              type: "firstModal",
            })
          }
        >
          First
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 text-2xl"
          type="button"
          onClick={() =>
            setModalValue({
              isOpen: true,
              type: "secondModal",
            })
          }
        >
          Second
        </button>
        
      </div>
    </>
  );
}
