# Contract

CareProof Pay uses a Rust Soroban contract named `CareProofPay`.

## Three-Part Pattern

1. **Struct + impl**: `lib.rs` defines `CareProofPay` and the public contract API.
2. **Storage**: `storage.rs` reads and writes keyed state and extends TTL.
3. **Errors + types**: `errors.rs` and `types.rs` define stable cross-WASM boundaries.

## Public API

- `open_episode`: create a episode record.
- `fund_episode`: transfer testnet asset funding into contract escrow.
- `attest_outcome`: admin/verifier records score and status.
- `release_provider`: admin releases verified payment.
- `get_record`: read typed Soroban state.
- `total_locked`: read total locked escrow balance.

## Events

- `created`
- `funded`
- `attested`
- `released`
