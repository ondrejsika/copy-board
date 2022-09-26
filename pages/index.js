import React from "react";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

let texts = [
  "@dependabot rebase",
  "2500171198 / 2010",
  "Zmenil jsem email pro pracovani aktivity (skoleni, konzultace, ...), prosim pouzivejte ondrej@sika.io (misto ondrej@ondrejsika.com). Diky.",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>copy-board - copy.oxs.cz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {texts.map((el, i) => {
        return (
          <>
            <CopyToClipboard text={el} key={i}>
              <button style={{ margin: "10px", fontSize: "1.2em" }}>
                {el}
              </button>
            </CopyToClipboard>
            <br />
          </>
        );
      })}
    </>
  );
}
