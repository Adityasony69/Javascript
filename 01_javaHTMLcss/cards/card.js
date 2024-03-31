function createCard(title,cName ,genre , logic , number,duration ,thumbnail)
{
    let html =`  <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${genre} . ${number} Seasons</p>
        <p>${logic}</p>
        <p1>${logic}</p>
    </div>
</div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+ html
}

//createCard("Jojo's Bizarre Advanture","Anime","adventure",`JoJo's Bizarre Adventure" is a long-running manga series written and illustrated by Hirohiko Araki. It was first serialized in Weekly Shonen Jump in 1987 and has since become one of the most influential and well-known manga series in the world. The series is divided into multiple parts, each following a different member of the Joestar family and their descendants as they encounter various supernatural phenomena and villains.`,"The series is characterized by its unique art style, intricate plots, and a wide array of characters with unique abilities called Stands,which are manifestations of a character's spirit and can range from simple to incredibly complex powers.","4","24:06","Capture.PNG")

