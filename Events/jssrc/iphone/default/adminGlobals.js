var userAttributes = {};
var isPublish = false;
var isPickerRendered = false;

function postshow() {
    var elems = document.querySelectorAll("input[kwidgettype='Button']");
    for (var i = 0, iMax = elems.length; i < iMax; i++) {
        elems[i].style.outline = 'none';
        elems[i].style.cursor = 'pointer';
    }
}