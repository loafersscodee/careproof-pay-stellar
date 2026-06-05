# CareProof Pay

Outcome-based healthcare payments that release only when recovery milestones are attested.

Former project name: Healthcare Outcome Payment Model

## Problem
Healthcare sponsors and families often pay before outcomes are clear, while providers need predictable settlement. CareProof Pay makes outcome-based healthcare payments transparent by funding a Stellar escrow, recording clinical milestones, and releasing funds when verified recovery metrics are met.

## How It Works
Milestone escrow: sponsors fund a patient episode, a verifier attests recovery score and status, and an admin releases USDC to a provider after the outcome threshold is met.

The core flow is:

1. Connect a Freighter wallet on Stellar testnet.
2. Create a episode record in the Soroban contract.
3. Fund the record with XLM or USDC-equivalent testnet assets.
4. Attest the project-specific metric.
5. Release payment after the milestone is verified.

## How It Uses Stellar

Stellar is core to the product:

- **Stellar testnet** is the default network.
- **Freighter wallet** gives users self-custodial signing.
- **Soroban Rust smart contract** manages the episode payment state.
- **Stellar assets / SAC-ready config** support low-cost settlement.
- **Soroban RPC** handles contract calls, simulation, submission, and finality polling.
- **x402-style payment quote route** keeps machine-readable payment requirements available for agents.
- **Reflector Oracle**: Reflector is documented as the oracle path for future PHP/USD and medical cost reference data, while the current testnet prototype keeps outcome scores in Soroban state.

## Smart Contract Design

The Soroban contract follows the required three-part pattern:

- contract/src/lib.rs: contract struct plus public #[contractimpl] API.
- contract/src/storage.rs: keyed storage and TTL extension.
- contract/src/types.rs and contract/src/errors.rs: #[contracttype] state and #[contracterror] failures.

Project-specific Rust API:

- open_episode(id, owner, target)
- fund_episode(id, from, amount)
- attest_outcome(id, score, status)
- release_provider(id, to, amount)
- get_record(id)
- total_locked()

## Track
Track 5 Social Impact

## Tech Stack

- Frontend: React + Vite + TypeScript
- Backend: Express + TypeScript
- Database: Prisma + SQLite
- Smart contract: Rust + Soroban SDK
- Stellar SDK: @stellar/stellar-sdk
- Wallet: Freighter via @stellar/freighter-api
- Network: Stellar testnet
- Ecosystem path: Reflector Oracle

## Rust Tech Stack

Rust powers the Soroban episode escrow contract with typed outcome records, persistent case storage, explicit errors, and attestation events.

Rust modules:

- lib.rs: public API and domain flow.
- storage.rs: instance/persistent storage and TTL handling.
- types.rs: typed records crossing the WASM boundary.
- errors.rs: deterministic contract failures.
- events.rs: indexable contract events.

## Setup & Run

```bash
git clone https://github.com/loafersscodee/careproof-pay.git
cd careproof-pay
npm install
npm run db:generate
npm --workspace backend run db:migrate
npm run db:seed
npm run dev
```

## Contract

```bash
cd contract
make test
make build
```

## StellarX Dev Setup

Read:

- docs/dev-setup.md
- docs/stellar-fullstack-cheatsheet.md
- docs/security.md
- docs/demo-motion.md

## Network Details

- Network: Stellar testnet
- RPC URL: https://soroban-testnet.stellar.org
- Horizon URL: https://horizon-testnet.stellar.org
- USDC SAC: CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA
- XLM SAC: CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC
- Contract IDs: Not deployed yet. Set CONTRACT_ID after deployment.

## Originality & Disclosure

This is original StellarX Philippines hackathon work. It uses open-source Stellar SDKs, Soroban Rust SDK, AI-assisted development, the Stellar fullstack cheatsheet, and the disclosed Reflector Oracle integration path. It is not a copied team project or barely modified template.

## Team

- Loafers - @loafersscodee

## License

MIT
