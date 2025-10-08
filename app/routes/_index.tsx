import type { MetaFunction } from "@remix-run/node";
import { WalletConnect } from "~/components/WalletConnect";
import { AccountInfo, TokenBalance } from "~/components/AccountInfo";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Thirdweb Starter" },
    { name: "description", content: "Welcome to Remix with Thirdweb!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>Welcome to Remix + Thirdweb</h1>
        <p>
          This is a starter template combining Remix and Thirdweb for Web3
          development.
        </p>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <WalletConnect />
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <AccountInfo />
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <TokenBalance />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2>Useful Links</h2>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
              >
                15m Quickstart Blog Tutorial
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
              >
                Deep Dive Jokes App Tutorial
              </a>
            </li>
            <li>
              <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                Remix Docs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://portal.thirdweb.com/"
                rel="noreferrer"
              >
                Thirdweb Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
