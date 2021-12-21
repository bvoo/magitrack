const scryfall = require("scryfall");
// get user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function searchCard(cardName) {
    let card = scryfall.autocomplete(cardName).then(function(data) {
        console.log("search:", data);
        let search = getCardByName(data)
        return search
    }).catch(function(err) {
        console.log("search error:", err);
        return err
    });
    return card
}

function getCardByName(cardName) {
    let card = scryfall.getCardByName(cardName, {fuzzy: true}).then(function(data) {
        // console.log("get:", data);
        return data;
    }).catch(function(err) {
        console.log("get error:", err);
        return err
    });
    return card
}

rl.question('Enter a card name: ', (answer) => {
    searchCard(answer[0]).then(function(data) {
        console.log("card:", data.name);
        console.log("image:", data.image_uris.normal);
        console.log("prices:", data.prices);
        console.log("scryfall url:", data.scryfall_uri);
        console.log("langauges:", data.lang);
    }).catch(function(err) {
        console.log("error:", err);
    });
    rl.close();
});