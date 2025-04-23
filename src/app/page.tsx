"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>("Processing...");
  const [error, setError] = useState<string | null>(null);

  const handleCallback = useCallback(async () => {
    try {
      const code = searchParams.get("code");

      if (!code) {
        throw new Error("No authorization code provided");
      }

      // Process the callback (replace with your actual processing logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect to success page after processing
      await router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  }, [router]);

  useEffect(() => {
    handleCallback();
  }, [handleCallback]);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Authorization Callback</h1>

      {error && (
        <div className="bg-red-500 text-white p-4 rounded-md">{error}</div>
      )}

      {!error && (
        <>
          <p>{message}</p>
          <progress className="w-full h-2" />
        </>
      )}
    </div>
  );
}
