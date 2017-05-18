//Creates JSON bio
var bio = {
    "name": "Rafael Azevedo",
    "role": "Full-Stack Developer",
    "contacts": {
        "mobile": "55 11 97477-7744",
        "email": "rafaelsilva@gmail.com",
        "github": "azevedorafael",
        "twitter": "@Rafazevedosilva",
        "location": "AV. EUSÉBIO MATOSO, 218"
    },
    "welcomeMessage": "'Timendi causa est nescire - Ignorance is the cause of fear.'",
    "skills": [
        "HTML5",
        "CSS3",
        "JS",
        "JQuery",
        "GULP"
    ],
    "bioPic": "images/me.jpg",
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
            "location": "São Paulo,SP",
            "degree": "SOA-MBA",
            "majors": [
                "SOA",
                "Software Engineering",
                "TOGAF"
            ],
            "dates": "2015-2016",
            "url": "https://www.fiap.com.br/mba",
        },
        {
            "name": "FATEC",
            "location": "São Paulo",
            "degree": "Technology Degree",
            "majors": [
                "Algorithms",
                "Programing Logic",
                "Data Structure"
            ],
            "dates": "2009-2013",
            "url": "http://www.fatecsp.br",
        },
        {
            "name": "João Borges",
            "location": "São Paulo",
            "degree": "High Scholl",
            "majors": [
                "Portuguese",
                "English",
                "Math"
            ],
            "dates": "2003-2007",
            "url": "http://eejoaoborges.com.br"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001"
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
            if(education.schools.hasOwnProperty(i)){
                HTMLschoolNameTemp = HTMLschoolName.replace("%data%",education.schools[i].name);
                HTMLschoolNameTemp = HTMLschoolNameTemp.replace("%#%",education.schools[i].url);
                HTMLschoolDegreeTemp = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
                $(".education-entry").append(HTMLschoolNameTemp+HTMLschoolDegreeTemp);
                HTMLschoolDatesTemp = HTMLschoolDates.replace("%data%",education.schools[i].dates);
                $(".education-entry").append(HTMLschoolDatesTemp);
                HTMLschoolLocationTemp = HTMLschoolLocation.replace("%data%",education.schools[i].location);
                $(".education-entry").append(HTMLschoolLocationTemp);
                HTMLschoolMajorTemp = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
                $(".education-entry").append(HTMLschoolMajorTemp);
            }
        };

        $(".education-entry").append(HTMLonlineClasses);

        for(var x in education.onlineCourses){
            if(education.onlineCourses.hasOwnProperty(x)){
                HTMLonlineTitleTemp = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
                HTMLonlineTitleTemp = HTMLonlineTitleTemp.replace("%#%",education.onlineCourses[x].url);
                HTMLonlineSchoolTemp = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
                $(".education-entry").append(HTMLonlineTitleTemp+HTMLonlineSchoolTemp);
                HTMLonlineDatesTemp = HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates);
                $(".education-entry").append(HTMLonlineDatesTemp);
                HTMLonlineURLTemp = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
                HTMLonlineURLTemp = HTMLonlineURLTemp.replace("%#%",education.onlineCourses[x].url);
                $(".education-entry").append(HTMLonlineURLTemp);
            }
        };
    }
};

//Creates JSON work
var work = {
    "jobs": [
        {
            "employer": "Diebold",
            "title": "Systems Analyst",
            "url": "http://www.dieboldnixdorf.com",
            "location": "Francisco Matarazzo, 1350 ",
            "dates": "January 2014 - May 2017",
            "description": "Responsible for the guarantee of the Quality of the software, through the validation of the software, specifications and related manuals."
        },
        {
            "employer": "Itau Bank",
            "title": "Systems Analyst",
            "url": "https://www.itau.com.br",
            "location": "Rua Dona Ana Néri, 326",
            "dates": "January 2012 - January 2014",
            "description": "Timely management of systemic international incidents, with business origin and T.I."
        },
        {
            "employer": "Quint",
            "title": "Systems Analyst",
            "url": "https://www.quintgroup.com",
            "location": "R. Ramos Batista, 152 ",
            "dates": "January 2010 - December 2011",
            "description": "Quality control of systemic national incidents of different priorities."
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
            if(work.jobs.hasOwnProperty(i)){
                $("#workExperience").append(HTMLworkStart);
                HTMLworkEmployerTemp = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
                HTMLworkEmployerTemp = HTMLworkEmployerTemp.replace("%#%",work.jobs[i].url);
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
    }
};

//Creates JSON projects
var projects = {
    "projects": [
        {
            "title": "Alurinha",
            "dates": "January 2017 - February 2017 ",
            "description": "Alurinha is a final project from the Flex Box course at Alura.",
            "images": ["images/alurinha-layout-desktop.jpg"]
        },
        {
            "title": "Responsive Blog",
            "dates": "March 2017 - April 2017",
            "description": "It is part of the Front End Web Developer Nanodegree course at Udacity.",
            "images": ["images/responsive-blog.jpg"]
        },
        {
            "title": "Animal Trading Card",
            "dates": "April 2017 - May 2017",
            "description": "This is part of the core curriculum in the Front End Web Developer Nanodegree course at Udacity.",
            "images": ["images/animal-trading-cards.jpg"]
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
            if(projects.projects.hasOwnProperty(i)){
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






