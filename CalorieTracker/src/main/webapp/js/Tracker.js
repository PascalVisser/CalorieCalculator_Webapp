// Storage Controller
const StorageCtrl = (function (){
    // Public methods
    return {
        storeItem: function (item) {
            let items;
            console.log(item)
            // check if any items in ls
            if (localStorage.getItem('items') === null) {
                items = [];
                // push new item
                items.push(item);
                // set ls
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get all from ls
                items = JSON.parse(localStorage.getItem('items'));

                // Push new item
                items.push(item);

                // reset ls
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function () {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },

        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function (item, index) {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            })
            localStorage.setItem('items', JSON.stringify(items));

        },
        deleteItemFromStorage: function (id) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function (item, index) {
                if (id === item.id) {
                    items.splice(index, 1);
                }
            })
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function () {
            localStorage.removeItem('items');
            localStorage.removeItem('AllMyFoods');
        },


        // GetTheItems
        CheckForItem0: function () {
            let items;
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length > 0) {
                items = {
                    id: items[0].NEVO_code,
                    name: items[0].Voedingsmiddelnaam,
                    kj: (parseFloat(items[0].ENERCJ_kJ)),
                    kcal: (parseFloat(items[0].ENERCC_kcal)),
                    protien: (parseFloat(items[0].PROT_g)),
                    fat: (parseFloat(items[0].FAT_g)),
                    fasat: (parseFloat(items[0].FASAT_g)),
                    sugar: (parseFloat(items[0].SUGAR_g)),
                    fiber: (parseFloat(items[0].FIBT_g))
                }
            } else {
                items = {
                    id: '',
                    name: '',
                    kj: 0,
                    kcal: 0,
                    protien: 0,
                    fat: 0,
                    fasat: 0,
                    sugar: 0,
                    fiber: 0
                }
            }
            return items;

        },

        CheckForItem: function () {
            let items;
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length > 1) {
                items = {
                    id: items[1][0].NEVO_code,
                    name: items[1][0].Voedingsmiddelnaam,
                    kj: (parseFloat(items[1][0].ENERCJ_kJ)),
                    kcal: (parseFloat(items[1][0].ENERCC_kcal)),
                    protien: (parseFloat(items[1][0].PROT_g)),
                    fat: (parseFloat(items[1][0].FAT_g)),
                    fasat: (parseFloat(items[1][0].FASAT_g)),
                    sugar: (parseFloat(items[1][0].SUGAR_g)),
                    fiber: (parseFloat(items[1][0].FIBT_g))
                }
            } else {
                items = {
                    id: '',
                    name: '',
                    kj: 0,
                    kcal: 0,
                    protien: 0,
                    fat: 0,
                    fasat: 0,
                    sugar: 0,
                    fiber: 0,
                }
            }
            return items;

        },

        CheckForItem2: function () {
            let items;
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length > 2) {
                items = {
                    id: items[2][0].NEVO_code,
                    name: items[2][0].Voedingsmiddelnaam,
                    kj: (parseFloat(items[2][0].ENERCJ_kJ)),
                    kcal: (parseFloat(items[2][0].ENERCC_kcal)),
                    protien: (parseFloat(items[2][0].PROT_g)),
                    fat: (parseFloat(items[2][0].FAT_g)),
                    fasat: (parseFloat(items[2][0].FASAT_g)),
                    sugar: (parseFloat(items[2][0].SUGAR_g)),
                    fiber: (parseFloat(items[2][0].FIBT_g))
                }
            } else {
                items = {
                    id: '',
                    name: '',
                    kj: 0,
                    kcal: 0,
                    protien: 0,
                    fat: 0,
                    fasat: 0,
                    sugar: 0,
                    fiber: 0,
                }
            }
            return items;

        },

        CheckForItem3: function () {
            let items;
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length > 3) {
                items = {
                    id: items[3][0].NEVO_code,
                    name: items[3][0].Voedingsmiddelnaam,
                    kj: (parseFloat(items[3][0].ENERCJ_kJ)),
                    kcal: (parseFloat(items[3][0].ENERCC_kcal)),
                    protien: (parseFloat(items[3][0].PROT_g)),
                    fat: (parseFloat(items[3][0].FAT_g)),
                    fasat: (parseFloat(items[3][0].FASAT_g)),
                    sugar: (parseFloat(items[3][0].SUGAR_g)),
                    fiber: (parseFloat(items[3][0].FIBT_g))
                }
            } else {
                items = {
                    id: '',
                    name: '',
                    kj: 0,
                    kcal: 0,
                    protien: 0,
                    fat: 0,
                    fasat: 0,
                    sugar: 0,
                    fiber: 0,
                }
            }
            return items;

        },

        CheckForItem4: function () {
            let items;
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length > 4) {
                items = {
                    id: items[4][0].NEVO_code,
                    name: items[4][0].Voedingsmiddelnaam,
                    kj: (parseFloat(items[4][0].ENERCJ_kJ)),
                    kcal: (parseFloat(items[4][0].ENERCC_kcal)),
                    protien: (parseFloat(items[4][0].PROT_g)),
                    fat: (parseFloat(items[4][0].FAT_g)),
                    fasat: (parseFloat(items[4][0].FASAT_g)),
                    sugar: (parseFloat(items[4][0].SUGAR_g)),
                    fiber: (parseFloat(items[4][0].FIBT_g))
                }
            } else {
                items = {
                    id: '',
                    name: '',
                    kj: 0,
                    kcal: 0,
                    protien: 0,
                    fat: 0,
                    fasat: 0,
                    sugar: 0,
                    fiber: 0
                }
            }
            return items;

        }
    }

})();



