import { useState } from "react";
import { db } from "./db";

function CoralButton() {
  const [coral, setCoral] = useState(0);
  const [status, setStatus] = useState("");
  async function addCoral() {
    try {
      setCoral(coral + 1);
      const id = await db.scouting.add({
        scouter_email: "A",
        match: 1,
        team_number: 1234,
        coralL1: coral,
      });
      setStatus(`Coral added with id ${id}`);
    } catch (error) {
      console.error("Failed to add coral: ", error);
    }
  }

  return (
    <>
      <button
        onClick={addCoral}
        style={{
          backgroundColor: "coral",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Coral Button
      </button>
      <p>{status}</p>
    </>
  );
}

export default CoralButton;
