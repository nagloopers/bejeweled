(function () {
  var grid = document.getElementById("game-grid");
  var empty = document.getElementById("empty-state");
  var count = document.getElementById("game-count");
  var games = window.GAMES || [];

  function card(game, index) {
    var el = document.createElement("a");
    el.className = "game-card";
    el.href = "play.html?game=" + encodeURIComponent(game.slug);
    el.style.setProperty("--i", index);

    var cover = document.createElement("div");
    cover.className = "card-cover";
    if (game.cover) {
      var img = document.createElement("img");
      img.src = game.cover;
      img.alt = "";
      img.loading = "lazy";
      img.addEventListener("error", function () { img.remove(); });
      cover.appendChild(img);
    } else {
      cover.textContent = "🎮";
      cover.classList.add("no-image");
    }
    el.appendChild(cover);

    var body = document.createElement("div");
    body.className = "card-body";

    if (game.tag) {
      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = game.tag;
      body.appendChild(badge);
    }

    var title = document.createElement("h3");
    title.textContent = game.title;
    body.appendChild(title);

    if (game.description) {
      var desc = document.createElement("p");
      desc.textContent = game.description;
      body.appendChild(desc);
    }

    var play = document.createElement("span");
    play.className = "card-play";
    play.textContent = "▶ Play";
    body.appendChild(play);

    el.appendChild(body);
    return el;
  }

  if (games.length === 0) {
    grid.remove();
    empty.classList.remove("hidden");
    count.textContent = "no games yet";
  } else {
    games.forEach(function (game, i) { grid.appendChild(card(game, i)); });
    count.textContent = games.length + (games.length === 1 ? " game" : " games");
  }
})();
