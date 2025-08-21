"use client"; // Error boundaries must be Client Components
import ErrorUI from "@components/error";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <ErrorUI error={error} />;
}
