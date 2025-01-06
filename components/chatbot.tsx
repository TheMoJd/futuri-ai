"use client";

import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "module";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "673b0fd73d44d8e6a63420ac" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default Chatbot;
