import Link from "next/link";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        Go to <Link href="/about">About</Link>-
        <Link href="/contact">Contact</Link>-
        <Link href="/pricing">Pricing</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default HomePage;
