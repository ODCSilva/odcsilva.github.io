/*jslint browser:true, white: true, debug: true, regexp: true */

/**
 * Get the type of icon for each node in the result list based on the selected
 * travel method and vehicle type.
 * @param {xmlDoc} step - XML node that includes all the information for a single step.
 * @return {string} HTML-formatted string with the icon to be used in the result list.
 */
function getIconType(step) {
    "use strict";
    var travelMode = step.getElementsByTagName("travel_mode")[0]
        .childNodes[0].nodeValue,
        vehicleType;
    
    if (travelMode === "TRANSIT") {
        
        vehicleType = step.getElementsByTagName("transit_details")[0].getElementsByTagName("line")[0]
        .getElementsByTagName("vehicle")[0].getElementsByTagName("type")[0].childNodes[0].nodeValue;
        
        switch(vehicleType) {
            case "BUS":
                return "<i class='material-icons icon black'>directions_bus</i>";
            case "SUBWAY":
                return "<i class='material-icons icon black'>directions_subway</i>";
            case "RAILWAY":
                return "<i class='material-icons icon black'>directions_railway</i>";
            case "BOAT":
                return "<i class='material-icons icon black'>directions_boat</i>";
            default:
                return "<i class='material-icons icon black'>directions_transit</i>";
        }
    }
    else if (travelMode === "WALKING") {
        return "<i class='material-icons icon black'>directions_walk</i>";
    }
    else if (travelMode === "BICYCLING") {
        return "<i class='material-icons icon black'>directions_bike</i>";
    }
    else {
        return "<i class='material-icons icon black'>directions_car</i>";
    }
}

/**
 * Returns an HTML-formatted string with the information to be displayed for a 
 * single 'step' in the direction list.
 * @param {xmlDoc} step - XML node that includes all the information for a single step.
 * @return {string} HTML-formatted string with the information to be displayed.
 */
function getStepInfo(step) {
    
    "use strict";
    var s = "",
        regex = /(<([^>]+)>)/ig,
        durationValue = step.getElementsByTagName("duration")[0]
        .getElementsByTagName("value")[0].childNodes[0].nodeValue,
        
        durationText = step.getElementsByTagName("duration")[0]
        .getElementsByTagName("text")[0].childNodes[0].nodeValue,
        
        distanceText = step.getElementsByTagName("distance")[0]
        .getElementsByTagName("text")[0].childNodes[0].nodeValue,
        
        htmlInstructions = step.getElementsByTagName("html_instructions")[0].childNodes[0].nodeValue,
        travelMode = step.getElementsByTagName("travel_mode")[0].childNodes[0].nodeValue,
        transitShortName;
    
    if (travelMode === "TRANSIT") {
        
        transitShortName  = step.getElementsByTagName("short_name")[0];
        
        if (typeof transitShortName !== 'undefined') {
            s += "<span class='bg-primary bus-route'>" 
            + transitShortName.childNodes[0].nodeValue
            + "</span>";
        }
    }
    
    s += htmlInstructions.replace(regex, " ");
    
    if (Math.floor(durationValue) > 0) {
        s += " (about " + durationText + ")";
    }
    
    s += " ~ " + distanceText;
    
    return s;
}

