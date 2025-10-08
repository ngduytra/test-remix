import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

// Create thirdweb client
export const client = createThirdwebClient({
  clientId:
    // process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID ||
    "20b3a3931bdaaea0ebd7868b164ead0b",
});

// Define supported wallets
export const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
];

// You can also export specific chains if needed
// import { ethereum, polygon, arbitrum } from "thirdweb/chains";
// export const supportedChains = [ethereum, polygon, arbitrum];
