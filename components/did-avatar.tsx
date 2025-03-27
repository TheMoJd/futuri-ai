"use client";

import { useEffect } from "react";

const DIDAvatar = () => {
  useEffect(() => {
    // Création dynamique du script
    const script = document.createElement("script");
    script.src = "https://agent.d-id.com/v1/index.js";
    script.type = "module";
    
    script.onload = () => {
      console.log('Script D-ID chargé dynamiquement');
      
      // Vérification et initialisation de l'agent
      if (window.DIDAgent) {
        window.DIDAgent.init({
          name: 'did-agent',
          mode: 'fabio',
          clientKey: 'Z29vZ2xlLW9hdXRoMnwxMDg3MzQyMTkxMjc4OTI3Mzk5MTQ6TEIzaFptNGpOX0l3WExUQ1dKX3BO',
          agentId: 'agt_-C8BkvMu',
          monitor: true
        });
      }
    };

    // Gestion des erreurs de chargement
    script.onerror = () => {
      console.error('Erreur de chargement du script D-ID');
    };

    // Ajout du script au document
    document.body.appendChild(script);

    // Nettoyage
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // L'avatar est géré par le script D-ID
};

export default DIDAvatar;