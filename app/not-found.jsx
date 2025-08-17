"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the page at:</p>
      <code>{fullUrl}</code>
    </main>
  );
}
