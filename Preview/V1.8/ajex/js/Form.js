const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
  function checkPass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("");
  }

  function validate()
  {
    if(   document.getElementById("text1").value == "9kisthebestclass"
       && document.getElementById("text2").value == "sonuanoop9k" )
    {
      alert( "validation succeeded" );
      location.href="run.html";
    }
    else
    {
      alert( "validation failed" );
      location.href="fail.html";
    }
  }