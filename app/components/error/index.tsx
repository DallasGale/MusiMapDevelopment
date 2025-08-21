"use client"; // Error boundaries must be Client Components
import { Blockquote } from "@mantine/core";
import { useEffect } from "react";
import styles from "./styles.module.css";
import icon from "./icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <Image src={icon.src} width={100} height={100} alt="Sad Face" />
      <h2>Something is not right...</h2>
      <p>The content you are trying to view does not exist.</p>
      <Blockquote>{error.message}</Blockquote>
      <div>
        <Link href="/">Get back to home page</Link>
      </div>
    </div>
  );
}
