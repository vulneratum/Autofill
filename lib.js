// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*
//@Origonal_Author Marcus Jackson
//Editor Esteban Cantu

//TODO: Refactor for cleanliness

var qbox = document.getElementById('qpreselect');
var qboxValue, text, client, qcombo, option, textByLine;


client = new XMLHttpRequest();
client.open('GET', 'https://marajac.github.io/libscript/options.txt');
client.onreadystatechange = function() {
    if (client.readyState == 4 && client.status == 200){
        text = client.responseText.split('\n');
        createOptions(text);
    }
}
client.send();

qbox.addEventListener('click', choiceListener);

function choiceListener() {
    qboxValue = qbox.value;
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 27251 || qboxValue == 27252 || qboxValue == 27249 || qboxValue == 27250 || 
      qboxValue == 27253)
    {
    	setFields(2, 1, 1, 1);
    }
    //course reserve
    else if(qboxValue == 27248)
    {
    	setFields(1, 1, 1, 1);
    }
    //Second Floor
    //Reference
    else if(qboxValue == 2)
    {
        document.getElementById('q').value = "Reference";
        setFields(1, 1, 1, 1);
        swapFields();
    }
    //Directional
    else if(qboxValue == 3)
    {
        document.getElementById('q').value = "Directional";
    	setFields(2, 1, 1, 1);
        swapFields();
    }
    //Stacks Transaction
    else if(qboxValue == 4)
    {
        document.getElementById('q').value = "Stacks Transaction";
    	setFields(2, 1, 1, 1);
        swapFields();
    }
    //Multimedia
    else if(qboxValue == 5)
    {
        document.getElementById('q').value = "Multimedia (CD/DVD/etc.)";
    	setFields(2, 1, 1, 1);
        swapFields();
    }
    //Difficult Reserve
    if(qboxValue == 6)
    {
        document.getElementById('q').value = "Difficult Reserve";
    	setFields(1, 1, 1, 2);
        swapFields();
    }
    //Phone Directional
    if(qboxValue == 7)
    {
        document.getElementById('q').value = "Phone Directional";
    	setFields(2, 2, 1, 1);
        swapFields();
    }
    //Phone Reserve
    if(qboxValue == 8)
    {
        document.getElementById('q').value = "Phone Reserve";
    	setFields(1, 2, 1, 1);
        swapFields();
    }
    //First Floor
    //Directional
    else if(qboxValue == 10)
    {
        document.getElementById('q').value = "Directional";
    	setFields(2, 1, 2, 1);
        swapFields();
    }
}

function setFields(f1, f2, f3, f4) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;
}

//generate new options
function createOptions(textByLine){  
    qcombo = document.getElementById('qpreselect');
    for(i=0; i < textByLine.length-1; i++){
        option = document.createElement('option');
        option.text = textByLine[i];
        option.value = i+1;
        qcombo.appendChild(option);
    }
}

function swapFields(){
    showPreDef();
    document.getElementById('qpreselect').value = 0;
}
