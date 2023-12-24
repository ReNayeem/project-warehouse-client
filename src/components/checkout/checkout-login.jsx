import { RedirectToSignIn, SignIn, useAuth, useSession } from "@clerk/nextjs";

const CheckoutLogin = () => {
  const auth = useAuth();
  const session = useSession();

  return (
    <div className="tp-checkout-verify-item">
      <p className="tp-checkout-verify-reveal">
        {auth.sessionId ? (
          <>Logged in as: {session.session.user.fullName}</>
        ) : (
          <>
            Returning customer? <SignIn />
          </>
        )}
      </p>
    </div>
  );
};

export default CheckoutLogin;
