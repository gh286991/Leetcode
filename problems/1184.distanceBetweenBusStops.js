const input = {
    distance : [7,10,1,12,11,14,5,0],
    start :7,
    end : 2
}

var distanceBetweenBusStops = function(distance, start, destination) {
    
    let startN
    start < destination ? startN = start: startN = destination

    const N = Math.abs(start-destination)

    const clockwise = Array.from(new Array(N), (val, index) => index+startN)

    const distanceClockwise = clockwise.reduce( (acc, curr)=>{
         return acc + distance[curr]
    },0)
    
    const total = distance.reduce( (acc, curr)=>{
        return acc + curr
   },0)

   
   return Math.min(distanceClockwise,total-distanceClockwise)
};

const ans = distanceBetweenBusStops(input.distance , input.start , input.end)
console.log('ans ' , ans)