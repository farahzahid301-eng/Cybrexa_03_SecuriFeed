const urlInput = document.getElementById("urlInput");
const analyzeBtn = document.getElementById("analyzeBtn");

const riskCircle = document.getElementById("riskCircle");
const riskLevel = document.getElementById("riskLevel");
const checks = document.getElementById("checks");


// Domain Elements
const protocol = document.getElementById("protocol");
const subdomain = document.getElementById("subdomain");
const domain = document.getElementById("domain");
const path = document.getElementById("path");


// SSL Elements
const sslStatus = document.getElementById("sslStatus");
const sslMessage = document.getElementById("sslMessage");


analyzeBtn.addEventListener("click", analyzeURL);



function analyzeURL(){


let url = urlInput.value.trim().toLowerCase();


if(url === ""){

    alert("Please enter a URL");
    return;

}


// Add protocol

if(!url.startsWith("http")){

    url = "http://" + url;

}



let score = 0;


let https = "✅ Yes";
let ip = "❌ No";
let typo = "❌ No";
let tld = "❌ No";
let special = "❌ No";
let longURL = "❌ No";





// HTTPS CHECK

if(!url.startsWith("https://")){

    score +=20;

    https="❌ HTTP";

}





// IP URL CHECK

const ipRegex = /(\d{1,3}\.){3}\d{1,3}/;


if(ipRegex.test(url)){

    score +=25;

    ip="✅ Detected";

}






// @ CHARACTER

if(url.includes("@")){

    score +=15;

    special="✅ Contains @";

}





// Hyphen

if(url.includes("-")){

    score +=8;

}





// Long URL

if(url.length > 60){

    score +=10;

    longURL="✅ Long URL";

}





// Suspicious TLD

const tldRegex =
/\.(xyz|top|click|work|zip|gq|tk)/;


if(tldRegex.test(url)){

    score +=20;

    tld="✅ Suspicious";

}





// Numbers

if(/\d/.test(url)){

    score +=5;

}







// Fake Brands

const fakeBrands=[

"paypa1",
"g00gle",
"gooogle",
"arnazon",
"faceb00k",
"micr0soft",
"amaz0n",
"app1e",
"netfl1x"

];



fakeBrands.forEach(brand=>{


if(url.includes(brand)){


    score +=25;

    typo="✅ Possible";


}


});







// Suspicious Words

const suspiciousWords=[

"login",
"verify",
"bank",
"secure",
"update",
"signin",
"wallet",
"gift",
"bonus",
"confirm"

];



suspiciousWords.forEach(word=>{


if(url.includes(word)){


    score +=6;


}


});







// Limit Score

if(score > 100){

    score=100;

}







// Risk Display

riskCircle.innerHTML = score;



// Remove old classes

riskCircle.classList.remove(
"greenBorder",
"yellowBorder",
"redBorder"
);


riskLevel.classList.remove(
"safe",
"medium",
"danger"
);





if(score <=30){


    riskLevel.innerHTML="🟢 LOW RISK";

    riskCircle.classList.add("greenBorder");

    riskLevel.classList.add("safe");


}



else if(score <=70){


    riskLevel.innerHTML="🟡 MEDIUM RISK";

    riskCircle.classList.add("yellowBorder");

    riskLevel.classList.add("medium");


}



else{


    riskLevel.innerHTML="🔴 HIGH RISK";

    riskCircle.classList.add("redBorder");

    riskLevel.classList.add("danger");


}







// DOMAIN PARSER

try{


let parsed = new URL(url);



// Protocol

protocol.innerHTML =
parsed.protocol.replace(":","");



// Domain

domain.innerHTML =
parsed.hostname;



// Path

path.innerHTML =
parsed.pathname || "/";




// Subdomain

let parts = parsed.hostname.split(".");


if(parts.length > 2){

    subdomain.innerHTML = parts[0];

}

else{

    subdomain.innerHTML="—";

}






// SSL

if(parsed.protocol === "https:"){


sslStatus.innerHTML =
"✅ HTTPS — Secure Connection";


sslMessage.innerHTML =
"Connection is encrypted using HTTPS.";


}

else{


sslStatus.innerHTML =
"⚠ HTTP — No Encryption";


sslMessage.innerHTML =
"No encryption. Any data entered on this page is transmitted in plain text.";


}



}

catch(error){

console.log(error);

}







// Result Checks

checks.innerHTML = `


<p><strong>HTTPS:</strong> ${https}</p>


<p><strong>IP URL:</strong> ${ip}</p>


<p><strong>Typosquatting:</strong> ${typo}</p>


<p><strong>Suspicious TLD:</strong> ${tld}</p>


<p><strong>Special Characters:</strong> ${special}</p>


<p><strong>Long URL:</strong> ${longURL}</p>


<p><strong>Risk Score:</strong> ${score}/100</p>


`;



}