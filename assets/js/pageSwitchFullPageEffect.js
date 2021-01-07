new fullpage('#fullpage', {
    licenseKey: '24791606-92AB4851-BE66B309-10F019ED',
    autoScrolling: true,
    keyboardScrolling: true,
    navigation: true,
    navigationTooltips: ['About Me', 'My Resume', 'Personal Projects', 'Blog', 'Contact Me'],
})

$(document).on('click', '#resumeButton', function(){
    fullpage_api.moveTo(2)
})
