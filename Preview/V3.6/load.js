function show() {
        document.getElementById("myDiv").style.display="block";
        setTimeout("hide()", 1000); // 5 wait, change the delay here
    }

    function hide() {
        document.getElementById("myDiv").style.display="none";
        document.getElementById("content").style.display="block";
    }