var chickenSlider = $('#chickenAmount');
var methaneAmount = $('#methaneAmount');
var chickenNumber = $('#chickenNumber');
var calculateButton = $('#calculateButton');
var impactNumber = $('#impact');

var number = 0;

console.log(chickenSlider);
chickenSlider.on('input', function(){
    chickenNumber.text($(this).val());
    number = $(this).val() * 0.57;
});
calculateButton.click(() => {
    methaneAmount.text(number + "lbs of methane PER YEAR");
    console.log(number);
    if(number > 200 && number < 500){
        impactNumber.text("Medium");
    } else if (number > 500){
        impactNumber.text("High");
    } else {
        impactNumber.text("Low");
    }
})
