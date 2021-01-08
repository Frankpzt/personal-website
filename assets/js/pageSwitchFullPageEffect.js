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
    navigationTooltips: ['About Me', 'My Resume', 'Personal Projects', 'Blog', 'Contact Me'],
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
        var sections = new Array("homeButton", "resumeButton", "projectsButton", "blogButton", "contactMeButton")
        let otherTags = document.getElementsByTagName('a')
        let length = otherTags.length        
        for (let i = 0; i < length; i++) {
            pageIndicatorRemove(otherTags[i])
        }
        document.getElementById(sections[destination.index]).classList.add('active-pageIndicator')        
    }
    // onLeave: function (origin, destination, direction) {
    //     var leavingSection = this;
    //     //the following if statements handle the animation of the navBar, which ensures the animation behaves properly.
    //     //indices correspond to 'sections' which are objects defined by fullpage.js.
    //     if (origin.index == 0 && direction == 'down') {
    //         if (destination.index == 2 || destination.index == 3 || destination.index == 4) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('resumeButton').classList.add('active-pageIndicator')
    //     } else if (origin.index == 1 && direction == 'down') {
    //         if (destination.index == 3 || destination.index == 4) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('projectsButton').classList.add('active-pageIndicator')

    //     } else if (origin.index == 2 && direction == 'down') {
    //         if (destination.index == 4) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('blogButton').classList.add('active-pageIndicator')

    //     } else if (origin.index == 3 && direction == 'down') {
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('contactMeButton').classList.add('active-pageIndicator')

    //     } else if (origin.index == 0 && direction == 'up') {
    //         alert("ok！")

    //     } else if (origin.index == 1 && direction == 'up') {
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('homeButton').classList.add('active-pageIndicator')

    //     } else if (origin.index == 2 && direction == 'up') {
    //         if (destination.index == 0) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('resumeButton').classList.add('active-pageIndicator')

    //     } else if (origin.index == 3 && direction == 'up') {
    //         if (destination.index == 1 || destination.index == 0) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('projectsButton').classList.add('active-pageIndicator')


    //     } else if (origin.index == 4 && direction == 'up') {
    //         if (destination.index == 2 || destination.index == 1 || destination.index == 0) {
    //             return
    //         }
    //         let otherTags = document.getElementsByTagName('a')
    //         let length = otherTags.length
    //         for (let i = 0; i < length; i++) {
    //             pageIndicatorRemove(otherTags[i])
    //         }
    //         document.getElementById('blogButton').classList.add('active-pageIndicator')
    //     }
    // }
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