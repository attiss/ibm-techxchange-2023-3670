(() => {
    'use strict'

    const placeholderPublicURL = 'https://public.txc-3670-XX.us-south.satellite.appdomain.cloud';

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 150,
        height : 150
    });
    qrcode.makeCode(placeholderPublicURL);

    // remove indentation from <pre> blocks
    document.querySelectorAll('pre').forEach(function (code) {
        let lines = code.textContent.split('\n');

        if (lines[0] === '') {
            lines.shift()
        }

        var matches;
        var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
        if (!!indentation) {
            lines = lines.map(function (line) {
                line = line.replace(indentation, '')
                return line.replace(/\t/g, '    ')
            });

            code.textContent = lines.join('\n').trim();
        }
    });

    // inject attendeeids
    attendee.addEventListener('input', function () {
        let attendee = document.getElementById('attendee');
        if (attendee.value >= 1 && attendee.value <= 25) {
            attendee.classList.remove("is-invalid");
            attendee.classList.add("is-valid");

            let attendeeID = String(attendee.value).padStart(2, '0');

            let attendeeIDComponents = Array.from(document.getElementsByClassName('attendeeid'));
            attendeeIDComponents.forEach(function (attendeeIDComponent) {
                attendeeIDComponent.innerText = attendeeID;
            });

            let publicIP = 'X.X.X.X';
            switch (attendeeID) {
                case '01': publicIP = '44.214.21.203'; break;
                case '02': publicIP = 'X.X.X.X'; break;
                case '03': publicIP = 'X.X.X.X'; break;
                case '04': publicIP = 'X.X.X.X'; break;
                case '05': publicIP = 'X.X.X.X'; break;
                case '06': publicIP = 'X.X.X.X'; break;
                case '07': publicIP = '54.210.27.68'; break;
                case '08': publicIP = '44.218.205.0'; break;
                case '09': publicIP = 'X.X.X.X'; break;
                case '10': publicIP = 'X.X.X.X'; break;
                case '11': publicIP = 'X.X.X.X'; break;
                case '12': publicIP = 'X.X.X.X'; break;
                case '13': publicIP = 'X.X.X.X'; break;
                case '14': publicIP = 'X.X.X.X'; break;
                case '15': publicIP = 'X.X.X.X'; break;
                case '16': publicIP = 'X.X.X.X'; break;
                case '17': publicIP = 'X.X.X.X'; break;
                case '18': publicIP = 'X.X.X.X'; break;
                case '19': publicIP = 'X.X.X.X'; break;
                case '20': publicIP = 'X.X.X.X'; break;
            }

            let attendeePublicIPs = Array.from(document.getElementsByClassName('attendee-public-ip'));
            attendeePublicIPs.forEach(function (attendeePublicIP) {
                attendeePublicIP.innerText = publicIP;
            });

            let publicURL = `https://public.txc-3670-${attendeeID}.us-south.satellite.appdomain.cloud`
            let attendeePublicURL = document.getElementById('attendee-public-url');
            attendeePublicURL.setAttribute('href', publicURL);

            qrcode.makeCode(publicURL);

            let attendeePrivateURL = document.getElementById('attendee-private-url');
            attendeePrivateURL.setAttribute('href', `https://intranet-${attendeeID}.txc3670.private`);

            setCookie('attendee', attendee.value, 1);
        } else {
            attendee.classList.remove("is-valid");
            attendee.classList.add("is-invalid");

            let attendeeIds = Array.from(document.getElementsByClassName('attendeeid'));
            attendeeIds.forEach(function (attendeeId) {
                attendeeId.innerText = 'XX';
            });

            let attendeePublicIPs = Array.from(document.getElementsByClassName('attendee-public-ip'));
            attendeePublicIPs.forEach(function (attendeePublicIP) {
                attendeePublicIP.innerText = 'X.X.X.X';
            });

            let attendeePublicURL = document.getElementById('attendee-public-url');
            attendeePublicURL.setAttribute('href', placeholderPublicURL);

            qrcode.makeCode(placeholderPublicURL);

            let attendeePrivateURL = document.getElementById('attendee-private-url');
            attendeePrivateURL.setAttribute('href', 'https://intranet-XX.txc3670.private');
        }
    });

    // activate tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltip => {
        new bootstrap.Tooltip(tooltip, {
            trigger: 'hover'
        })
    })

})()

// copy to clipboard
async function copyContent(id) {
    const text = document.getElementById(id).innerText;

    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error(`Failed to copy content to clipboard: ${err}`);
        return
    }

    const tooltip = bootstrap.Tooltip.getInstance(`#${id}-btn`);
    tooltip.setContent({ '.tooltip-inner': 'copied' });
    setTimeout(() => { tooltip.setContent({ '.tooltip-inner': 'copy to clipboard' }); }, 2000);
}

// set cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

// get cookie
function getCookie(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// check cookie on load
function checkCookie() {
    let email = getCookie('attendee');
    if (email) {
        let attendee = document.getElementById('attendee');
        attendee.value = email;

        const event = new Event('input');
        attendee.dispatchEvent(event);
    }
}
