export default function iterateThroughObject(reportWithIterator) {
    let result = '';
  
    for (const employee of reportWithIterator) {
      result += `${employee} | `;
    }
  
    return result.slice(0, -3); // Removes the trailing ' | ' from the string
  }

  