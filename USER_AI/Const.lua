-- ---------------------
-- Const.lua
-- ---------------------

----
-- Build in functions.
----

--[[
--- TraceAI
-- Records the status of the script as it is processed and analyzed.
-- The file is located in the root folder of the client.
--
-- @param  string String to be recorded
-- @return nil
function TraceAI(string) end

--- MoveToOwner
-- Homunculus moves to the spot closest to its owner.
--
-- @param  id  Homunculus ID
-- @return nil
function MoveToOwner(id) end

--- Move
-- Homunculus moves to a specific destination on the current map.
--
-- @param  id  Homunculus ID
-- @param  x   x-coordinate of the destination
-- @param  y   y-coordinate of the destination
-- @return nil
function Move(id,x,y) end

--- Attack
-- Commands Homunculus (id1) to attack a target (id2).
--
-- @param  id1 Homunculus ID
-- @param  id2 Target ID
-- @return nil
function Attack(id,id) end

--- GetV
-- Returns id's property (V_...).
-- Constant value of property is defined below in this file.
-- The constant variable used in this function determines which return value is used.
-- The return value for V_POSITION is x,y-coordinates, and the return value for V_HP is an HP value.
--
-- @param  V_    Property to be gained
-- @param  id    Homunculus ID
-- @return mixed
function GetV(V_,id) end

--- GetActors
-- Views the IDs of characters, NPCs, monsters, items and skills within the character's screen.
--
-- @return table A set of IDs that are returned in LUA format.
function GetActors () end

--- GetTick
-- Displays a timer that starts at 0 and increases by 1 each 1/1000 seconds.
--
-- @return number 1/1000 second unit numbers
function GetTick() end

--- GetMsg
-- Deliver user's commands input through RO client interface (Homunculus Window) as a message string to the AI script
--
-- @param  id    Homunculus ID
-- @return table First item corresponds to the command type, following entries hold the command parameters
function GetMsg(id) end

--- GetResMsg
-- Delivers user's reserved message as script language.
-- @param  id    Message ID
-- @return table First item corresponds to the command type, following entries hold the command parameters
function GetResMsg (id) end

--- SkillObject
--  Homunculus performs a skill of a specific level on a target.
--
-- @param  id     Homunculus ID
-- @param  level  Skill level
-- @param  skill  Skill ID
-- @param  target Target ID
-- @return nil
function SkillObject (id,level,skill,target) end

--- SkillGround
-- Homunculus performs a skill of a specific level on the ground.
-- The x,y-coordinates input in this function determines where the ground targeting skill will be cast.
--
-- @param  id    Homunculus ID
-- @param  level Skill level
-- @param  skill Skill ID
-- @param  x     x-coordinate of the target
-- @param  y     y-coordinate of the target
-- @return nil
function SkillGround(id, level, skill, x, y) end

--- IsMonster
-- Check if given ID is a monster.
-- The id will have a return value of 1 if the object is a monster;
-- all other objects have a return value of 0.
--
-- @param  id  ID to be checked
-- @return number 1 if the object is a monster, 0 if not
function IsMonster(id) end
--]]

----
-- GetV constants
----

V_OWNER            = 0  -- Returns the Homunculus owner's ID
V_POSITION         = 1  -- Returns the current location's x,y-coordinates
V_TYPE             = 2  -- Defines an object (Not implemented yet)
V_MOTION           = 3  -- Returns the current action
V_ATTACKRANGE      = 4  -- Returns the attack range (Not implemented yet; temporarily set as 1 cell)
V_TARGET           = 5  -- Returns the target of an attack or skill
V_SKILLATTACKRANGE = 6  -- Returns the skill attack range (Not implemented yet)
V_HOMUNTYPE        = 7  -- Returns the type of Homunculus
V_HP               = 8  -- Current HP amount of a Homunculus or its owner
V_SP               = 9  -- Current SP amount of a Homunculus or its owner
V_MAXHP            = 10 -- The maximum HP of a Homunculus or its owner
V_MAXSP            = 11 -- The maximum SP of a Homunculus or its owner

----
-- GetV return value constants
----

-- V_MOTION (3)
MOTION_STAND   = 0 -- Standing
MOTION_MOVE    = 1 -- Movement
MOTION_ATTACK  = 2 -- Attack
MOTION_DEAD    = 3 -- Dead
MOTION_ATTACK2 = 9 -- Attack2 (Range?)

-- V_HOMUNTYPE (7)
LIF             = 1
AMISTR          = 2
FILIR           = 3
VANILMIRTH      = 4
LIF2            = 5
AMISTR2         = 6
FILIR2          = 7
VANILMIRTH2     = 8
LIF_ADV         = 9
AMISTR_ADV      = 10
FILIR_ADV       = 11
VANILMIRTH_ADV  = 12
LIF2_ADV        = 13
AMISTR2_ADV     = 14
FILIR2_ADV      = 15
VANILMIRTH2_ADV = 16
-- Homunculus S
EIRA			= 48
BAYERI			= 49
SERA			= 50
DIETER			= 51
ELEANOR			= 52

----
-- GetMsg and GetResMsg return value constants
----
CMD_NONE          = 0 -- No Command            {Command Number}
CMD_MOVE          = 1 -- Move                  {Command Number, x-coordinate, y-coordinate}
CMD_STOP          = 2 -- Stop                  {Command Number}
CMD_ATTACT_OBJECT = 3 -- Attack                {Command Number, Target ID}
CMD_ATTACK_AREA   = 4 -- Area Attack           {Command Number, x-coordinate, y-coordinate}
CMD_PATROL        = 5 -- Patrol                {Command Number, x-coordinate, y-coordinate}
CMD_HOLD          = 6 -- Mark                  {Command Number}
CMD_SKILL_OBJECT  = 7 -- Use Skill             {Command Number, Selected Level, Type, Target ID}
CMD_SKILL_AREA    = 8 -- Use Area Attack Skill {Command Number, Selected Level, Type, x-coordinate, y-coordinate}
CMD_FOLLOW        = 9 -- Follow Its Owner      {Command Number}

----
-- States
----
ST_IDLE              = 0  -- Idle
ST_FOLLOW            = 1  -- Follow
ST_CHASE             = 2  -- Chase
ST_ATTACK            = 3  -- Attack
ST_CMD_MOVE          = 4  -- Command Move
CT_CMD_STOP          = 5  -- Command Stop (not used?)
ST_CMD_ATTACK_OBJECT = 6  -- Command Attack Object
ST_CMD_ATTACK_AREA   = 7  -- Command Area Attack
ST_CMD_PATROL        = 8  -- Command Patrol (not used?)
ST_CMD_HOLD          = 9  -- Command Hold (not used?)
ST_CMD_SKILL_OBJECT  = 10 -- Command Skill Object
ST_CMD_SKILL_AREA    = 11 -- Command Skill Area
ST_CMD_FOLLOW        = 12 -- Command Follow
