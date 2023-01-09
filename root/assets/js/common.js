function addClass(A){document.documentElement.classList.add(A)}var avif=new Image;function check_webp_feature(a){var e=new Image;e.onload=function(){var A=0<e.width&&0<e.height;a(A)},e.onerror=function(){a(!1)},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}avif.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",avif.onload=function(){addClass("avif")},avif.onerror=function(){check_webp_feature(function(A){return addClass(A?"webp":"fallback")})};
// check support AVIF support detection script

// var navicon = document.getElementById('navicon');
// var navEl = document.getElementById('siteNav');
//  function toggleMenu(){
//    navEl.classList.toggle('is_active');
//    navicon.classList.toggle('is_active');
// };
// navicon.addEventListener("click", toggleMenu, false);
