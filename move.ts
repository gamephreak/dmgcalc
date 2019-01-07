import {getZMoveName, MOVES} from './data/moves';
import {extend} from './util';

export class Move {
  name: string;
  gen: Generation;
  hits: number;
  usedTimes?: number;
  metronomeCount?: number;
  bp: number;
  type: Type;
  category: Category;
  hasSecondaryEffect: boolean;
  isSpread: boolean;
  makesContact: boolean;
  hasRecoil?: Recoil;
  isCrit: boolean;
  givesHealth: boolean;
  percentHealed?: number;
  ignoresBurn: boolean;
  isPunch: boolean;
  isBite: boolean;
  isBullet: boolean;
  isSound: boolean;
  isPulse: boolean;
  hasPriority: boolean;
  dropsStats?: number;
  ignoresDefenseBoosts: boolean;
  dealsPhysicalDamage: boolean;
  bypassesProtect: boolean;
  isZ: boolean;
  usesHighestAttackStat: boolean;

  private move: MoveInfo;
  private ability: string;
  private item: string;
  private times: number;
  private useZ: boolean;

  constructor(
      gen: Generation, move: MoveInfo, ability: string, item: string,
      useZ?: boolean, isCrit?: boolean, hits?: number, times?: number) {
    this.gen = gen;
    this.move = move;
    this.ability = ability;
    this.item = item;
    this.useZ = !!useZ;
    this.times = times || 1;

    // If isZMove but there isn't a corresponding z-move, use the original move
    if (useZ && 'zp' in move) {
      const zMoveName: string = getZMoveName(move.name!, move.type, item)!;
      const zMove = MOVES[gen][zMoveName];

      move = extend(true, {}, zMove, {
        'name': zMoveName,
        'bp': zMove.bp === 1 ? move.zp : zMove.bp,
        'category': move.category
      });
      this.hits = 1;
    } else {
      this.hits = move.isMultiHit ?
          hits || ((ability === 'Skill Link' || item === 'Grip Claw') ? 5 : 3) :
          move.isTwoHit ? 2 : 1,
      this.usedTimes = move.dropsStats ? this.times : 1;
      this.metronomeCount = item === 'Metronome' ? this.times : 1;
    }

    this.name = move.name!;
    this.bp = move.bp;
    this.type = move.type;
    this.category = move.category || 'Status';
    this.hasSecondaryEffect = !!move.hasSecondaryEffect;
    this.isSpread = !!move.isSpread;
    this.makesContact = !!move.makesContact;
    this.isCrit = !!isCrit || !!move.alwaysCrit;
    this.hasRecoil = move.hasRecoil;
    this.givesHealth = !!move.givesHealth;
    this.percentHealed = move.percentHealed;
    this.ignoresBurn = !!move.ignoresBurn;
    this.isPunch = !!move.isPunch;
    this.isBite = !!move.isBite;
    this.isBullet = !!move.isBullet;
    this.isSound = !!move.isSound;
    this.isPulse = !!move.isPulse;
    this.hasPriority = !!move.hasPriority;
    this.dropsStats = move.dropsStats;
    this.ignoresDefenseBoosts = !!move.ignoresDefenseBoosts;
    this.dealsPhysicalDamage = !!move.dealsPhysicalDamage;
    this.bypassesProtect = !!move.bypassesProtect;
    this.isZ = !!move.isZ;
    this.usesHighestAttackStat = !!move.usesHighestAttackStat;
  }

  copy() {
    return new Move(
        this.gen, this.move, this.ability, this.item, this.useZ, this.isCrit,
        this.hits, this.times);
  }
}
