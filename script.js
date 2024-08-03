var catalog_btn = document.querySelectorAll(".catolog_btn");
const content_canvas = document.getElementById("content_canvas");

const catalog = document.getElementById("catolog");

function print(x){
  console.log(x)
}

// tracking activity for content canvas animation

//tracks the horizontal position of the mouse withen the catalog list - current catalog width is 350 so cheange it if you update css width of the catalog
let tracking_x;
//tracks the verticle position of the mouse
let tracking_y; // this division by window.inner height normilizes all the mouse movments to a range between 0 and 1 making it useful for changing margins
let speed = 100;

function do_mouse_tracking(event) {
  tracking_x = event.screenX / 358;
  tracking_y = 1 - event.screenY / window.innerHeight;

  //clamps the tracking variables so they dont go above 1 or less than 0
  if (tracking_x <= 0) {
    tracking_x = 0;
  }
  if (tracking_x >= 2) {
    tracking_x = 2;
  }

  if (tracking_y <= 0) {
    tracking_y = 0;
  }
  if (tracking_y >= 1) {
    tracking_y = 1;
  }

  //changes the position of the content with css

  content_canvas.style =
    "margin: " + -tracking_y * speed + "px " + tracking_x * speed + "px;";

  //i am using the 0-1 scale from the tracking variables to multiply by 60 the speed which i want the contnet to move
}

function hide_content_canvas() {
  content_canvas.style =
    "opacity : 0; transform: scale(1.2); margin: " +
    -tracking_y * speed +
    "px " +
    tracking_x * speed +
    "px;";
  //changes opacity to zero so we cant see the content canvas while also decreasing the scake
  //the current tracking positions are also applied to the content cavas to aviod giter of reseting back to 0
}

catalog.addEventListener("mouseout", hide_content_canvas);

catalog.addEventListener("mousemove", do_mouse_tracking);

// Getting all the buttons in the catalog list
let catalog_container = document.getElementById("catolog");
let catalog_btn_list = Array.from(catalog_container.children);
catalog_btn_list.forEach(element => {
  element.addEventListener("click", item => {

    event.target.parentNode.parentNode.classList.add("gay");
  });
});


function yo(){
  console.log("catolog_btn_list")

}

/* big comment 

//catalog_btn

function on_catalog_btn_clicked(event) {
  let catalog_btn_element = this;
  let check_box = catalog_btn_element.querySelector(".toggle_btn");

  toggle_catalog_checkbox(check_box);

  console.log(check_box.value);
}

// when catagory_btn is activated
var active_catagory_btn;

function getIndex(element) {
  if (element && element.parentNode) {
    return Array.from(element.parentNode.children).indexOf(element);
  }
  return element.parentNode; //-1; // Element not found or has no parent
}

function toggle_catalog_checkbox(button) {
  if (button.checked == false) {
    button.checked = true;
    button.value = true;

    let catalog_item = button.parentNode.parentNode.parentNode;
    let catalog_children = Array.from(catalog_item.parentNode.children);
    let active_category_index = catalog_children.findIndex(function (child) {
      return child === catalog_item;
    });

    catalog_children.forEach(function (element) {
      if (element != catalog_children[active_category_index]) {
        element.disabled = true;
      }

      if (element == catalog_children[active_category_index]){
        element.classList.add('.hovered');
      }
    });

    console.log(active_category_index);
  } else if (button.checked == true) {
    button.checked = false;
    button.value = false;
    active_catagory_btn = "no active btn";

    let catalog_item = button.parentNode.parentNode.parentNode;
    let catalog_children = Array.from(catalog_item.parentNode.children);
    let active_category_index = catalog_children.findIndex(function (child) {
      return child === catalog_item;
    });

    catalog_children.forEach(function (element) {
      
        element.disabled = false;
      
    });

    console.log(active_catagory_btn);
  }
  /*
  catalog.querySelectorAll(".catolog_btn").forEach(function(catolog_btn){
    if ( catolog_btn != active_catagory_btn)
        console.log("yo")
  })
    */

  /*
}

function catalog_btn_actions(catalog_btn_element) {
  catalog_btn_element.addEventListener("click", on_catalog_btn_clicked);
}
catalog_btn.forEach(catalog_btn_actions);
*/