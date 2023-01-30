    const username = 'anujrawat22'
    GitHubCalendar(".calendar", username);

    // or enable responsive functionality:
    GitHubCalendar(".calendar", username, { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", username, {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())
