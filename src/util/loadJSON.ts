import * as path from "path"
import { readdirSync, readFileSync, readFile } from "fs";

export let dataPath: string = path.join(__dirname, "../data")

export function loadJSON (folderPath: string): any[] {
  let output: any[] = []

  const files = readdirSync(folderPath)
  files.forEach((file: string) => {
    let filePath: string = path.join(folderPath, file)
    let fileContent: any = readFileSync(filePath)

    output.push(JSON.parse(fileContent))
  })

  return output
}

export function loadJSONFile (filePath: string): any {
  let fileContent: any = readFileSync(filePath)

  return JSON.parse(fileContent)
}