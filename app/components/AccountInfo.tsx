import { useActiveAccount, useActiveWallet } from "thirdweb/react";

export function AccountInfo() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  if (!account) {
    return (
      <div className="account-info">
        <h3>Account Information</h3>
        <p>No wallet connected</p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Use the Connect Wallet button above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="account-info">
      <h3>Account Information</h3>
      <p>
        <strong>Address:</strong> {account.address}
      </p>
      {wallet && (
        <p>
          <strong>Wallet:</strong> {wallet.id}
        </p>
      )}
      <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
        {account.address.slice(0, 6)}...{account.address.slice(-4)}
      </p>
    </div>
  );
}

export function TokenBalance() {
  const account = useActiveAccount();

  if (!account) {
    return (
      <div className="token-balance">
        <h3>Wallet Balance</h3>
        <p>Please connect your wallet first</p>
      </div>
    );
  }

  return (
    <div className="token-balance">
      <h3>Wallet Balance</h3>
      <p>Connected to: {account.address}</p>
      <div style={{ marginTop: "12px" }}>
        <p style={{ fontSize: "14px", color: "#666" }}>
          <em>To display balance:</em>
        </p>
        <ul style={{ fontSize: "12px", color: "#888", marginLeft: "16px" }}>
          <li>
            Use <code>useBalance</code> hook from thirdweb/react
          </li>
          <li>Specify the chain and token contract address</li>
          <li>Example: ETH balance, ERC-20 tokens, etc.</li>
        </ul>
      </div>
    </div>
  );
}
