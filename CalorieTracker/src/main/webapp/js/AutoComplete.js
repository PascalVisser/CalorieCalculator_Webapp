
    // Selectors
    let source = document.querySelector('#orgname');
    let taxTarget = document.querySelector("#taxTarget");
    let detailTarget = document.querySelector("#detailTarget");

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
    // TODO: place the 'nevodb.csv' file in i.e. a /webapp/data folder and change the path correctly: '/data/nevodb.csv'
    let response = await fetch("../csvfiles/nevodb.csv");
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
    Voedingsmiddelgroep: elements[1],
    Food_group: elements[2],
    NEVO_code: elements[3],
    Voedingsmiddelnaam: elements[4],
    Engelse_naam: elements[5],
    Synoniem: elements[6],
    Hoeveelheid: elements[7],
    Opmerking: elements[8],
    Bevat_sporen_van: elements[9],
    Is_verrijkt_met: elements[10],
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
    return matches.length >= 5 ? false : true;
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
            console.log(productId);
            productDetails
            .then(products => {
            const product = products.filter(p => p.NEVO_code == productId);
            console.log(product);
            showDetails(product);
        })
            .catch(error => console.log("Error!" + error));
        }
        /**
        * 'Dumps' all product information as JSON
        * @input details {Array} containing the Objects describing the full food classification
        */
        let allFoods = [];
        let foodName = "";

        function showDetails(details) {
            // Clear search results
            taxTarget.innerHTML = details[0].Voedingsmiddelnaam;
            // TODO: present the required fields in i.e. a table, providing an option to enter the amount
            // detailTarget.innerHTML = `<h4>Product Details</h4><hr/><pre>${JSON.stringify(details[0].Voedingsmiddelnaam, null, 2)}</pre>`;
            detailTarget.innerHTML = `<h4>Product Details</h4><hr/><pre>${JSON.stringify(details)}</pre>`;

            let result = [];


            // detailTarget.innerHTML =  '<hr/> <pre> ${JSON.stringify(details, null, 2)}</pre>';
            // var getbackMyJSON = $(details[0].Voedingsmiddelnaam).data('key');
            // document.getElementById('VoedingNaam').innerHTML = getbackMyJSON;

            // Parse the serialized data back into an aray of objects
            allFoods = JSON.parse(localStorage.getItem('AllMyFoods')) || [];
            // Push the new data (whether it be an object or anything else) onto the array
            allFoods.push(details);
            // Alert the array value
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem('AllMyFoods', JSON.stringify(allFoods));
        }
        function clearing() {
            localStorage.clear();
        }

        const showMovies = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            console.log(localStorage.getItem("MyListOfFoods"))
        }

        function passvalues(details){
            allFoods.push(details)
            localStorage.setItem('MyListOfFoods', JSON.stringify(allFoods) );
            return false;
        }

        function getFoodName(details){
            var getbackMyJSON = $(details[0].Voedingsmiddelnaam).data('key');
            document.getElementById('VoedingNaam').innerHTML = getbackMyJSON;
            return getbackMyJSON;
        }