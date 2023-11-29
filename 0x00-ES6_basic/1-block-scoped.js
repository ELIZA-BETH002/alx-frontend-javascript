export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      task = true; // Reassign the existing variables instead of redeclaring
      task2 = false; // Reassign the existing variables instead of redeclaring
    }
  
    return [task, task2];
  }
  