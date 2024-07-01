/**
 * Find the shortest path from start to end using BFS
 * @param {number[]} start Start position
 * @param {number[]} target Target position
 * @returns {number[][]} The shortest path
 */
const knightMove = function(start, target){
    const valid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
    if (!valid(...start) || !valid(...target)) return [];
    if (start[0] === target[0] && start[1] === target[1]) return [start];
    const dirs = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    const visited = new Set();
    const queue = [[start]];
    visited.add(start.toString());

    while(queue.length){
        const currPath = queue.shift();
        const [x, y] = currPath[currPath.length - 1];
        if(x === target[0] && y === target[1]){
            return currPath;
        }
        for(const dir of dirs){
            const newX = x + dir[0];
            const newY = y + dir[1];
            if(valid(newX, newY) && !visited.has([newX, newY].toString())){
                visited.add([newX, newY].toString());
                queue.push([...currPath, [newX, newY]]);
            }
        }
    }
    
}

// Test
console.log(knightMove([3,3], [4,3])); 