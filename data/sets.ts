import * as adv from './sets/adv.json';
import * as bw from './sets/bw.json';
import * as dpp from './sets/dpp.json';
import * as gsc from './sets/gsc.json';
import * as rby from './sets/rby.json';
import * as sm from './sets/sm.json';
import * as xy from './sets/xy.json';

const RBY: {[pokemon: string]: Sets} = rby;
const GSC: {[pokemon: string]: Sets} = gsc;
const ADV: {[pokemon: string]: Sets} = adv;
const DPP: {[pokemon: string]: Sets} = dpp;
const BW: {[pokemon: string]: Sets} = bw;
const XY: {[pokemon: string]: Sets} = xy;
const SM: {[pokemon: string]: Sets} = sm;

export const SETS: Array<{[pokemon: string]: Sets}> =
    [{}, RBY, GSC, ADV, DPP, BW, XY, SM];
