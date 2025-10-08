import { useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "~/lib/thirdweb";
import { ethereum } from "thirdweb/chains";
import { getBalance } from "thirdweb/extensions/erc20";

export function EthBalance() {
  const account = useActiveAccount();

  // Note: In thirdweb v5, you might need to use different methods for getting ETH balance
  // This is a placeholder - you'll need to check the latest thirdweb v5 docs for the exact API

  if (!account) {
    return <p>Please connect your wallet to view balance</p>;
  }

  return (
    <div className="eth-balance">
      <h4>ETH Balance</h4>
      <p>
        <em>To implement balance checking:</em>
        <br />
        - Use thirdweb v5's balance utilities
        <br />- Check the latest documentation at{" "}
        <a
          href="https://portal.thirdweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          portal.thirdweb.com
        </a>
      </p>
    </div>
  );
}

// Example placeholder for token balance
export function TokenBalanceExample() {
  const account = useActiveAccount();

  if (!account) return <p>Please connect wallet</p>;

  return (
    <div className="token-balance-example">
      <h4>Token Balance (Example)</h4>
      <p>
        <em>To implement ERC-20 token balance:</em>
        <br />
        1. Import the contract extensions from thirdweb
        <br />
        2. Use the getBalance function with token contract address
        <br />
        3. Use useReadContract hook to execute the balance query
      </p>
    </div>
  );
}
