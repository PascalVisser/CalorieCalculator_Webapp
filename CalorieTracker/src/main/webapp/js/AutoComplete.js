
    // Selectors
    let source = document.querySelector('#orgname');
    let taxTarget = document.querySelector("#taxTarget");
    let detailTarget = document.querySelector("#detailTarget");
    let quantity = document.querySelector("#item-quantity");

    // Load the data and make available
    let recordsPromise = getTaxData();
    let productNamePromise = parseProductNames();
    let productDetails = parseProducts();

    // On each typed character, execute the callback function
    source.addEventListener('input', findMatchingOrganism);

    /**
    * Reads and parses a local CSV file
    * @returns {Promise(Array)} of objects with taxonomic data
    */
    async function getTaxData()  {
    let response = await fetch("../../csvfiles/nevodb.csv");
    let records = await response.text();
    // Returns a Promise
    return records;
}

    /**
    * Stores the product names and IDs
    * CSV data line by line
    * @input data {String} CSV data
    * @returns {Promise(Array)} of objects with taxonomic data
    */
    async function parseProductNames() {
    let data = await recordsPromise;
    let records = data
    .split('\n')
    .map(record => {
    // Destructuring assignment
    let elements = record.split(';');
    return {
    id: elements[3],
    name: elements[4]
}
});
    return records;
}

    /**
    * Stores all product data
    * CSV data line by line
    * @input data {String} CSV data
    * @returns {Promise(Array)} of objects with taxonomic data
    */
    async function parseProducts() {
    let data = await recordsPromise;
    let records = data
    .split('\n')
    .map(record => {
    let elements = record.split(';');
    return {
    NEVO_code: elements[3],
    Voedingsmiddelnaam: elements[4],
    ENERCJ_kJ: elements[11],
    ENERCC_kcal: elements[12],
    PROT_g: elements[14],
    FAT_g: elements[18],
    FASAT_g: elements[20],
    SUGAR_g: elements[27],
    FIBT_g: elements[30],
}
});
    return records;
}
    /**
    * Given a search query and a data set, finds matching food names
    * and displays them using the 'displayMatches' function (Part 4)
    * @input e {event} the event resulting from an 'input' event
    */
    function findMatchingOrganism(e) {
    // Clear details
    detailTarget.innerHTML = e;

    let query = e.target.value;
    if (query.length > 3) {
    // Data is available through our Promise, 'consume' using 'then'
    productNamePromise
    .then(records => {
    let matches = [];
    // Find the first 20 matches. every() runs as long as true is returned
    records.every(record => {
    // Compare case-insensitive by transforming to all lower case
    if (record.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
    matches.push(record);
}
    // TODO: this limits to 20 shown products
    return matches.length >= 5 ? false: true;
})
    displayMatches(matches, query);
})
    .catch(error => console.log("Error occurred! '" + error.message + "'"));
} else {
    // Not searching, so make sure targets are empty
    taxTarget.innerHTML = "";
    detailTarget.innerHTML = "";
}
}

    /**
    * Displays found matches using buttons and highlights the query within the match
    * @input matches {Array} of organism names
    * @input query {String} the user-entered query
    */
    function displayMatches(matches, query) {
    // Storage for HTML, note that we use an array instead of string concatenation (inefficient)
    let html = [];

    matches.forEach(match => {
    html.push(`<p class="match">
            <button onclick="fetchDetails(${match.id})" class="link">${match.name}</button>
            </p>`);
});
    taxTarget.innerHTML = highlightMatch(html.join(''), query);
}

    /**
    * Highlights all occurrences of the query
    * @input html {String} the HTML containing the <button> elements to display
    * @input query {String} the user-entered query
    * @returns {String} where all occurrences of the query are surrounded with
    *                   a <span> element
        */
        function highlightMatch(html, query) {
            let re = new RegExp(`(${query})`, 'gi');
            return html.replace(re, '<span class="highlight">$1</span>');
        }

        /**
        * Fetches all product information given a product ID (NEVO_code)
        * given a taxonomic ID. Calls the 'showDetails' function that places them in the target div
        * @input taxId {String} containing the taxonomic ID
        */
        function fetchDetails(productId) {
            productDetails.then(products => {
                const product = products.filter(p => p.NEVO_code == productId);

                showDetails(product);
            })
                .catch(error => console.log("Error!" + error));
        }
        /**
        * 'Dumps' all product information as JSON
        * @input details {Array} containing the Objects describing the full food classification
        */
        function showDetails(details) {
            // Clear search results
            taxTarget.innerHTML = details[0].Voedingsmiddelnaam;


            // Retrieving the details object with all the nutrition values so the quantity can be added
            let results = details[0];
            let foodQuantity = quantity.value;
            Object.assign(results, {quanti: foodQuantity});
            console.log(results);

            let items = [];
            // check if any items in ls
            if (localStorage.getItem('items') === null){
            items = [];
            // push new item
            items.push(results);
            // set ls
            localStorage.setItem('items', JSON.stringify(items));
        } else {
            // Get all from ls
            items = JSON.parse(localStorage.getItem('items'));


            // Push new item
            items.push(results);

            // reset ls
            localStorage.setItem('items', JSON.stringify(items));
        }
        }
