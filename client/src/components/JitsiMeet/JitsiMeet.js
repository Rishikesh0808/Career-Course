import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const JitsiMeet = () => {
  const jitsiContainerRef = useRef(null);
  const { roomName } = useParams(); // Correct usage of useParams
  const jwt = ""; // Define jwt if needed or pass it as a prop

  useEffect(() => {
    // Check if the Jitsi External API is available
    if (window.JitsiMeetExternalAPI) {
      const domain = "8x8.vc"; // Jitsi server domain
      const options = {
        roomName:
          roomName ||
          "vpaas-magic-cookie-b164243268984e9198346b5cb2bc2d70/SampleAppForwardLasersEncompassShakily", // Default room name
        parentNode: jitsiContainerRef.current, // Attach Jitsi to this div
        jwt: jwt || "", // Optional JWT for premium features
        configOverwrite: {}, // Additional configuration
        interfaceConfigOverwrite: {}, // Interface customization
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      // Cleanup when the component unmounts
      return () => {
        api.dispose();
      };
    } else {
      console.error("JitsiMeetExternalAPI script not loaded.");
    }
  }, [roomName, jwt]);

  return (
    <div
      ref={jitsiContainerRef}
      style={{
        width: "100%",
        height: "100vh", // Full-page meeting
      }}
    />
  );
};

export default JitsiMeet;
