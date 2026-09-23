import fs from "node:fs/promises";

export const data = await fs.readFile("./public/source.txt", {
   encoding: "utf8",
});
