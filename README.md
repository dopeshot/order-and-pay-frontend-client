# Frontend Client

Das Clientfrontend zeigt die Sicht des Kunden und somit den Bestellablauf.

## Das Projekt starten

Im Docker:

    docker-compose up

Das Clientfrontend ist dann erreichbar auf Port [4000](http://localhost:4000)

Normal mit npm:

    npm i
    npm run start

Das Clientfrontend ist dann erreichbar auf Port [3000](http://localhost:3000/login)

Tests:
(Setzen das laufende Frontend über npm voraus)
    
    npm run test

oder

    npm run cypress:open


## Deploy

Das gehostete Client Frontend ist [hier](https://dopeshot.coffee/menu) erreichbar
