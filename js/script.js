//section2

$(document).ready(function(){
    $('#bars').click(function(){
        $('nav').toggleClass('open');
        $('.opacity').fadeToggle(700);
        $('html').css("overflow", "hidden");
    });
    $('.opacity').click(function(){
        $('nav').removeClass('open');
        $('.opacity').fadeOut(700);
        $('html').css("overflow-y", "auto");
    });

    window.addEventListener('scroll', $('.counter').counterUp({
        delay: 30,
        time: 1500
    }));
});
    ///////

// let counters = document.querySelectorAll('.counter');
// const speed = 100;

// counters.forEach(counter=>{
//     const updateCount =() =>{
//         const target = +counter.getAttribute('data-target'),
//             count = +counter.innerText,
//             inc = target/speed;
    
//         if(count < target){
//             counter.innerText = count + inc;
//             setTimeout(updateCount, 1);
//         }
//         else{
//             count.innerText = target;
//         }
//     }
//     updateCount();
// });

//end section2
