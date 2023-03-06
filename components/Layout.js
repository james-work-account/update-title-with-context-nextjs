import TitleContext from "@/hooks/useTitle";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export function Layout({ children }) {
  const { title } = useContext(TitleContext);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
