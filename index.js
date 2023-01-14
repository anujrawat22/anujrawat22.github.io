GitHubCalendar(".react-activity-calendar", "your-username");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "your-username", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "your-username", {
       proxy (anujrawat22) {
         return fetch(`https://your-proxy.com/github?user=${anujrawat22}`)
       }
    }).then(r => r.text())