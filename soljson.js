// fetch and eval soljson directly
fetch("https://unpkg.com/solc@0.8.26/soljson.js").then(r=>r.text()).then(t=>eval(t));
