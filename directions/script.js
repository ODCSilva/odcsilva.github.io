/*global alert */
/*jslint browser:true, white: true, debug: true */

function getIconType(step) {
    "use strict";
    
    if (step.travel_mode === "TRANSIT") {
        switch(step.transit_details.line.vehicle.type) {
            case "BUS":
                return "<i class='material-icons icon'>directions_bus</i>";
            case "SUBWAY":
                return "<i class='material-icons icon'>directions_subway</i>";
            case "RAILWAY":
                return "<i class='material-icons icon'>directions_railway</i>";
            case "BOAT":
                return "<i class='material-icons icon'>directions_boat</i>";
            default:
                return "<i class='material-icons icon'>directions_transit</i>";
        }
    }
    else if (step.travel_mode === "WALKING") {
        return "<i class='material-icons icon'>directions_walk</i>";     
    }
}

function getStepInfo(step) {
    
    "use strict";
    var s = "",
        duration = step.duration.value;
    
    if (step.travel_mode === "TRANSIT") {
        
        if (typeof step.transit_details.line.short_name !== 'undefined') {
            s += "<span class='bg-primary bus-route'>" 
            + step.transit_details.line.short_name
            + "</span>";
        }
    }
    
    s += step.html_instructions;
    
    if (Math.floor(step.duration.value) > 0) {
        s += " (about " + step.duration.text + ")";
    }
    
    s += " ~ " + step.distance.text;
    
    return s;
}

function displayDirections(JSONObj) {
    "use strict";
    var resultArea = document.getElementById("results"),
        route = JSONObj.routes[0],
        leg = route.legs[0],
        steps = leg.steps,
        step,
        i,
        htmlString = "";
    
    htmlString += "<div>";
    htmlString += "<ul class='list-group'>";
    htmlString += "<li class='list-group-item'><i class='material-icons icon'>place</i>" + leg.start_address + "</li>";
    
    for (i = 0; i < steps.length; i = i + 1) {
        step = steps[i];
        
        htmlString += "<li class='list-group-item'>" + getIconType(step) 
        + getStepInfo(step) + "</li>";
    }
    
    htmlString += "<li class='list-group-item'><i class='material-icons icon'>place</i>" + leg.end_address + "</li>";
    htmlString += "</ul>";
    htmlString += "</div>";
    
    htmlString += "<div class='margin-top-24px'>";
    htmlString += " <dl class='dl-horizontal'>";
    htmlString += "     <dt>Total Travel Time</dt>";
    htmlString += "     <dd>" + leg.duration.text + "</dd>";
    htmlString += "     <dt>Total Travel Distance</dt>";
    htmlString += "     <dd>" + leg.distance.text + "</dd>";
    htmlString += " </dl>";
    htmlString += "</div>";
    
    resultArea.innerHTML = htmlString;
}

function loadData(response) {
    
    "use strict";
    var JSONText = response.responseText,
        JSONObj;
    
    if (JSONText !== null) {
        JSONObj = JSON.parse(JSONText);
        displayDirections(JSONObj);
    }
}

function showDirections() {
    
    "use strict";
    var results = document.getElementById("results"),
        origin = document.getElementById("origin").value,
        dest = document.getElementById("dest").value,
        time = document.getElementById("arrival").value,
        date = (time) ? new Date(time) : new Date(),
        apiKey = "AIzaSyBfI_SFoa5_M9Qb_7ZaotXzd2JUvDSWbNM",
        restCall = "https://maps.googleapis.com/maps/api/directions/json?origin=" 
        + encodeURI(origin) + 
        "&destination=" 
        + encodeURI(dest) + 
        "&arrival_time="
        + Math.round(date.getTime() / 1000) +
        "&mode=transit&key=" 
        + apiKey,
        
        xhttp = new XMLHttpRequest();
    
    xhttp.onload = function () {
        if (this.status === 200) {
            loadData(this);
        }
    };
    
    xhttp.onerror = function (err) {
        results.innerHTML = "<div class='alert alert-danger'>Error processing request. Try again later.</div>";
    };
    
    results.style.visibility = "visible";
    results.innerHTML = "<div id='loader'></div>";
    
    xhttp.open("GET", restCall, true);
    xhttp.send();
}

