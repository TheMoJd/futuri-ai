"use client";

import { useEffect } from "react";

const VoiceflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "module";
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: "673b0fd73d44d8e6a63420ac" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup script if necessary
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Chatbot UI is handled by Voiceflow
};

export default VoiceflowChatbot;
