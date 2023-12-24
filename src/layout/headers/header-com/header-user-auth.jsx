import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { CircleUser } from "lucide-react";

export default function HeaderUserAuth() {
  const auth = useAuth();

  if (!auth.isLoaded) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {auth.sessionId && (
        <span style={{ position: "relative", left: "20px" }}>
          <UserButton afterSignOutUrl="/" />
        </span>
      )}
      {!auth.sessionId && (
        <>
          <div className="tp-header-login-icon" style={{ marginRight: "5px" }}>
            <CircleUser size={34} />
          </div>
          <div className="tp-header-login-content d-none d-xl-block">
            <span>Hello</span>
            <div className="tp-header-login-title">
              <span style={{ cursor: "pointer", color: "black" }}>
                <SignInButton />
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
