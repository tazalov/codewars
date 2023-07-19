/* 
Function specification
You must create a function which takes three parameters; walking distance home, distance the bus must travel, and the combined distance of walking from the office to the bus stop and from the bus stop to your house. All distances are in kilometres.
So for example, if your home is 5km away by foot, and the bus that takes you home travels 6km, but you have to walk 500 metres to the bus stop to catch it and 500 metres to your house once the bus arrives (i.e. 1km in total), which is faster, walking or taking the bus?

Example - Which of these is faster?:

Start---Walk 5km--->End
Start---Walk 500m---Bus 6km---Walk 500m--->End
Walking speed and bus driving speed have been given to you as two pre-loaded variables ($global_variables in Ruby).

walk = 5 (km/hr) bus = 8 (km/hr)

The function must return the fastest option, either "Walk" or "Bus". If the walk is going to be over 2 hours, the function should recommend that you take the bus. If the walk is going to be under 10 minutes, the function should recommend that you walk. If both options are going to take the same amount of time, the function should recommend that you walk
*/

function calculator(distance, busDrive, busWalk) {
  const timeOwn = distance / 5;
  const timeWalkToBus = busWalk / 5;
  const timeWithBus = busDrive / 8 + timeWalkToBus;
  if (timeOwn > 2) return 'Bus';
  if (timeOwn < 0.17) return 'Walk';
  return timeOwn <= timeWithBus ? 'Walk' : 'Bus';
}
