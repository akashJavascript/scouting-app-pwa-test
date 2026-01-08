import { Dexie, type EntityTable } from "dexie";

interface ScoutingRow {
  id: number;
  scouter_email: string;
  match: number;
  team_number: number;
  coralL1?: number;
  coralL2?: number;
  coralL3?: number;
  coralL4?: number;
}

const db = new Dexie("Scouting App DB") as Dexie & {
  scouting: EntityTable<
    ScoutingRow,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  scouting:
    "++id, scouter_email, match, team_number, coralL1, coralL2, coralL3, coralL4", // primary key "id" (for the runtime!)
});

export type { ScoutingRow };
export { db };
