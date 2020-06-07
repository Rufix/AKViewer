export type OperatorBasicInfo = {
    rarity: number;
    type: OperatorType;
    targets: NumberOfTargets;
    damageType: DamageType;
};

enum NumberOfTargets {
    One,
    Three,
    AoE
}

enum DamageType {
    Physical,
    Arts
}

enum OperatorType {
    Caster,
    Defender,
    Guard,
    Medic,
    Sniper,
    Specialist,
    Supporter,
    Vanguard
}