// Item controller
const ItemCtrl = (function (){
    const json = localStorage.getItem('items');
    const parseJson = JSON.parse(json);
    // Item constructor
    const Item = function (nevoCode, name, kj, kcal, protien, fat, fasat, sugar, fiber){
        this.id = nevoCode;
        this.name = name;
        this.kj = energieKj;
        this.kcal = kcal;
        this.protien = protien;
        this.fat = fat;
        this.fasat = fasat;
        this.sugar = sugar;
        this.fiber = fiber;
    }
    // Data Structure

    const data = {
        items : [
            {id : StorageCtrl.CheckForItem0().id, name:StorageCtrl.CheckForItem0().name, kcal: StorageCtrl.CheckForItem0().kcal},
            {id : StorageCtrl.CheckForItem().id, name:StorageCtrl.CheckForItem().name, kcal: StorageCtrl.CheckForItem().kcal},
            {id : StorageCtrl.CheckForItem2().id, name:StorageCtrl.CheckForItem2().name, kcal: StorageCtrl.CheckForItem2().kcal},
            {id : StorageCtrl.CheckForItem3().id, name:StorageCtrl.CheckForItem3().name, kcal: StorageCtrl.CheckForItem3().kcal},
            {id : StorageCtrl.CheckForItem4().id, name:StorageCtrl.CheckForItem4().name, kcal: StorageCtrl.CheckForItem4().kcal}
        ],
        //items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }


    // Public methods
    return {
        getItems: function (){
            return data.items;
        },
        addItem : function (name,kcal){
            // create Id
            let ID;
            if (data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // calories to number
            kcal = parseInt(kcal);

            // create new item
            newItem = new Item(ID, name, kcal);

            // add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function (id){
            let found = null;
            // loop through items
            data.items.forEach(function (item){
                if(item.id === id){
                    found = item;

                }
            });
            return found;
        },

        updateItem: function (name, kcal){
            // calories to number
            kcal = parseInt(kcal);

            let found = null;

            data.items.forEach(function (item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.kcal = kcal;
                    found = item;
                }
            });
            return found
        },

        deleteItem: function (id){

            const ids = data.items.map(function (item){
                return item.id;
            });

            // Get Index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);
        },
        clearAllItems: function (){
            data.items = [];
        },

        setCurrentItem: function(item){
            data.currentItem = item;
        },

        getCurrentItem: function (){
            return data.currentItem;
        },

        getTotalCalories: function (){
            let total = 0;

            // loop trough items and add cal

            data.items.forEach(function (item){
                total += item.kcal;
            });

            // set total cal in data structure

            data.totalCalories = total;

            return data.totalCalories;

        },
        logData: function (){
            return data;
        }
    }
})();

// UI controller
const UICtrl = (function (){
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        //addBtn: '.add-btn',
        addBtn2: '.link',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput : '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // public methods
    return {
        populateItemList : function (items){
            let html = '';

            items.forEach(function (item){
                html += `<li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong>
                        <em>${item.kcal} Calories</em>
                <a href="#" class="secondary-content">
                <i class = "edit-item">change</i>
                </a>
                </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML=
                html;
        },
        getItemInput : function (){
            return{
                // name: document.querySelector(UISelectors.itemNameInput).value,
                // calories: document.querySelector(UISelectors.itemCaloriesInput).value

            }
        },
        addListItem: function (item){
            // show list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // create li element
            const li = document.createElement('li');
            // add class
            li.className = 'collection-item';
            li.id = `item-${item.id}`;

            // add HTML
            li.innerHTML = `<strong>${item.name}: </strong>
                        <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class = "edit-item">change</i>
                </a>`;

            // insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li)
        },
        updateListItem: function (item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (listItem){
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong>
                        <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class = "edit-item">change</i>
                </a>`;
                }

            });
        },
        deleteListItem: function (id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },

        clearInput: function (){
            // document.querySelector(UISelectors.itemNameInput).value = '';
            // document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function (){
            // document.querySelector(UISelectors.itemNameInput).value =
            //     ItemCtrl.getCurrentItem().name;
            // document.querySelector(UISelectors.itemCaloriesInput).value =
            //     ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function (){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn Node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (item){
                item.remove();
            });
        },

        hideList : function (){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function (totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;

        },
        clearEditState: function (){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            // document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },

        showEditState: function (){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            // document.querySelector(UISelectors.addBtn).style.display = 'none';
        },


        getSelectors: function (){
            return UISelectors;
        }
    }
})();


