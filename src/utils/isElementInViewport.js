export default function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();
  
    const innerHeight = (window.innerHeight || document.documentElement.clientHeight);
    
    /*
    To work with small sections
    */
    if(rect.top > -50 && rect.top + rect.height > 0 && rect.height <= innerHeight){
      return true;
    /*
    Element is below of viewport
  
    rect.top = 1000
    innerHeight = 1000
    
    Element is outside the viewport
    */
    } else if(rect.top > innerHeight){
        return false;
    /*
    Element is below of viewport
  
    rect.top = 2000
    rect.height = 1000
  
    Element is outside of viewport
    */
    }else if(rect.top >= rect.height
    /*
    Element is upside of viewport
  
    rect.top = -2000
    rect.height = 1500
  
    Element is outside of viewport
    */
    || rect.top + rect.height <= 0
    /*
    Element is upside of viewport
  
    rect.top = -2000
    rect.height = 2500
    innerHeight = 1000
  
    Element is on the viewport but covering less than 50% of page
    */
    || rect.top + rect.height - innerHeight/2 < 0
    ){
        return false;
    /*
    rect.top = -1000
    rect.height = 2000
    innerHeight = 1000
  
    rect.height = 2000
    rect.top = -3000
    } else if(rect.top + innerHeight >= rect.height){
        return false;
    */
    } else {
        /*
        console.log('true')
        console.log(el);
        console.log(rect);
        console.log(window.innerHeight);
        */
        return true;
    }
  }