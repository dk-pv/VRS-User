"use client";

import { useEffect, useState } from "react";
import PageLoader from "@/components/common/PageLoader";

export default function GlobalLoading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.classList.remove("page-exit");
  }, []);

  return <PageLoader visible={show} />;
}