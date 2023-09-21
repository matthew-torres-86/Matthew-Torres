const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        } 
        // else{
        //     entry.target.classList.remove('animate');
        // }
    })
})

const hiddenElts = document.querySelectorAll('.hide');
hiddenElts.forEach((el) => observer.observe(el));