import Link from "next/link";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <h1 className={"title"}>
        Go to <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/contact/index.js</code>
      </p>
    </>
  );
};

ContactPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default ContactPage;
