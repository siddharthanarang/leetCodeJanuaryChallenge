// Path With Minimum Effort
// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
//
//   A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
//
// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.
//
//   Example
//   Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
//   This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.


/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {

  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };
  
  class BinaryHeap{
    constructor(){
      this.values = [];
      this.time = 0;
    }
    
    enqueue(element, priority){
      this.values.push({
        element,
        priority,
        time : this.time
      });
      this.time++;
      let queue = this.values;
      let childNodeIndex = this.values.length-1;
      let parentNodeIndex = Math.floor((childNodeIndex-1)/2);
      while(parentNodeIndex >= 0){
        if((queue[parentNodeIndex].priority < queue[childNodeIndex].priority) || (
            queue[parentNodeIndex].priority === queue[childNodeIndex].priority && queue[parentNodeIndex].time < queue[childNodeIndex].time
          )){
          break;
        }
        swap(queue, parentNodeIndex, childNodeIndex);
        childNodeIndex = parentNodeIndex;
        parentNodeIndex = Math.floor((childNodeIndex-1)/2);
      }
      return this;
    }
    dequeue(){
      swap(this.values, 0, this.values.length-1);
      let returnNode = this.values.pop();
      let queue = this.values;
      let parentNodeIndex = 0;
      let childNodeIndex1 = 2*parentNodeIndex +1;
      let childNodeIndex2 = 2*parentNodeIndex +2;
      while(childNodeIndex1 < queue.length){
        if(childNodeIndex2 < queue.length && (queue[childNodeIndex2].priority < queue[childNodeIndex1].priority || 
          (
          queue[childNodeIndex2].priority === queue[childNodeIndex1].priority && queue[childNodeIndex2].time < 
          queue[childNodeIndex1].time
          ))){
          
          if((queue[parentNodeIndex].priority > queue[childNodeIndex2].priority) || 
            (queue[parentNodeIndex].priority === queue[childNodeIndex2].priority && queue[parentNodeIndex].time > queue[childNodeIndex2].time)
          ){
            swap(queue, parentNodeIndex, childNodeIndex2);
            parentNodeIndex = childNodeIndex2;
            childNodeIndex1 = 2*parentNodeIndex +1;
            childNodeIndex2 = 2*parentNodeIndex +2;
          }
          else{
            break;
          }
        }
        else{
          if(queue[parentNodeIndex].priority > queue[childNodeIndex1].priority || 
            (queue[parentNodeIndex].priority === queue[childNodeIndex1].priority && queue[parentNodeIndex].time > queue[childNodeIndex1].time)
          ){
            swap(queue, parentNodeIndex, childNodeIndex1);
            parentNodeIndex = childNodeIndex1;
            childNodeIndex1 = 2*parentNodeIndex +1;
            childNodeIndex2 = 2*parentNodeIndex +2;
          }
          else{
            break;
          }
        }
      }
      return returnNode;
    }
  }

  const performInitialSteps = (queue, minimumDistance)=>{
    queue.enqueue('0,0',0);
    minimumDistance['0,0'] = 0;
  };

  let visited = {}, minimumDistance = {}, queue = new BinaryHeap();
  let currentNode, currentNodei, currentNodej, combination, effort;
  performInitialSteps(queue, minimumDistance);
  while(queue.values.length){
    console.log(`queue is `,queue);
    console.log(`minimumDistance is `,minimumDistance);
    currentNode = queue.dequeue().element;
    console.log(`currentNode is `,currentNode);
    console.log(`visited is `,visited);
    if(visited[currentNode]){
      continue;
    }
    visited[currentNode] = true;
    currentNodei = parseInt(currentNode.split(',')[0]);
    currentNodej = parseInt(currentNode.split(',')[1]);
    console.log(`currentNodei is `,currentNodei);
    console.log(`currentNodej is `,currentNodej);
    if(currentNodei === heights.length-1 && currentNodej === heights[heights.length-1].length-1){
      return minimumDistance[currentNode];
    }
    if(heights[currentNodei+1] != undefined && heights[currentNodei+1][currentNodej] != undefined ){
      combination = (currentNodei+1) + ',' +  (currentNodej);
      console.log('1 combination is ',combination);
      if(!visited[combination]){
        effort = Math.max(minimumDistance[currentNode],
          Math.abs(heights[currentNodei+1][currentNodej] - heights[currentNodei][currentNodej]));
        console.log('1 effort is ',effort);
        if(minimumDistance[combination] === undefined || effort < minimumDistance[combination]){
          minimumDistance[combination] = effort;
          queue.enqueue(combination, effort);
        }

      }
    }
    if(heights[currentNodei-1] != undefined  && heights[currentNodei-1][currentNodej] != undefined ){
      combination = (currentNodei-1) + ',' +  (currentNodej);
      if(!visited[combination]){
        console.log('2 combination is ',combination);
        effort = Math.max(minimumDistance[currentNode],
          Math.abs(heights[currentNodei-1][currentNodej] - heights[currentNodei][currentNodej]));
        console.log('2 effort is ',effort);
        if(minimumDistance[combination] === undefined || effort < minimumDistance[combination]){
          minimumDistance[combination] = effort;
          queue.enqueue(combination, effort);
        }
      }
    }
     if(heights[currentNodei] != undefined  && heights[currentNodei][currentNodej+1] != undefined ){
      combination = (currentNodei) + ',' +  (currentNodej+1);
      console.log('3 combination is ',combination);
       if(!visited[combination]){
         effort = Math.max(minimumDistance[currentNode],
           Math.abs(heights[currentNodei][currentNodej+1] - heights[currentNodei][currentNodej]));
         console.log('3 effort is ',effort);
         if(minimumDistance[combination] === undefined || effort < minimumDistance[combination]){
           minimumDistance[combination] = effort;
           queue.enqueue(combination, effort);
         }
       }
    }
     if(heights[currentNodei] != undefined  && heights[currentNodei][currentNodej-1] != undefined ){
      combination = (currentNodei) + ',' +  (currentNodej-1);
      console.log('4 combination is ',combination);
       if(!visited[combination]){
         effort = Math.max(minimumDistance[currentNode],
           Math.abs(heights[currentNodei][currentNodej-1] - heights[currentNodei][currentNodej]));
         console.log('4 effort is ',effort);
         if(minimumDistance[combination] === undefined || effort < minimumDistance[combination]){
           minimumDistance[combination] = effort;
           queue.enqueue(combination, effort);
         }
       }
    }
  }
  return 0;

};

console.log(`minimumEffortPath is `,minimumEffortPath([[8,6,8,1,4,1],[10,3,1,8,9,10],[1,5,6,9,8,5],[10,4,6,7,3,3],[6,6,9,1,3,3],[3,1,10,3,4,1],[6,1,6,10,7,10]]));