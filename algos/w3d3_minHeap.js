// minimum heap data structure
// order of values of an array are slightly sorted
// null at index 0
// index 1 is a number
// parent has to be smaller than each of the children
// index 2 and 3 are children of 1
// 4 and 5 children of 2, 6 and 7 parent of 3... binary tree
// parent is index of half the child rounded down => math.floor(index/2)
// to add a value, push into heap and then compare with the parent to see if they need to swap => while loop

class MinHeap {
    constructor () {
        this.heap = [null];
    }

    // adds a value to the heap and puts it in the correct location
    addValue(newValue){
        // push the new value to the heap
        this.heap.push(newValue);
        // set the index to check equal to the length of the heap - 1 (we just pushed it so it's at the end)
        let currentIndex = this.heap.length - 1;
        // while loop to swap values if necessary (if the new value is less than the parent (half the index rounded down)
        while ((this.heap[currentIndex] < this.heap[Math.floor(currentIndex/2)]) && (this.heap[Math.floor(currentIndex/2)]>0)){
            // swap the two values at the indices we are comparing
            [this.heap[currentIndex], this.heap[Math.floor(currentIndex/2)]] = [this.heap[Math.floor(currentIndex/2)], this.heap[currentIndex]];
            // change the current index of our new value to the one we swapped it with
            currentIndex = Math.floor(currentIndex/2);
        }
        return this;
    }

    // removes first number (index 1) and restructures tree to make sure everything still works
    removeValue(){
        // swap the last element in the heap with the first
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];

        // remove teh last element
        this.heap.pop();

        // estavblish starting index to check
        let currentIndex = 1;
        // while loop to run if the current index is greater than the left or right child
        while(((this.heap[currentIndex] > this.heap[2 * currentIndex]) || (this.heap[currentIndex] > this.heap[2 * currentIndex + 1]))){
            // check if the left child or right child is smaller, swap with the smaller child (smaller number has to be above larger number)
            if(this.heap[2 * currentIndex] < this.heap[2 * currentIndex + 1]){
                // if left child is smaller, swap with left
                [this.heap[currentIndex], this.heap[2 * currentIndex]] = [this.heap[2 * currentIndex], this.heap[currentIndex]];
                // update the current index to check if we need to keep moving it
                currentIndex = 2 * currentIndex;
            }
            // else the right child will be smaller, swap with right, update currentIndex
            else {
                [this.heap[currentIndex], this.heap[2 * currentIndex + 1]] = [this.heap[2 * currentIndex + 1], this.heap[currentIndex]];
                currentIndex = 2 * currentIndex + 1;
            }
        }
        return this;
    }

}

let testHeap1 = new MinHeap();
testHeap1.addValue(4).addValue(10).addValue(8).addValue(13).addValue(17).addValue(9).addValue(5).addValue(6).addValue(8);
console.log(testHeap1);
testHeap1.removeValue();
console.log(testHeap1);

