"use client";

import dynamic from "next/dynamic";

const VapiWidget = dynamic(
  () =>
    import("@vapi-ai/client-sdk-react").then((mod) => ({
      default: mod.VapiWidget,
    })),
  { ssr: false }
);

export function ChatWidget() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@vapi-ai/client-sdk-react/dist/client-sdk-react.css"
      />
      <style>{`
        @media (max-width: 1279px) {
          div[style*="z-index: 9999"][style*="position: fixed"] {
            bottom: 4.5rem !important;
          }
          div[style*="z-index: 9999"][style*="position: fixed"] > div {
            max-width: calc(100vw - 2rem) !important;
            right: 0 !important;
          }
        }
      `}</style>
      <VapiWidget
        publicKey="64beed82-5806-471a-b426-27eb647ef69e"
        assistantId="4d1362fc-dc30-4fbc-944b-44a1e866bc4a"
        mode="chat"
        theme="light"
        position="bottom-right"
        size="compact"
        borderRadius="large"
        accentColor="#1B2A4A"
        ctaButtonColor="#D4A843"
        ctaButtonTextColor="#1B2A4A"
        baseBgColor="#FAF8F5"
        title="Clinique Dr. Laurent"
        chatFirstMessage="Bonjour! Bienvenue à la Clinique Dr. Laurent. Médecine Privée & Esthétique. Comment puis-je vous aider aujourd'hui?"
        chatPlaceholder="Tapez votre message... / Type your message..."
        chatEmptyMessage="Commencez une conversation / Start a conversation"
      />
    </>
  );
}
