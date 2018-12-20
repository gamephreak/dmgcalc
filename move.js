'use strict';

const $ = {};
$.extend = require('jquery-extend');

const moves = require('./data/moves');
const MOVES = moves.MOVES;

class Move {
  constructor(gen, move, ability, item, useZ, isCrit, hits, times) {
    // If isZMove but there isn't a corresponding z-move, use the original move
    if (useZ && 'zp' in move) {
      let zMoveName = moves.getZMoveName(moveName, move.type, item);
      let ZMove = MOVES[zMoveName];

      move = $.extend(true, {}, zMove, {
        'name': zMoveName,
        'bp': zMove.bp === 1 ? move.zp : zMove.bp,
        'category': move.category,
      });
      this.hits = 1;
    } else {
      times = times || 1;
      this.hits = (move.isMultiHit
          ? +hits || 
            ((ability === 'Skill Link' || this.item === 'Grip Claw') ? 5 : 3)
          : move.isTwoHit ? 2 : 1),
      this.usedTimes = move.dropsStats ? times : 1;
      this.metronomeCount = item === 'Metronome' ? times : 1;
    }

    this.bp = move.bp;
    this.type = move.type;
    this.category = move.category;
    this.hasSecondaryEffect = !!move.hasSecondaryEffect;
    this.isSpread = !!move.isSpread;
    this.makesContact = !!move.makesContact;
    this.isCrit = !!isCrit || !!move.alwaysCrit;
    this.hasRecoil = move.hasRecoil;
    this.givesHealth = move.givesHealth;
    this.percentHealed = move.percentHealed;
    this.isPunch = !!move.isPunch;
    this.isBite = !!move.isBite;
    this.isBullet = !!move.isBullet;
    this.isSound = !!move.isSound;
    this.isPulse = !!move.isPulse;
    this.hasPriority = !!move.hasPriority;
    this.dropsStats = move.dropsStats;
    this.ignoresDefenseBoosts = !!move.ignoresDefenseBoosts;
    this.dealsPhysicalDamange = !!move.dealsPhysicalDamage;
    this.bypassesProtect = !!move.bypassedProtect;
    this.isZ = !!move.isZ;
    this.useHighestAttackStat = !!move.useHighestAttackStat;
  }
}
