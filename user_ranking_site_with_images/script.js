fetch("data/Users.csv")
  .then(response => response.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const users = results.data;
        renderStories(users);
        renderRankings(users);
      }
    });
  });

function renderStories(users) {
  const container = document.getElementById("story-bar");
  users.forEach(user => {
    const item = document.createElement("div");
    item.className = "story-item";
    item.innerHTML = `
      <img src="img/users/${user.Username}.jpg" alt="${user.Username}">
      <div>${user.Username}</div>
    `;
    container.appendChild(item);
  });
}

function renderRankings(users) {
  const ranks = ["Beginner", "Bronze", "Silver", "Gold", "Platinum", "Sapphire", "Diamond"];
  const container = document.getElementById("rankings");

  users.forEach((user, i) => {
    const badge = document.createElement("div");
    badge.className = "badge";
    const rank = ranks[i] || "Unknown";
    badge.innerHTML = `
      <img src="img/levels/${i}.jpg" alt="${rank}">
      <div>${user.Username} – ${rank}</div>
    `;
    container.appendChild(badge);
  });
}

