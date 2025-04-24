// app/dev-only/sentry-example-page/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DevOnlySentryExamplePage() {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      router.replace("/");
    }
  }, [router]);

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div>
      <h1>Dev-only Sentry Page</h1>
      <p>This page is only visible in development.</p>
    </div>
  );
}
