

function ajax_get_json() {
    let request = new XMLHttpRequest();
    request.open("GET", "FinKinoSchedule.json", true);
    request.timeout = 4000;
    request.setRequestHeader("Content-type", "application/json", true);
    request.onreadystatechange = function () {
        if(request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
                //console.log(data.Schedule.Shows.Show[0].Theatre);
                
        }
    }

    request.send(null);
}

 //============================================================================
                

 const showS6 = (data) => {
    const showDiv = document.getElementById("#showData");

    const spanPlace = document.createElement("span");
    const spanTEXTplace = document.createElement("span");
    spanTEXTplace.textContent = "Location:";
    spanPlace.id = "place";
    spanPlace.textContent = data.Schedule.Shows.Show[0].Theatre;
    showDiv.appendChild(spanPlace);
    showDiv.appendChild(spanTEXTplace);

    const spanSali = document.createElement("span");
    const spanTEXTsali = document.createElement("span");
    spanTEXTsali.textContent = "Sali";   
    spanSali.id = "sali";
    spanSali.textContent = data.Schedule.Shows.Show[0].TheatreAuditorium;
    showDiv.appendChild(spanSali);
    showDiv.appendChild(spanTEXTsali);

    const spanTitle = document.createElement("span");
    const spanTEXTtitle = document.createElement("span");
    spanTEXTtitle.textContent = "Title:";
    spanTitle.id = "title";
    spanTitle.textContent = data.Schedule.Shows.Show[0].Title;
    showDiv.appendChild(spanTitle);
    showDiv.appendChild(spanTEXTtitle);

    const spanLanguage = document.createElement("span");
    const spanTEXTlanguage = document.createElement("span");
    spanTEXTlanguage.textContent = "Language:";
    spanLanguage.id = "language";
    spanLanguage.textContent = data.Schedule.Shows.Show[0].PresentationMethodAndLanguage;
    showDiv.appendChild(spanLanguage);
    showDiv.appendChild(spanTEXTlanguage);

    const spanPicture = document.createElement("span");
    const spanTEXTpicture = document.createElement("span");
    spanTEXTpicture.textContent = "Picture:";
    spanPicture.id = "picture";
    spanPicture.textContent = data.Schedule.Shows.Show[0].Images.EventSmallImageLandscape;
    showDiv.appendChild(spanPicture);
    showDiv.appendChild(spanTEXTpicture);

    const spanEventURL = document.createElement("span");
    const spanTEXTurl = document.createElement("span");
    spanTEXTurl.textContent = "Event URL:";
    spanEventURL.id = "eventURL"
    spanEventURL.textContent = data.Schedule.Shows.Show[0].RatingImageUrl;
    showDiv.appendChild(spanEventURL);
    showDiv.appendChild(spanTEXTurl);
}


//=============sali 3 =============================================================================
const showS3 = (data) => {
    const showDiv = document.getElementById("#showData");

    const spanPlace = document.createElement("span");
    const spanTEXTplace = document.createElement("span");
    spanTEXTplace.textContent = "Location:";
    spanPlace.id = "place";
    spanPlace.textContent = data.Schedule.Shows.Show[1].Theatre;
    showDiv.appendChild(spanPlace);
    showDiv.appendChild(spanTEXTplace);

    const spanSali = document.createElement("span");
    const spanTEXTsali = document.createElement("span");
    spanTEXTsali.textContent = "Sali";  
    spanSali.id = "sali";
    spanSali.textContent = data.Schedule.Shows.Show[1].TheatreAuditorium;
    showDiv.appendChild(spanSali);
    showDiv.appendChild(spanTEXTsali);

    const spanTitle = document.createElement("span");
    const spanTEXTtitle = document.createElement("span");
    spanTEXTtitle.textContent = "Title:";
    spanTitle.id = "title";
    spanTitle.textContent = data.Schedule.Shows.Show[1].Title;
    showDiv.appendChild(spanTitle);
    showDiv.appendChild(spanTEXTtitle);

    const spanLanguage = document.createElement("span");
    const spanTEXTlanguage = document.createElement("span");
    spanTEXTlanguage.textContent = "Language:";
    spanLanguage.id = "language";
    spanLanguage.textContent = data.Schedule.Shows.Show[1].PresentationMethodAndLanguage;
    showDiv.appendChild(spanLanguage);
    showDiv.appendChild(spanTEXTlanguage);

    const spanPicture = document.createElement("span");
    const spanTEXTpicture = document.createElement("span");
    spanTEXTpicture.textContent = "Picture:";
    spanPicture.id = "picture";
    spanPicture.textContent = data.Schedule.Shows.Show[1].Images.EventSmallImageLandscape;
    showDiv.appendChild(spanPicture);
    showDiv.appendChild(spanTEXTpicture);

    const spanEventURL = document.createElement("span");
    const spanTEXTurl = document.createElement("span");
    spanTEXTurl.textContent = "Event URL:";
    spanEventURL.id = "eventURL"
    spanEventURL.textContent = data.Schedule.Shows.Show[1].RatingImageUrl;
    showDiv.appendChild(spanEventURL);
    showDiv.appendChild(spanTEXTurl);
}

//===================iso omena  NO sali ====================================================================

