
const mouseFollower = document.getElementById(`mouse_follower`);
const mfDec = document.getElementById('mf_dec');
const body = document.getElementById('body');
const captionCon = document.getElementById('caption_container');

const page1 = document.getElementById('page1')

mfMove = (e, type) => {
    cY = e.clientY;
    cX = e.clientX;

    mfY = cY - mouseFollower.offsetHeight/2;
    mfX = cX - mouseFollower.offsetWidth/2;
    mfDY = cY - mfDec.offsetHeight/2;
    mfDX = cX - mfDec.offsetWidth/2;


    mouseFollower.style.transform = `translate(${mfX}px, ${mfY}px)`;
    mfDec.style.transform = `translate(${mfDX}px, ${mfDY}px)`;
}

checkPage = () =>{
    sY = this.window.scrollY;
    winH = window.innerHeight;
    scrollProgression = sY/winH * 100


    console.log(scrollProgression)

    if(scrollProgression <= 180){
        body.dataset.currentPageCol = `white`;
    }
    if(scrollProgression >= 180){
        body.dataset.currentPageCol = `black`;
    }

    if(page1){
        if(scrollProgression <= 250){
            page1.dataset.pageShown = 1;
        }
        if(scrollProgression >= 250 && scrollProgression <= 350){
            page1.dataset.pageShown = 2;
        }
        if(scrollProgression >= 350 && scrollProgression <= 450){
            page1.dataset.pageShown = 3;
        }
        if(scrollProgression >= 450){
            page1.dataset.pageShown = 4;
        }
    }
    
}

checkPage()

window.addEventListener('mousemove', function(e){
    mfMove(e)
});


window.addEventListener('scroll', function(){
    sY = window.scrollY
    if(sY > 50){
        body.dataset.pageScrolled = "true"
    } else {
        body.dataset.pageScrolled = "false"
    }
});

const buttons = document.getElementsByClassName('button');


for(btn of buttons){
    btn.addEventListener('mousemove', function(e){
        if(this.dataset.btnHov == 'true'){
            cY = e.clientY;
            cX = e.clientX;

            let rect = this.getBoundingClientRect();

            btnHW = this.offsetWidth/2
            btnHH = this.offsetHeight/2

            btnX = rect.left + btnHW - cX;
            btnY = rect.top + btnHH - cY;

            this.style.transform = `translate(${-btnX*0.2}px, ${-btnY*0.2}px)`;
        }
    });
    btn.addEventListener('mousedown', function(){
        this.style.scale = `0.9`;
    });
    btn.addEventListener('mouseup', function(){
        this.style.scale = `1`;
    });
    btn.addEventListener('mouseenter', function(e){
        this.dataset.btnHov = 'true';
        this.style.transition = ``;
    });
    btn.addEventListener('mouseleave', function(e){
        this.dataset.btnHov = 'false';
        this.style.transform = `translate(0px, 0px)`;
        this.style.transition = `var(--transition-cb-btn)`;
    });
}

const links = document.getElementsByTagName('a');

for(link of links){
    if(!link.className.includes(`button`)){
        link.addEventListener('mouseenter', function(){
            linkClientPos = this.getBoundingClientRect();
            linkW = this.offsetWidth;
            linkH = this.offsetHeight;
            mouseFollower.dataset.mfLinkHov = `true`;
            });
        link.addEventListener('mouseleave', function(e){
            mouseFollower.dataset.mfLinkHov = `false`;
        });
    }
}


const headerVideo = document.getElementById('header_video');
window.addEventListener('scroll', function(e){
    sY = this.window.scrollY;
    winH = window.innerHeight;
    scrollProgression = sY/winH * 100

    // console.log(scrollProgression)

    headerVideo.style.willChange = `transform`;
    this.setTimeout(function(){
        headerVideo.style.willChange = `auto`;
    }, 500);

    // headerVideo.style.transform = `translate(0, ${20 - 20 * scrollProgression/100}vh)`;

    if(scrollProgression <= 98){
        // headerVideo.style.transform = `translate(0,${20 + 80*scrollProgression/100}vh)`;
        
        headerVideo.style.height = `${60 + 60*scrollProgression/100}vh`;
        headerVideo.style.opacity = `${0.5 + 1*scrollProgression/100}`;
    }
    if(scrollProgression >= 101){
        headerVideo.style.transition = `var(--transition-cb)`;
    }
    if(scrollProgression <= 101){
        headerVideo.style.transition = ``;
    }
    if(scrollProgression <= 180){
        body.dataset.currentPageCol = `white`;
    }
    if(scrollProgression >= 180 && scrollProgression <= 570){
        body.dataset.currentPageCol = `black`;
    }
    if(scrollProgression >= 570){
        body.dataset.currentPageCol = `white`;
    }
    if(scrollProgression >= 200 && scrollProgression <= 250){
        page1.dataset.pageShown = 1;
    }
    if(scrollProgression >= 250 && scrollProgression <= 350){
        page1.dataset.pageShown = 2;
    }
    if(scrollProgression >= 350 && scrollProgression <= 450){
        page1.dataset.pageShown = 3;
    }
    if(scrollProgression >= 450 && scrollProgression <= 500){
        page1.dataset.pageShown = 4;
    }
});

window.addEventListener('mousedown', function(e){
    mouseFollower.style.width = `calc(var(--mf-w)/1.5)`;
    mfMove(e)
});
window.addEventListener('mouseup', function(e){
    mouseFollower.style.width = `var(--mf-w)`;
});



aboutPageChange = (index) => {
    page1.dataset.pageShown = index;
}

const projectsWrapper = document.getElementById('projects_imgs_wrapper')
const projectsImgs = document.getElementsByClassName('projects_imgs')

projImgsTotal = projectsImgs.length - 1
projImgsIndex = 0

projectSlideChange = () => {
    if(projImgsIndex != projImgsTotal){
        projImgsIndex++
    } else {
        projImgsIndex = 0
    }
    
    // projectsImgs[projImgsIndex].dataset.projectShown = "true"
    for (let index = 0; index < projectsImgs.length; index++) {
        const element = projectsImgs[index];
        if(index != projImgsIndex){
            projectsImgs[index].dataset.projectShown = "false"  
        } else {
            projectsImgs[index].dataset.projectShown = "true"  
        }
    }
}

setInterval(() => {
    projectSlideChange()
}, 4000);


// body.dataset.pageLoading = "true"
// setTimeout(function(){
//     body.dataset.pageLoading = "false"
// }, 1000)

// const toOtherPage = document.getElementById('toOtherPage')


// for (const link of links) {
//     if(link.dataset.linkToPage !=null && link.dataset.linkToPage.includes(".html")){
//         if(! (window.location.href == link.dataset.linkToPage) ){
//             link.addEventListener('click', function(){
//                 body.dataset.pageLoading = "true"
//                 setTimeout(function(){
//                     window.location.href = link.dataset.linkToPage;
//                 }, 1000)
//             })
//         }
        
//     }
// }

