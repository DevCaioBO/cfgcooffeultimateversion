sunMoon =document.querySelector("#sunMoon");
headerStyles = document.querySelector("#HeaderHomeStyles");
fireToggleMode = document.querySelector("#fireToggleMode")
sunMoonToggleMode = document.querySelector("#sunMoonToggleMode")
p_logo = document.querySelector("#P-CFG-LOGO")
menuIconToggle =document.querySelector("#menuIconToggle");
inputSearchDesktop = document.querySelector("#inputSearchDesktop");
homeBody = document.querySelector("#homeBody")
lisTargetDisplay = document.querySelectorAll("#lisTargetDisplay")
CarShop = document.querySelector("#CarShop")
MainHomeStyles = document.querySelector("#MainHomeStyles")
menuButton =document.querySelector("#menuButton")
rowGroupDivDesktop1 = document.querySelector("#rowGroupDivDesktop1");
rowGroupDivDesktop2 = document.querySelector("#rowGroupDivDesktop2");
columnGroupDivDesktop3 = document.querySelector("#columnGroupDivDesktop3")
window.addEventListener("resize",function () {
    if(window.innerWidth > 800 || window.innerWidth < 280){
        menuSidebarBody.style.display ="none"
    }
})
menuSidebarBody.style.display ="none"
loadingStyles()
if(!(localStorage.getItem("themes") ) || localStorage.getItem("themes") =="HeaderHomeStyles"){
    localStorage.setItem("themes","HeaderColorLight")
    location.reload()
}
// saveLocalStorage(headerStyles.id)
// headerStyles.id ="HeaderColorLight"
sunMoon.addEventListener("click",()=>{ 
    // headerStyles.id ="HeaderColorLight"
    location.reload()
     if (localStorage.getItem("themes") == "HeaderColorNight"){
        headerStyles.id ="HeaderColorLight"
        inputSearchDesktop.style.border ="2px solid #000"
                p_logo.style.color ="#000"
        fireToggleMode.src ="img/fogo.png"
        sunMoonToggleMode.src ="img/sunandmoon1.png"
        menuIconToggle.src = "img/menu.png"
        menuIconToggle.src = "img/homedark.png"
        lisTargetDisplay.forEach(lis => {
            lis.style.color ="000"
        });
        menuSidebarBody.style.backgroundColor ="white"
        saveLocalStorage(headerStyles.id)
        location.reload()
        

        // console.log(headerStyles.id)
        // p_logo.style.color ="#000"
        // fireToggleMode.src ="img/fogo.png"
        // sunMoonToggleMode.src ="img/sunandmoon1.png"
        // menuIconToggle.src = "img/menu.png"
        
    }
    else if(localStorage.getItem("themes") == "HeaderColorLight"){
        headerStyles.id ="HeaderColorNight"
        fireToggleMode.src ="img/fogo (1) 1.png"
        sunMoonToggleMode.src ="img/imagem_2024-09-10_161438709 1.png"
        menuIconToggle.src = "img/imagem_2024-09-10_100941713 1.png"
        p_logo.style.color ="white"
        inputSearchDesktop.style.border ="none"
        lisTargetDisplay.forEach((lis,index) => {
            lis.style.color ="white"
            location.reload()
        });
        menuSidebarBody.style.backgroundColor ="black"
        CarShop.src = "img/shop.png"
        saveLocalStorage(headerStyles.id)
        location.reload()
        // inputSearchDesktop.style.border ="2px solid #000"
        // p_logo.style.color ="#000"
        // fireToggleMode.src ="img/fogo.png"
        // sunMoonToggleMode.src ="img/sunandmoon1.png"
        // menuIconToggle.src = "img/menu.png"
    
            
        

    }
    //  else if(localStorage.getItem("themes") == "HeaderColorNight"){
    //     headerStyles.id = "HeaderHomeStyles"
    //     p_logo.style.color ="#000"
    //     fireToggleMode.src ="img/fogo.png"
    //     sunMoonToggleMode.src ="img/sunandmoon1.png"
    //     menuIconToggle.src = "img/menu.png"
    //     inputSearchDesktop.style.border ="none"
    //     lisTargetDisplay.forEach((lis,index) => {
    //         lis.style.color ="#000"

    //     });
    //     menuSidebarBody.style.backgroundColor ="#831919"
    //     CarShop.src = "img/purchaseCar.png"
        // saveLocalStorage(headerStyles.id)
        // fireToggleMode.src ="img/fogo (1) 1.png"
        // sunMoonToggleMode.src ="img/imagem_2024-09-10_161438709 1.png"
        // menuIconToggle.src = "img/imagem_2024-09-10_100941713 1.png"
    // }

})

