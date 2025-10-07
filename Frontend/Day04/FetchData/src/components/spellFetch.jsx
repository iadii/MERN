import { useEffect, useState } from "react";

export function spell() {
  const [spell, setSpell] = useState([]);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/spells").then(
      async (res) => {
        const json = await res.json();
        setSpell(json);
      }
    );
  }, []);

  return (
    <div>
      {spell.map((dt) => (
        <>
          <div>spell: {dt.spell}</div>
          <div>use: {dt.use}</div>
        </>
      ))}
    </div>
  );
}
