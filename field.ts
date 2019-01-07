export class Field {
  format: Format;
  terrain: Terrain;
  weather: Weather;
  isGravity: boolean;
  isSR: boolean;
  spikes: number;
  isReflect: boolean;
  isLightScreen: boolean;
  isProtected: boolean;
  isAttackerSeeded: boolean;
  isDefenderSeeded: boolean;
  isForesight: boolean;
  isHelpingHand: boolean;
  isFriendGuard: boolean;
  isAuroraVeil: boolean;

  constructor(
      format?: Format, terrain?: Terrain, weather?: Weather,
      isGravity?: boolean, isSR?: boolean, spikes?: number, isReflect?: boolean,
      isLightScreen?: boolean, isProtected?: boolean,
      isAttackerSeeded?: boolean, isDefenderSeeded?: boolean,
      isForesight?: boolean, isHelpingHand?: boolean, isFriendGuard?: boolean,
      isAuroraVeil?: boolean) {
    this.format = format || 'Singles';
    this.terrain = terrain || '';
    this.weather = weather || '';
    this.isGravity = !!isGravity;
    this.isSR = !!isSR;
    this.spikes = spikes || 0;
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
        this.format, this.terrain, this.weather, this.isGravity, this.isSR,
        this.spikes, this.isReflect, this.isLightScreen, this.isProtected,
        this.isAttackerSeeded, this.isDefenderSeeded, this.isForesight,
        this.isHelpingHand, this.isFriendGuard, this.isAuroraVeil);
  }
}
