.PHONY: build test deploy invoke clean

NETWORK ?= testnet
SOURCE ?= alice
WASM = target/wasm32-unknown-unknown/release/healthcare_outcome_payment_model_contract.wasm

build:
	stellar contract build

test:
	cargo test

deploy: build
	stellar contract deploy --wasm $(WASM) --source $(SOURCE) --network $(NETWORK)

invoke:
	stellar contract invoke --id $(CONTRACT_ID) --source $(SOURCE) --network $(NETWORK) -- total_deposited

clean:
	cargo clean
