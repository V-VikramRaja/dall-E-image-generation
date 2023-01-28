// This support function will generate a random number by the number it will take a prompt.
import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

// This function will download the image
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
