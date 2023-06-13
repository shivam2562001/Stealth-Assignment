
export default function debounce(fn,delay) {
    let timer;
    return function(){
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
          fn.apply(context,arguments);
        },delay)
    }
}