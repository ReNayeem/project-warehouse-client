import React from "react";

// internal
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CheckoutArea from "@/components/checkout/checkout-area";
import { useAuth } from "@clerk/nextjs";
import { RedirectToSignIn } from "@clerk/nextjs";

const CheckoutPage = () => {
  const auth = useAuth();

  if (!auth.sessionId) {
    return <RedirectToSignIn />;
  }

  return (
    <Wrapper>
      <SEO pageTitle="Checkout" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Checkout" subtitle="Checkout" bg_clr={true} />
      <CheckoutArea />
      <Footer style_2={true} />
    </Wrapper>
  );
};

export default CheckoutPage;
