declare type Stat = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'spc';
declare type Generation = 1 | 2 | 3 | 4 | 5 | 6 | 7;
declare type Gender = 'male' | 'female' | 'genderless';
declare type StatsTable = {hp: number, atk: number, def: number, spa: number, spd: number, spe: number, spc?: number};
declare type Status = 'Healthy' | 'Paralyzed' | 'Poisoned' | 'Badly Poisoned' | 'Burned' | 'Asleep' | 'Frozen';
declare type Type = 'None' | 'Normal' | 'Grass' | 'Fire' | 'Water' | 'Electric' | 'Ice' | 'Flying' | 'Bug' | 'Poison' | 'Ground' | 'Rock' | 'Fighting' | 'Psychic' | 'Ghost' | 'Dragon' | 'Dark' | 'Steel' | 'Fairy';
declare type Format = 'Singles' | 'Doubles';
declare type Terrain = '' | 'Electric' | 'Grassy' | 'Psychic' | 'Misty';
declare type Weather = '' | 'Sand' | 'Sun' | 'Rain' | 'Hail' | 'Harsh Sunshine' | 'Heavy Rain' | 'Strong Winds';
declare type Category = 'Physical' | 'Special' | 'Status';
declare type Recoil = boolean | number | 'crash' | 'Struggle';

declare type MoveInfo = {
  name?: string;
  readonly bp: number;
  readonly type: Type;
  readonly category?: Category;
  readonly hasSecondaryEffect?: boolean;
  readonly isSpread?: boolean;
  readonly makesContact?: boolean;
  readonly hasRecoil?: Recoil;
  readonly alwaysCrit?: boolean;
  readonly givesHealth?: boolean;
  readonly percentHealed?: number;
  readonly ignoresBurn?: boolean;
  readonly isPunch?: boolean;
  readonly isBite?: boolean;
  readonly isBullet?: boolean;
  readonly isSound?: boolean;
  readonly isPulse?: boolean;
  readonly hasPriority?: boolean;
  readonly dropsStats?: number;
  readonly ignoresDefenseBoosts?: boolean;
  readonly dealsPhysicalDamage?: boolean;
  readonly bypassesProtect?: boolean;
  readonly isZ?: boolean;
  readonly usesHighestAttackStat?: boolean;
  readonly zp?: number;
  readonly isMultiHit?: boolean;
  readonly isTwoHit?: boolean;
};

declare type Species = {
  name?: string;
  readonly type1: Type;
  readonly type2?: Type;
  readonly baseStats: StatsTable;
  readonly weight: number;
  readonly canEvolve?: boolean;
  readonly gender?: Gender;
  readonly formes?: string[];
  readonly isAlternateForme?: boolean;
  readonly ability?: string;
}

declare type Sets = {[name: string]: Readonly<PokemonSet>};
declare type PokemonSet = {
  level: number;
  moves: string[];
  ivs?: Partial<StatsTable>;
  evs?: Partial<StatsTable>;
  nature?: string;
  ability?: string;
  item?: string;
};

declare type RawDesc = {
  HPEVs?: string;
  attackBoost?: number;
  attackEVs?: string;
  attackerAbility?: string;
  attackerItem?: string;
  attackerName: string;
  defenderAbility?: string;
  defenderItem?: string;
  defenderName: string;
  defenseBoost?: number;
  defenseEVs?: string;
  hits?: number;
  isAuroraVeil?: boolean;
  isFriendGuard?: boolean;
  isHelpingHand?: boolean;
  isCritical?: boolean;
  isLightScreen?: boolean;
  isBurned?: boolean;
  isProtected?: boolean;
  isReflect?: boolean;
  moveBP?: number;
  moveName: string;
  moveTurns?: string;
  moveType?: Type;
  rivalry?: 'buffed' | 'nerfed';
  terrain?: Terrain;
  weather?: Weather;
};
