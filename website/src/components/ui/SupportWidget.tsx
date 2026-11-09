"use client";
import { useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { TextLink } from "@/components/marketing/Primitives";
export function SupportWidget() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      {open && (
        <aside className="support-panel" id="quick-help" aria-label="Quick help">
          <header>
            <strong>How can we help?</strong>
            <span>Choose a next step — this is a help menu, not a live chat.</span>
          </header>
          <div className="body" onClick={() => setOpen(false)}>
            <TextLink href="/services">Explore services</TextLink>
            <TextLink href="/for-professionals">
              Professional enquiries
            </TextLink>
            <TextLink href="/contact">Contact the team</TextLink>
          </div>
        </aside>
      )}
      <button
        className="support-fab"
        ref={trigger}
        aria-label={open ? "Close quick help" : "Open quick help"}
        aria-expanded={open}
        aria-controls="quick-help"
        onClick={() => setOpen(!open)}
      >
        {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
      </button>
    </div>
  );
}
