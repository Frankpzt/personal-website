/*Handles the pop-up sections in resume/professional experience page*/
document.getElementById('professional__org-goldenLakes').addEventListener("click", function viewDetail(){
    document.getElementById('org__goldenLakes-popup').style.display = 'block'
    document.getElementById('resume__professional-wrapper').classList.add('blur')

});

document.getElementById('org__goldenLakes-popup').addEventListener("click", function viewDetail(){
    document.getElementById('org__goldenLakes-popup').style.display = 'none'
    document.getElementById('resume__professional-wrapper').classList.remove('blur')

});
document.getElementById('professional__org-space').addEventListener("click", function viewDetail(){
    document.getElementById('org__space-popup').style.display = 'block'
    document.getElementById('resume__professional-wrapper').classList.add('blur')

});

document.getElementById('org__space-popup').addEventListener("click", function viewDetail(){
    document.getElementById('org__space-popup').style.display = 'none'
    document.getElementById('resume__professional-wrapper').classList.remove('blur')

});

/* try to let user to turn-off the popup by clicking anywhere in the browser but failed, wish someone can help me*/

// document.addEventListener("click", function viewDetail(){
//     document.getElementById('org__space-popup').style.display = 'none'
//     document.getElementById('org__goldenLakes-popup').style.display = 'none'
// })

/*Handles the pop-up sections in resume/education page*/
