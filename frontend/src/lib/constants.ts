export const PROJECT = {
  "id": 4,
  "name": "CareProof Pay",
  "slug": "04-healthcare-outcome-payment-model",
  "shortName": "CareProof",
  "audience": "Hospitals, insurers, sponsors, and post-op patients",
  "mission": "Outcome-based healthcare payments that release only when recovery milestones are attested.",
  "stat": "Outcome releases require verifier attestation",
  "metric": "Verified recovery score",
  "action": "Milestone escrow",
  "contractAction": "Fund outcome escrow",
  "visual": "Clinical payments board with escrow lanes, recovery checkpoints, and calm verification pulses.",
  "palette": [
    "#0f172a",
    "#0891b2",
    "#22c55e",
    "#f8fafc"
  ],
  "pattern": "careproof-pay"
} as const;

export const PAYMENT_ARCHITECTURE = {
  "recordName": "episode",
  "contract": "CareProofPay",
  "createAction": "open_episode",
  "depositAction": "fund_episode",
  "attestAction": "attest_outcome",
  "releaseAction": "release_provider",
  "approach": "Milestone escrow: sponsors fund a patient episode, a verifier attests recovery score and status, and an admin releases USDC to a provider after the outcome threshold is met.",
  "rustUse": "Rust powers the Soroban episode escrow contract with typed outcome records, persistent case storage, explicit errors, and attestation events.",
  "integration": "Reflector Oracle",
  "integrationUse": "Reflector is documented as the oracle path for future PHP/USD and medical cost reference data, while the current testnet prototype keeps outcome scores in Soroban state."
} as const;

export const API_URL = import.meta.env.VITE_API_URL || "";
export const STELLAR_NETWORK = import.meta.env.VITE_STELLAR_NETWORK || "stellar:testnet";
export const CONTRACT_ID = import.meta.env.VITE_CONTRACT_ID || "YOUR_CONTRACT_ID";
