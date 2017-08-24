
$('#input').focusin(function(){
    addClassLabel();
});
$('#input').focusout(function(){
    removeClassLabel();
});


function addClassLabel() {

    var label = document.getElementById("label");
    label.addClass("up")

};

function removeClassLabel() {
    var label = document.getElementById("label");
    label.removeClass("up")
};