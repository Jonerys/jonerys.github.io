const dd = $("#dropdown-custom-1");
const ddButton = $("#dropdown-button-1");
const ddOptionList = $("#dropdown-option-list-1");
const ddCurrentValue = $("#dropdown-current-value-1");

const statusDiv = $('.status-info');
const noteDiv = $('.note');

var currentValue = undefined;

function resetDropDown(pndropdown) {
    ddCurrentValue.html(ddDefault.children[1].textContent);
    ddButton.val('default1');
    currentValue.removeClass("dropdown-selected");
    ddOptionList.scrollTop(0);
    removeAllIconClasses();
}

function scrollToSelected(dropDownButton, dropDownOptionList) {
    let currentValue = dropDownButton.text().replace(/\s+/g, " ").trim();
    let scrollHeight = 0;
    for (let i = 0; i < dropDownOptionList.children().length; i++) {
        let child = dropDownOptionList.children().eq(i);
        if (child.children().eq(1)[0].textContent == currentValue) {
            dropDownOptionList.scrollTop(scrollHeight);
            break;
        }
        scrollHeight += child.height();
    }
}

function resetInfo() {
    let id1 = ddButton.val();
    let relationshipRecords = [];
    let filteredData = [];
    $(".diplomacy-record-list").html('');
    for(let record of diplomacyData.records) {
        if ((((id1 == record.id1) || (id1 == record.id2)) && record.duplex) 
            || (id1 == record.id1 && !record.duplex)
        ) {
            relationshipRecords.push(record);
        }
    }
    for (let rec of relationshipRecords) {
        let curCountry;
        if ((rec.id2 == id1) && rec.duplex) {
            curCountry = countries.features.find(r => r.properties.id == rec.id1);
        }
        else if (rec.id1 == id1) {
            curCountry = countries.features.find(r => r.properties.id == rec.id2);
        }
        filteredData.push({
            country: {
                id: curCountry.properties.id,
                tag: curCountry.properties.tag,
                name: curCountry.properties.name,
                shortname: curCountry.properties.shortname,
                flag: curCountry.properties.flag.image
            },
            relationship: {
                status: rec.status,
                notes: rec.notes
            }
        });
    }
    
    filteredData.sort((a,b) => (countries.cleanName(a.country.name) > countries.cleanName(b.country.name)) ? 1 
                : (countries.cleanName(a.country.name) < countries.cleanName(b.country.name) ? -1 : 0));
    for (let rec of filteredData) {
        let notesAsHTML = '';
        let record = $("<div/>");
        record.addClass("diplomacy-record");
        record.html("<div class='diplomacy-record-head'><div class='diplomacy-record-left'><img class='flag-popup' alt='" 
            + rec.country.tag + "' src='" + FLAG_IMAGES_PATH 
            + rec.country.flag + "'>" 
            + rec.country.shortname + "</div>"
            + "<div class='diplomacy-record-right'><div class='emoji'>" + rec.relationship.status.emoji + "</div>"
            + "<span class='dropdown-arrow'></span></div></div>" 
        );
        let recordBody = $('<div/>').addClass('diplomacy-record-body');
        let recordStatus = $('<div/>').addClass('diplomacy-record-status')
        recordStatus.append($('<div/>').addClass('diplomacy-record-status-caption').text('Статус: '));
        recordStatus.append($('<div/>').addClass('diplomacy-record-status-info').text(rec.relationship.status.text));
        for (let note of rec.relationship.notes) {
            if (note) {
                notesAsHTML += note + '<br>';
            }
        }
        if (notesAsHTML == '') {
            notesAsHTML = 'Нет';
        }
        let recordNotes = ($('<div/>'))
            .append($('<div/>').addClass('diplomacy-record-notes-head').text('Заметки:'))
            .append($('<div/>').addClass('diplomacy-record-notes').html(notesAsHTML));
        recordBody.append(recordStatus).append(recordNotes);
        record.append(recordBody);
        $(".diplomacy-record-list").append(record);
    }
    $(".diplomacy-record").click(function(e) {
        e.stopImmediatePropagation();
        $(this).toggleClass("active");
    });
}

function toggleButtons() {
    $(".leaflet-control-search").toggle();
}

function openDiplomacy() {
    if ($("#diplomacy").is(":hidden")) {
        toggleButtons();
        $("#diplomacy").slideToggle();
    } else {
        $("#diplomacy").slideToggle(400, toggleButtons);
    }
    if (dd.hasClass("active")) {
        dd.toggleClass("active");
    }
    //resetDropDown(0);
}

$('.menu-diplomacy-head').on('click', function(e){
	if (window.innerWidth <= 600) {
		openDiplomacy();
	}
});

function setCountry(element) {
    if (currentValue) currentValue.removeClass("dropdown-selected");
    $(element).addClass("dropdown-selected");
    currentValue = $(element);
    ddCurrentValue.html($(element).children().eq(1).html());
    dd.removeClass("active");
    ddButton.val($(element).children().eq(0).val());
    resetInfo();
}

function chooseCountry(countryid) {
    $('#dropdown-option-list-1').children().each(function() {
        if ($(this).children().eq(0).val() == countryid) {
            if (ddButton.val() != countryid) {
                setCountry(this);
            }
            return false;
        }
    });
}

var diploButton = new L.Control.Button({
	position: 'topright',
	className: 'leaflet-control-diplomacy',
	buttonFunction: openDiplomacy,
	title: 'Дипломатия'
}).addTo(map);

let ddDefault = $('<li/>');
ddDefault.attr('role', 'option');
ddDefault.html("<input type='radio' value='-1'/><label><img>Выберите страну...</label>");
//$("#dropdown-select-1").append(li1_first);
ddCurrentValue.html(ddDefault.children(0).text());
ddButton.val('default1');

for (let feature of countries.features) {
	let li = $('<li/>');
	li.html("<input type='radio' value='" + feature.properties.id + "'/>" 
		+ "<label class='gap'>" 
		+ "<img class='flag-popup' alt='" + feature.properties.tag + "' src='" + FLAG_IMAGES_PATH + feature.properties.flag.image + "'>" 
		+ feature.properties.shortname +"</label>");
	$("#dropdown-option-list-1").append(li);
}

$("#dropdown-option-list-1 li").on("click", function(e){
    setCountry(this);
});

function toggleCountryList(e) {
    e.stopImmediatePropagation();
    dd.toggleClass("active");
    // прокрутка до выбранного элемента
    scrollToSelected(ddButton, ddOptionList);
}

ddButton.click(function(e) {
    toggleCountryList(e);
});

$(document).click(function(e) 
{
    if ((!ddOptionList.is(e.target) && ddOptionList.has(e.target).length === 0 && dd.hasClass("active")) && (!ddButton.is($(e.target)))) 
    {
        toggleCountryList(e);
    }
});