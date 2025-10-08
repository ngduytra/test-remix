import { ConnectButton } from "thirdweb/react";
import { client, wallets } from "~/lib/thirdweb";

export function WalletConnect() {
  return (
    <div className="wallet-connect">
      <h2>Connect Your Wallet</h2>
      <ConnectButton
        client={client}
        wallets={wallets}
        theme="light"
        connectButton={{
          label: "Connect Wallet",
          style: {
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          },
        }}
        connectModal={{
          size: "wide",
          title: "Choose your wallet",
          showThirdwebBranding: false,
        }}
        detailsButton={{
          style: {
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "8px",
          },
        }}
      />
      <p style={{ fontSize: "14px", color: "#666", marginTop: "16px" }}>
        Connect with MetaMask, Coinbase Wallet, Rainbow, or other supported
        wallets. Make sure to set your NEXT_PUBLIC_THIRDWEB_CLIENT_ID in your
        environment variables.
      </p>
    </div>
  );
}