const showS = (data) => {
    const showDiv = document.getElementById("#showData");

    const spanPlace = document.createElement("span");
    const spanTEXTplace = document.createElement("span");
    spanTEXTplace.textContent = "Location:";
    spanPlace.id = "place";
    spanPlace.textContent = data.Schedule.Shows.Show[2].Theatre;
    showDiv.appendChild(spanPlace);
    showDiv.appendChild(spanTEXTplace);

    const spanSali = document.createElement("span");
    const spanTEXTsali = document.createElement("span");
    spanTEXTsali.textContent = "Sali";  
    spanSali.id = "sali";
    spanSali.textContent = data.Schedule.Shows.Show[2].TheatreAuditorium;
    showDiv.appendChild(spanSali);
    showDiv.appendChild(spanTEXTsali);

    const spanTitle = document.createElement("span");
    const spanTEXTtitle = document.createElement("span");
    spanTEXTtitle.textContent = "Title:";
    spanTitle.id = "title";
    spanTitle.textContent = data.Schedule.Shows.Show[2].Title;
    showDiv.appendChild(spanTitle);
    showDiv.appendChild(spanTEXTtitle);

    const spanLanguage = document.createElement("span");
    const spanTEXTlanguage = document.createElement("span");
    spanTEXTlanguage.textContent = "Language:";
    spanLanguage.id = "language";
    spanLanguage.textContent = data.Schedule.Shows.Show[2].PresentationMethodAndLanguage;
    showDiv.appendChild(spanLanguage);
    showDiv.appendChild(spanTEXTlanguage);

    const spanPicture = document.createElement("span");
    const spanTEXTpicture = document.createElement("span");
    spanTEXTpicture.textContent = "Picture:";
    spanPicture.id = "picture";
    spanPicture.textContent = data.Schedule.Shows.Show[2].Images.EventSmallImageLandscape;
    showDiv.appendChild(spanPicture);
    showDiv.appendChild(spanTEXTpicture);

    const spanEventURL = document.createElement("span");
    const spanTEXTurl = document.createElement("span");
    spanTEXTurl.textContent = "Event URL:";
    spanEventURL.id = "eventURL"
    spanEventURL.textContent = data.Schedule.Shows.Show[2].RatingImageUrl;
    showDiv.appendChild(spanEventURL);
    showDiv.appendChild(spanTEXTurl);
}

//===================== Sali 9 ==============================================================

const show9 = (data) => {
    const showDiv = document.getElementById("#showData");

    const spanPlace = document.createElement("span");
    const spanTEXTplace = document.createElement("span");
    spanTEXTplace.textContent = "Location:";
    spanPlace.id = "place";
    spanPlace.textContent = data.Schedule.Shows.Show[3].Theatre;

    const spanSali = document.createElement("span");
    const spanTEXTsali = document.createElement("span");
    spanTEXTsali.textContent = "Sali";  
    spanSali.id = "sali";
    spanSali.textContent = data.Schedule.Shows.Show[3].TheatreAuditorium;
    showDiv.appendChild(spanSali);
    showDiv.appendChild(spanTEXTsali);

    const spanTitle = document.createElement("span");
    const spanTEXTtitle = document.createElement("span");
    spanTEXTtitle.textContent = "Title:";
    spanTitle.id = "title";
    spanTitle.textContent = data.Schedule.Shows.Show[3].Title;
    showDiv.appendChild(spanTitle);
    showDiv.appendChild(spanTEXTtitle);

    const spanLanguage = document.createElement("span");
    const spanTEXTlanguage = document.createElement("span");
    spanTEXTlanguage.textContent = "Language:";
    spanLanguage.id = "language";
    spanLanguage.textContent = data.Schedule.Shows.Show[3].PresentationMethodAndLanguage;
    showDiv.appendChild(spanLanguage);
    showDiv.appendChild(spanTEXTlanguage);

    const spanPicture = document.createElement("span");
    const spanTEXTpicture = document.createElement("span");
    spanTEXTpicture.textContent = "Picture:";
    spanPicture.id = "picture";
    spanPicture.textContent = data.Schedule.Shows.Show[3].Images.EventSmallImageLandscape;
    showDiv.appendChild(spanPicture);
    showDiv.appendChild(spanTEXTpicture);

    const spanEventURL = document.createElement("span");
    const spanTEXTurl = document.createElement("span");
    spanTEXTurl.textContent = "Event URL:";
    spanEventURL.id = "eventURL"
    spanEventURL.textContent = data.Schedule.Shows.Show[3].RatingImageUrl;
    showDiv.appendChild(spanEventURL);
    showDiv.appendChild(spanTEXTurl);
}


// =========select menu control=========================================
const searchData = (data, showS6, showS3, showS, show9) => {
    const selectID = document.querySelector("#location");

    if (selectID.value === "1") {
        showS6(data);
    } else if (selectID.value === "2") {
        showS3(data);
    } else if (selectID.value === "3") {
        showS(data);
    } else if (selectID.value === "4") {
        show9(data);
}
}
//===================================================================================

const setUPEventListener = (ajax_get_json) => {
    const searchBTN = document.querySelector("#search");
    searchBTN.addEventListener("click", ajax_get_json);
}

setUPEventListener(() => ajax_get_json(searchData(data, showS6(data), showS3(data), showS(data), show9(data))));
    

//const url = "http://www.finnkino.fi/xml/Schedule/";
//request.setRequestHeader("Content-Type", "text/xml");
//request.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,**Authorization**');

/*
let getXMLFile = function(path, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status ===
            200) {
            callback(request.responseXML);
        }
    };
    request.send(null);
};

//when the xml is ready to load

getXMLFile(url, function(xml) {
    console.log(xml);
});

*/
//===========================================================