// App controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl){
    // load event listeners
    const loadEventListeners = function (){
        // get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event

        // document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function (e){
            if (e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });

        // edit change event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // clear item event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);



    }

    // add item submit
    const itemAddSubmit = function (e){
        // get form ip
        const input = UICtrl.getItemInput();
        let number = 0;
        console.log(number);

        // check for name and calorie input
        if (input.name !== '' && input.calories !== ''){
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // Add item to Ui list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // add total calories to ui
            UICtrl.showTotalCalories(totalCalories);

            // Store local storage
            StorageCtrl.storeItem(newItem);

            // Clear fields
            UICtrl.clearInput();


        }

        e.preventDefault();
    }

    // Update item submit
    const itemEditClick = function (e){
        if(e.target.classList.contains('edit-item')){
            // Get List Item id
            const listId= e.target.parentNode.parentNode.id;

            // break into array
            const listIdArr = listId.split('-');

            // Get the actual id
            const id = parseInt(listIdArr[1]);

            //get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);


            // add item to form

            UICtrl.addItemToForm();

        }

        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function (e){
        // get item input
        const input = UICtrl.getItemInput();

        // update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // Update Ui

        UICtrl.updateListItem(updatedItem);

        const totalCalories = ItemCtrl.getTotalCalories();
        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // Update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // Delete button event
    const itemDeleteSubmit = function (e){
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from Ui
        UICtrl.deleteListItem(currentItem.id);


        const totalCalories = ItemCtrl.getTotalCalories();
        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // Delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // clear item event
    const clearAllItemsClick = function (){
        // delete all items from data structue
        ItemCtrl.clearAllItems();

        const totalCalories = ItemCtrl.getTotalCalories();
        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // Remove from UI
        UICtrl.removeItems();

        // clear from ls
        StorageCtrl.clearItemsFromStorage();

        // hide UL
        UICtrl.hideList();
    }

    // Public Methods
    return{
        init: function (){

            // CLEAR edit state
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items
            if (items.length === 0){
                UICtrl.hideList();
            } else {
                // populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // add total calories to ui
            UICtrl.showTotalCalories(totalCalories);


            // load event listeners
            loadEventListeners();

        }
    }

})(ItemCtrl,StorageCtrl,UICtrl);

//initialize app
App.init();