export type OperatorBasicInfo = {
    rarity: number;
    type: OperatorType;
    targets: NumberOfTargets;
    damageType: DamageType;
};

export enum NumberOfTargets {
    One,
    Three,
    AoE
}

export enum DamageType {
    Physical,
    Arts,
    True
}

export enum OperatorType {
    Caster,
    Defender,
    Guard,
    Medic,
    Sniper,
    Specialist,
    Supporter,
    Vanguard
}

export enum SidebarComponent {
    Null,
    OperatorDetails
}