function displayDirections(xmlDoc) {
    "use strict";
    var resultArea = document.getElementById("results"),
        leg = xmlDoc.getElementsByTagName("route")[0].getElementsByTagName("leg")[0],
        startAddress = leg.getElementsByTagName("start_address")[0].childNodes[0].nodeValue,
        endAddress = leg.getElementsByTagName("end_address")[0].childNodes[0].nodeValue,
        totalDistance = leg.getElementsByTagName("distance")[leg.getElementsByTagName("distance").length - 1].querySelector("text").childNodes[0].nodeValue,
        totalDuration = leg.getElementsByTagName("duration")[leg.getElementsByTagName("duration").length - 1].querySelector("text").childNodes[0].nodeValue,      
        steps = xmlDoc.getElementsByTagName("step"),
        step,
        i,
        htmlString = "";
    
    htmlString += "<dl class='row'>";
    htmlString += "<dt class='col-sm-4'>Total Travel Time: </dt>";
    htmlString += "<dd class='col-sm-8'>" + totalDuration + "</dd>";
    htmlString += "<dt class='col-sm-4'>Total Travel Distance: </dt>";
    htmlString += "<dd class='col-sm-8'>" + totalDistance + "</dd>";
    htmlString += "</dl>";
    htmlString += "<div>";
    htmlString += "<ul class='list-group'>";
    htmlString += "<li class='list-group-item'><i class='material-icons icon red-icon'>place</i>" 
        + startAddress + "</li>";
    
    for (i = 0; i < steps.length; i = i + 1) {
        step = steps[i];
        
        if (typeof step.getElementsByTagName("html_instructions")[0] !== 'undefined') {
            htmlString += "<li class='list-group-item'>" + getIconType(step) 
            + getStepInfo(step) + "</li>";
        }
    }
    
    htmlString += "<li class='list-group-item'><i class='material-icons icon red-icon'>place</i>" 
        + endAddress + "</li>";
    htmlString += "</ul>";
    htmlString += "</div>";
    
    htmlString += "<div class='margin-top-24px'>";
    htmlString += "</div>";

    
    resultArea.innerHTML = htmlString;
}

function displayAlert(string) {
    "use strict";
    var results = document.getElementById("results");
    
    results.innerHTML = "<div class='alert alert-danger'>" + string + "</div>";
}

function loadData(response) {
    
    "use strict";
    var xmlDoc = response.responseXML;
    
    if (xmlDoc) {
        
        if (xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue === "OK" ) {
            displayDirections(xmlDoc);
        }
        else {
            displayAlert("No results found. Change your parameters and try again.");
        }
    }
}

function doValidation() {
    "use strict";
    var originInput = document.getElementById("origin"),
        originGroup = document.getElementById("origin-group"),
        originFb = document.getElementById("origin-feedback"),
        destInput = document.getElementById("dest"),
        destGroup = document.getElementById("dest-group"),
        destFb = document.getElementById("dest-feedback"),
        isValid = true;
    
    if (originInput.value === "") {
        originGroup.className += " has-danger";
        originInput.className += " form-control-danger";
        originFb.innerHTML = "Origin must not be blank!";
        isValid = false;
    }
    else {
        originGroup.className = "form-group";
        originInput.className = "form-control";
        originFb.innerHTML = "";
    }
    
    if (destInput.value === "") {
        destGroup.className += " has-danger";
        destInput.className += " form-control-danger";
        destFb.innerHTML = "Destination must not be blank!";
        isValid = false;
    }
    else {
        destGroup.className = "form-group";
        destInput.className = "form-control";
        destFb.innerHTML = "";
    }
    
    return isValid;
}

function showDirections() {
    
    "use strict";
    var results = document.getElementById("results"),
        modeSelect = document.getElementById("mode"),
        mode = modeSelect.options[modeSelect.selectedIndex].value,
        origin = document.getElementById("origin").value,
        dest = document.getElementById("dest").value,
        time = document.getElementById("arrival").value,
        date = (time) ? new Date(time) : new Date(),
        apiKey = "AIzaSyBfI_SFoa5_M9Qb_7ZaotXzd2JUvDSWbNM",
        restCall = "https://maps.googleapis.com/maps/api/directions/xml?transit_routing_preference=less_walking&origin=" 
        + encodeURI(origin) + 
        "&destination=" 
        + encodeURI(dest) + 
        "&arrival_time="
        + Math.round(date.getTime() / 1000) +
        "&mode=" + mode + "&key=" 
        + apiKey,
        xhttp = new XMLHttpRequest();
    
    if (!doValidation()) {
        return;
    }
    
    xhttp.onload = function () {
        if (this.status === 200) {
            loadData(this);
        }
        else if (this.status === 400) {
            displayAlert("Request Status 400: invalid syntax");
        }
    };
    
    xhttp.onerror = function (err) {
        displayAlert("Error processing request: " + err);
    };
    
    results.style.visibility = "visible";
    results.innerHTML = "<div id='loader'></div>";
    
    xhttp.open("GET", restCall, true);
    xhttp.send();
}

function clearFields() {
    "use strict";
    document.getElementById("origin").value = "";
    document.getElementById("dest").value = "";
    document.getElementById("arrival").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("results").style.visibility = "hidden";
}

