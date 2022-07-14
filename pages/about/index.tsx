import Link from "next/link";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Go to <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/about/index.js</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
