# Stellar Fullstack Cheatsheet

This project adapts the Stellar fullstack payment-app cheatsheet into a domain-specific product: CareProof Pay.

## 90-Minute Core Demo Path

1. Install dependencies.
2. Connect Freighter.
3. Show XLM/USDC balances.
4. Create a episode record.
5. Build a Stellar payment or Soroban contract call.
6. Sign in Freighter.
7. Submit through Soroban RPC.
8. Poll transaction finality.
9. Save local transaction history in Prisma.
10. Link the transaction on Stellar Expert testnet.

## Required Payment Flow

The minimum demo should prove:

- Wallet connection works.
- The user can create or fund a episode.
- The backend records the operation.
- The Soroban contract stores the state.
- The UI shows transaction status from build to finality.

## Critical Implementation Notes

- Use `rpc`, not the old `SorobanRpc` namespace.
- Use dynamic Freighter imports.
- Handle `signedTxXdr` object returns.
- Poll for `SUCCESS` after submission.
- Add a trustline flow for USDC if the app receives classic assets.
- Keep `.env.example` aligned with testnet addresses.

## Starter AI Prompt

```text
Build CareProof Pay as a Stellar testnet payment app using React, Express, Prisma, Rust Soroban, Freighter, and @stellar/stellar-sdk.
Use Soroban RPC, simulate before submit, poll finality, and keep Stellar central to the product.
The project-specific flow is: Milestone escrow: sponsors fund a patient episode, a verifier attests recovery score and status, and an admin releases USDC to a provider after the outcome threshold is met.
```
