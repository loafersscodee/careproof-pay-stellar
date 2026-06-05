# Testnet Transaction Verification

Test date: 2026-06-05

## Summary

CareProof Pay was deployed and exercised on Stellar testnet with the Stellar CLI using the funded local identity `alice`.

## Deployment

- Network: Stellar testnet
- Source account: GADN2POLAQCQS7P6ZUPQ4VL7OK5ZRLAJNGBV7MHH2GT2OXWWVATEG7G7
- Asset: XLM SAC `CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC`
- Contract ID: `CAHDIQSSYTWVUE7XDCINPX2J52QBJ44VUO77LUJHXWEEFBJB7BBQCO6E`
- Deploy transaction: https://stellar.expert/explorer/testnet/tx/c1a732760837b9da3e67a98dd8999f03d38595e4af331e6429c5e7ae29714881
- Lab contract page: https://lab.stellar.org/r/testnet/contract/CAHDIQSSYTWVUE7XDCINPX2J52QBJ44VUO77LUJHXWEEFBJB7BBQCO6E

## Transaction Flow Tested

Record ID: `tx-careproof-001`

1. `open_episode` created the payment record with target `1000000`.
   Transaction: https://stellar.expert/explorer/testnet/tx/5bbaddda53745a53ca1bc5d53b8dd5a69ca7447f1684c006764bf2673f2faac0
2. `fund_episode` transferred `500000` XLM SAC units from `alice` into the contract.
   Transaction: https://stellar.expert/explorer/testnet/tx/2af4ca943aba73fe537961f2f90df55851d44dad6585ddb9cc7603e1c624d5ae
3. `attest_outcome` recorded score `91` and status `verified`.
   Transaction: https://stellar.expert/explorer/testnet/tx/57ceedef2aed40a860d6e969695c19a221dcd8945f4d68448a3c68e9ce66f4a3
4. `release_provider` released `250000` XLM SAC units from the contract back to `alice`.
   Transaction: https://stellar.expert/explorer/testnet/tx/8dff1ae8eb06b2bba7d4a808163042a14e2d68bf8451c34b1aa87ca050016a0c
5. `total_locked` returned `250000`.
6. `get_record` returned `funded=500000`, `released=250000`, and `status=released`.

## Result

Passed. The contract accepted signed writes, emitted project events, moved testnet XLM SAC through the token interface, and returned the expected final state.
