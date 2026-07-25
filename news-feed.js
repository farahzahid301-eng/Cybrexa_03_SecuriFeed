const newsContainer = document.getElementById("newsContainer");


const news = [

{
title:"Google Issues New Phishing Warning",
description:"Google warns users about fake Gmail login pages targeting user credentials and personal information.",
date:"2026-07-25",
category:"Phishing"
},

{
title:"Microsoft Fixes Critical Security Vulnerability",
description:"Microsoft released an emergency security patch to protect Windows users from potential attacks.",
date:"2026-07-24",
category:"Security Update"
},

{
title:"Banking Scam Alert",
description:"Cyber criminals are impersonating banks through fake login websites to steal account details.",
date:"2026-07-23",
category:"Online Scam"
},

{
title:"QR Code Phishing Increasing",
description:"Security experts report a rise in malicious QR code attacks used to redirect users to fake websites.",
date:"2026-07-22",
category:"Cyber Threat"
},

{
title:"Fake Social Media Login Pages Detected",
description:"Attackers are creating cloned social media pages to collect usernames and passwords.",
date:"2026-07-21",
category:"Credential Theft"
}

];



function loadNews(){


newsContainer.innerHTML="";


news.forEach(item=>{


const card=document.createElement("div");


card.className="news-card";


card.innerHTML=`

<h3>${item.title}</h3>

<p>${item.description}</p>

<strong>
Category: ${item.category}
</strong>

<br><br>

<small>
${item.date}
</small>

`;


newsContainer.appendChild(card);


});


}



loadNews();