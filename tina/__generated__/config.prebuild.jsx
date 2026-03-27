// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var abilityField = (name, label) => ({
  type: "object",
  name,
  label,
  fields: [
    { type: "number", name: "score", label: "Score" },
    { type: "string", name: "mod", label: "Modifier" }
  ]
});
var config_default = defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    ...process.env.TINA_BASE_PATH ? { basePath: process.env.TINA_BASE_PATH } : {}
  },
  schema: {
    collections: [
      {
        name: "character",
        label: "Character",
        path: "content/characters",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          filename: { readonly: true }
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Character Name"
          },
          // ── Card 1: Ability Scores & Saves ──────────────────────────────
          {
            type: "object",
            name: "abilityScores",
            label: "Ability Scores",
            fields: [
              abilityField("str", "Strength"),
              abilityField("dex", "Dexterity"),
              abilityField("con", "Constitution"),
              abilityField("int", "Intelligence"),
              abilityField("wis", "Wisdom"),
              abilityField("cha", "Charisma")
            ]
          },
          {
            type: "object",
            name: "savingThrows",
            label: "Saving Throws",
            fields: [
              { type: "string", name: "str", label: "STR" },
              { type: "string", name: "dex", label: "DEX" },
              { type: "string", name: "con", label: "CON" },
              { type: "string", name: "int", label: "INT" },
              { type: "string", name: "wis", label: "WIS" },
              { type: "string", name: "cha", label: "CHA" }
            ]
          },
          {
            type: "object",
            name: "combatStats",
            label: "Combat Stats",
            fields: [
              { type: "string", name: "ac", label: "Armor Class" },
              { type: "string", name: "hp", label: "Hit Points" },
              { type: "string", name: "initiative", label: "Initiative" },
              { type: "string", name: "speed", label: "Speed" }
            ]
          },
          {
            type: "object",
            name: "skills",
            label: "Skills",
            fields: [
              { type: "string", name: "animalHandling", label: "Animal Handling" },
              { type: "string", name: "insight", label: "Insight" },
              { type: "string", name: "investigation", label: "Investigation" },
              { type: "string", name: "nature", label: "Nature" },
              { type: "string", name: "perception", label: "Perception" },
              { type: "string", name: "survival", label: "Survival" },
              { type: "string", name: "medicine", label: "Medicine" },
              { type: "string", name: "passivePerception", label: "Passive Perception" },
              { type: "string", name: "passiveInvestigation", label: "Passive Investigation" }
            ]
          },
          {
            type: "string",
            name: "identityTags",
            label: "Identity Tags",
            list: true
          },
          // ── Card 2: Combat, Magic & Forms ────────────────────────────────
          {
            type: "object",
            name: "attacks",
            label: "Attacks",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name ?? "Attack" })
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "stat", label: "Attack / Damage" }
            ]
          },
          {
            type: "object",
            name: "spellcasting",
            label: "Spellcasting",
            fields: [
              { type: "string", name: "saveDC", label: "Spell Save DC" },
              { type: "string", name: "attackBonus", label: "Spell Attack Bonus" },
              { type: "string", name: "cantrips", label: "Cantrips" },
              { type: "string", name: "spells1", label: "1st-Level Spells" },
              { type: "string", name: "spells2", label: "2nd-Level Spells" },
              { type: "string", name: "slots", label: "Spell Slots" }
            ]
          },
          {
            type: "object",
            name: "wildShape",
            label: "Wild Shape",
            fields: [
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "circleForms", label: "Circle Forms" }
            ]
          },
          {
            type: "object",
            name: "brownBearForm",
            label: "Brown Bear Form",
            fields: [
              { type: "string", name: "ac", label: "AC" },
              { type: "string", name: "hp", label: "HP" },
              { type: "string", name: "speed", label: "Speed" },
              { type: "string", name: "str", label: "STR" },
              { type: "string", name: "dex", label: "DEX" },
              { type: "string", name: "con", label: "CON" },
              { type: "string", name: "multiattack", label: "Multiattack" },
              { type: "string", name: "bite", label: "Bite" },
              { type: "string", name: "claws", label: "Claws" },
              { type: "string", name: "passivePerception", label: "Passive Perception" }
            ]
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name ?? "Feature" })
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "string",
            name: "quickRead",
            label: "Quick Read",
            ui: { component: "textarea" }
          },
          // ── Card 3: Background & Personality ────────────────────────────
          {
            type: "string",
            name: "background",
            label: "Background",
            list: true,
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "personality",
            label: "Personality",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "ideal",
            label: "Ideal",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "bond",
            label: "Bond",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "flaw",
            label: "Flaw",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "soulRead",
            label: "Soul Read",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "planescapeRead",
            label: "Planescape Read",
            ui: { component: "textarea" }
          },
          // ── Card 4: Allies, Enemies & Gear ───────────────────────────────
          {
            type: "object",
            name: "allies",
            label: "Allies & Enemies",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name ?? "Entry" })
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "string",
            name: "treasure",
            label: "Treasure & Keepsakes",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "coin",
            label: "Coin",
            fields: [
              { type: "string", name: "gp", label: "Gold Pieces" }
            ]
          },
          {
            type: "string",
            name: "oneLiner",
            label: "One-Line Read",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "gear",
            label: "Gear",
            list: true
          },
          {
            type: "object",
            name: "proficiencies",
            label: "Proficiencies & Languages",
            fields: [
              { type: "string", name: "armor", label: "Armor" },
              { type: "string", name: "weapons", label: "Weapons" },
              { type: "string", name: "tools", label: "Tools" },
              { type: "string", name: "languages", label: "Languages" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
