import Header from "./components/Header"
import GenerationContainer from "./components/GenerationContainer";
import Preview from "./components/Preview";

import { useState } from "react";

const evaluatePrice = (int)=>{
  switch(true)
  {
      case (int==7):
          return -4
      case (int<14):
          return (int-10)
      case (int==14):
          return 5
      case (int==15):
          return 7
      case (int==16):
          return 10
      case (int==17):
          return 13
      case (int==18):
          return 17
      default:
          return NaN
  }
}

function App() {

  const [attributes, setAttributes] = useState([
    {
      name: "Strength",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Dexterity",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Constitution",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Intelligence",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Wisdom",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Charisma",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    ])
  const changeBaseAttribute = (name, newval) =>{
    setAttributes(attributes.map((attribute)=>{
      if (attribute.name===name)
        {
          let res = attribute
          res.base = newval
          res.pointCost = evaluatePrice(res.base)
          res.bonus = Math.floor((res.base-10)/2)
          return res
        }
      else return attribute
    }
    ))
  }
  const [races, setRaces] = useState([
    {
    name: "Dwarf",
    sources: {},
    lore: "Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins. More than any other race, dwarves have acquired a reputation as dour and humorless artisans of the earth. It could be said that their history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins, and other such horrors.\nDwarves are lovers of history and tradition, and their long lifespan leads to far less in the way of generational shifts in attitudes, styles, fashions, and trends than shorter-lived races exhibit. If a thing is not broken, they do not fix it or change it; and if it is broken, they fix it rather than replace it. Thrifty as a rule, dwarves are loath to discard anything unless it is truly ruined and unable to be fixed. At the same time, dwarves’ meticulous, near-obsessive attention to detail and durability in their craftsmanship makes that a rare occurrence, as the things they make are built to last. As a result, buildings, artwork, tools, housewares, garments, weapons, and virtually everything else made by dwarves still sees regular use at an age when such items would be relegated to museum pieces, dusty antique shelves, or junkyard fodder by other races. Taken together, these traits create the impression that dwarves are a race frozen in time.\nNothing could be further from the truth, however, as dwarves are both thoughtful and imaginative, willing to experiment, if always keen to refine and perfect a new technique or product before moving on to the next one. Dwarves have achieved feats of metallurgy, stonework, and engineering that have consistently outpaced the technological advances of other races, though some non-dwarven races have used magic to supplement and perfect their own creations to achieve the same ends through mystical rather than mundane means. They are also a race typified by stubborn courage and dedication to seeing tasks through to completion, whatever the risks. These traits have led dwarves to explore and settle in extreme environments that would cause other races to quail and retreat. From the darkest depths of the underworld to the highest mountain peaks, from rusting iron citadels along desolate rocky coasts to squat jungle ziggurats, dwarves have established their enclaves and redoubts, holding them against all comers or perishing to the last and leaving only their enduring monuments to stand as their legacy. While it is said that dwarves are not venturesome or inventive, it would be more accurate to say that they maintain a focus on and dedication to each task they undertake and every change they adopt, vetting such changes thoroughly before adopting them wholeheartedly. When faced with new circumstances and new needs, they react by applying tried and true tools and techniques systematically, using existing methods whenever possible rather than trying to invent novel solutions for every situation. If necessity requires, however, they throw themselves with equal vigor into developing the next perfect procedure for demolishing the obstacles that get in their way. Once their desired goal is obtained, they focus on consolidating each new piece of territory or conceptual advance. Dwarves thus rarely overextend themselves, but they also may miss opportunities to seize the initiative and maximize the advantages they create.\nPhysical Description: Dwarves are a short and stocky race, and stand about a foot shorter than most humans, with wide, compact bodies that account for their burly appearance. Male and female dwarves pride themselves on the long length of their hair, and men often decorate their beards with a variety of clasps and intricate braids. Clean-shavenness on a male dwarf is a sure sign of madness, or worse—no one familiar with their race trusts a beardless dwarven man.\nSociety: The great distances between dwarves’ mountain citadels account for many of the cultural differences that exist within their society. Despite these schisms, dwarves throughout the world are characterized by their love of stonework, their passion for stone- and metal-based craftsmanship and architecture, and their fierce hatred of giants, orcs, and goblinoids. In some remote enclaves, such as those areas where these races are uncommon or unheard of, dwarves’ fixation on security and safety combined with their rather pugnacious nature leads them to find enemies or at least rivals wherever they settle. While they are not precisely militaristic, they learned long ago that those without axes can be hewn apart by them, and thus dwarves everywhere are schooled to be ready to enforce their rights and claims by force of arms. When their patience with diplomacy is exhausted, dwarves do not hesitate to adopt what they call “aggressive negotiations.”\nRelations: Dwarves and orcs have long dwelt in proximity to one another, and share a history of violence as old as both races. Dwarves generally distrust and shun half-orcs. They find elves, gnomes, and halflings to be too frail, flighty, or “pretty” to be worthy of proper respect. It is with humans that dwarves share the strongest link, for humans’ industrious nature and hearty appetites come closest to matching those of the dwarven ideal.\nAlignment and Religion: Dwarves are driven by honor and tradition. While they are often stereotyped as standoffish, they have a strong sense of friendship and justice, and those who win their trust understand that while they work hard, they play even harder—especially when good ale is involved. Most dwarves are lawful good.\nAdventurers: Although dwarven adventurers are rare compared to humans, they can be found in most regions of the world. Dwarves often leave the confines of their redoubts to seek glory for their clans, to find wealth with which to enrich the fortress-homes of their birth, or to reclaim fallen dwarven citadels from racial enemies. Dwarven warfare is often characterized by tunnel fighting and melee combat, and as such most dwarves tend toward classes such as fighters and barbarians.\nMale Names: Dolgrin, Grunyar, Harsk, Kazmuk, Morgrym, Rogar.\nFemale Names: Agna, Bodill, Ingra, Kotri, Rusilka, Yangrit.\n",
    baseFeatures: [
      {
        "name": "Ability Score Modifiers",
        "sources": {},
        "description": "Dwarves are both tough and wise, but also a bit gruff. They gain +2 Constitution, +2 Wisdom, and –2 Charisma.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Size",
        "sources": {},
        "description": "Dwarves are Medium creatures and thus receive no bonuses or penalties due to their size.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Type",
        "sources": {},
        "description": "Dwarves are humanoids with the dwarf subtype.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Base Speed",
        "sources": {},
        "description": "(Slow and Steady) Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Languages",
        "sources": {},
        "description": "Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon. See the Linguistics skill page for more information about these languages.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Defensive Training",
        "sources": {},
        "description": "Dwarves gain a +4 dodge bonus to AC against monsters of the giant subtype.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Hardy",
        "sources": {},
        "description": "Dwarves gain a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Stability",
        "sources": {},
        "description": "Dwarves gain a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Greed",
        "sources": {},
        "description": "Dwarves gain a +2 racial bonus on Appraise checks made to determine the price of non-magical goods that contain precious metals or gemstones.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Stonecunning",
        "sources": {},
        "description": "Dwarves gain a +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Darkvision",
        "sources": {},
        "description": "Dwarves can see perfectly in the dark up to 60 feet.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Hatred",
        "sources": {},
        "description": "Dwarves gain a +1 racial bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes because of their special training against these hated foes.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Weapon Familiarity",
        "sources": {},
        "description": "Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word “dwarven” in its name as a martial weapon.",
        "replaces": [],
        "type": "RCL"
      }
    ],
    replacementFeatures: [
      {
        "name": "Ancient Enmity",
        "sources": {},
        "description": "Dwarves have long been in conflict with elves, especially the hated drow. Dwarves with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the elf subtype. This racial trait replaces hatred.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Barrow Scholar",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +2 racial bonus on Knowledge (religion) checks to identify undead and can attempt them untrained. This racial trait replaces stonecunning. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Barrow Warden",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +1 bonus on attack rolls and a +1 dodge bonus to their AC against undead. This racial trait replaces defensive training and hatred. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Behind the Veil (1 RP)",
        "sources": {},
        "description": "Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Dwarves can take this trait in place of stonecunning. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Breath Weapon",
        "sources": {},
        "description": "Dwarves with this racial trait can call upon the spirit of a sacred dragon to channel a fraction of that dragon’s power. Upon taking this trait, the dwarf must select cold, electricity, or fire as the breath weapon’s damage type and either a 15-foot cone or a 20-foot line as the breath weapon’s shape. Once these selections are made, they cannot be changed. Once per day, the dwarf can make a supernatural breath attack in the selected shape, dealing 1d4 points of damage of the chosen damage type, plus 1d4 points of damage of that type for every 2 levels above 1st the dwarf has (to a maximum of 5d4 at 9th level). Targets in the area can attempt a Reflex save (DC \u003d 10 + half the dwarf’s level + the dwarf’s Constitution bonus) for half damage. This replaces greed, hatred, stonecunning, and weapon familiarity. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Craftsman",
        "sources": {},
        "description": "Dwarves are known for their superior craftsmanship when it comes to metallurgy and stonework. Dwarves with this racial trait receive a +2 racial bonus on all Craft or Profession checks related to metal or stone. This racial trait replaces greed.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Death’s End",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +2 bonus to AC against undead and a +2 bonus on saving throws against spells and spell-like abilities cast by undead. This replaces defensive training and hatred. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Deep Tradition",
        "sources": {},
        "description": "A dwarf with this racial trait gains a +1 bonus on melee attack rolls and a +1 bonus to AC against attacks of opportunity made by drow, duergar, creatures of the aberration type, or creatures of the giant or orc subtype. This replaces defensive training and hatred. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Deep Warrior",
        "sources": {},
        "description": "Dwarves with this racial trait grew up facing the abominations that live deep beneath the surface. They receive a +2 dodge bonus to AC against monsters of the aberration type and a +2 racial bonus on combat maneuver checks made to grapple such creatures (or to continue a grapple). This racial trait replaces defensive training.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Desert Delver",
        "sources": {},
        "description": "Desert dwarves have adapted to the extremes of cold and heat that can suddenly occur in both the harsh deserts and the mountain tunnels around their caravan routes. Dwarves with this racial trait gain cold and fire resistance 1 and treat the temperature as 20 degrees cooler or warmer when determining the effects of extreme heat or extreme cold environments. This replaces defensive training. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dimdweller (2 RP)",
        "sources": {},
        "description": "Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Dwarves can take this trait in place of greed and stonecunning. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dusksight (2 RP)",
        "sources": {},
        "description": "When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Dwarves can take this trait in place of hatred and darkvision, also gaining low-light vision. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fey Magic (2 RP)",
        "sources": {},
        "description": "The character has a mystic connection to one terrain type, selected from the ranger’s favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user’s character level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the user’s Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid’s resist nature’s lure class feature and similar abilities. This trait replaces greed and stonecunning. Source PZO9456",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fey Thoughts (1 RP)",
        "sources": {},
        "description": "Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces hatred. Source PZO9456",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Giant Hunter",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +1 bonus on attack rolls against humanoids with the giant subtype. Furthermore, they gain a +2 bonus on Survival checks to find and follow tracks made by humanoids with the giant subtype. This racial trait replaces the hatred racial trait.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Healthy",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +2 racial bonus on saves against disease and poison, and they need one fewer consecutive successful save (minimum 1) to be cured of diseases and poisons. This racial trait replaces hardy. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Industrious Urbanite",
        "sources": {},
        "description": "Dwarves who have adapted to the expectations of their host cities make double the normal progress on Craft checks to create non-magical items and gain a +4 bonus on Profession checks to earn money. This racial trait replaces hatred. PPC:HotS",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Iron Citizen",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +2 bonus on Diplomacy and Sense Motive checks, and Diplomacy is a class skill for such dwarves. This replaces stability. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Iron Within",
        "sources": {},
        "description": "Dwarves with this racial trait gain 1 ki point. If the dwarf gains ki points from a different source, this ki point is added to that pool. In addition to any other ways in which the dwarf can use ki, the dwarf can expend the ki point as a swift action to either gain a +2 dodge bonus to AC for 1 round or increase her base speed by 20 feet for 1 round. The bonus ki point does not allow the dwarf to make a ki strike unless she has another ability that allows her to do so, such as the ki pool from the monk class. Like other ki points, this ki point is replenished each morning after 8 hours of rest or meditation. This replaces defensive training and hatred. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Lasting Grudge",
        "sources": {},
        "description": "Dwarves are notorious for their long-lasting grudges. Those who live up to this racial reputation gain a +1 racial bonus on attack rolls against any individual creature that has attacked them 1 day ago or longer. This racial trait replaces defensive training and hatred. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Lorekeeper",
        "sources": {},
        "description": "Dwarves keep extensive records about their history and the world around them. Dwarves with this racial trait receive a +2 racial bonus on Knowledge (history) checks that pertain to dwarves or their enemies. They can make such skill checks untrained. This racial trait replaces greed.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Low-Light Vision (1 RP)",
        "sources": {},
        "description": "Feyborn dwarves gain low-light vision. This trait replaces darkvision. Source PZO9456",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Magic Resistant",
        "sources": {},
        "description": "Some of the older dwarven clans are particularly resistant to magic. Dwarves with this racial trait gain spell resistance equal to 5 + their character level. This resistance can be lowered for 1 round as a standard action. Dwarves with this racial trait take a –2 penalty on all concentration checks made in relation to arcane spells. This racial trait replaces hardy.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Minesight",
        "sources": {},
        "description": "Dwarves with this racial trait increase the range of their darkvision to 90 feet; however, they are automatically dazzled in bright light and take a –2 penalty on saving throws against effects with the light descriptor. This racial trait replaces darkvision.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Mountaineer",
        "sources": {},
        "description": "Mountain dwarves are skilled at climbing and navigating narrow ledges. Dwarves with this racial trait are immune to altitude sickness and do not lose their Dexterity bonus to AC when making Climb or Acrobatics checks to cross narrow or slippery surfaces. This racial trait replaces stability.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Poison Minion (4 RP)",
        "sources": {},
        "description": "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison. The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character’s Hit Dice + the character’s Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Dwarves can take this trait in place of defensive training and hardy. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Relentless",
        "sources": {},
        "description": "Dwarves are skilled at pushing their way through a battlefield, tossing aside lesser foes with ease. Dwarves with this racial trait receive a +2 bonus on combat maneuver checks made to bull rush or overrun an opponent. This bonus only applies while both the dwarf and his opponent are standing on the ground. This racial trait replaces stability.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Rock Stepper",
        "sources": {},
        "description": "Dwarves with this racial trait can skillfully negotiate rocky terrain. They can ignore difficult terrain created by rubble, broken ground, or steep stairs when they take a 5-foot step. This racial trait replaces stonecunning.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Saltbeard",
        "sources": {},
        "description": "Dwarves occasionally found iron cities along rugged seacoasts, and natives of such cities gain a +2 bonus on Profession (sailor) and Survival checks while at sea. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against creatures with the aquatic or water subtype. Their greed racial trait applies only to treasure found in or under the water, but applies to all such treasure regardless of whether or not it contains metal or gemstones. This racial trait replaces defensive training, hatred, and stonecunning.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Sense Aberration",
        "sources": {},
        "description": "Dwarves with this trait gain a +2 racial bonus on Knowledge (dungeoneering) checks and on Perception checks to notice disguised or hidden aberrations. This racial trait replaced stonecunning. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Shadowhunter (2 RP)",
        "sources": {},
        "description": "Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Dwarves can take this trait in place of weapon familiarity. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Shadowplay (1 RP)",
        "sources": {},
        "description": "Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Dwarves can take this trait in place of greed. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Siege Survivor",
        "sources": {},
        "description": "Dwarves who make their homes in the Sky Citadels are trained to outlast sieges and serve as vigilant guards. They gain Endurance as a bonus feat. In addition, during rounds in which they have not moved, they gain a +1 racial bonus on attack rolls against foes who also did not move since their last turn. This racial trait replaces greed, hardy, and hatred. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Slag Child",
        "sources": {},
        "description": "Dwarves from dishonored families must append “-slag,” “-slagsun,” or “-slagdam” to their surnames to indicate their shameful status. These dwarves are commonly banished or ostracized; they are forced to eke out a living at the fringes of dwarven settlements or in bleak wilderness areas. They gain a +2 racial bonus on Stealth and Survival checks. This racial trait replaces defensive training and hatred. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Sky Sentinel",
        "sources": {},
        "description": "As creatures with a deep affinity for the ground, dwarves are wary of attacks from above. Enemies on higher ground gain no attack roll bonus against dwarves with this racial trait, and they gain a +1 racial bonus on attack rolls, a +2 dodge bonus to AC, and a +2 bonus on Perception checks against flying creatures. This racial trait replaces defensive training, hatred, and stonecunning.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Spell Smasher",
        "sources": {},
        "description": "Dwarven families who are threatened by hostile magic-users, especially those who face duergar foes, train intently to thwart spellcasting. They gain a +1 racial bonus on attack rolls against creatures in the process of casting spells or spell-like abilities. This racial trait replaces defensive training and hatred. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Spiritual Support",
        "sources": {},
        "description": "Dwarves greatly value loyalty in faith, and their gods readily reward them for it. They gain a +1 racial bonus to their caster levels when casting conjuration (healing) spells upon allies. This racial trait replaces greed and hardy. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Stoic Negotiator",
        "sources": {},
        "description": "Some dwarves use their unwavering stubbornness to get what they want in negotiations and other business matters. They gain a +2 racial bonus on Bluff, Diplomacy, and Profession (merchant) checks. This racial trait replaces defensive training, hatred, and stonecunning. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Stonesinger",
        "sources": {},
        "description": "Some dwarves’ affinity for the earth grants them greater powers. Dwarves with this racial trait are treated as one level higher when casting spells with the earth descriptor or using granted powers of the Earth domain, the bloodline powers of the deep earth bloodline or earth elemental bloodline, and revelations of the oracle’s stone mystery. This ability does not give them early access to level-based powers; it only affects the powers they could use without this ability. This racial trait replaces stonecunning.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Stubborn",
        "sources": {},
        "description": "Dwarves are renowned for their stubbornness. Dwarves with this racial trait receive a +2 racial bonus on Will saves to resist spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) schools. In addition, if they fail such a save, they receive another save 1 round later to prematurely end the effect (assuming it has a duration greater than 1 round). This second save is made at the same DC as the first. If the dwarf has a similar ability from another source (such as a rogue’s slippery mind), he can only use one of these abilities per round, but he can try the other on the second round if the first reroll ability fails. This racial trait replaces hardy.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Surface Survivalist",
        "sources": {},
        "description": "Some dwarves have dwelt so long above ground they have lost their ability to see at night. However, their adaptation to extreme environments allows them to treat wind conditions (when determining whether or not they are checked or blown away) and either hot or cold climates (choose one) as one step less severe. This racial trait replaces darkvision.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Tightfisted",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +4 racial bonus to their CMD against disarm and steal combat maneuvers and a +2 racial bonus on Perception checks to notice Sleight of Hand attempts. If a dwarf with this trait notices a Sleight of Hand attempt to steal from him and the dwarf is not flat-footed or has Combat Reflexes, the attempt triggers an attack of opportunity from that dwarf. This racial trait replaces stability and stonecunning. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Treasure Sense (2 RP)",
        "sources": {},
        "description": "Some dwarves have learned to sense the presence of material wealth with dragonlike precision. This ability functions as scent, except it can detect only precious metals (copper, silver, and gold) and creatures primarily made of such materials. This trait replaces stability and stonecunning. Source PZO9470",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Unstoppable",
        "sources": {},
        "description": "Some dwarves train from a young age to outlast orcs on the battlefield. They gain Toughness as a bonus feat and a +1 racial bonus on Fortitude saves. This racial trait replaces hardy. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Viscous Blood",
        "sources": {},
        "description": "Dwarves with this trait takes 1 less point of hit point damage, ability damage, or ability drain (minimum 1) from bleed and blood drain. They can attempt Heal checks to staunch their own bleeding as a swift action each round. This racial trait replaces hardy. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Voice in the Darkness (2 RP)",
        "sources": {},
        "description": "Prerequisite(s): Charisma 13+. Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Dwarves can take this trait in place of stonecunning. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Xenophobic",
        "sources": {},
        "description": "Isolationist dwarves despise non-dwarven humanoids. They speak only Dwarven and do not gain any bonus languages from possessing a high Intelligence score. In addition, they learn only one language per 2 ranks of Linguistics they possess. However, their untrusting nature gives them a +1 bonus against mind-affecting effects, except for fear affects. This racial trait replaces a dwarf’s normal languages.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Wanderer",
        "sources": {},
        "description": "You gain Endurance as a bonus feat, and Climb and Swim are class skills for them. This racial trait replaces hardy. Source PZO9480",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Wyrmscourged",
        "sources": {},
        "description": "Dwarves with this racial trait gain a +1 bonus on attack rolls and a +2 dodge bonus to AC and on saving throws against the extraordinary, supernatural, and spell-like abilities of dragons. They also gain a +2 racial bonus on Knowledge (arcana) checks to identify dragons and can make such checks untrained. This racial trait replaces defensive training, hatred, and stonecunning.",
        "replaces": [],
        "type": "RCL"
      }
    ],
    favouredClassOptions: [
      {
        "race": "Dwarf",
        "pclass": "Alchemist",
        "benefit": "Add +1/4 to the alchemist’s natural armor bonus when using his mutagen."
      },
      {
        "race": "Dwarf",
        "pclass": "Arcanist",
        "benefit": "Add +1/4 to the arcanist’s effective class level when determining the effects of the arcane barrier and arcane weapon arcanist exploits. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Barbarian",
        "benefit": "Add +1 to the barbarian’s total number of rage rounds per day."
      },
      {
        "race": "Dwarf",
        "pclass": "Bard",
        "benefit": "Reduce arcane spell failure chance for casting bard spells when wearing medium armor by +1%. Once the total reaches 10%, the bard also receives Medium Armor Proficiency, if he does not already possess it."
      },
      {
        "race": "Dwarf",
        "pclass": "Bloodrager",
        "benefit": "Increase the bloodrager’s total number of bloodrage rounds per day by 1. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Brawler",
        "benefit": "Reduce the hardness of any object made from clay, stone, or metal by 1 whenever the object is struck by the brawler’s unarmed strike (minimum 0). Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Cavalier",
        "benefit": "Add +1/2 to the cavalier’s bonus to damage against targets of his challenge."
      },
      {
        "race": "Dwarf",
        "pclass": "Cleric",
        "benefit": "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric’s Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power."
      },
      {
        "race": "Dwarf",
        "pclass": "Druid",
        "benefit": "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the druid’s Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power."
      },
      {
        "race": "Dwarf",
        "pclass": "Fighter",
        "benefit": "Add +1 to the Fighter’s CMD when resisting a bull rush or trip."
      },
      {
        "race": "Dwarf",
        "pclass": "Gunslinger",
        "benefit": "Reduce the misfire chance for one type of firearm by 1/4. You cannot reduce the misfire chance of a firearm below 1."
      },
      {
        "race": "Dwarf",
        "pclass": "Hunter",
        "benefit": "Gain a +1/2 bonus on wild empathy checks the hunter makes to influence animals and magical beasts that live underground. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Inquisitor",
        "benefit": "Add +1/2 to the inquisitor’s level for the purpose of determining the effects of one type of judgment."
      },
      {
        "race": "Dwarf",
        "pclass": "Investigator",
        "benefit": "Gain a +1/4 bonus on Perception checks when underground and +1/2 bonus to the investigator’s trap sense ability regarding stone traps. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Kineticist",
        "benefit": "[see errata at right] Add 1/3 point of damage to earth element blasts that deal damage. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Magus",
        "benefit": "Select one known magus arcana usable only once per day. The magus adds +1/6 to the number of times it can be used per day. Once that magus arcana is usable twice per day, the magus must select a different magus arcana."
      },
      {
        "race": "Dwarf",
        "pclass": "Medium",
        "benefit": "Gain a +1/2 bonus on saving throws against possession and a +1/2 bonus on saving throws to end haunt channeler, location channel, and spacious soul. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Mesmerist",
        "benefit": "Increase painful stare’s damage by 1/4 point. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Monk",
        "benefit": "Reduce the Hardness of any object made of clay, stone, or metal by 1 whenever the object is struck by the monk’s unarmed strike (minimum of 0)."
      },
      {
        "race": "Dwarf",
        "pclass": "Occultist",
        "benefit": "Gain a +1/3 bonus on Appraise and Use Magic Device checks involving stone and metal objects. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Oracle",
        "benefit": "Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the appropriate Martial or Exotic Weapon Proficiency feat with that weapon."
      },
      {
        "race": "Dwarf",
        "pclass": "Paladin",
        "benefit": "Add a +1 bonus on concentration checks when casting paladin spells."
      },
      {
        "race": "Dwarf",
        "pclass": "Paladin",
        "benefit": "Choose a creature type (and subtype, if necessary) from the ranger’s favored enemies list. Add a +1/2 bonus on Knowledge checks to identify creatures of that type. You can choose the same creature type up to six times; if you choose the same creature type six times, add 1 point of damage when smiting creatures of that type. Source PZO1135"
      },
      {
        "race": "Dwarf",
        "pclass": "Psychic",
        "benefit": "When casting psychic abjuration spells, add 1/2 level to the effective caster level of the spell, but only to determine the spell’s duration. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Ranger",
        "benefit": "Add a +1/2 bonus on wild empathy checks to influence animals and magical beasts that live underground."
      },
      {
        "race": "Dwarf",
        "pclass": "Rogue",
        "benefit": "Add a +1/2 bonus on Disable Device checks regarding stone traps and a +1/2 bonus to trap sense regarding stone traps."
      },
      {
        "race": "Dwarf",
        "pclass": "Shaman",
        "benefit": "Add +1/4 to the natural armor bonus of the shaman’s spirit animal. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Skald",
        "benefit": "Reduce the arcane spell failure chance for casting skald spells when wearing heavy armor by 1%. Once the total reduction reaches 10%, the skald also receives Heavy Armor Proficiency (if the skald does not already possess it). Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Slayer",
        "benefit": "Gain a +1/3 bonus on Knowledge (dungeoneering) checks and on Survival checks when underground. If the slayer has a +1 bonus on Knowledge (dungeoneering) checks from this ability, he is also considered trained in that skill. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Sorcerer",
        "benefit": "Add +1/2 to acid and earth spell or spell-like ability damage."
      },
      {
        "race": "Dwarf",
        "pclass": "Spiritualist",
        "benefit": "Add 1/6 to the shield bonus granted by the 3rd-level ectoplasmic bonded manifestation ability. Source PZO1132"
      },
      {
        "race": "Dwarf",
        "pclass": "Spiritualist",
        "benefit": "Add a +1/4 bonus on weapon damage rolls with the slam attacks from ectoplasmic bonded manifestation. Source PZO1135"
      },
      {
        "race": "Dwarf",
        "pclass": "Summoner",
        "benefit": "Add a +1/4 natural armor bonus to the AC of the summoner’s eidolon."
      },
      {
        "race": "Dwarf",
        "pclass": "Swashbuckler",
        "benefit": "Add +1/4 to the swashbuckler’s effective class level to determine the extra damage she deals because of the precise strike deed when wielding a light pick or a heavy pick. If the swashbuckler has the Slashing Grace feat or another similar effect, she can treat the battleaxe or handaxe as a one-handed piercing melee weapon, and she gains this benefit when wielding the appropriate weapon for the feat as well. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Vigilante",
        "benefit": "Increase the bonus from social grace on Craft skills by +1/2. Source PZO1134"
      },
      {
        "race": "Dwarf",
        "pclass": "Warpriest",
        "benefit": "Add +1/3 to the number of times per day the warpriest can use blessings, but he can only use these additional uses on blessings that affect weapons or armor. Source PZO1129"
      },
      {
        "race": "Dwarf",
        "pclass": "Witch",
        "benefit": "Add +1/4 natural armor bonus to the AC of the witch’s familiar."
      },
      {
        "race": "Dwarf",
        "pclass": "Wizard",
        "benefit": "Select one item creation feat known by the wizard. Whenever he crafts an item using that feat, the amount of progress he makes in an 8-hour period increases by 200 gp (50 gp if crafting while adventuring). This does not reduce the cost of the item; it just increases the rate at which the item is crafted."
      },
      {
        "race": "Dwarf",
        "pclass": "Wizard",
        "benefit": "Add 1/3 to the effective caster level of wizard abjuration spells, but only to determine duration. Source PZO1135"
      }
    ]
  },
  {
    name: "Elf",
    sources: {},
    lore: "The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, though with key differences. While fey are truly linked to the flora and fauna of their homes, existing as the nearly immortal voices and guardians of the wilderness, elves are instead mortals who are in tune with the natural world around them. Elves seek to live in balance with the wild and understand it better than most other mortals. Some of this understanding is mystical, but an equal part comes from the elves’ long lifespans, which in turn gives them long-ranging outlooks. Elves can expect to remain active in the same locale for centuries. By necessity, they must learn to maintain sustainable lifestyles, and this is most easily done when they work with nature, rather than attempting to bend it to their will. However, their links to nature are not entirely driven by pragmatism. Elves’ bodies slowly change over time, taking on a physical representation of their mental and spiritual states, and those who dwell in a region for a long period of time find themselves physically adapting to match their surroundings, most noticeably taking on coloration that reflects the local environment.\nElves value their privacy and traditions, and while they are often slow to make friends at both the personal and national levels, once an outsider is accepted as a comrade, the resulting alliances can last for generations. Elves take great joy in forging alliances with races that share or exceed their long lifetimes, and often work to befriend dragons, outsiders, and fey. Those elves who spend their lives among the short-lived races, on the other hand, often develop a skewed perception of mortality and become morose, the result of watching wave after wave of companions age and die before their eyes.\nPhysical Description: Generally taller than humans, elves possess a graceful, slender physique that is accentuated by their long, pointed ears. It is a mistake, however, to consider them weak or feeble, as the thin limbs of an elf can contain surprising power. Their eyes are wide and almond-shaped, and filled with large, vibrantly colored pupils. The coloration of elves as a whole varies wildly, and is much more diverse than that of human populations. However, as their coloration often matches their surroundings, the elves of a single community may appear quite similar. Forest-dwelling elves often have variations of green, brown, and tan in their hair, eye, and even skin tones.\nWhile elven clothing often plays off the beauty of the natural world, those elves who live in cities tend to bedeck themselves in the latest fashions. Where city-dwelling elves encounter other urbanites, the elves are often fashion trendsetters.\nSociety: Many elves feel a bond with nature and strive to live in harmony with the natural world. Although, like most, elves prefer bountiful lands where resources are plentiful, when driven to live in harsher climates, they work hard to protect and shepherd the region’s bounty, and learn how to maximize the benefit they receive from what little can be harvested. When they can carve out a sustainable, reliable life in deserts and wastelands, they take pride as a society in the accomplishment. While this can make them excellent guides to outsiders they befriend who must travel through such lands, their disdain of those who have not learned to live off the scant land as they have makes such friends rare.\nElves have an innate gift for craftsmanship and artistry, especially when working in wood, bone, ivory, or leather. Most, however, find manipulating earth and stone to be distasteful, and prefer to avoid forging, stonework, and pottery. When such work must be done within a community, a few elves may find themselves drawn to it, but regardless of their craftsmanship, such “dirt-wrights” are generally seen by other elves as being a bit off. In the most insular of elven societies, they may even be treated as lower class.\nElves also have an appreciation for the written word, magic, and painstaking research. Their naturally keen minds and senses, combined with their inborn patience, make them particularly suited to wizardry. Arcane research and accomplishment are seen as both practical goals, in line with being a soldier or architect, and artistic endeavors as great as poetry or sculpture. Within elven society, wizards are held in extremely high regard as masters of an art both powerful and aesthetically valued. Other spellcasters are not disdained, but do not gain the praise lavished upon elven wizards.\nRelations: Elves are prone to dismissing other races, writing them off as rash and impulsive, yet on an individual level, they are excellent judges of character. In many cases an elf will come to value a specific member of another race, seeing that individual as deserving and respectable, while still dismissing the race as a whole. If called on this behavior, the elf often doesn’t understand why his “special friend” is upset the elf has noticed the friend is “so much better than the rest of his kind.” Even elves who see such prejudice for what it is must constantly watch themselves to prevent such views from coloring their thinking.\nElves are not foolish enough, however, to dismiss all aspects of other races and cultures. An elf might not want a dwarf neighbor, but would be the first to acknowledge dwarves’ skill at smithing and their tenacity in facing orc threats. Elves regard gnomes as strange (and sometimes dangerous) curiosities, but regard their magical talent as being worthy of praise and respect. Halflings are often viewed with a measure of pity, for these small folk seem to the elves to be adrift, without a traditional home. Elves are fascinated with humans, who seem to live in a few short years as full a life as an elf manages in centuries. In fact, many elves become infatuated with humans, as evidenced by the number of half-elves in the world. Elves have difficulty accepting crossbreeds of any sort, however, and usually disown such offspring. They similarly regard half-orcs with distrust and suspicion, assuming they possess the worst aspects of orc and human personalities.\nAlignment and Religion: Elves are emotional and capricious, yet value kindness and beauty. Most elves are chaotic good, wishing all creatures to be safe and happy, but unwilling to sacrifice personal freedom or choice to accomplish such goals. They prefer deities who share their love of the mystic qualities of the world.\nAdventurers: Many elves embark on adventures out of a desire to explore the world, leaving their secluded realms to reclaim forgotten elven magic or search out lost kingdoms established millennia ago by their ancestors. This need to see a wider world is accepted by their societies as a natural part of becoming mature and experienced individuals. Such elves are expected to return in some few decades and take up lives in their homelands once more, enriched both in treasure and in worldview. For those elves raised among humans, however, life within their homes—watching friends and family swiftly age and die—is often stifling, and the ephemeral and unfettered life of an adventurer holds a natural appeal. Elves generally eschew melee because of their relative frailty, preferring instead to engage enemies at range. Most see combat as unpleasant even when needful, and prefer it be done as quickly as possible, preferably without getting close enough to smell their foes. This preference for making war at a distance, coupled with their natural accuracy and grasp of the arcane, encourages elves to pursue classes such as wizards and rangers.\nMale Names: Caladrel, Heldalel, Lanliss, Meirdrarel, Seldlon, Talathel, Variel, Zordlon.\nFemale Names: Amrunelara, Dardlara, Faunra, Jathal, Merisiel, Oparal, Soumral, Tessara, Yalandlara.\n",
    baseFeatures: [
      {
        "name": "Ability Score Modifiers",
        "sources": {},
        "description": "Elves are nimble, both in body and mind, but their form is frail. They gain +2 Dexterity, +2 Intelligence, and –2 Constitution.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Size",
        "sources": {},
        "description": "Elves are Medium creatures and thus receive no bonuses or penalties due to their size.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Type",
        "sources": {},
        "description": "Elves are Humanoids with the elf subtype.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Base Speed",
        "sources": {},
        "description": "Elves have a base speed of 30 feet.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Languages",
        "sources": {},
        "description": "Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan. See the Linguistics skill page for more information about these languages.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Elven Immunities",
        "sources": {},
        "description": "Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Keen Senses",
        "sources": {},
        "description": "Elves receive a +2 racial bonus on Perception checks.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Elven Magic",
        "sources": {},
        "description": "Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Weapon Familiarity",
        "sources": {},
        "description": "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Low-Light Vision",
        "sources": {},
        "description": "Elves can see twice as far as humans in conditions of dim light.",
        "replaces": [],
        "type": "RCL"
      }
    ],
    replacementFeatures: [
      {
        "name": "Ageless Patience",
        "sources": {},
        "description": "Some families of elves have been strongly influenced by rigidly honorable non-elven cultures. This attitude, combined with elven longevity, produces elves of extraordinary patience, who can produce better results when taking their time than they could under time constraints. These elves gain a +2 racial bonus when taking 20 on skill checks. This racial trait replaces elven magic and keen senses. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Aquatic Mastery",
        "sources": {},
        "description": "Some aquatic elves are able to wield the power of the sea with great prowess. Elves with this racial trait increase the DC of any spell with the water descriptor they cast by 1. This replaces weapon familiarity. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Arcane Focus",
        "sources": {},
        "description": "Some elven families have such long traditions of producing wizards (and other arcane spellcasters) that they raise their children with the assumption each is destined to be a powerful magic-user, with little need for mundane concerns such as skill with weapons. Elves with this racial trait gain a +2 racial bonus on concentration checks made to cast arcane spells defensively. This racial trait replaces weapon familiarity.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Behind the Veil (1 RP)",
        "sources": {},
        "description": "Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Elves can take this trait in place of low-light vision. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Blended View (2 RP)",
        "sources": {},
        "description": "Prerequisite(s): low-light vision. Half-drow whose non-drow parent had low-light vision might be blessed with a legacy of versatile senses. Characters with this trait keep their low-light vision but also gain darkvision to a distance of 60 feet. Elves can take this trait in place of keen senses. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Blightborn",
        "sources": {},
        "description": "Elves from cursed lands and domains of evil develop resistance to foul influences. They gain a +2 racial bonus on saving throws against necromancy spells and spell-like abilities and spells and spell-like abilities with the curse descriptor, as well as on saving throws to remove temporary negative levels. This racial trait replaces elven immunities. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Creepy",
        "sources": {},
        "description": "For some elves, their long, slender limbs and large pupils evoke not attraction, but unease in other humanoids. Non-elf humanoids take a –1 penalty on saving throws against spells these elves cast that cause confusion or fear. In addition, elves with this trait gain a +2 racial bonus on Intimidate checks to demoralize. This racial trait replaces elven magic. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Crossbow Training",
        "sources": {},
        "description": "An elf with this trait can reload a light crossbow as a free action and a heavy crossbow as a move action, provided that she is proficient with the weapon. If she selects the Rapid Reload feat for a heavy crossbow, she can reload the weapon as a free action. This racial trait replaces weapon familiarity. Source PZO90124",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Darkvision",
        "sources": {},
        "description": "Though uncommon, some groups of elves are born with darkvision, rather than low-light vision. In many cases this is taken as a sign of a drow in the elf’s ancestry, and can lead to persecution within the elf’s home community. Elves with this racial trait gain darkvision with a range of 60 feet, but also gain sensitivity to light and are dazzled in areas of bright light or within the radius of a daylight spell. This racial trait replaces low-light vision.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Desert Runner",
        "sources": {},
        "description": "Some elves thrive in the deepest deserts, forever roaming across burned and parched lands. Elves with this racial trait receive a +4 racial bonus on Constitution checks and Fortitude saves to avoid fatigue, exhaustion, or ill effects from running, forced marches, starvation, thirst, or hot or cold environments. This racial trait replaces elven magic.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Devoted Companion",
        "sources": {},
        "description": "While some Forlorn quickly become inured to the loss and tragedy all too common in their lives, some refuse to let go, fighting passionately when companions are endangered. Elves with this alternate racial trait gain a +1 racial bonus on attack rolls and caster level checks while adjacent to an ally who has been reduced to fewer than half her maximum hit points. This replaces elven magic and weapon familiarity. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dimdweller (2 RP)",
        "sources": {},
        "description": "Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Elves can take this trait in place of weapon familiarity. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Disinterested Observer",
        "sources": {},
        "description": "Elves who frequently interact with shorter-lived species often come to rely on their ability to wait out such impatient races. These elves gain a +1 racial bonus on attack rolls and skill checks made as part of readied actions in combat. This racial trait replaces the elven magic and weapon familiarity traits. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dragon Magic (3 RP)",
        "sources": {},
        "description": "Some elves have potent draconic blood. Elves with this racial trait who take a draconic bloodline as a class feature treat their Charisma scores as 2 points higher when determining the DC and uses per day of all bloodline abilities and bloodline spells. Additionally, elves with this trait add spells with the draconic descriptor to their class spell lists for any spellcasting classes in which they have levels. This racial trait replaces elven magic.Source PZO9470",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Draconic Consular (2 RP)",
        "sources": {},
        "description": "Elves serving in the company of dragons are trained to assist and represent their draconic allies. Elves with this racial trait gain a +1 bonus on Diplomacy and Knowledge (arcana) checks. This racial trait replaces keen senses. Source PZO9470",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dreamspeaker",
        "sources": {},
        "description": "A few elves have the ability to tap into the power of sleep, dreams, and prescient reverie. Elves with this racial trait add +1 to the saving throw DCs of spells of the divination school and sleep effects they cast. In addition, elves with Charisma scores of 15 or higher may use dream once per day as a spell-like ability (caster level is equal to the elf’s character level). This racial trait replaces elven immunities.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Dusksight (2 RP)",
        "sources": {},
        "description": "When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Elves can take this trait in place of keen senses. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Eastern Weapon Mastery",
        "sources": {},
        "description": "Elves with this racial trait are proficient with fighting fans and tonfa, and they treat katanas, kusarigamas, and wakizashis as martial weapons. This replaces weapon familiarity. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Elemental Resistance",
        "sources": {},
        "description": "Elves who dwell in the most extreme environments, from arctic wastelands to volcanic plains, develop natural resistance to the dangers of their homelands over the course of a few generations. Elves with this racial trait gain elemental resistance 5 to acid, cold, electricity, or fire. This choice is made at character creation, and once made it cannot be changed. This racial trait replaces elven immunities.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Elven Arrogance",
        "sources": {},
        "description": "Some elves are so convinced of elven superiority, or else otherwise so xenophobic, that they have difficulty seeing the point in communicating with “lesser” races. Their racial bonus on saving throws against enchantments increases by 1 (to +3) against such effects from non-elf humanoids, but they begin play speaking only Elven, and if they have high Intelligence scores, they can select bonus languages from only 1 ancient language, Celestial, Draconic, and Sylvan. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Envoy",
        "sources": {},
        "description": "Elves often have trouble relating to neighbors of other races, especially those with much shorter lifespans. As a result, some are trained in minor magics that are particularly useful when dealing with non-elves. Elves with this racial trait and an Intelligence score of 11 or higher gain the following spell-like abilities once per day: comprehend languages, detect magic, detect poison, and read magic. The caster level for these effects is equal to the elf’s level. This racial trait replaces elven magic.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Eternal Grudge",
        "sources": {},
        "description": "Some elves grow up in secluded, isolationist communities where generations-old slights and quarrels linger as eternal blood feuds. Elves with this racial trait receive a +1 bonus on attack rolls against humanoids of the dwarf and orc subtypes because of special training against these hated foes. This racial trait replaces elven magic.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fey Magic (2 RP)",
        "sources": {},
        "description": "The character has a mystic connection to one terrain type, selected from the ranger’s favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user’s character level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the user’s Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid’s resist nature’s lure class feature and similar abilities. This trait replaces keen senses. Source PZO9456",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fey-Sighted",
        "sources": {},
        "description": "You gain detect magic as a constant spell-like ability, with a caster level equal to your character level. This racial trait replaces elven magic. Source PZO9480",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fey Thoughts (1 RP)",
        "sources": {},
        "description": "Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces racial weapon familiarity. Source PZO9456",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Fleet-Footed",
        "sources": {},
        "description": "While all elves are naturally lithe and agile, some also are naturally speedy and have a strong desire to rush into situations rather than worrying about looking ahead. Elves with this racial trait receive Run as a bonus feat and a +2 racial bonus on initiative checks. This racial trait replaces keen senses and weapon familiarity.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Frostmelding",
        "sources": {},
        "description": "Elves with this alternate racial trait can use meld into stone as a spell-like ability once per day, with a caster level equal to their character level, except that they instead meld with snow and ice and the spell duration is 1 round per level. This replaces elven magic. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Human-raised",
        "sources": {},
        "description": "Elves raised outside of elven communities—are accustomed to other races’ brevity of life. Although they lose the opportunity to train in traditional elven arts, these elves pick up a bit of their adoptive parents’ skills. They gain Skill Focus as a bonus feat. This racial trait replaces elven magic and weapon familiarity. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Illustrious Urbanite",
        "sources": {},
        "description": "City elves have a remarkable ability to combine magic harmoniously with their surroundings. They gain Spell Focus with conjuration, illusion, or transmutation spells as a bonus feat. When casting spells of this school, the elves can choose to have the spell leave undamaged any building or structure that would normally be affected. This racial trait replaces keen senses. PPC:HotS",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Keeper of Secrets",
        "sources": {},
        "description": "Some elves seek to protect younger races from dangerous lore. The save DCs of enchantment spells they cast against humanoids increase by 1 and they receive a +2 racial bonus on Bluff and Linguistics checks to omit or cover up facts. This racial trait replaces elven magic. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Light against Darkness",
        "sources": {},
        "description": "Elves have fought against the corruption of demons since time immemorial. Elves with this trait receive a +1 bonus on attack rolls against outsiders with the demon subtype. This racial trait replaces elven magic. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Lightbringer",
        "sources": {},
        "description": "Many elves revere the sun, moon, and stars, but some are literally infused with the radiant power of the heavens. Elves with this racial trait are immune to light-based blindness and dazzle effects, and are treated as one level higher when determining the effects of any light-based spell or effect they cast (including spell-like and supernatural abilities). Elves with Intelligence scores of 10 or higher may use light at will as a spell-like ability. This racial trait replaces the elven immunities and elven magic racial traits.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Long-Limbed",
        "sources": {},
        "description": "Elves with this racial trait have a base move speed of 35 feet. This racial trait replaces weapon familiarity. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Loremasters",
        "sources": {},
        "description": "Some elves are steeped in lore older than most civilizations. They gain a +2 racial bonus on Knowledge (history), Knowledge (local), and Spellcraft checks. This racial trait replaces elven magic and keen senses. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Memories Beyond Death",
        "sources": {},
        "description": "Some elves are born with sensitive souls that absorb insight from others and from the spirits of the deceased. These elves gain a +2 racial bonus on saving throws against fear effects. They also choose two Knowledge skills and always treat those skills as class skills. If they take a class that grants either or both of those skills as class skills, they gain a +1 racial bonus on the overlapping skill or skills. This racial trait replaces elven immunities and elven magic. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Moonkissed",
        "sources": {},
        "description": "Elves with this alternate racial trait gain a +1 racial bonus on saving throws. This replaces elven immunities and keen senses. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Natural Swimmer",
        "sources": {},
        "description": "Elves with this trait gain a +2 racial bonus on Swim checks and can always take 10 on a Swim check, even if distracted or endangered when swimming. This racial trait replaces elven magic and keen senses. Source PZO90124",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Overwhelming Magic",
        "sources": {},
        "description": "Some elves obsess over the fundamentals of magic, training for decades to add layers of potent spellwork before they ever begin practicing true spells. This builds a foundation that makes their magic increasingly difficult to resist. These elves gain Spell Focus as a bonus feat. This racial trait replaces elven magic and weapon familiarity. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Perfect",
        "sources": {},
        "description": "The eerie beauty of some elves cannot be denied. Elves with this racial trait receive a +1 racial bonus on Bluff and Diplomacy checks against humanoids and a +2 racial bonus on saving throws against transmutation spells and spell-like effects. This racial trait replaces elven immunities. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Poison Minion (4 RP)",
        "sources": {},
        "description": "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison (see below). The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character’s Hit Dice + the character’s Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Elves can take this trait in place of elven magic and weapon familiarity. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Retreat Magic",
        "sources": {},
        "description": "Some elves specialize in magic that fools foes into misjudging elven numbers and locations. These elves gain a +1 racial bonus to their caster levels for the purpose of determining the range and duration of all conjuration and illusion spells that they cast. This racial trait replaces elven magic. Source PZO9280",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Sense Thoughts",
        "sources": {},
        "description": "Some elves are so closely attuned to each other and their environment that they seem able to read each other’s minds and their foes’ thoughts. Elves with this alternate racial trait can use detect thoughts as a spell-like ability once per day, with a caster level equal to their character level. This replaces elven immunities and keen senses. PPC:HftF",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Shadowhunter (2 RP)",
        "sources": {},
        "description": "Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Elves can take this trait in place of weapon familiarity. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Shadowplay (1 RP)",
        "sources": {},
        "description": "Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Elves can take this trait in place of elven magic, also gaining the fetchling’s spell-like abilities racial trait. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Silent Hunter",
        "sources": {},
        "description": "Elves are renowned for their subtlety and skill. Elves with this racial trait reduce the penalty for using Stealth while moving by 5 and can make Stealth checks while running at a –20 penalty (this number includes the penalty reduction from this racial trait). This racial trait replaces elven magic.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Slender",
        "sources": {},
        "description": "Elves often appear unnaturally thin by other races’ standards. Elves with this trait gain a +2 racial bonus on Escape Artist checks, on combat maneuver checks to escape a grapple, and to CMD against grapples. This racial trait replaces elven immunities. Source PZO1135",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Spirit of the Waters",
        "sources": {},
        "description": "Some elves have adapted to life in tune with the sea or along the reedy depths of wild rivers and lakes. They gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language. They are proficient with longspear, trident, and net. This racial trait replaces elven magic and weapon familiarity.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Tongue of the Sea",
        "sources": {},
        "description": "Elves with this racial trait begin play speaking an ancient language and Elven. Elves with high Intelligence scores can choose from the following languages: Aboleth, Abyssal, Aklo, Aquan, Common, and Undercommon. This racial trait replaces an elf’s normal languages. Source PZO90124",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Urbanite",
        "sources": {},
        "description": "Elves who live in cities for more than a century can grow to know the ebb and flow of social situations just as their forest-dwelling cousins know the rules of the wild. Elves with this racial trait gain a +2 racial bonus on Diplomacy checks made to gather information and Sense Motive checks made to get a hunch about a social situation. This racial trait replaces keen senses.",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Vigilance",
        "sources": {},
        "description": "You gain a +2 dodge bonus to AC against attacks by chaotic creatures. This trait replaces elven magic. Source PZO9480",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Voice in the Darkness (2 RP)",
        "sources": {},
        "description": "Prerequisite(s): Charisma 13+. Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Elves can take this trait in place of weapon familiarity. Source PZO9466",
        "replaces": [],
        "type": "RCL"
      },
      {
        "name": "Woodcraft",
        "sources": {},
        "description": "Elves know the deep secrets of the wild like no others, especially secrets of the forests. Elves with this racial trait gain a +1 racial bonus on Knowledge (nature) and Survival checks. In forest terrain, these bonuses improve to +2. This racial trait replaces elven magic.",
        "replaces": [],
        "type": "RCL"
      }
    ],
    favouredClassOptions: [
      {
        "race": "Elf",
        "pclass": "Alchemist",
        "benefit": "Add one extract formula from the alchemist’s list to his formula book. This formula must be at least one level lower than the highest-level formula the alchemist can create."
      },
      {
        "race": "Elf",
        "pclass": "Arcanist",
        "benefit": "Increase total number of points in the arcanist’s arcane reservoir by 1."
      },
      {
        "race": "Elf",
        "pclass": "Barbarian",
        "benefit": "Add +1 to the barbarian’s base speed. In combat this option has no effect unless the barbarian has selected it five times (or another increment of five). This bonus stacks with the barbarian’s fast movement feature and applies under the same conditions as that feature."
      },
      {
        "race": "Elf",
        "pclass": "Bard",
        "benefit": "Add +1 to the bard’s CMD when resisting a disarm or sunder attempt."
      },
      {
        "race": "Elf",
        "pclass": "Bloodrager",
        "benefit": "Add 1 foot to the bloodrager’s base speed. In combat, this only has an effect for every five increases in base speed. This bonus stacks with the bloodrager’s fast movement class feature, and applies under the same conditions and that feature."
      },
      {
        "race": "Elf",
        "pclass": "Brawler",
        "benefit": "Add 1 foot to the brawler’s base speed. In combat, this has an effect only for every five increases in the brawler’s base speed."
      },
      {
        "race": "Elf",
        "pclass": "Cavalier",
        "benefit": "Add +1 hit point to the cavalier’s mount. If the cavalier ever replaces his mount, the new mount gains these bonus hit points."
      },
      {
        "race": "Elf",
        "pclass": "Cleric",
        "benefit": "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric’s Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power."
      },
      {
        "race": "Elf",
        "pclass": "Druid",
        "benefit": "Add +1/3 to the druid’s natural armor bonus when using wild shape."
      },
      {
        "race": "Elf",
        "pclass": "Fighter",
        "benefit": "Add +1 to the Fighter’s CMD when resisting a disarm or sunder attempt."
      },
      {
        "race": "Elf",
        "pclass": "Gunslinger",
        "benefit": "Add +1/3 on critical hit confirmation rolls made with firearms (maximum bonus of +5). This bonus does not stack with Critical Focus."
      },
      {
        "race": "Elf",
        "pclass": "Hunter",
        "benefit": "Choose a weapon from the following list: longbow, longsword, rapier, short sword, shortbow, or any weapon with “elven” in its name. Gain a +1/2 bonus on critical hit confirmation rolls made while using that type of weapon (maximum bonus +4). This bonus does not stack with those gained through Critical Focus and similar effects."
      },
      {
        "race": "Elf",
        "pclass": "Inquisitor",
        "benefit": "Add one spell known from the inquisitor’s spell list. This spell must be at least one level below the highest-level spell the inquisitor can cast."
      },
      {
        "race": "Elf",
        "pclass": "Investigator",
        "benefit": "Increase the total number of points in the investigator’s inspiration pool by 1/3."
      },
      {
        "race": "Elf",
        "pclass": "Kineticist",
        "benefit": "[See errata at right] Gain a +1/4 bonus on damage rolls that apply the kineticist’s elemental overflow bonus. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Magus",
        "benefit": "The magus gains 1/6 of a new magus arcana."
      },
      {
        "race": "Elf",
        "pclass": "Medium",
        "benefit": "Gain a +1/3 bonus on all skill checks using occult skill unlocks. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Mesmerist",
        "benefit": "Gain a +1/2 bonus on Acrobatics checks to move through a threatened area and a +1/2 bonus on Bluff checks to feint. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Mesmerist",
        "benefit": "Add a +1/4 bonus on grapple and trip combat maneuver checks. Source PZO1135"
      },
      {
        "race": "Elf",
        "pclass": "Monk",
        "benefit": "Add +1 to the monk’s base speed. In combat this option has no effect unless the monk has selected it five times (or another increment of five). This bonus stacks with the monk’s fast movement class feature and applies under the same conditions as that feature."
      },
      {
        "race": "Elf",
        "pclass": "Occultist",
        "benefit": "Increase the occultist’s total number of points of mental focus by 1/2 point. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Oracle",
        "benefit": "Add +1/6 to the oracle’s level for the purpose of determining the effects of one revelation."
      },
      {
        "race": "Elf",
        "pclass": "Paladin",
        "benefit": "Add +1/2 hit point to the paladin’s lay on hands ability (whether using it to heal or harm)."
      },
      {
        "race": "Elf",
        "pclass": "Psychic",
        "benefit": "Increase the total number of points in the psychic’s phrenic pool by 1/3 point. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Ranger",
        "benefit": "Choose a weapon from the following list: longbow, longsword, rapier, shortbow, short sword, or any weapon with “elven” in its name. Add +1/2 on critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with Critical Focus."
      },
      {
        "race": "Elf",
        "pclass": "Rogue",
        "benefit": "Add +1 to the number of times per day the rogue can cast a cantrip or 1st-level spell gained from the minor magic or major magic talent. The number of times this bonus is selected for the major magic talent cannot exceed the number of times it is selected for the minor magic talent. The rogue must possess the associated rogue talent to select these options."
      },
      {
        "race": "Elf",
        "pclass": "Shaman",
        "benefit": "Add 5 feet to the range of a chosen shaman hex. Multiple bonuses from this ability can apply to the same hex, to a maximum of an additional 30 feet for any single hex."
      },
      {
        "race": "Elf",
        "pclass": "Skald",
        "benefit": "Increase the bonus granted by the well-versed class feature by 1/4 (maximum +8)."
      },
      {
        "race": "Elf",
        "pclass": "Slayer",
        "benefit": "Increase the studied target bonus on Perception and Survival checks by 1/4. When the slayer gains the stalker class feature, he also gains this increase to the studied target bonus on Stealth checks."
      },
      {
        "race": "Elf",
        "pclass": "Sorcerer",
        "benefit": "Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer’s Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power."
      },
      {
        "race": "Elf",
        "pclass": "Sorcerer",
        "benefit": "Choose a terrain type from the ranger’s favored terrain list. When casting sorcerer spells in the chosen terrain, add 1/3 to the effective caster level of the spell, for the purpose of determining the spells’ duration. Source PZO1135"
      },
      {
        "race": "Elf",
        "pclass": "Spiritualist",
        "benefit": "Add 1/6 to the shield bonus granted by the 3rd-level ectoplasmic bonded manifestation ability. Source PZO1132"
      },
      {
        "race": "Elf",
        "pclass": "Summoner",
        "benefit": "The amount of time the summoner must spend to summon his eidolon is reduced by 1 round, to a minimum of 1 round."
      },
      {
        "race": "Elf",
        "pclass": "Swashbuckler",
        "benefit": "Increase the total number of points in the swashbuckler’s panache pool by 1/4."
      },
      {
        "race": "Elf",
        "pclass": "Vigilante",
        "benefit": "Gain +1/3 on all Acrobatics, Climb, and Stealth checks in forested areas. Source PZO1134"
      },
      {
        "race": "Elf",
        "pclass": "Warpriest",
        "benefit": "Add 1/2 to the number of times per day the warpriest can use blessings, but he can use these additional blessings on only those from the Air, Animal, Charm, Magic, Plant, or Sun domains."
      },
      {
        "race": "Elf",
        "pclass": "Witch",
        "benefit": "Add one spell from the witch spell list to the witch’s familiar. This spell must be at least one level lower than the highest-level spell she can cast. If the witch ever replaces her familiar, the new familiar knows these bonus spells."
      },
      {
        "race": "Elf",
        "pclass": "Witch",
        "benefit": "Add a +1/2 bonus on Spellcraft checks to identify cursed items and on Sense Motive checks to notice enchantment or possession. Source PZO1135"
      },
      {
        "race": "Elf",
        "pclass": "Wizard",
        "benefit": "Select one arcane school power at 1st level that is normally usable a number of times per day equal to 3 + the wizard’s Intelligence modifier. The wizard adds +1/2 to the number of uses per day of that arcane school power."
      }
    ]
  }
  ])

  const[classes,setClass] = useState([
    {
      name: "Barbarian",
      description: "For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors—they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.\nRole: Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.\n",
      hitDice: 12,
      wealthDiceCount: 3,
      skills: [
        "Acrobatics (Dex)",
        "Climb (Str)",
        "Craft (Int)",
        "Handle Animal (Cha)",
        "Intimidate (Cha)",
        "Knowledge (nature) (Int)",
        "Perception (Wis)",
        "Ride (Dex)",
        "Survival (Wis)",
        "Swim (Str)"
      ],
      skillPoints: 4,
      bab: "FL",
      saves: [
        "TH",
        "OT",
        "OT"
      ],
      special: [
        {
          "Fast Movement": 0,
          "Rage": 1
        },
        {
          "Rage Powers": 2,
          "Uncanny Dodge": 3
        },
        {
          "Trap Sense": 4
        },
        {
          "Rage Powers": 2
        },
        {
          "Improved Uncanny Dodge": 5
        },
        {
          "Rage Powers": 2,
          "Trap Sense": 4
        },
        {
          "Damage Reduction": 6
        },
        {
          "Rage Powers": 2
        },
        {
          "Trap Sense": 4
        },
        {
          "Damage Reduction": 6,
          "Rage Powers": 2
        },
        {
          "Greater Rage": 7
        },
        {
          "Rage Powers": 2,
          "Trap Sense": 4
        },
        {
          "Damage Reduction": 6
        },
        {
          "Indomitable Will": 8,
          "Rage Powers": 2
        },
        {
          "Trap Sense": 4
        },
        {
          "Damage Reduction": 6,
          "Rage Powers": 2
        },
        {
          "Tireless Rage": 9
        },
        {
          "Rage Powers": 2,
          "Trap Sense": 4
        },
        {
          "Damage Reduction": 6
        },
        {
          "Mighty Rage": 10,
          "Rage Powers": 2
        }
      ],
      classFeatures: [
        {
          "name": "Fast Movement",
          "description": "A barbarian’s land speed is faster than the norm for her race by +10 feet. This benefit applies only when he is wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying the barbarian’s speed because of any load carried or armor worn. This bonus stacks with any other bonuses to the barbarian’s land speed.\n",
          "type": "EX"
        },
        {
          "name": "Rage",
          "description": "A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. Starting at 1st level, a barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. Temporary increases to Constitution, such as those gained from rage and spells like bear’s endurance, do not increase the total number of rounds that a barbarian can rage per day. A barbarian can enter rage as a free action. The total number of rounds of rage per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.\nWhile in rage, a barbarian gains a +4 morale bonus to her Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, she takes a –2 penalty to Armor Class. The increase to Constitution grants the barbarian 2 hit points per Hit Dice, but these disappear when the rage ends and are not lost first like temporary hit points. While in rage, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.\nA barbarian can end her rage as a free action and is fatigued after rage for a number of rounds equal to 2 times the number of rounds spent in the rage. A barbarian cannot enter a new rage while fatigued or exhausted but can otherwise enter rage multiple times during a single encounter or combat. If a barbarian falls unconscious, her rage immediately ends, placing her in peril of death.\n",
          "type": "EX"
        },
        {
          "name": "Rage Powers",
          "description": "As a barbarian gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level. A barbarian gains the benefits of rage powers only while raging, and some of these powers require the barbarian to take an action first. Unless otherwise noted, a barbarian cannot select an individual power more than once.\nAny barbarian who meets the powers’ prerequisites can select and use rage powers. Totem rage powers grant powers related to a theme. A barbarian cannot select from more than one group of totem rage powers; for example, a barbarian who selects a beast totem rage power cannot later choose to gain any of the dragon totem rage powers (any rage power with “dragon totem” in its title).\nA complete list of rage powers can be found here: Rage Powers\n",
          "type": "EX"
        },
        {
          "name": "Uncanny Dodge",
          "description": "At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to armor class if immobilized. A barbarian with this ability can still lose her Dexterity bonus to armor class if an opponent successfully uses the feint action against her.\nIf a barbarian already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.\n",
          "type": "EX"
        },
        {
          "name": "Trap Sense",
          "description": "At 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to armor class against attacks made by traps. These bonuses increase by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.\n",
          "type": "EX"
        },
        {
          "name": "Improved Uncanny Dodge",
          "description": "At 5th level and higher, a barbarian can no longer be flanked. This defense denies a rogue the ability to sneak attack the barbarian by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels.\nIf a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.\n",
          "type": "EX"
        },
        {
          "name": "Damage Reduction",
          "description": "At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0.\n",
          "type": "EX"
        },
        {
          "name": "Greater Rage",
          "description": "At 11th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +6 and the morale bonus on her Will saves increases to +3.\n",
          "type": "EX"
        },
        {
          "name": "Indomitable Will",
          "description": "While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.\n",
          "type": "EX"
        },
        {
          "name": "Tireless Rage",
          "description": "Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage.\n",
          "type": "EX"
        },
        {
          "name": "Mighty Rage",
          "description": "At 20th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +8 and the morale bonus on her Will saves increases to +4.\n",
          "type": "EX"
        }
      ]
    },
    {
      name: "Bard",
      description: "Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.\nRole: Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.\n",
      hitDice: 8,
      wealthDiceCount: 3,
      skills: [
        "Acrobatics (Dex)",
        "Appraise (Int)",
        "Bluff (Cha)",
        "Climb (Str)",
        "Craft (Int)",
        "Diplomacy (Cha)",
        "Disguise (Cha)",
        "Escape Artist (Dex)",
        "Intimidate (Cha)",
        "Knowledge (all) (Int)",
        "Linguistics (Int)",
        "Perception (Wis)",
        "Perform (Cha)",
        "Profession (Wis)",
        "Sense Motive (Wis)",
        "Sleight of Hand (Dex)",
        "Spellcraft (Int)",
        "Stealth (Dex)",
        "Use Magic Device (Cha)"
      ],
      skillPoints: 6,
      bab: "TH",
      saves: [
        "OT",
        "TH",
        "TH"
      ],
      special: [
        {
          "Bardic Knowledge": 0,
          "Bardic Performance": 1,
          "Cantrips": 2
        },
        {
          "Versatile Performance": 3,
          "Well-Versed": 4
        },
        {},
        {},
        {
          "Lore Master": 5
        },
        {
          "Versatile Performance": 3
        },
        {},
        {},
        {},
        {
          "Jack of All Trades": 6,
          "Versatile Performance": 3
        },
        {
          "Lore Master": 5
        },
        {},
        {},
        {
          "Versatile Performance": 3
        },
        {},
        {},
        {
          "Lore Master": 5
        },
        {
          "Versatile Performance": 3
        },
        {},
        {}
      ],
      classFeatures: [
        {
          "name": "Bardic Knowledge",
          "description": "A bard adds half his class level (minimum 1) to all Knowledge skill checks and may make all Knowledge skill checks untrained.\n",
          "type": "EX"
        },
        {
          "name": "Bardic Performance",
          "description": "A bard is trained to use the Perform skill to create magical effects on those around him, including himself if desired. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day. Each round, the bard can produce any one of the types of bardic performance that he has mastered, as indicated by his level.\nStarting a bardic performance is a standard action, but it can be maintained each round as a free action. Changing a bardic performance from one effect to another requires the bard to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if the bard is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round. A bard cannot have more than one bardic performance in effect at one time.\nAt 7th level, a bard can start a bardic performance as a move action instead of a standard action. At 13th level, a bard can start a bardic performance as a swift action.\nEach bardic performance has audible components, visual components, or both.\nIf a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description). A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.\nIf a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.\nList of Bardic Performances:\nCountersong (Su): At 1st level, a bard learns to counter magic effects that depend on sound (but not spells that have verbal components.) Each round of the countersong he makes a Perform (keyboard, percussion, wind, string, or sing) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard’s Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a non-instantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard’s Perform skill check result for the save. Countersong does not work on effects that don’t allow saves. Countersong relies on audible components. Distraction (Su): At 1st level, a bard can use his performance to counter magic effects that depend on sight. Each round of the Distraction, he makes a Perform (act, comedy, dance, or oratory) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by an illusion (pattern) or illusion (figment) magical attack may use the bard’s Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the Distraction is already under the effect of a non-instantaneous illusion (pattern) or illusion (figment) magical attack, it gains another saving throw against the effect each round it sees the Distraction, but it must use the bard’s Perform check result for the save. Distraction does not work on effects that don’t allow saves. Distraction relies on visual components. Fascinate (Su): At 1st level, a bard can use his performance to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and capable of paying attention to him. The bard must also be able to see the creatures affected. The Distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard has attained beyond 1st, he can target one additional creature with this ability. Each creature within range receives a Will save (DC 10 + 1/2 the bard’s level + the bard’s Cha modifier) to negate the effect. If a creature’s saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and observes the performance for as long as the bard continues to maintain it. While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Perception checks. Any potential threat to the target allows the target to make a new saving throw against the effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability. Fascinate relies on audible and visual components in order to function. Inspire Courage (Su): A 1st level bard can use his performance to inspire courage in his allies (including himself), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to perceive the bard’s performance. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls. At 5th level, and every six bard levels thereafter, this bonus increases by +1, to a maximum of +4 at 17th level. Inspire courage is a mind-affecting ability. inspire courage can use audible or visual components. The bard must choose which component to use when starting his performance. Inspire Competence (Su): A bard of 3rd level or higher can use his performance to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The ally gets a +2 competence bonus on skill checks with a particular skill as long as she continues to hear the bard’s performance. This bonus increases by +1 for every four levels the bard has attained beyond 3rd (+3 at 7th, +4 at 11th, +5 at 15th, and +6 at 19th). Certain uses of this ability are infeasible, such as Stealth, and may be disallowed at the GM’s discretion. A bard can’t inspire competence in himself. inspire competence relies on audible components. Suggestion (Sp): A bard of 6th level or higher can use his performance to make a suggestion (as per the spell) to a creature that he has already fascinated (see above). Using this ability does not disrupt the fascinate effect, but it does require a standard action to activate (in addition to the free action to continue the fascinate effect). A bard can use this ability more than once against an individual creature during an individual performance. A Will saving throw (DC 10 + 1/2 bard’s level + bard’s Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability and relies on audible components. Dirge of Doom (Su): A bard of 8th level or higher can use his performance to foster a sense of growing dread in his enemies, causing them to take become shaken. To be affected, an enemy must be within 30 feet and able to see and hear the bard’s performance. The effect persists for as long as the enemy is within 30 feet and the bard continues the performance. The performance cannot cause a creature to become frightened or panicked, even if the targets are already shaken from another effect. Dirge of doom is a mind-affecting fear effect, and it relies on audible and visual components. Inspire Greatness (Su): A bard of 9th level or higher can use his performance to inspire greatness in himself or a single willing ally within 30 feet, granting extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally while using this performance (up to a maximum of four at 18th level). To inspire greatness, all of the targets must be able to see and hear the bard. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target’s Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependent. Inspire greatness is a mind-affecting ability and it relies on audible and visual components. Soothing Performance (Su): A bard of 12th level or higher can use his performance to create an effect equivalent to the mass cure serious wounds, using the bard’s level as the caster level. In addition, this performance removes the fatigued, sickened, and shaken condition from all those affected. Using this ability requires 4 rounds of continuous performance, and the targets must be able to see and hear the bard throughout the performance. Soothing performance relies on audible and visual components. Frightening Tune (Sp): A bard of 14th level or higher can use his performance to cause fear in his enemies. To be affected, an enemy must be able to hear the bard perform and be within 30 feet. Each enemy within range receives a Will save (DC 10 + 1/2 the bard’s level + the bard’s Cha modifier) to negate the effect. If the save succeeds, the creature is immune to this ability for 24 hours. If the save fails, the target becomes frightened and flees for as long as the target can hear the bard’s performance. Frightening tune relies on audible components. Inspire Heroics (Su): A bard of 15th level or higher can inspire tremendous heroism in himself or a single ally within 30 feet. For every three bard levels the character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, all of the targets must be able to see and hear the bard. Inspired creatures gain a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the targets are able to witness the performance. Inspire heroics is a mind-affecting ability that relies on audible and visual components. Mass Suggestion (Sp): This ability functions just like suggestion, but allows a bard of 18th level or higher to make a suggestion simultaneously to any number of creatures that he has already fascinated. Mass suggestion is an enchantment (compulsion), mind-affecting, language dependent ability that relies on audible components. Deadly Performance (Su): A bard of 20th level or higher can use his performance to cause one enemy to die from joy or sorrow. To be affected, the target must be able to see and hear the bard perform for 1 full round and be within 30 feet. The target receives a Will save (DC 10 + 1/2 the bard’s level + the bard’s Cha modifier) to negate the effect. If a creature’s saving throw succeeds, the target is staggered for 1d4 rounds, and the bard cannot use deadly performance on that creature again for 24 hours. If a creature’s saving throw fails, it dies. Deadly performance is a mind-effecting death effect that relies on audible and visual components.\n",
          "type": "UTP"
        },
        {
          "name": "Cantrips",
          "description": "Bard’s learn a number of cantrips, or 0-level spells, as noted on Table: Bard Spells Known under “Spells Known.” These spells are cast like any other spell, but they do not consume any slots and may be used again.\n",
          "type": "SP"
        },
        {
          "name": "Versatile Performance",
          "description": "At 2nd level, a bard can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills. When substituting in this way, the bard uses his total Perform skill bonus, including class skill bonus, in place of its associated skill’s bonus, whether or not he has ranks in that skill or if it is a class skill. At 6th level, and every 4 levels thereafter, the bard can select an additional type of Perform to substitute.\nThe types of Perform and their associated skills are: Act (Bluff, Disguise), Comedy (Bluff, Intimidate), Dance (Acrobatics, Fly), Keyboard Instruments (Diplomacy, Intimidate), Oratory (Diplomacy, Sense Motive), Percussion (Handle Animal, Intimidate), Sing (Bluff, Sense Motive), String (Bluff, Diplomacy), and Wind (Diplomacy, Handle Animal).\n",
          "type": "EX"
        },
        {
          "name": "Well-Versed",
          "description": "At 2nd level, the bard becomes resistant to the bardic performance of others, and to sonic effects in general. The bard gains a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.\n",
          "type": "EX"
        },
        {
          "name": "Lore Master",
          "description": "At 5th level, the bard becomes a master of lore and can take 10 on any Knowledge skill check that he has ranks in. A bard can choose not to take 10 and can instead roll normally. In addition, once per day, the bard can take 20 on any Knowledge skill check as a standard action. He can use this ability one additional time per day for every six levels he possesses beyond 5th, to a maximum of three times per day at 17th level.\n",
          "type": "EX"
        },
        {
          "name": "Jack of All Trades",
          "description": "At 10th level, the bard can use any skill, even if the skill normally requires him to be trained. At 16th level, the bard considers all skills to be class skills. At 19th level, the bard can take 10 on any skill check, even if it is not normally allowed.\n",
          "type": "EX"
        }
      ]
    },

  ])

  const [chosenRace, setChosenRace] = useState(
    {
    name: "",
    sources: "",
    lore: "",
    baseFeatures: [],
    replacementFeatures:[],
    favouredClassOptions: []
    }
  )
  const [chosenClass, setChosenClass] = useState(
    {
      name: "",
      description: "",
      hitDice: 0,
      wealthDiceCount: 0,
      skills: [
      ],
      skillPoints: 0,
      bab: "FL",
      saves: [
        "TH",
        "OT",
        "OT"
      ],
      special: [{}],
      classFeatures: []
    },
  )
  const chooseRace = (race) =>
  {
    setChosenRace(race)
  }

  return (
    <div className="App">
      <Header/>
      <GenerationContainer 
      attributes = {attributes} onChange = {changeBaseAttribute}
      races = {races} raceChoice = {setChosenRace}
      classes = {classes} classChoice = {setChosenClass} />
      <Preview attributes={attributes} race={chosenRace} pclass={chosenClass}/>
    </div>
  );
}

export default App;
