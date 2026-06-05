use soroban_sdk::{Address, Env, String};

use crate::types::{DataKey, PaymentRecord};

const MIN_TTL: u32 = 100;
const EXTEND_TO: u32 = 518400;

pub fn set_admin(env: &Env, admin: &Address) {
    env.storage().instance().set(&DataKey::Admin, admin);
    env.storage().instance().extend_ttl(MIN_TTL, EXTEND_TO);
}

pub fn get_admin(env: &Env) -> Address {
    env.storage().instance().get(&DataKey::Admin).unwrap()
}

pub fn set_asset(env: &Env, asset: &Address) {
    env.storage().instance().set(&DataKey::Asset, asset);
    env.storage().instance().extend_ttl(MIN_TTL, EXTEND_TO);
}

pub fn get_asset(env: &Env) -> Address {
    env.storage().instance().get(&DataKey::Asset).unwrap()
}

pub fn set_project_name(env: &Env, project_name: &String) {
    env.storage().instance().set(&DataKey::ProjectName, project_name);
    env.storage().instance().extend_ttl(MIN_TTL, EXTEND_TO);
}

pub fn get_project_name(env: &Env) -> String {
    env.storage().instance().get(&DataKey::ProjectName).unwrap()
}

pub fn set_total_locked(env: &Env, amount: i128) {
    env.storage().instance().set(&DataKey::TotalLocked, &amount);
    env.storage().instance().extend_ttl(MIN_TTL, EXTEND_TO);
}

pub fn get_total_locked(env: &Env) -> i128 {
    env.storage().instance().get(&DataKey::TotalLocked).unwrap_or(0i128)
}

pub fn set_record(env: &Env, id: &String, record: &PaymentRecord) {
    let key = DataKey::Record(id.clone());
    env.storage().persistent().set(&key, record);
    env.storage().persistent().extend_ttl(&key, MIN_TTL, EXTEND_TO);
}

pub fn get_record(env: &Env, id: &String) -> Option<PaymentRecord> {
    env.storage().persistent().get(&DataKey::Record(id.clone()))
}

pub fn set_contribution(env: &Env, owner: &Address, amount: i128) {
    let key = DataKey::Contribution(owner.clone());
    env.storage().persistent().set(&key, &amount);
    env.storage().persistent().extend_ttl(&key, MIN_TTL, EXTEND_TO);
}

pub fn get_contribution(env: &Env, owner: &Address) -> i128 {
    env.storage()
        .persistent()
        .get(&DataKey::Contribution(owner.clone()))
        .unwrap_or(0i128)
}
