$(document).ready(function(){
  $("#stress").submit(function(event){
    event.preventDefault();

    var warnings = [];
    var symptoms = [];

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warning = parseInt($(this).val());
      warnings.push(warning);
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var symptom = parseInt($(this).val());
      symptoms.push(symptom);
    });

    if (symptoms.length <= 1 && warnings.length <= 2) {
      $('#cat').show();
    } else if (symptoms.length === 2 && warnings.length === 3) {
      $('#manage').show();
    } else if (symptoms.length === 4  && warnings.length === 5) {
      $('#help').show();
    } else {
      $('#mediate').show();
    }
  });
});
