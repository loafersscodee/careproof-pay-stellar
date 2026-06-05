# Security Notes

Security pass for CareProof Pay.

## Soroban Contract Controls

- Admin-only attestation and release functions call `require_auth()`.
- User funding calls require the contributor signature.
- Amounts must be positive.
- Release amount cannot exceed funded minus released escrow.
- Duplicate episode records are rejected.
- Score attestations are capped at 100.
- Persistent storage keys extend TTL to reduce archival surprises.
- Events are emitted for creation, funding, attestation, and release.

## Frontend and Backend Controls

- Freighter should be dynamically imported and wrapped with a timeout.
- Backend JSON payloads are capped.
- Never store secret keys in the frontend.
- Do not store patient, student, or cooperative PII on-chain.
- Keep `.env.example` placeholders; real secrets must stay outside Git.

## Remaining Review Before Production

- Add integration tests with a test token contract.
- Add explicit role rotation for the admin address.
- Add multisig or governance for release authorization.
- Confirm current testnet protocol addresses before demo day.
- Run a Soroban static analysis tool such as Scout Soroban before mainnet.
