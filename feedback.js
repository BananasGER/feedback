const webhookURL = "Vm0wd2QyUXlWa1pOVldSWVltdHdVRlp0TVZOWFJteFZVbTVrYWxKc1ducFdNalZyVmpGYWRHVkdXbFpXZWxaeVZtcEdTMk14WkhOWGJGcFhUVEZHTTFac1VrZFRNazE0V2toT2FGSnRVazlaYlhOM1pVWmFkR05GWkZwV01EVjZWMnRvVDJGR1NuTmpSVGxhWWxob1RGWXhXbUZXVms1eFZXeFNUbFl4U2tsV2JUQXhVekZzVjFOdVVsWmlWR3hXVm14YVMxZEdWbk5YYlVaWFRWaENSbFZYTVhkVWJGcFpVVmhrVjJKVVJYZFhWbVJIWXpGT2RWTnJPVmRsYlhoWFZtMHhOR1F5UmtkalJXUllZbFZhV0ZSV2FFTlNiRnBZWlVaT1ZXSkdjSHBaTUZaVFZqRmFWMk5HVG1GU1JWcEVWbGQ0UTFaVk1VVk5SREE5";
const webhookURL2 = "Vm0wd2QyVkhVWGhUV0doWVltdHdVRlp0TVZOWFZteDBaRWhrYWxKc1ducFdNalZyVmpGS2RHVkliRmRpUmtwSVZtcEdTMk15VGtkWGJGcFhUVEZHTTFac1pIcGxSbHB5VGxaa1lWSnRVazlaYlhOM1pVWmFjMVZyWkZSTmF6RTFWa2QwYTFsV1NuTlhiR2hYWWxoU1lWcFhlR0ZXYkdSeVYyeENWMkV3Y0ZSV1ZWcFNaREZDVWxCVU1EMD0=="
const webhookURL3 = "VWXgwd2QyUXlWa1pOVldSWVSAwdHdVRlp0TVZOWFJteFZVbTVrYWxKc1ducFdNalZySAWFdsAWDAVEDSWAVkdXbFpXZWxaeVZtcEdTMk14WkhOWGJGcFhUVEZHTTFac1VrZFRNazE0V2toT2FGSnRVazlaYlhOM1pVWmFkR05GWkZwV01EVjZWMnRvVDJGR1NuTmpSVGxhWWxob1RGWXhXbUZXVms1eFZXeFNUbFl4U2tsV2JUQXhVekZzVjFOdVVsWmlWR3hXVm14YVMxZEdWbk5YYlVaWFRWaENSbFZYTVhkVWJGcFpVVmhrVjJKVVJYZFhWbVJIWXpGT2RWTnJPVmRsYlhoWFZtMHhOR1F5UmtkalJXUllZbFZhV0ZSV2FFTlNiRnBZWlVaT1ZXSkdjSHBaTUZaVFZqRmFWMk5HVG1GU1JWcEVWbGQ0UTFaVk1VVk5SREE5"
const webhookURL4 = "V1ZWb1UwMUhUa2xVVkZwTlpWUnNjbGxXYUU5aGJVbDZVMjEwVFdKVk5USlpiRTAxWVVkT1NHRXpXbXROYkZwd1dWVmpOV1J0UlhwVVdGcE9Wa1pXTkZSVlVrNU9WVEZWVVZSQ1QxWkZSalpVVmxKQ1RUQXhWVmw2Vms5VmVtdDZXV3BHYjFKVk1IcFdXR3hwWlcxamQxUnJXa1pOVm1SeVpFWmtWRTF0VWxkWlZXaEhaVVU1UmxwSVJtRmxhMXBIVmxkd1dtVnNUa1pqZWxaWFlteEpNVmR1Y0hKTlZUbEpVMnRhVTFKNlZsZFdWRWwzWlZabmQwNVdTbXhXTTJoV1ZteG9jMVF3T1VoTlZGWk9UVEExVlZscVRsTmtNbFpDVUZRd1BRPT0="

function multiDecodeBase64(str, times) {
    let decoded = str;

    for (let i = 0; i < times; i++) {
        decoded = atob(decoded);
    }

    return decoded;
}

function submitComplaint() {
    const webhookURLfinish = multiDecodeBase64(webhookURL4, 4);

    const banana = document.getElementById("banana").value;
    const banana2 = document.getElementById("banana2").value.trim() || "Keine Angabe";

    const watchtime = document.getElementById("watchtime").value;
    const watchtime2 = document.getElementById("watchtime2").value.trim() || "Keine Angabe";

    const sheets = document.getElementById("sheets").value;
    const sheets2 = document.getElementById("sheets2").value.trim() || "Keine Angabe";

    const abmeldung = document.getElementById("abmeldung").value;
    const abmeldung2 = document.getElementById("abmeldung2").value.trim() || "Keine Angabe";

    const feedback = document.getElementById("feedback").value;

    const weiteres = document.getElementById("weiteres").value.trim() || "Keine Angabe";

    if (
        !banana ||
        !watchtime ||
        !sheets ||
        !abmeldung ||
        !feedback
    ) {
        alert("Bitte fülle alle Pflichtfelder aus.");
        return;
    }

    const embed = {
        title: "📩 Neues Team-Feedback",
        description: "Ein neues anonymes Feedback wurde eingereicht.",
        color: 0x00ff99,
        timestamp: new Date().toISOString(),
        fields: [
            {
                name: "🍌 Zufriedenheit mit BananaGER",
                value: banana,
                inline: false
            },
            {
                name: "🍌 Verbesserungsvorschläge für BananaGER",
                value: banana2,
                inline: false
            },
            {
                name: "⏰ Zufriedenheit mit der 3h Watchtime-Regel",
                value: watchtime,
                inline: false
            },
            {
                name: "⏰ Verbesserungsvorschläge Watchtime-Regel",
                value: watchtime2,
                inline: false
            },
            {
                name: "📊 Zufriedenheit mit Google Sheets",
                value: sheets,
                inline: false
            },
            {
                name: "📊 Verbesserungsvorschläge Google Sheets",
                value: sheets2,
                inline: false
            },
            {
                name: "📅 Zufriedenheit mit der Abmeldungs-Regel",
                value: abmeldung,
                inline: false
            },
            {
                name: "📅 Verbesserungsvorschläge Abmeldungs-Regel",
                value: abmeldung2,
                inline: false
            },
            {
                name: "💡 Feedback-Runde alle paar Monate/Jahre",
                value: feedback,
                inline: false
            },
            {
                name: "📝 Weitere Themen oder Vorschläge",
                value: weiteres,
                inline: false
            }
        ]
    };

    fetch(webhookURLfinish, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [embed]
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Feedback erfolgreich gesendet!");

            document.getElementById("banana").selectedIndex = 0;
            document.getElementById("banana2").value = "";

            document.getElementById("watchtime").selectedIndex = 0;
            document.getElementById("watchtime2").value = "";

            document.getElementById("sheets").selectedIndex = 0;
            document.getElementById("sheets2").value = "";

            document.getElementById("abmeldung").selectedIndex = 0;
            document.getElementById("abmeldung2").value = "";

            document.getElementById("feedback").selectedIndex = 0;
            document.getElementById("weiteres").value = "";
        } else {
            alert("Fehler beim Senden des Feedbacks.");
        }
    })
    .catch(error => {
        console.error(error);
        alert("Fehler beim Senden des Feedbacks.");
    });
}