window.addEventListener("resize", check_screen_size )

var enable_mobile_display = false
function check_screen_size(){
  if (window.innerWidth < 700){
    enable_mobile_display = true
    
  }
  else{
    enable_mobile_display = false
  }
  console.log(enable_mobile_display)
}