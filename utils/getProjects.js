import { promises as fsPromises } from "fs";
import path from "path";

const getProjects = async () => {
  const filePath = path.join(process.cwd(), "data/json/projects.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
};

export default getProjects;
