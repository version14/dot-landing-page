import { useCallback, useState } from "react";
import { toastManager } from "./Toast";

const CopyIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

interface CopyButtonProps {
  text: string;
  className?: string;
  "aria-label": string;
}

export function CopyButton({ text, className = "", "aria-label": ariaLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const doFallback = () => {
      const el = Object.assign(document.createElement("textarea"), { value: text });
      Object.assign(el.style, { position: "fixed", opacity: "0" });
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    };

    const write = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject();

    write.catch(doFallback).finally(() => {
      setCopied(true);
      toastManager.add({ title: "Copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      type="button"
      className={`${className}${copied ? " ok" : ""}`}
      aria-label={ariaLabel}
      onClick={copy}
    >
      <CopyIcon />
    </button>
  );
}
