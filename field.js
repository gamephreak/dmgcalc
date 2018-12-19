'use strict';

const $ = {};
$.extend = require('jquery-extend');

class Field {
  constructor(
      format, terrain, weather, isGravity, isSR, spikes, isReflect,
      isLightScreen, isProtected, isAttackerSeeded, isDefenderSeeded, 
      isForesight, isHelpingHand, isFriendGuard, isAuroraVeil) {
    this.format = format;
    this.terrain = terrain;
    this.weather = weather;
    this.isGravity = isGravity;
    this.isSR = isSR;;
    this.spikes = spikes;
    this.isReflect = isReflect;
    this.isLightScreen = isLightScreen;
    this.isProtected = isProtected;
    this.isAttackerSeeded = isAttackerSeeded;
    this.isDefenderSeeded = isDefenderSeeded;
    this.isForesight = isForesight;
    this.isHelpingHand = isHelpingHand;
    this.isFriendGuard = isFriendGuard;
    this.isAuroraVeil = isAuroraVeil;
  }

  copy() {
    return $.extend(true, {}, this);
  }

  side(i) {
    return new Side(
        format, terrain, weather, isGravity, isSR[i], spikes[i], isReflect[i],
        isLightScreen[i], isProtected[i], isSeeded[1 - i], isSeeded[i],
        isForesight[i], isHelpingHand[i], isFriendGuard[i], isAuroraVeil[i]);
  }
}

class Side {
  constructor(
      format, terrain, weather, isGravity, isSR, spikes, isReflect,
      isLightScreen, isProtected, isAttackerSeeded, isDefenderSeeded, 
      isForesight, isHelpingHand, isFriendGuard, isAuroraVeil) {
    this.format = format || 'Singles';
    this.terrain = terrain || '';
    this.weather = weather || 'None';
    this.isGravity = !!isGravity;
    this.isSR = !!isSR;
    this.spikes = +spikes;
    this.isReflect = !!isReflect;
    this.isLightScreen = !!isLightScreen;
    this.isProtected = !!isProtected;
    this.isAttackerSeeded = !!isAttackerSeeded;
    this.isDefenderSeeded = !!isDefenderSeeded;
    this.isForesight = !!isForesight;
    this.isHelpingHand = !!isHelpingHand;
    this.isFriendGuard = !!isFriendGuard;
    this.isAuroraVeil = !!isAuroraVeil;
  }

  copy() {
    return $.extend(true, {}, this);
  }
}

exports.Field = Field;
exports.Side = Side;
