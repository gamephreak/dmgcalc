'use strict';

class Field {
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
    return new Field(
      this.format, this.terrain, this.weather, this.isGravity,
      this.isSR, this.spikes, this.isReflect, this.isLightScreen,
      this.isProtected, this.isAttackerSeeded, this.isDefenderSeeded,
      this.isForesight, this.isHelpingHand, this.isFriendGuard,
      this.isAuroraVeil);
  }
}

exports.Field = Field;
