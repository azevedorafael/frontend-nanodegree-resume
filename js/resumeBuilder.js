//Creates JSON bio
var bio = {
    "name": "Rafael Azevedo",
    "role": "Full-Stack Developer",
    "contacts": {
        "mobile": "55 11 97477-7744",
        "email": "rafaelsilva@gmail.com",
        "github": "azevedorafael",
        "twitter": "@Rafazevedosilva",
        "location": "São Paulo"
    },
    "welcomeMessage": "'Timendi causa est nescire - Ignorance is the cause of fear.'",
    "skills": [
        "HTML5", "CSS3", "JS", "JQuery", "GULP"
    ],
    "bioPic": "images/fry.jpg",
    /**
    * @description Adds all bio object details in the index.html
    *
    */
    "display" : function (){
        //Temporaries vars declaration ,contains the modified content in each iteration and keep the content in the original vars
        var HTMLheaderNameTemp,
            HTMLheaderRoleTemp,
            HTMLmobileTemp,
            HTMLemailTemp,
            HTMLgithubTemp,
            HTMLtwitterTemp,
            HTMLlocationTemp,
            HTMLwelcomeMsgTemp,
            HTMLbioPicTemp ="";

        HTMLheaderNameTemp = HTMLheaderName.replace("%data%",bio.name);
        HTMLheaderRoleTemp = HTMLheaderRole.replace("%data%",bio.role);
        $("#header").prepend(HTMLheaderNameTemp+HTMLheaderRoleTemp);

        //Useless var in bio contacts
        // var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        // var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';

        HTMLmobileTemp = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(HTMLmobileTemp);
        HTMLemailTemp = HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(HTMLemailTemp);
        HTMLgithubTemp = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(HTMLgithubTemp);
        HTMLtwitterTemp = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#topContacts").append(HTMLtwitterTemp);
        HTMLlocationTemp = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(HTMLlocationTemp);

        HTMLwelcomeMsgTemp = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(HTMLwelcomeMsgTemp);

        HTMLbioPicTemp  = HTMLbioPic.replace("%data%",bio.bioPic);
        $("#header").append(HTMLbioPicTemp);

        //Temporary var HTMLskillsTemp declaration ,contains the modified HTMLskills content in each iteration and keep the content in the original vars
        var HTMLskillsTemp="";
        $("#header").append(HTMLskillsStart);
        //Adds each skill in the index.html
        bio.skills.forEach(function(element){
            HTMLskillsTemp = HTMLskills.replace("%data%",element);
            $("#skills").append(HTMLskillsTemp);
        });
        //Adds the internationalizeButton in the index.html
        $("#topContacts").append(internationalizeButton);
    }
};

//Creates JSON education
var education = {
    "schools": [
        {
            "name": "FIAP",
            "location": "Rio de Janeiro",
            "degree": "MBA",
            "majors": [
                "a","b"
            ],
            "dates": "2015-2016",
            "url": "",
        },
        {
            "name": "FATEC",
            "location": "Espirito Santo",
            "degree": "Degree",
            "majors": [
                "a","c"
            ],
            "dates": "2009-2013",
            "url": "",
        },
        {
            "name": "João Borges",
            "location": "Minas Gerais",
            "degree": "High Scholl",
            "majors": [
                "a","d"
            ],
            "dates": "2003-2007",
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        },
        {
            "title": "HTML, CSS e JavaScript",
            "school": "Hong Kong University of Science and Technology",
            "dates": "2012-2013",
            "url": "https://pt.coursera.org/learn/html-css-javascript"
        }
    ],
    /**
    * @description Adds all education object details in the index.html
    *
    */
    "display": function(){
        $("#education").append(HTMLschoolStart);
        //Temporaries vars declaration ,contains the modified content in each iteration and keep the content in the original vars
        var HTMLschoolNameTemp,
            HTMLschoolDegreeTemp,
            HTMLschoolDatesTemp,
            HTMLschoolLocationTemp,
            HTMLschoolMajorTemp,
            HTMLonlineTitleTemp,
            HTMLonlineSchoolTemp,
            HTMLonlineDatesTemp,
            HTMLonlineURLTemp ="";

        for(var i in education.schools){
            HTMLschoolNameTemp = HTMLschoolName.replace("%data%",education.schools[i].name);
            HTMLschoolDegreeTemp = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
            $(".education-entry").append(HTMLschoolNameTemp+HTMLschoolDegreeTemp);
            HTMLschoolDatesTemp = HTMLschoolDates.replace("%data%",education.schools[i].dates);
            $(".education-entry").append(HTMLschoolDatesTemp);
            HTMLschoolLocationTemp = HTMLschoolLocation.replace("%data%",education.schools[i].location);
            $(".education-entry").append(HTMLschoolLocationTemp);
            HTMLschoolMajorTemp = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
            $(".education-entry").append(HTMLschoolMajorTemp);
        };

        $(".education-entry").append(HTMLonlineClasses);

        for(var x in education.onlineCourses){
            HTMLonlineTitleTemp = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
            HTMLonlineSchoolTemp = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
            $(".education-entry").append(HTMLonlineTitleTemp+HTMLonlineSchoolTemp);
            HTMLonlineDatesTemp = HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates);
            $(".education-entry").append(HTMLonlineDatesTemp);
            HTMLonlineURLTemp = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
            $(".education-entry").append(HTMLonlineURLTemp);
        };
    }
};

