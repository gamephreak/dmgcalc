# dmgcalc

Damage Calculator library and CLI (`dmg`) for Pokémon cartridge battles spanning
every generation. Based on the engine powering the
[Pokémon Showdown](https://psim.us)
[damage calculator](https://pokemonshowdown.com/damagecalc/).

## Install

    $ npm install dmgcalc

## CLI

    $ dmg +1 252 SpA Gengar @ Choice Specs [Focus Blast] vs. 0 HP / 172+ SpD Blissey --gen=4
    +1 252 SpA Choice Specs Gengar Focus Blast vs. 0 HP / 172+ SpD Blissey: 362-428 (55.6 - 65.7%) -- guaranteed 2HKO after Leftovers recovery
    $ dmg gengar [focus blast] vs. blissey gen:6
    252 SpA Life Orb Gengar Focus Blast vs. 252 HP / 4 SpD Blissey: 263-309 (36.8 - 43.2%) -- 98.7% chance to 3HKO after Leftovers recovery
    $ dmg gen=3 mence @ CB [EQ] vs. cune @ lefties
    252+ Atk Choice Band Salamence Earthquake vs. 252 HP / 252+ Def Suicune: 121-143 (29.9 - 35.3%) -- guaranteed 4HKO after Leftovers recovery

### Format

The command line `dmg` tool is able to parse basic descriptions / *phrases* as
input in addition to *flags*. The specification for the **phrases** it
understands is similar to the output description, with items and moves requiring
a slight modification in their place in order to make parsing easier:

    <ATTACKER_BOOST>? <ATTACKER_EVS>? <ATTACKER_POKEMON> (@ <ATTACKER_ITEM>)? ([<ATTACKER_MOVE>])? vs.
    <DEFENDER_BOOST>? <DEFENDER_EVS>? <DEFENDER_POKEMON> (@ <DEFENDER_ITEM>)?

where:

-   `ATTACKER_BOOST`: optional, can range from -6 to +6 and boosts the stat used
    for attacking.
-   `ATTACKER_EVS`: optional, can range from 0-252 and can only be 'Atk' or
    'SpA' EVs (not case-sensitive). A '+' or '-' may be included after the
    number of EVs to indicate nature.
-   `ATTACKER_POKEMON`: required, the name of the attacking Pokémon
    species/forme.
-   `ATTACKER_ITEM`: optional, must come after a '@', the held item of the
    attacker.
-   `ATTACKER_MOVE`: optional, must be enclosed in square brackets, the
    attacking move.
-   `DEFENDER_BOOST`: optional, can range from -6 to +6 and boosts the stat used
    to defend against the attack.
-   `DEFENDER_EVS`: optional, can range from 0-252 and can of the form
    '&lt;N&gt; HP', '&lt;N&gt; HP / &lt;N&gt; Def' or '&lt;N&gt; HP / &lt;N&gt;
    SpD' (not case-sensitive). A '+' or '-' may be included after the number of
    Def or SpD EVs to indicate nature.
-   `DEFENDER_POKEMON`: required, the name of the defending Pokémon
    species/forme.

**Flags** have a fairly flexible format: any instance of 'key:value' or
'key=value' (where the key can optionally be prefixed with '-' or '--', i.e.
'-key=value' or '--key:value', etc) gets interpreted as a flag. Flags used to
set properties of the attacker have keys beginning with 'attacker', those for
the defender must begin with 'defender'. The field ('spikes', 'weather', etc)
and other properties ('isCrit', 'useZ', etc) may be set without any prefix, but
the 'is' on boolean properties is optional (i.e. '--isSR=true' and 'sr=true'
both set Stealth Rock on the defender's side).

Flags may appear anywhere within the input to the CLI (even inside the phrase),
the following is functionally equivalent to the first example above:

    $ dmg +1 --attackerItem='Choice Specs' Gengar [Focus Blast] vs. 0 HP / 172+ SpD Blissey attackerSpAEVs=252 --gen=4

Unless explicitly specified, the attacker and defender's abilities, items and
spreads (IVs/EVs//natures) will default to the most common sets for the Pokémon
used in competitive play (i.e. this is why Blissey is assumed to have Leftovers
in the output above).

## Library

    const dmg = require('dmgcalc');
    let result = dmg.calc(gen, attacker, defender, move, field);
    console.log(result.desc);

## Credits

Based on [honko-damagecalc](https://github.com/Zarel/honko-damagecalc) by
[Honko](https://github.com/Honko),
[gamut-was-taken](https://github.com/gamut-was-taken),
[Austin](https://github.com/AustinXII), [Zarel](https://github.com/Zarel)
[et al](https://github.com/Zarel/honko-damagecalc/graphs/contributors).
