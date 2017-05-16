/*
This is empty on purpose! Your code to build the resume will go here.
*/
// var myName = "Rafael de Azevedo";
// var myRole = "Full Stack Web Developer"
// var formattedName = HTMLheaderName.replace("%data%",myName);
// var formattedRole = HTMLheaderRole.replace("%data%",myRole);

// $("#header").append(formattedRole);
// $("#header").prepend(formattedName);
// $("#header").append("</br>");
// $("#main").append(bio.skills[0]);
// $("#main").append(bio.skills[1]);
// $("#main").append(work["position"]);
// $("#main").append(education.name);

var bio = {
    "name": "Rafael Azevedo",
    "role": "Full-Stack Developer",
    "contacts": {
        "mobile": "55 11 97477-7744",
        "email": "rafaelsilva@gmail.com",
        "github": "azevedorafael",
        "twitter": "@Rafazevedosilva",
        "location": "São Paulo, SP"
    },
    "welcomeMessage": "'Timendi causa est nescire - Ignorance is the cause of fear.'",
    "skills": [
        "HTML5", "CSS3", "JS", "JQuery", "GULP"
    ],
    "bioPic": "images/fry.jpg",
    "display" : function (){
        HTMLheaderName = HTMLheaderName.replace("%data%",bio.name);
        HTMLheaderRole = HTMLheaderRole.replace("%data%",bio.role);
        $("#header").prepend(HTMLheaderName+HTMLheaderRole);

        // var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        // var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
        HTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(HTMLmobile);
        HTMLemail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(HTMLemail);
        HTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(HTMLgithub);
        HTMLtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#topContacts").append(HTMLtwitter);
        HTMLlocation  = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(HTMLlocation);

        HTMLbioPic  = HTMLbioPic.replace("%data%",bio.bioPic);
        $("#header").append(HTMLbioPic);
        HTMLwelcomeMsg  = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(HTMLwelcomeMsg);

        $("#main").append(internationalizeButton);
    },
};

var education = {
    "schools": [
        {
            "name": "FIAP",
            "location": "São Paulo, SP",
            "degree": "MBA",
            "majors": [
                "a"
            ],
            "dates": "",
            "url": "",
        },
        {
            "name": "FATEC",
            "location": "São Paulo, SP",
            "degree": "Degree",
            "majors": [
                "a"
            ],
            "dates": "",
            "url": "",
        },
        {
            "name": "João Borges",
            "location": "São Paulo, SP",
            "degree": "High Scholl",
            "majors": [
                "a"
            ],
            "dates": "",
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        },
        {
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        }
    ],
    "display": function(){},
};

var work = {
    "jobs": [
        {
            "employer": "Diebold",
            "title": "Systems Analyst",
            "location": "São Paulo, SP",
            "dates": "January 2014 - May 2017",
            "description": "Goat when the cheese comes out everybody's happy feta. Say cheese cut the cheese feta fromage everyone loves cheddar stinking bishop fromage. Mascarpone bocconcini melted cheese airedale mozzarella dolcelatte monterey jack cheese on toast. Bavarian bergkase cow edam mozzarella stinking bishop cheese slices."
        },
        {
            "employer": "Itau Bank",
            "title": "Systems Analyst",
            "location": "São Paulo, SP",
            "dates": "January 2012 - January 2014",
            "description": "Pecorino cheesy feet cheesecake. Pecorino squirty cheese stinking bishop bocconcini cheese and biscuits paneer pepper jack gouda. Cheesy grin boursin lancashire gouda cut the cheese fromage frais queso roquefort. Everyone loves swiss."
        },
        {
            "employer": "Quint",
            "title": "Systems Analyst",
            "location": "São Paulo, SP",
            "dates": "January 2010 - December 2011",
            "description": "Boursin macaroni cheese halloumi. Caerphilly cow cream cheese ricotta croque monsieur fromage pecorino queso. Cheese triangles bavarian bergkase melted cheese danish fontina cheese and biscuits cheese strings fromage smelly cheese. Emmental cut the cheese bavarian bergkase manchego mozzarella cheeseburger port-salut cheese on toast. Caerphilly lancashire macaroni cheese babybel."
        }
    ],
    "display": function(){},
};

var projects = {
    "projects": [
        {
            "title": "Alurinha",
            "dates": "January 2010 - December 2011",
            "description": "Aqui é Body Builder Ipsum PORRA! Vai subir árvore é o caralho porra! Aqui é bodybuilder porra! Aqui nóis constrói fibra, não é água com músculo. Vem porra! Ó o homem ali porra!, é 13 porra! Eu quero esse 13 daqui a pouquinho aí.",
            "images": ["images/fry.jpg","images/techpivot-ninja.png"]
        },
        {
            "title": "Responsive Blog",
            "dates": "January 2010 - December 2011",
            "description": "Eita porra!, tá saindo da jaula o monstro! Ó o homem ali porra!, é 13 porra! Vo derrubar tudo essas árvore do parque ibirapuera. É 13 porra! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Vai subir árvore é o caralho porra!",
            "images": ["images/fry.jpg","images/techpivot-ninja.png"]
        },
        {
            "title": "Animal Trading Card",
            "dates": "January 2010 - December 2011",
            "description": "Tá comigo porra. Aqui nóis constrói fibra, não é água com músculo. Vai subir árvore é o caralho porra! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra. Eu quero esse 13 daqui a pouquinho aí.",
            "images": ["images/fry.jpg","images/techpivot-ninja.png"]
        }
    ],
    "display" : function (){
        for (var i in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            HTMLprojectTitleSec = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            $(".project-entry:last").append(HTMLprojectTitleSec);
            HTMLprojectDatesSec = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            $(".project-entry:last").append(HTMLprojectDatesSec);
            HTMLprojectDescriptionSec = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(HTMLprojectDescriptionSec);
            for (var x in projects.projects[i].images) {
                HTMLprojectImageSec = HTMLprojectImage.replace("%data%",projects.projects[i].images[x]);
                $(".project-entry:last").append(HTMLprojectImageSec);
            }
        }
    },
};



function displayWork(){
    for (var i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        HTMLworkEmployerSec = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        HTMLworkTitleSec = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        $(".work-entry:last").append(HTMLworkEmployerSec+" "+HTMLworkTitleSec);
        HTMLworkDatesSec = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        $(".work-entry:last").append(HTMLworkDatesSec);
        HTMLworkLocationSec = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        $(".work-entry:last").append(HTMLworkLocationSec);
        HTMLworkDescriptionSec = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $(".work-entry:last").append(HTMLworkDescriptionSec);
    }
}

var firstName="";
var secondName="";
function inName(name){
    var nameArray = name.split(" ");
    firstName = nameArray[0].toLowerCase();
    secondName = nameArray[1].toUpperCase();
    for (var i = 0 ; i < firstName.length; i++){
        if (i === 0){
            firstNameTemp = firstName.charAt(i).toUpperCase();
        }
        else{
            firstNameTemp += firstName.charAt(i);
        }
    }
    var nameFormated = firstNameTemp+" "+secondName;
    return nameFormated;
}

bio.display();
displayWork();
projects.display();
if (bio.skills.length > 0) {
    var HTMLskillsSec="";
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        HTMLskillsSec = HTMLskills;
        HTMLskillsSec = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(HTMLskillsSec);
    }
}
HTMLheaderName = HTMLheaderName.replace("%data%",internationalizeButton.click(inName()));


$("#mapDiv").append(googleMap);



