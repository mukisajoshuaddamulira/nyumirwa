export let todos = [];
let nextId = 1;
export function getNextId() {
  return nextId++;
}
