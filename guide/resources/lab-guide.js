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

            let awsLocationID = `xxxxxxxxxxxxxxxxxxxx`;
            let onPremLocationID = `xxxxxxxxxxxxxxxxxxxx`;
            let publicIP = 'X.X.X.X';
            switch (attendeeID) {
                case '01': awsLocationID = `cjv8kukd06jekh4e8h90`; onPremLocationID = `cjvc8bvw0op8o0mjj3ag`; publicIP = '54.86.247.167'; break;
                case '02': awsLocationID = `cjv8l1id0idsiva26jeg`; onPremLocationID = `cjv6ubmw0g8knhvsckj0`; publicIP = '54.210.69.232'; break;
                case '03': awsLocationID = `cjv8l5dd0s3g4kke8h9g`; onPremLocationID = `cjv6upgw0ppu2i1c9ce0`; publicIP = '44.214.63.163'; break;
                case '04': awsLocationID = `cjv8mj8d0v7a75jsumig`; onPremLocationID = `cjv6uspw0g4r4f9c9ceg`; publicIP = '52.1.51.233'; break;
                case '05': awsLocationID = `cjv8mnfd0lm1fb3esqvg`; onPremLocationID = `cjv6v2vw0ng5821c9cf0`; publicIP = '52.4.143.192'; break;
                case '06': awsLocationID = `cjv8mrmd010tjh3sumj0`; onPremLocationID = `cjv6v7fw0ubo9htk7fl0`; publicIP = '3.214.62.201'; break;
                case '07': awsLocationID = `cjv8mujd0krd77resr00`; onPremLocationID = `cjv6vaqw01v8ivlk7flg`; publicIP = '44.218.101.79'; break;
                case '08': awsLocationID = `cjv8ni0d0p3dttle9h40`; onPremLocationID = `cjv6vfhw0gr3nfqkp48g`; publicIP = '52.44.172.88'; break;
                case '09': awsLocationID = `cjv8npad00b32cvrkaug`; onPremLocationID = `cjvc8hqw0ktd4vejj3b0`; publicIP = '18.215.103.125'; break;
                case '10': awsLocationID = `cjv8nu2d0e0rnfs36uo0`; onPremLocationID = `cjv6vq5w024pqe0paldg`; publicIP = '44.204.32.221'; break;
                case '11': awsLocationID = `cjv8o1ed00hfq7t958ag`; onPremLocationID = `cjvc8rrw014019kmnhd0`; publicIP = '52.1.190.84'; break;
                case '12': awsLocationID = `cjv8o5ld0n6jg3199st0`; onPremLocationID = `cjvc938w0arpunnsckm0`; publicIP = '54.152.253.143'; break;
                case '13': awsLocationID = `cjv8o8od0r5g26frkav0`; onPremLocationID = `cjvbm35w0i1fl14a3t7g`; publicIP = '54.165.92.85'; break;
                case '14': awsLocationID = `cjv8ocnd0ial4o5958b0`; onPremLocationID = `cjvc80mw0koc5scos750`; publicIP = '54.159.10.88'; break;
                case '15': awsLocationID = `cjv8or3d01agfo3sumjg`; onPremLocationID = `cjvc7r8w0pehbpjtbevg`; publicIP = '34.206.146.96'; break;
                case '16': awsLocationID = `cjv8p20d0e1h4fd958bg`; onPremLocationID = `cjvc7mqw0oatgd9c9ci0`; publicIP = '52.3.84.194'; break;
                case '17': awsLocationID = `cjv8pj2d0mtnd53sumk0`; onPremLocationID = `cjvc707w0gsnk4jtbev0`; publicIP = '52.54.50.184'; break;
                case '18': awsLocationID = `cjv8pn1d0v7cd4h99stg`; onPremLocationID = `cjvc6s5w0rsvgt0palh0`; publicIP = '3.232.155.71'; break;
                case '19': awsLocationID = `cjv8r7jd0emk425e9h4g`; onPremLocationID = `cjvc6ouw0l39vfpc9chg`; publicIP = '52.2.44.249'; break;
                case '20': awsLocationID = `cjv8reod04r4q8ke8ha0`; onPremLocationID = `cjvc6kfw0dbik4lk7fng`; publicIP = '54.211.56.129'; break;
            }

            let attendeeAWSLocationIDs = Array.from(document.getElementsByClassName('aws-location-id'));
            attendeeAWSLocationIDs.forEach(function (attendeeAWSLocationID) {
                attendeeAWSLocationID.innerText = awsLocationID;
            });

            let attendeeOnPremLocationIDs = Array.from(document.getElementsByClassName('on-prem-location-id'));
            attendeeOnPremLocationIDs.forEach(function (attendeeOnPremLocationID) {
                attendeeOnPremLocationID.innerText = awsLocationID;
            });

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

            let attendeeAWSLocationIDs = Array.from(document.getElementsByClassName('aws-location-id'));
            attendeeAWSLocationIDs.forEach(function (attendeeAWSLocationID) {
                attendeeAWSLocationID.innerText = 'xxxxxxxxxxxxxxxxxxxx';
            });

            let attendeeOnPremLocationIDs = Array.from(document.getElementsByClassName('on-prem-location-id'));
            attendeeOnPremLocationIDs.forEach(function (attendeeOnPremLocationID) {
                attendeeOnPremLocationID.innerText = 'xxxxxxxxxxxxxxxxxxxx';
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
