const size = 100,
  xPosition = -100,
  yPosition = -100,
  zPosition = -500; // Center position of the cube

var map = [
    [0, 0, 1500, 0, 180, 0, 3000, 600, "url('textures/bstone3.png')", "ff0000"],
    [0, 0, -1500, 0, 0, 0, 3000, 600, "url('textures/bstone3.png')", "ff0000"],
    [1500, 0, 0, 0, -90, 0, 3000, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1500, 0, 0, 0, 90, 0, 3000, 600, "url('textures/bstone3.png')", "ff0000"],
    [0, 100, 0, 90, 0, 0, 3000, 3000, "url('textures/flat-floor5_3.png')", "00ff00"], //floor
//hw1
    [800, 0, 1295, 0, 180, 0, 1400, 600, "url('textures/bstone3.png')", "ff0000"],
    [800, 0, 1305, 0, 180, 0, 1400, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 1300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw2
    [300, 0, 1095, 0, 180, 0, 1200, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, 1105, 0, 180, 0, 1200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-300, 0, 1100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [900, 0, 1100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw3
    [300, 0, 695, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, 705, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 700, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [500, 0, 700, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw4
    [-600, 0, 695, 0, 180, 0, 1000, 600, "url('textures/bstone3.png')", "ff0000"],
    [-600, 0, 705, 0, 180, 0, 1000, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 700, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1100, 0, 700, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw5
    [-700, 0, 1295, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-700, 0, 1305, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-500, 0, 1300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-900, 0, 1300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw6
    [-900, 0, 1095, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-900, 0, 1105, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-700, 0, 1100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1100, 0, 1100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw7
    [-1000, 0, 895, 0, 180, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1000, 0, 905, 0, 180, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-700, 0, 900, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 900, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw8
    [-1400, 0, 695, 0, 180, 0, 200, 600, "url('bstone3.png')", "ff0000"],
    [-1400, 0, 705, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 700, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw9
    [-1000, 0, 495, 0, 180, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1000, 0, 505, 0, 180, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-700, 0, 500, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 500, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw10
    [-400, 0, 895, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-400, 0, 905, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-500, 0, 900, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw11
    [1000, 0, 495, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [1000, 0, 505, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, 500, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw12
    [1200, 0, 295, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [1200, 0, 305, 0, 180, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [1300, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw13
    [1100, 0, 95, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, 105, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [1300, 0, 100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [1000, 0, 100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw14
    [1100, 0, -95, 0, 180, 0, 800, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, -105, 0, 180, 0, 800, 600, "url('textures/bstone3.png')", "ff0000"],
    [700, 0, -100, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw15
    [500, 0, 295, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [500, 0, 305, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [700, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw16
    [-100, 0, 295, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 305, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-300, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw17
    [-100, 0, 295, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 305, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 300, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//hw18
    [500, 0, -495, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [500, 0, -505, 0, 180, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, -500, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [700, 0, -500, 0, 90, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],


//ww1
    [1295, 0, 800, 0, 90, 0, 1000, 600, "url('textures/bstone3.png')", "ff0000"],
    [1305, 0, 800, 0, 90, 0, 1000, 600, "url('textures/bstone3.png')", "ff0000"],
    [1300, 0, 300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww2
    [1095, 0, 900, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [1105, 0, 900, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, 700, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [1100, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww3
    [695, 0, 800, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [705, 0, 800, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [700, 0, 500, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [700, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww4
    [495, 0, 700, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [505, 0, 700, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [500, 0, 500, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [500, 0, 900, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww5
    [895, 0, 500, 0, 90, 0, 800, 600, "url('textures/bstone3.png')", "ff0000"],
    [905, 0, 500, 0, 90, 0, 800, 600, "url('textures/bstone3.png')", "ff0000"],
    [900, 0, 100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [900, 0, 900, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww6
    [95, 0, 900, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [105, 0, 900, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 700, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [100, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww7
    [295, 0, 1000, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [305, 0, 1000, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, 900, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [300, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww8
    [-95, 0, 1400, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-105, 0, 1400, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 1300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww9
    [-95, 0, 600, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-105, 0, 600, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 900, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-100, 0, 300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww10
    [-295, 0, 1200, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-305, 0, 1200, 0, 90, 0, 600, 600, "url('textures/bstone3.png')", "ff0000"],
    [-300, 0, 900, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww11
    [-495, 0, 1200, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-505, 0, 1200, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-500, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-500, 0, 1300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww12
    [-1095, 0, 1400, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1105, 0, 1400, 0, 90, 0, 200, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1100, 0, 1300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww13
    [-1295, 0, 1300, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1305, 0, 1300, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 1100, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
//ww14
    [-1295, 0, 500, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1305, 0, 500, 0, 90, 0, 400, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 300, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],
    [-1300, 0, 700, 0, 180, 0, 10, 600, "url('textures/bstone3.png')", "ff0000"],




    [830, 100, 350, 90, 0, 0, 264, 360, "url('textures/Teleport.gif')", "00ff00"], //hole
  
    
  ];

  function CreateNewWorld(myMap) {
    for (let i = 0; i < myMap.length; i++) {
      let newElement = document.createElement("div");
      newElement.className = "square";
      newElement.id = "square" + i;
      newElement.style.width = myMap[i][6] + "px";
      newElement.style.height = myMap[i][7] + "px";
  
      if (myMap[i][8] == null) {
        newElement.style.background = myMap[i][9];
      } else {
        newElement.style.backgroundImage = myMap[i][8];
      }
  
      newElement.style.transform =
        "translate3d(" +
        (600 - myMap[i][6] / 2 + myMap[i][0]) +
        "px," +
        (400 - myMap[i][7] / 2 + myMap[i][1]) +
        "px," +
        myMap[i][2] +
        "px)" +
        "rotateX(" +
        myMap[i][3] +
        "deg)" +
        "rotateY(" +
        myMap[i][4] +
        "deg)" +
        "rotateZ(" +
        myMap[i][5] +
        "deg)";
  
      world.append(newElement);
    }
  }