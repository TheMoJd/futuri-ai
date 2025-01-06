// Extend the Window interface to include the `voiceflow` property
declare global {
    interface Window {
      voiceflow: {
        chat: {
          load: (config: {
            verify: { projectID: string };
            url: string;
            versionID: string;
          }) => void;
        };
      };
    }
  }
  
  export {};
  