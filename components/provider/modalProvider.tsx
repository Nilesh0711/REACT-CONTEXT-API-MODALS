"use client";

import React, { useEffect, useState } from "react";
import SecondModal from "@/components/modal/secondModal";
import FirstModal from "@/components/modal/firstModal";

function ModalProvider() {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FirstModal />
      <SecondModal />
    </>
  );
}

export default ModalProvider;
