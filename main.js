     canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");

     background_image = "CAR_RACING.jpg";

     car1_width = 120;
     car1_height = 70;
     car1_x = 10;
     car1_y = 10;
     car1_image = "CAR_1.png";

     car2_width = 120;
     car2_height = 70;
     car2_x = 10;
     car2_y = 10;
     car2_image = "CAR_2.jpg";

     function RACE() {
         background_imgTag = new Image();
         background_imgTag.onload = uploadBackground;
         background_imgTag.src = background_image;

         car1_imgTag = new Image();
         car1_imgTag.onload = uploadCar1;
         car1_imgTag.src = car1_image;

         car2_imgTag = new Image();
         car2_imgTag.onload = uploadCar2;
         car2_imgTag.src = car2_image;

         function uploadBackground() {
             ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
         }

         function uploadCar1() {
             ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
         }

         function uploadCar2(){
             ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
         }

         window.addEventListener("keydown", my_keydown);

         function my_keydown(e) {
             keyPress = e.keyCode;
             console.log(keyPress);
             if (keyPress == '38') {
                 car1_up;
                 console.log("up");
             }
             if (keyPress == '40') {
                 car1_down;
                 console.log("down");
             }
             if (keyPress == '37') {
                 car1_left;
                 console.log("left");
             }
             if (keyPress == '39') {
                 car1_right;
                 console.log("right");
             }
             if (keyPress == '83') {
                 car2_down;
                 console.log("s is clicked");
             }
             if (keyPress == '87') {
                 car2_up;
                 console.log("w is pressed");
             }
             if (keyPress == '68') {
                 car2_right;
                 console.log("d is pressed");
             }
             if (keyPress == '65') {
                 car2_left;
                 console.log("a is pressed");
             }
         }
     }

     function car1_up() {
         if (car1_y >= 0) {
             car1_y = car1_y - 10;
             console.log("When up arrow is pressed x = " + car1_x + "/ y =" + car1_y);
             uploadBackground();
             uploadCar1();
         }
     }
     function car1_down() {
         if (car1_y <= 500) {
             car1_y = car1_y + 10;
             console.log("When up arrow is pressed x = " + car1_x + "/ y =" + car1_y);
             uploadBackground();
             uploadCar1();
         }
     }



     function car1_left() {
         if (car1_x >= 0) {
             car1_x = car1_x - 10;
             console.log("When up arrow is pressed x = " + car1_x + "/ y =" + car1_y);
             uploadBackground();
             uploadCar1();
         }
     }

     function car1_right() {
         if (car1_x <= 700) {
             car1_x = car_x + 10;
             console.log("When up arrow is pressed x = " + car1_x + "/ y =" + car1_y);
             uploadBackground();
             uploadCar1();
         }

     }
     function car2_up() {
        if (car2_y >= 0) {
            car2_y = car2_y - 10;
            console.log("When up arrow is pressed x = " + car2_x + "/ y =" + car2_y);
            uploadBackground();
            uploadCar2();
        }
    }

    function car2_down() {
        if (car2_y <= 500) {
            car2_y = car2_y + 10;
            console.log("When up arrow is pressed x = " + car2_x + "/ y =" + car2_y);
            uploadBackground();
            uploadCar2();
        }
    }



    function car2_left() {
        if (car2_x >= 0) {
            car2_x = car2_x - 10;
            console.log("When up arrow is pressed x = " + car2_x + "/ y =" + car2_y);
            uploadBackground();
            uploadCar2();
        }
    }

    function car2_right() {
        if (car2_x <= 700) {
            car2_x = car2_x + 10;
            console.log("When up arrow is pressed x = " + car2_x + "/ y =" + car2_y);
            uploadBackground();
            uploadCar2();
        }

    }