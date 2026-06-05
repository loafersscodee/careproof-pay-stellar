# Dev Setup Guide

This project follows the StellarX Philippines dev setup guidance and keeps third-party provider dependencies optional.

## Core Environment

| Protocol / Tool | Key Required | Notes |
|---|---|---|
| Soroban RPC | No for public testnet | Default RPC is public testnet |
| Freighter | No | Browser extension wallet |
| Stellar Wallets Kit | No | Optional multi-wallet expansion |
| Soroswap | No | Public protocol contracts |
| Blend | No | Public protocol contracts |
| Reflector Oracle | No | Public oracle references |

## Testnet References

| Resource | Value |
|---|---|
| Soroban RPC | `https://soroban-testnet.stellar.org` |
| Horizon | `https://horizon-testnet.stellar.org` |
| Friendbot | `https://friendbot.stellar.org` |
| USDC SAC | `CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA` |
| XLM SAC | `CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC` |
| Soroswap Router | `CCJUD55AG6W5HAI5LRVNKAE5WDP5XGZBUDS5WNTIVDU7O264UZZE7BRD` |
| Soroswap Factory | `CDP3HMUH6SMS3S7NPGNDJLULCOXXEPSHY4JKUKMBNQMATHDHWXRRJTBY` |
| Blend Pool Factory V2 | `CDV6RX4CGPCOKGTBFS52V3LMWQGZN3LCQTXF5RVPOOCG4XVMHXQ4NTF6` |
| Blend Backstop V2 | `CBDVWXT433PRVTUNM56C3JREF3HIZHRBA64NB2C3B2UNCKIS65ZYCLZA` |
| Blend Testnet V2 Pool | `CCEBVDYM32YNYCVNRXQKDFFPISJJCV557CDZEIRBEE4NCV4KHPQ44HGF` |

## Project-Specific Setup

CareProof Pay uses Reflector Oracle as its disclosed ecosystem path.

Reflector is documented as the oracle path for future PHP/USD and medical cost reference data, while the current testnet prototype keeps outcome scores in Soroban state.

## Gotchas Applied

- Always simulate Soroban transactions before signing and submission.
- Poll finality after `sendTransaction`; pending is not success.
- Use `Networks.TESTNET` rather than hardcoded passphrase strings.
- Keep storage TTL extension in the Rust storage layer.
- Add trustlines before receiving non-native Stellar assets.
- Wrap Freighter calls with timeouts so missing extensions do not hang the UI.
- Treat Freighter `signTransaction` as returning an object in newer APIs.
- Use `BigInt` for Soroswap amount paths.
- Use Soroban RPC by default for contract calls and modern transaction flows.
