window.onload = () => {

    let affich = document.getElementById("textDev")

    const req = new XMLHttpRequest();
    req.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json/', false);
    req.send();
    
    
    if (req.status === 200) {
        // console.log(req);
        let test = JSON.parse(req.response)
        
        let mouseOverTab =[]
        let allTextTab = []
        let containerTab = []
        
        for (let i in test){

            
            
            mouseOverTab[i] = document.createElement('div');
            mouseOverTab[i].id = "mouseOver"+[i]
            mouseOverTab[i].className = "mouseOver"
            mouseOverTab[i].href = test[i].wiki
            document.getElementsByTagName('body')[0].appendChild(mouseOverTab[i]); 
            
            allTextTab[i] = document.createElement('div');
            allTextTab[i].id = "allText"+[i]
            // console.log(allText)
            allTextTab[i].className = "allText"
            // console.log(allText)
            document.getElementsByTagName('body')[0].appendChild(allTextTab[i]);
            
            
            containerTab[i] = document.createElement('div');
            containerTab[i].className = "container"/* +[i] */
            containerTab[i].id = "container"+[i]
            document.getElementsByTagName('body')[0].appendChild(containerTab[i]);
            containerTab[i].style.backgroundImage =  "url(' " + test[i].image + "')";
            
            
            
            var divName = document.createElement('a');
            divName.id = "divName"+[i]
            divName.className = "divName"
            divName.innerText = test[i].profile.firstname + " " + test[i].profile.lastname
            // divName.href = test[i].wiki
            allTextTab[i].appendChild(divName);
            // console.log(divName)
            
            var divText = document.createElement('div');
            divText.className = "divText"
            divText.id = "divText" + [i]
            divText.innerText = test[i].history
            allTextTab[i].appendChild(divText);
            
            mouseOverTab[i].addEventListener("mouseenter", function(e){
                allTextTab[i].style.opacity = 1;                
                containerTab[i].style.opacity = 0.15;
            })
            mouseOverTab[i].addEventListener("mouseleave", function(e){
                allTextTab[i].style.opacity = ""; 
                containerTab[i].style.opacity = "";
            })
            
        }
    } else {
        // console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }

}