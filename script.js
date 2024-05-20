
//  working field teaxtarea
function addNewWeField(txt, wrk, butn) {

    const textarea = document.getElementsByClassName(txt)
    const work = document.getElementById(wrk)
    const btn = document.getElementById(butn)
    const clone = textarea[0].cloneNode()
    clone.value = ''
    work.insertBefore(clone, btn)

}

// generate CV 

function generateCV(e) {

    e.preventDefault()
    // name field change
    let nameField = document.getElementById("nameField").value;
    let tname = document.getElementById("t-name1");

    tname.innerHTML = nameField;
    document.getElementById("t-name2").innerHTML = nameField;

    // contact field change
    let ContactField = document.getElementById("ContactField").value;
    let tconatct = document.getElementById("t-contact");

    tconatct.innerHTML = ContactField

    // address field change
    let addressField = document.getElementById("addressField").value;
    console.log(addressField)
    let taddress = document.getElementById("t-address");

    taddress.innerHTML = addressField

    // social media change 
    document.getElementById("fb").innerHTML = document.getElementById("fbField").value;
    document.getElementById("insta").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedIn").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("t-objective").innerHTML = document.getElementById("ObjectiveField").value;

    // work experince
    let workfield = document.getElementsByClassName("wefield");

    let str = "";

    for (let e of workfield) {
        str = str + `<li> ${e.value} </li>`
    }

    document.getElementById("t-work").innerHTML = str;

    // acadmicField
    let aqfield = document.getElementsByClassName("aqfield");

    let str1 = "";

    for (let e of aqfield) {
        str1 = str1 + `<li> ${e.value} </li>`
    }

    document.getElementById("t-acdmic").innerHTML = str1;

    // code for image 
    const imgFile = document.getElementById("imgField").files[0];
    const imgReader = new FileReader();

    imgReader.readAsDataURL(imgFile)

    // set a image in template
    imgReader.onloadend = function () {
        document.getElementById('t-img').src = imgReader.result;

    }

    document.getElementById("cv-form").style.display = 'none'
    document.getElementById("cv-template").style.display = 'block'
}

// print cv 

function princtCV() {
    document.getElementById("print").style.display = 'none'
    window.print();

}






