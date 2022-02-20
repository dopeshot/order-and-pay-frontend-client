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
(die Live-Version kann natürlich von der Submission-Version abweichen)


## Bekannte Einschränkungen

Es gibt zwar einen Table im State und dieser wird auch in der Order mitgegeben, aber aktuell gibt es noch keine Möglichkeiten diesen zu setzen.
Plan ist es diesen anhand von query parametern in der url (Siehe qr code generator im Backend) beim ersten Aufrufen des Client Frontends zu setzen.  
(Es wird default von Tischnummer 1 verwendet)
