const fs = require('fs');
const path = require('path');

const CONFIG_OBJ = {
	CIRCLE_ON_IDLE: {
		value: 1,
		comment: '0 = disabled',
		before: [
			'--------------------------------------------------',
			'-- Mir AI configuration file',
			'--------------------------------------------------'
		]
	},
	FOLLOW_AT_ONCE: {
		value: 1,
		comment: '0 = disabled. Follow at once the owner if he/she moves away from the enemy',
	},
	HELP_OWNER_1ST: {
		value: true,
		comment: 'true = when the homunculus is in battle, he/she can switch target to help the owner',
	},
	KILL_YOUR_ENEMIES_1ST: {
		value: false,
		comment: 'true = the homunculus kills ALL his/her enemies before to help the owner',
	},
	LONG_RANGE_SHOOTER: {
		value: false,
		comment: 'true = the homunculs doesn\'t go to monters and just casts long range attacks, until the monster come close',
	},
	BOLTS_ON_CHASE_ST: {
		value: false,
		comment: 'true = alchemist can cast bolts when the omunculus is chasing/intercepting a monster',
	},
	HP_PERC_DANGER: {
		value: 50,
		comment: 'HP% below that value makes your homunculus to evade the monsters',
	},
	HP_PERC_SAFE2ATK: {
		value: 75,
		comment: 'The AI is not aggressive until the homunculus reaches this HP% (> 100 = never agressive)',
	},
	OWNER_CLOSEDISTANCE: {
		value: 2,
		comment: 'Distance to reach when the houmunculus goes to the owner',
	},
	TOO_FAR_TARGET: {
		value: 14,
		comment: 'Max interception range from the owner',
	},
	SKILL_TIME_OUT: {
		value: 2000,
		comment: 'The AI doesn\'t use aggressive skills if more than the specified milliseconds are passed',
	},
	NO_MOVING_TARGETS: {
		value: false,
		comment: 'true = the homunculus don\'t attack monsters that are on movement (ie monsters that are following other players)',
	},
	ADV_MOTION_CHECK: {
		value: false,
		comment: 'true = it tries to detect frozen or trapped monster (for now this works for aggressive monsters only) and area spells',
	},
	OLD_HOMUN_TYPE: {
		value: 'VANILMIRTH',
		comment: 'LIF | FILIR | AMISTR | VANILMIRTH',
	},
	AAA_MinHP: {
		value: 100,
		comment: 'to disable limits: set AAA_MinHP = 0 and AAA_MaxHP = a very high value, that your alchemist will never reach (eg. 32000)',
		before: [
			'',
			'-- Alchemist Auto Attacks (AAA)-------------------',
			'-- HP Range (no AAA when HP are out of this range)',
		],
	},
	AAA_MaxHP: {
		value: 32000,
		comment: 'to disable limits: set AAA_MinHP = 0 and AAA_MaxHP = a very high value, that your alchemist will never reach (eg. 32000)',
	},
	ACR: {
		value: '{}',
		comment: '',
	},
	'ACR.MinEnemies': {
		value: 2,
		comment: 'Minimum enemies (0=disabled, no Cart Revolution)',
	},
	'ACR.MinSP': {
		value: 20,
		comment: 'Minimum SP to use Auto Cart Revolution',
	},
	AST: {
		value: '{}',
		comment: '',
	},
	'AST.SkillID': {
		value: 0,
		comment: '0 = disabled, 5=Bash(Cultus), 14=Cold Bolt(Ice Falchion), 19 = Firebolt (Fireblend), 337 = Tomahawk Throwing (Tomahawk)',
	},
	'AST.MinSP': {
		value: 20,
		comment: 'Minimum SP to use an Auto Single Target weapon-based attak',
	},
	'AST.Level': {
		value: 5,
		comment: '',
	},
	AAP: {
		value: '{}',
		comment: '',
	},
	'CAN_DETECT_NOPOT': {
		value: true,
		comment: '',
		before: [
			'',
			'-- Auto-Aid Potion (AAP) -------------------------',
		],
	},
	'AAP.Mode': {
		value: 3,
		comment: 'set this to 0 to disable AAP',
	},
	'AAP.HP_Perc': {
		value: 65,
		comment: 'if the HP are below this percentage, an AAP (or Healing Touch) is casted',
	},
	'AAP.Level': {
		value: 2,
		comment: 'lvl 2 throws orange potions',
		before: [
			'                   -- select a % that an AAP can returns HP above HOMUN_SAFE_HP_PERC',
		],
	},
	AS_AMI_BULW: {
		value: '{}',
		comment: 'Bulwark',
		before: [
			'',
			'-- Homunculus skills -----------------------------',
			'-- Here you can configure skill levels and the minimum SP amount required in order',
			'-- to activate a skill (the AI will not cast that skill until your homunculus has',
			'-- more SPs than the specified value).',
			'',
			'-- Amistr',
		],
	},
	'AS_AMI_BULW.MinSP': {
		value: 40,
		comment: '',
	},
	'AS_AMI_BULW.Level': {
		value: 5,
		comment: '',
	},
	AS_AMI_CAST: {
		value: '{}',
		comment: 'Castling',
		before: [
			'',
		],
	},
	'AS_AMI_CAST.MinSP': {
		value: 10,
		comment: '',
	},
	'AS_AMI_CAST.Level': {
		value: 0,
		comment: 'disabled',
	},
	AS_FIL_MOON: {
		value: '{}',
		comment: 'Moonlight',
		before: [
			'',
			'-- Filir',
		],
	},
	'AS_FIL_MOON.MinSP': {
		value: 20,
		comment: 'set this to 90, to preserve 70 SP for flitting',
	},
	'AS_FIL_MOON.Level': {
		value: 5,
		comment: '',
	},
	AS_FIL_ACCL: {
		value: '{}',
		comment: 'Accelerated Flight',
		before: [
			'',
		],
	},
	'AS_FIL_ACCL.MinSP': {
		value: 70,
		comment: '',
	},
	'AS_FIL_ACCL.Level': {
		value: 0,
		comment: 'disabled',
	},
	AS_FIL_FLTT: {
		value: '{}',
		comment: 'Flitting',
		before: [
			'',
		],
	},
	'AS_FIL_FLTT.MinSP': {
		value: 70,
		comment: '',
	},
	'AS_FIL_FLTT.Level': {
		value: 5,
		comment: '',
	},
	AS_LIF_HEAL: {
		value: '{}',
		comment: 'Healing touch',
		before: [
			'',
			'-- Lif',
		],
	},
	'AS_LIF_HEAL.MinSP': {
		value: 40,
		comment: '',
	},
	'AS_LIF_HEAL.Level': {
		value: 5,
		comment: '',
	},
	AS_LIF_ESCP: {
		value: '{}',
		comment: 'Urgent escape',
		before: [
			'',
		],
	},
	'AS_LIF_ESCP.MinSP': {
		value: 40,
		comment: '',
	},
	'AS_LIF_ESCP.Level': {
		value: 5,
		comment: '',
	},
	AS_VAN_CAPR: {
		value: '{}',
		comment: 'Caprice',
		before: [
			'',
			'-- Vanilmirth',
		],
	},
	'AS_VAN_CAPR.MinSP': {
		value: 30,
		comment: '',
	},
	'AS_VAN_CAPR.Level': {
		value: 5,
		comment: '',
	},
	AS_VAN_BLES: {
		value: '{}',
		comment: 'Chaotic Blessings',
		before: [
			'',
		],
	},
	'AS_VAN_BLES.MinSP': {
		value: 40,
		comment: '',
	},
	'AS_VAN_BLES.Level': {
		value: 0,
		comment: 'lvl 4 heals chances: 36% enemy, 60% self, 4% owner',
	},
	DEFAULT_BEHA: {
		value: 'BEHA_attack',
		comment: '\__ values assumed for any monster not listed below',
		before: [
			'',
			'-- Tact list: behaviour for each monster ---------',
			'-- format: Tact[ID] = {"Name", behaviour, skill mode}',
			'-- ID: please check ROEmpire database for more IDs: http://www.roempire.com/database/?page=monsters',
			'-- Name: this is just for you, the AI only checks the ID',
			'-- Behaviours and skill modes: you can find the list in Const.lua',
		],
	},
	DEFAULT_WITH: {
		value: 'WITH_full_power',
		comment: '/',
	},
	Tact: {
		value: '{}',
		comment: '',
		tactics: {
			'none': {
				'1261': { name: 'Wild Rose', behaviour: 'BEHA_react', skillMode: 'WITH_full_power', skillLevel: 5, woasNed: 0 },
			},
			'Orc Dungeon (lvl 50+ Settings)': {
				'1189': { name: 'Orc Archer', behaviour: 'BEHA_react_1st', skillMode: 'WITH_full_power', skillLevel: 5, woasNed: 0 },
				'1177': { name: 'Zenorc', behaviour: 'BEHA_attack_1st', skillMode: 'WITH_full_power', skillLevel: 5, woasNed: 0 },
				'1152': { name: 'Orc Skeleton', behaviour: 'BEHA_react', skillMode: 'WITH_one_skill', skillLevel: 5, woasNed: 0 },
				'1111': { name: 'Drainliar', behaviour: 'BEHA_attack_weak', skillMode: 'WITH_no_skill', skillLevel: 1, woasNed: 0 },
				'1042': { name: 'Steel Chonchon', behaviour: 'BEHA_attack_last', skillMode: 'WITH_one_skill', skillLevel: 1, woasNed: 0 },
			},
			'Poring and Metaling fields': {
				'1368': { name: 'Geographer', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1118': { name: 'Flora', behaviour: 'BEHA_coward', skillMode: 'WITH_full_power', skillLevel: 5, woasNed: 0 },
				'1613': { name: 'Metaling', behaviour: 'BEHA_react', skillMode: 'WITH_one_skill', skillLevel: 5, woasNed: 0 },
				'1031': { name: 'Poporing', behaviour: 'BEHA_react', skillMode: 'WITH_one_skill', skillLevel: 5, woasNed: 0 },
				'1242': { name: 'Marin', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1113': { name: 'Drops', behaviour: 'BEHA_attack', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: -1 },
				'1002': { name: 'Poring', behaviour: 'BEHA_attack_last', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: -1 },
			},
			'Eggs': {
				'1008': { name: 'Pupa', behaviour: 'BEHA_attack_last', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1048': { name: 'Thief Bug Egg', behaviour: 'BEHA_attack_last', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1047': { name: 'Peco Peco Egg', behaviour: 'BEHA_attack_last', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1097': { name: 'Ant Egg', behaviour: 'BEHA_attack_last', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
			},
			'Summoned Plants': {
				'1555': { name: 'Sm. Parasite', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1575': { name: 'Sm. Flora', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1579': { name: 'Sm. Hydra', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1589': { name: 'Sm. Mandragora', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1590': { name: 'Sm. Geographer', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
			},
			'WoE Guardians': {
				'1285': { name: 'WoE Guardian 1', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1286': { name: 'WoE Guardian 2', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1287': { name: 'WoE Guardian 3', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1288': { name: 'WoE Guardian 4', behaviour: 'BEHA_avoid', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
			},
			'Plants and mushrooms': {
				'1078': { name: 'Red Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1079': { name: 'Blue Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1080': { name: 'Green Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1081': { name: 'Yellow Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1082': { name: 'White Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1083': { name: 'Shining Plant', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1084': { name: 'Black Mushroom', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
				'1085': { name: 'Red Mushroom', behaviour: 'BEHA_react', skillMode: 'WITH_no_skill', skillLevel: 5, woasNed: 0 },
			},
		}
	},
};

// Define the file path
const filePath = path.join(__dirname, 'Config.lua');
const fileOutputPath = path.join(__dirname, 'Config2.lua');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  const lines = data.split('\n');
  const config = { ...CONFIG_OBJ };
  let reachedTact = false;
  let currentTactCat = 'none';
  lines.forEach((line) => {
	const parts = line.split('=');
	const key = parts[0].trim();
	const value = parts[1]?.trim()?.split('--')[0]?.trim();

	if (key?.length === 0) return;
	if (!reachedTact && key.startsWith('--')) return;
	if (!reachedTact && value === undefined) return;
	if (!reachedTact) {
		config[key].value = value;
		if (key === 'Tact') {
			reachedTact = true;
		}
	} else {
		if (key.startsWith('--')) {
			const category = key.replace('--', '').trim();
			if (category === 'End Tact') return;
			config.Tact.tactics[category] = {};
			currentTactCat = category;
			return;
		}
		const monsterId = key.replace('Tact[', '').replace(']', '');
		const parts = value.replace('{', '').replace('}', '').split(',');
		config.Tact.tactics[currentTactCat][`${monsterId}`] = {
			name: parts[0].trim().replace(/"/g, ''),
			behaviour: parts[1].trim().replace(/"/g, ''),
			skillMode: parts[2].trim().replace(/"/g, ''),
			skillLevel: parts[3].trim(),
			woasNed: parts[4].trim(),
		};
	}
  })
  writeBackToFile(config);
});

function writeBackToFile(config) {
	const lines = [];

	Object.keys(config).forEach((key) => {
		const obj = config[key];
		if (obj.before) {
			obj.before.forEach((line) => {
				lines.push(line);
			});
		}

		if (key !== 'Tact') {
			if (obj?.comment?.length > 0) {
				lines.push(`${key} = ${obj.value} -- ${obj.comment}`);
			} else {
				lines.push(`${key} = ${obj.value}`);
			}
		} else {
			lines.push(`${key} = ${obj.value}`);
			Object.keys(config[key].tactics).forEach((category, i) => {
				if (category !== 'none') {
					lines.push(`-- ${category}`);
				}
				Object.keys(config[key].tactics[category]).forEach((monsterId) => {
					const { name, behaviour, skillMode, skillLevel, woasNed } = config[key].tactics[category][monsterId];
					lines.push(`Tact[${monsterId}] = {"${name}", ${behaviour}, ${skillMode}, ${skillLevel}, ${woasNed}}`);
				});
			});
		}
	});
	const data = lines.join('\n');
	fs.writeFile(fileOutputPath, data, (err) => {
		if (err) {
			console.error('Error writing the file:', err);
			return;
		}
		console.log('Successfully wrote to the file');
	});
}
