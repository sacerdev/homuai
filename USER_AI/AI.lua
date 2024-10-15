-- ---------------------
-- SacerSeineAI
-- Developed by Sacer
-- Permission granted to distribute in unmodified form
--
-- Homunculus AI Documentation (English):
-- http://winter.sgv417.jp/alchemy/download/official/AI_manual_en.html
-- ---------------------

----
-- AI Constants
----
VERSION = "0.0.1" -- The version of this AI

----
-- AI Files
----
require "AI.USER_AI.Const"

----
-- Global variables (default)
----
MyState      = IDLE_ST    -- Initial state
MyEnemy      = 0          -- Enemy's ID
MyDestX      = 0          -- x-coordinate of a destination
MyDestY      = 0          -- y-coordinate of a destination
MyPatrolX    = 0          -- x-coordinate of a scouting location
MyPatrolY    = 0          -- y-coordinate of a scouting location
ResCmdList   = List.new() -- List of queued commands
MyID         = 0          -- Homunculus ID
MySkill      = 0          -- Homunculus skills
MySkillLevel = 0          -- Homunculus skill level
----

----
-- Global variables (custom)
----
LastTick = 0 -- Last value GetTick() returned

--- AI
-- Main function of the AI
--
-- @param  myid  Homunculus ID
-- @return nil
function AI (myid)
	MyID = myid -- Set the Homunculus ID
	local tick = GetTick() -- Get the current tick

	-- Check if the AI() function was called twice in the same tick
	if LastTick == GetTick() then
		TraceAI("Blocked double AI() call")
		return
	end
	LastTick = tick -- Update the last tick
end
