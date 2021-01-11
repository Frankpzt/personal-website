"use strict";
/*This JS file is for handling the website's navBar functionalities and animation effects*/

//By default, I wish the viewer to see the "home" in navBar pops up to indicate users where they are,
//hence the class 'active-pageIndicator' is added once the page is load.
document.getElementById('homeButton').classList.add('active-pageIndicator')

/*
Initialize a new fullpage object to enable/disable the porperties used by this website,
the licenseKey is owned by Hanyang (Frank) LI, please do not use it for your projects.
if you would like to have your own licenseKey, please visit https://alvarotrigo.com/fullPage/ to purchase yours,
thanks.
*/
new fullpage('#fullpage', {
    licenseKey: '24791606-92AB4851-BE66B309-10F019ED',
    autoScrolling: true,
    keyboardScrolling: true,
    navigation: true,
    anchors: ['anchor-home', 'anchor-resume', 'anchor-projects', 'anchor-blog', 'anchor-contactMe'],
    // navigationTooltips: ['About Me', 'My Resume', 'Personal Projects', 'Blog', 'Contact Me'],
    /*
    check this page: https://github.com/alvarotrigo/fullPage.js#state-classes-added-by-fullpagejs
    for full definations of callback functions in fullpage.js

    This callback is fired once the user leaves a section, in the transition to the new section. 
    Returning false will cancel the move before it takes place.
    Parameters:
    origin: (Object) section of origin.
    destination: (Object) destination section.
    direction: (String) it will take the values up or down depending on the scrolling direction.
    */
    onLeave: function (origin, destination, direction) {
        var leavingSection = this
        if (Math.abs(origin.index - destination.index) > 1) {
            return
        }      
        for (let i = 0; i < length; i++) {
            pageIndicatorRemove(otherTags[i])
        }
        document.getElementById(sections[destination.index]).classList.add('active-pageIndicator')        
    },
    /* This afterSlideLoad method will make the progress bar animation triggered each time the slide is visited*/
    afterSlideLoad: function(section, origin, destination, direction) {
        var loadedSlide = this;
        if(section.anchor === "anchor-resume" && destination.index == 1) {
            document.getElementById("python").classList.add("python")
            document.getElementById("java").classList.add("java")
            document.getElementById("php").classList.add("php")
            document.getElementById("js").classList.add("js")
            document.getElementById("sql").classList.add("sql")
            document.getElementById("nosql").classList.add("nosql")
            document.getElementById("html").classList.add("html")
            document.getElementById("css").classList.add("css")
            document.getElementById("ts").classList.add("ts")
            document.getElementById("bootstrap").classList.add("bootstrap")
            document.getElementById("ci").classList.add("ci")
            document.getElementById("react").classList.add("react")
            document.getElementById("node").classList.add("node")
            document.getElementById("git").classList.add("git")
            document.getElementById("xd").classList.add("xd")
            document.getElementById("illustrator").classList.add("ai")
            document.getElementById("ps").classList.add("ps")
        }
    },
    /* This onSlideLeave method will make the progress bar animation reset each time a user leaves a slide*/
    onSlideLeave: function(section, origin, destination, direction) {
        var leavingSlide = this;
        if(section.anchor === "anchor-resume" && origin.index == 1) {
            document.getElementById("python").classList.remove("python")
            document.getElementById("java").classList.remove("java")
            document.getElementById("php").classList.remove("php")
            document.getElementById("js").classList.remove("js")
            document.getElementById("sql").classList.remove("sql")
            document.getElementById("nosql").classList.remove("nosql")
            document.getElementById("html").classList.remove("html")
            document.getElementById("css").classList.remove("css")
            document.getElementById("ts").classList.remove("ts")
            document.getElementById("bootstrap").classList.remove("bootstrap")
            document.getElementById("ci").classList.remove("ci")
            document.getElementById("react").classList.remove("react")
            document.getElementById("node").classList.remove("node")
            document.getElementById("git").classList.remove("git")
            document.getElementById("xd").classList.remove("xd")
            document.getElementById("illustrator").classList.remove("ai")
            document.getElementById("ps").classList.remove("ps")

        }
    } 
})

/*A helper method to remove element's 'active-pageIndicator' class */
function pageIndicatorRemove(element) {
    let classList = element.classList
    let classListlength = classList.length
    for (let i = 0; i < classListlength; i++) {
        if (classList.item(i) === 'active-pageIndicator') {
            classList.remove('active-pageIndicator')
        }
    }

}
/*
The following click listeners add class 'active-pageIndicator' to the button clicked,
and they remove all other siblings' 'active-pageIndicator' classes.
*/
$(document).on('click', '#homeButton', function () {
    let otherTags = document.getElementsByTagName('a')
    let length = otherTags.length
    for (let i = 0; i < length; i++) {
        pageIndicatorRemove(otherTags[i])
    }
    document.getElementById('homeButton').classList.add('active-pageIndicator')
    fullpage_api.moveTo(1)
})

$(document).on('click', '#resumeButton', function () {
    let otherTags = document.getElementsByTagName('a')
    let length = otherTags.length
    for (let i = 0; i < length; i++) {
        pageIndicatorRemove(otherTags[i])
    }
    document.getElementById('resumeButton').classList.add('active-pageIndicator')
    fullpage_api.moveTo(2)
})

$(document).on('click', '#projectsButton', function () {
    let otherTags = document.getElementsByTagName('a')
    let length = otherTags.length
    for (let i = 0; i < length; i++) {
        pageIndicatorRemove(otherTags[i])
    }
    document.getElementById('projectsButton').classList.add('active-pageIndicator')
    fullpage_api.moveTo(3)
})

$(document).on('click', '#blogButton', function () {
    let otherTags = document.getElementsByTagName('a')
    let length = otherTags.length
    for (let i = 0; i < length; i++) {
        pageIndicatorRemove(otherTags[i])
    }
    document.getElementById('blogButton').classList.add('active-pageIndicator')
    fullpage_api.moveTo(4)
})

$(document).on('click', '#contactMeButton', function () {
    let otherTags = document.getElementsByTagName('a')
    let length = otherTags.length
    for (let i = 0; i < length; i++) {
        pageIndicatorRemove(otherTags[i])
    }
    document.getElementById('contactMeButton').classList.add('active-pageIndicator')
    fullpage_api.moveTo(5)
})

let sections = new Array("homeButton", "resumeButton", "projectsButton", "blogButton", "contactMeButton")
let otherTags = document.getElementsByTagName('a')
let length = otherTags.length