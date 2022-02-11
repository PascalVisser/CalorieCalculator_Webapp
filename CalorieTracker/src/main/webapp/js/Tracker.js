// Storage Controller
const StorageCtrl = (function (){
    // Public methods
    return {
        getItemsFromStorage: function () {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },

        clearItemsFromStorage: function () {
            localStorage.removeItem('items');
        }
    }
})();



// Item controller
const ItemCtrl = (function (){
    // Data Structure

    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }


    // Public methods
    return {
        getItems: function (){
            const json = localStorage.getItem('items');
            const parseJson = JSON.parse(json);
            return parseJson;
        },

        getItemById: function (id){
            let found = null;
            const json = localStorage.getItem('items');
            const parseJson = JSON.parse(json);
            // loop through items
            parseJson.forEach(function (item){
                if(item.NEVO_code === id){
                    found = item;
                }
            });
            return found;
        },

        clearAllItems: function (){
            data.items = [];
        },

        setCurrentItem: function(item){
            data.currentItem = item;
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
        addBtn: '',
        quantity: '#item-quantity',
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
                html += `<li class="collection-item" id="item-${item.NEVO_code}">
                        <strong>${item.Voedingsmiddelnaam}: </strong>
                        <em>${(item.ENERCC_kcal * item.quanti)} Calories</em>
                <a href="#" class="secondary-content">
                         
                   
                </a>
                </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML=
                html;
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

        getSelectors: function (){
            return UISelectors;
        }
    }
})();


// App controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl){
    // load event listeners
    const loadEventListeners = function (product){
        // get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Disable submit on enter
        document.addEventListener('keypress', function (e){
            if (e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });

        // clear item event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);



    }

    // clear item event
    const clearAllItemsClick = function (){
        // delete all items from data structue
        ItemCtrl.clearAllItems();


        // Remove from UI
        UICtrl.removeItems();

        // clear from ls
        StorageCtrl.clearItemsFromStorage();

        // hide UL
        UICtrl.hideList();
    }

    // Public Methods
    return{
        init: function (Product){

            // CLEAR edit state
            // UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items
            if (items.length === 0){
                UICtrl.hideList();
            } else {
                // populate list with items
                UICtrl.populateItemList(items);
            }

            // load event listeners
            loadEventListeners(Product);


        }

    }

})(ItemCtrl,StorageCtrl,UICtrl);

//initialize app
App.init();