//Creates JSON work
var work = {
    "jobs": [
        {
            "employer": "Diebold",
            "title": "Systems Analyst",
            "location": "Belo Horizonte",
            "dates": "January 2014 - May 2017",
            "description": "Goat when the cheese comes out everybody's happy feta. Say cheese cut the cheese feta fromage everyone loves cheddar stinking bishop fromage. Mascarpone bocconcini melted cheese airedale mozzarella dolcelatte monterey jack cheese on toast. Bavarian bergkase cow edam mozzarella stinking bishop cheese slices."
        },
        {
            "employer": "Itau Bank",
            "title": "Systems Analyst",
            "location": "FLorianopolis",
            "dates": "January 2012 - January 2014",
            "description": "Pecorino cheesy feet cheesecake. Pecorino squirty cheese stinking bishop bocconcini cheese and biscuits paneer pepper jack gouda. Cheesy grin boursin lancashire gouda cut the cheese fromage frais queso roquefort. Everyone loves swiss."
        },
        {
            "employer": "Quint",
            "title": "Systems Analyst",
            "location": "Blumenau",
            "dates": "January 2010 - December 2011",
            "description": "Boursin macaroni cheese halloumi. Caerphilly cow cream cheese ricotta croque monsieur fromage pecorino queso. Cheese triangles bavarian bergkase melted cheese danish fontina cheese and biscuits cheese strings fromage smelly cheese. Emmental cut the cheese bavarian bergkase manchego mozzarella cheeseburger port-salut cheese on toast. Caerphilly lancashire macaroni cheese babybel."
        }
    ],
    /**
    * @description Adds all work object details in the index.html
    *
    */
    "display": function(){
        //Temporaries vars declaration ,contains the modified content in each iteration and keep the content in the original vars
        var HTMLworkEmployerTemp,
            HTMLworkTitleTemp,
            HTMLworkDatesTemp,
            HTMLworkLocationTemp,
            HTMLworkDescriptionTemp ="";

        for (var i in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            HTMLworkEmployerTemp = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
            HTMLworkTitleTemp = HTMLworkTitle.replace("%data%",work.jobs[i].title);
            $(".work-entry:last").append(HTMLworkEmployerTemp+" "+HTMLworkTitleTemp);
            HTMLworkDatesTemp = HTMLworkDates.replace("%data%",work.jobs[i].dates);
            $(".work-entry:last").append(HTMLworkDatesTemp);
            HTMLworkLocationTemp = HTMLworkLocation.replace("%data%",work.jobs[i].location);
            $(".work-entry:last").append(HTMLworkLocationTemp);
            HTMLworkDescriptionTemp = HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $(".work-entry:last").append(HTMLworkDescriptionTemp);
        }
    }
};

//Creates JSON projects
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
    /**
    * @description Adds all projects object details in the index.html
    *
    */
    "display" : function (){
        //Temporaries vars declaration ,contains the modified content in each iteration and keep the content in the original vars
        var HTMLprojectTitleTemp,
            HTMLprojectDatesTemp ,
            HTMLprojectDescriptionTemp,
            HTMLprojectImageTemp ="";

        for (var i in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            HTMLprojectTitleTemp = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            $(".project-entry:last").append(HTMLprojectTitleTemp);
            HTMLprojectDatesTemp = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            $(".project-entry:last").append(HTMLprojectDatesTemp);
            HTMLprojectDescriptionTemp = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(HTMLprojectDescriptionTemp);
            for (var x in projects.projects[i].images) {
                HTMLprojectImageTemp = HTMLprojectImage.replace("%data%",projects.projects[i].images[x]);
                $(".project-entry:last").append(HTMLprojectImageTemp);
            }
        }
    }
};


/**
*@description Capitalize the last name in the HTMLheaderNameTemp var
*
*@param {string} name - The content in the HTMLheaderNameTemp var
*@returns {string} The name formated
*/
function inName(name){
    var firstName="";
    var secondName="";
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

//Calls the main display methods
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);






