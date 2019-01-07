import * as BW from './mechanics/bw';
import * as DPP from './mechanics/dpp';
import * as GSC from './mechanics/gsc';
import * as RBY from './mechanics/rby';
import * as RSE from './mechanics/rse';
import * as SM from './mechanics/sm';
import * as XY from './mechanics/xy';

const ZERO = {
  damage: () => {
    throw new Error('dummy');
  }
};

export const MECHANICS = [ZERO, RBY, GSC, RSE, DPP, BW, XY, SM];
