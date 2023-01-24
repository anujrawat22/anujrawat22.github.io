const GitHubCalendar = require('github-calendar')
const username = 'anujrawat22'
GitHubCalendar(".calendar", "your-username");

// or enable responsive functionality:
GitHubCalendar(".calendar", "your-username", { responsive: true });

// Use a proxy
let res = GitHubCalendar(".calendar", "your-username", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())

console.log(res)