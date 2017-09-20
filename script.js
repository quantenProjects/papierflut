function startCalc() {

    var rawPageNumbers = parseInt(document.getElementById("pagesInput").value);
    var studentNumbers = parseInt(document.getElementById("studentsInput").value);

    if (!(rawPageNumbers>0) && !(studentNumbers)) {
        alert("Heute keine Zettel bekommen? Unmöglich!");
        return;
    }

    document.getElementById("inputDIV").classList.remove("visible");
    document.getElementById("inputDIV").classList.add("hidden");

    setTimeout(startLoading,1000);

}

function startLoading() {
    document.getElementById("loadingDIV").classList.remove("hidden");
    document.getElementById("loadingDIV").classList.add("visible");
    setTimeout(endLoading,1000);
}

function endLoading() {
    document.getElementById("loadingDIV").classList.remove("visible");
    document.getElementById("loadingDIV").classList.add("hidden");
    setTimeout(endCalc,1000);

}

function endCalc() {

    var rawPageNumbers = parseInt(document.getElementById("pagesInput").value);
    var studentNumbers = parseInt(document.getElementById("studentsInput").value);
    var pageNumbers = studentNumbers*rawPageNumbers;
    var textBegin = textStorage["beginText"]["begin"] + pageNumbers + textStorage["beginText"]["end"];
    document.getElementById("textBegin").innerHTML=textBegin;

    var wood = pageNumbers*0.015;
    var energy = pageNumbers*0.0536;
    var water = pageNumbers*0.26;

    document.getElementById("wood").innerHTML=searchAndConcateString(textStorage["wood"],wood);
    document.getElementById("energy").innerHTML=searchAndConcateString(textStorage["energy"],energy);
    document.getElementById("water").innerHTML=searchAndConcateString(textStorage["water"],water);

    document.getElementById("resultDIV").classList.remove("hidden");
    document.getElementById("resultDIV").classList.add("visible");

}

function searchAndConcateString(textArray,val) {
    var filteredArray = textArray.filter(matchesRequirements,val)
    var item = filteredArray[Math.floor(Math.random()*filteredArray.length)];
    return item["begin"] + (item["factor"]*val).toFixed(item["float"]) + item["end"];


}

function matchesRequirements(element,index,array) {
    return (element["min"] < this) && (element["max"]==-1 || element["max"] > this)
}