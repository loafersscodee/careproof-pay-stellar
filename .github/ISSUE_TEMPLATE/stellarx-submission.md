---
name: StellarX Philippines Submission
about: Submission issue for StellarX Philippines judges
title: "Team #SungJinWHAT - CareProof Pay"
labels: "stellarx, submission"
assignees: ""
---

## Project Name
CareProof Pay

## One-Line Description
Outcome-based healthcare payments that release only when recovery milestones are attested.

## Track
Track 5 Social Impact

## Problem It Solves
Healthcare sponsors and families often pay before outcomes are clear, while providers need predictable settlement. CareProof Pay makes outcome-based healthcare payments transparent by funding a Stellar escrow, recording clinical milestones, and releasing funds when verified recovery metrics are met.

## How It Uses Stellar
CareProof Pay uses Freighter wallet signing, Stellar testnet assets, Soroban RPC, and a Rust Soroban contract named CareProofPay. Reflector is documented as the oracle path for future PHP/USD and medical cost reference data, while the current testnet prototype keeps outcome scores in Soroban state.

## GitHub Repository
https://github.com/SungJinWHAT/healthcare-outcome-payment-model

## Network & Deployment
- Network: testnet
- Live app URL (if any): runs locally - see README
- Contract IDs / asset issuers (if any): set CONTRACT_ID after testnet deployment

## Team
- SungJinWHAT - @SungJinWHAT

## Novelty Note
This is original StellarX Philippines work. It uses allowed open-source Stellar tooling, Soroban Rust SDK, the Stellar fullstack cheatsheet, AI-assisted development, and the disclosed Reflector Oracle integration path.

## Anything Else
Known limitation: final deployment IDs must be filled after testnet deployment.
