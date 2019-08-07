var rover = {
    direction: 'N',
    positionX: 0,
    positionY: 0,
    travelLog: [0,0],
};

let grid = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, "O", null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, "O", null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "O", null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
  ]
  
  rover.gridPosition = grid[rover.positionY][rover.positionX];


function turnLeft(rover) {
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

function turnRight(rover) {
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
    if(((rover.positionX < 0)|| (rover.positionX > 9)) || (rover.positionY < 0) || (rover.positionY > 9))
    { console.log("Rover is out of the grid!");
  }
  else {
    rover.travelLog.push(rover.positionX);
    rover.travelLog.push(rover.positionY);

    switch (true) {
        case (rover.direction === "N"): rover.positionY -= 1
            break;
        case (rover.direction === "E"): rover.positionX += 1
            break;
        case (rover.direction === "S"): rover.positionY += 1

            break;
        case (rover.direction === "W"): rover.directionY -= 1
            break;
    }
    console.log(rover)
}

moveForward(rover);
moveForward(rover);
moveForward(rover);

rover.gridPosition = grid[rover.positionY][rover.positionX]
console.log(rover.travelLog);
}

function listCommand(command) {

    for (let i = 0; i < command.length; i++) {
        if (command[i] === "l") {
            turnLeft(rover);
        }
        else if (command[i] === "r") {
            turnRight(rover);
        }
        else if (command[i] === "f") {
            moveForward(rover);
        }
        else {
            console.log("non");
        }
    }
}

listCommand("rffrfflfrff");