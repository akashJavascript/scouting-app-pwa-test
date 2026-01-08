// import React from "react";
import type { JSX } from "react";

// // ...existing code...
// interface JwtPayload {
//   name?: string;
//   given_name?: string;
//   family_name?: string;
//   sub?: string;
//   picture?: string;
//   email?: string;
//   [key: string]: any;
// }

// interface CredentialResponse {
//   credential: string;
// }
// declare global {
//   interface Window {
//     handleCredentialResponse?: (response: CredentialResponse) => void;
//   }
// }

// // ...existing code...
// function GoogleLogin(): JSX.Element {
//   function decodeJWT(token: string): JwtPayload {
//     let base64Url: string = token.split(".")[1];
//     let base64: string = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     let jsonPayload: string = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map(function (c) {
//           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
//     );
//     return JSON.parse(jsonPayload);
//   }

//   const handleCredentialResponse = React.useCallback(
//     (response: CredentialResponse): void => {
//       const responsePayload = decodeJWT(response.credential);
//       console.log(responsePayload);
//     },
//     []
//   );

//   React.useEffect(() => {
//     window.handleCredentialResponse = handleCredentialResponse;
//     return () => {
//       delete window.handleCredentialResponse;
//     };
//   }, [handleCredentialResponse]);

//   return (
//     <div>
//       <div
//         id="g_id_onload"
//         data-auto_prompt="false"
//         data-callback="handleCredentialResponse"
//         data-client_id="414373612434-a8cn29gtkjiisdb7ba4ehesi8d582k2g.apps.googleusercontent.com"
//       ></div>
//       <div className="g_id_signin"></div>
//     </div>
//   );
// }
// export default GoogleLogin;
// // ...existing code...
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function OAuthLogin(): JSX.Element {
  return (
    <GoogleOAuthProvider clientId="414373612434-a8cn29gtkjiisdb7ba4ehesi8d582k2g.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(response) => {
          // response.credential is a JWT token
          console.log(response.credential);
          response.credential &&
            console.log(
              "Decoded Payload:",
              JSON.parse(atob(response.credential.split(".")[1]))
            );
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default OAuthLogin;