function saveLocalStorage(ide) {
    localStorage.setItem("themes",ide)
    
}

function loadingStyles(){
 
     if(localStorage.getItem("themes")== "HeaderColorLight"){

        headerStyles.id ="HeaderColorLight"
        inputSearchDesktop.style.border ="2px solid #000"
                p_logo.style.color ="#000"
        fireToggleMode.src ="img/fogo.png"
        sunMoonToggleMode.src ="img/sunandmoon1.png"
        menuIconToggle.src = "img/menu.png"
        menuIconToggle.src = "img/homedark.png"
        lisTargetDisplay.forEach(lis => {
            lis.style.color ="#000"
        });
        
        // inputSearchDesktop.style.border ="2px solid #000"
        // p_logo.style.color ="#000"
        // fireToggleMode.src ="img/fogo.png"
        // sunMoonToggleMode.src ="img/sunandmoon1.png"
        // menuIconToggle.src = "img/menu.png"
    
            
        

    }
      if(localStorage.getItem("themes") == "HeaderColorNight"){

        headerStyles.id ="HeaderColorNight"

        fireToggleMode.src ="img/fogo (1) 1.png"
        sunMoonToggleMode.src ="img/imagem_2024-09-10_161438709 1.png"
        menuIconToggle.src = "img/imagem_2024-09-10_100941713 1.png"
        p_logo.style.color ="#fff"
        inputSearchDesktop.style.border ="none"
        lisTargetDisplay.forEach((lis,index) => {
            lis.style.color ="white"

        });
        CarShop.src = "img/shop.png"
        
        // fireToggleMode.src ="img/fogo (1) 1.png"
        // sunMoonToggleMode.src ="img/imagem_2024-09-10_161438709 1.png"
        // menuIconToggle.src = "img/imagem_2024-09-10_100941713 1.png"
    }
    // else{
    //     p_logo.style.color ="#000"
    //     fireToggleMode.src ="img/fogo.png"
    //     sunMoonToggleMode.src ="img/sunandmoon1.png"
    //     menuIconToggle.src = "img/menu.png"
    //     inputSearchDesktop.style.border ="none"
    //     lisTargetDisplay.forEach((lis,index) => {
    //         lis.style.color ="#000"

    //     });
    //     CarShop.src = "img/purchaseCar.png"
    // }
}
// menuSidebarBody.style.display ="flex"
menuIconToggle.addEventListener("click",()=>{
    
    if(menuSidebarBody.style.display =="none"){
        menuSidebarBody.style.display ="flex" 
    }
    else{
        menuSidebarBody.style.display ="none"
    }



hrSidebarColor = document.querySelector("#hrSidebarColor")
ulSidebar = document.querySelectorAll("#ulSidebar h3, button")

if (localStorage.getItem("themes") == "HeaderColorLight"){
menuSidebarBody.style.backgroundColor ="white"
menuSidebarBody.style.borderColor ="gray"
hrSidebarColor.style.backgroundColor ="gray"
ulSidebar.forEach((lis,index) => {
    lis.style.color ="black"

});
}
if (localStorage.getItem("themes") == "HeaderColorNight"){
    menuSidebarBody.style.backgroundColor ="black"
    menuSidebarBody.style.borderColor ="white"
    hrSidebarColor.style.backgroundColor ="#a0a0a0"
    ulSidebar.forEach((lis,index) => {
        lis.style.color ="white"

    });
    }
  
})
bodySpanPush = document.querySelector("div span")

bodySpanPush.addEventListener("click",()=>{
    menuSidebarBody.style.display ="flex"
    
    
    hrSidebarColor = document.querySelector("#hrSidebarColor")
    ulSidebar = document.querySelectorAll("#ulSidebar h3, button")
    
    if (localStorage.getItem("themes") == "HeaderColorLight"){
    menuSidebarBody.style.backgroundColor ="#fff"
    menuSidebarBody.style.borderColor ="gray"
    hrSidebarColor.style.backgroundColor ="gray"
    ulSidebar.forEach((lis,index) => {
        lis.style.color ="#000"

    });
    }
    if (localStorage.getItem("themes") == "HeaderColorNight"){
        menuSidebarBody.style.backgroundColor ="#000"
        menuSidebarBody.style.borderColor ="#fff"
        hrSidebarColor.style.backgroundColor ="#a0a0a0"
        ulSidebar.forEach((lis,index) => {
            lis.style.color ="#fff"
    
        });
        }
      
    })