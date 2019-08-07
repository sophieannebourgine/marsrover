var rover = {
    direction: 'N',
    positionX: 0,
    positionY: 0,
    travelLog: []
  };
  
  
  function turnLeft(rover){
    switch (rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
    }
}
  
  turnLeft(rover);
  turnLeft(rover);


  console.log(rover);
  
  function turnRight(rover){
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'N';
        break;
   
  }
}

  
  turnRight(rover);
  turnRight(rover);
  

  console.log(rover);

  function moveForward(rover) {
  switch(true) {
      case (rover.direction==="N") :rover.positionY -=1 
        break;
      case (rover.direction==="E") :rover.positionX +=1
        break;
      case (rover.direction==="S"): rover.positionY +=1
     
        break;
      case (rover.direction==="W") :rover.directionY -=1
        break;      
  }
  console.log(rover)
}

moveForward(rover);
moveForward(rover);
