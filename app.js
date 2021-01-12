
const { Component, Store, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useState } = owl.hooks;

const APP_TEMPLATE = xml /* xml */`
   <div class="task-list">
   		<div class="heading">Shopping App
			    <div class="shopping-app">
				    	<input placeholder="Search product.." t-on-keyup="searchFunction"/>
						 <t t-foreach="products" t-as="product" t-key="product.id">
				            <div class="task">
				                <span><t t-esc="product.product_name"/></span>
				   				<span>Rs. <t t-esc="product.product_price"/></span>
				   				<button type="button" t-att-id="product.id" t-on-click="addTask">Add to cart</button>
				            </div> 
				        </t>
				</div>
		</div>
	    <div class="cartstore">
			<span><t t-set="total" t-value="0"/></span>
				<t t-foreach="tasks" t-as="task" t-key="task.id">
					<span><t t-set="maintotal" t-value="total + products[task.p_id-1].product_price"/></span>
					<span><t t-esc="products[task.p_id-1].product_name"/></span>
					<span class="delete" t-att-id="task.p_id" t-on-click="deleteTask">🗑</span>
			    </t>
			<span><t t-esc="maintotal"/></span>
		</div>
	</div>`;
	// Owl Components
	class App extends Component {
	    static template = APP_TEMPLATE;

	    addTask(ev) {
	        const p_id = ev.target.id;
	            if (p_id && (!this.tasks.find(t => parseInt(t.p_id) == parseInt(p_id)))) {
		            const newTask = {
		                p_id: p_id,
		            };
		            this.tasks.push(newTask);
		        	}
	    }
	    deleteTask(ev) {
		    const index = this.tasks.findIndex(t => t.p_id == ev.target.id);
		    this.tasks.splice(index, 1);
		}

		/*function searchFunction() {
            var input, filter, main, div, div2, i, inputValue;
            input = document.getElementById("searchdata");
            filter = input.value.toUpperCase();
            main = document.getElementById("myData");
            div = main.getElementsByClassName("cards");
            for (i = 0; i < div.length; i++) {
                div2 = div[i].getElementsByTagName("div")[0];
                if (div2) {
                    inputValue = div2.textContent || div2.innerText;
                    if (inputValue.toUpperCase().indexOf(filter) > -1) {
                        div[i].style.display = "";
                    } else {
                        div[i].style.display = "none";
                    }
                }
            }
        }*/


	  tasks = useState([]);
	  products = [
	    {
	      "id": 1,
	      "product_name": "Bag",
	      "product_price": 800,
	    },
	    {
	      "id": 2,
	      "product_name": "phone",
	      "product_price": 20000,
	    },
	    {
	      "id": 3,
	      "product_name": "Tablet",
	      "product_price": 15000,
	    },
	    {
	      "id": 4,
	      "product_name": "HandsFree",
	      "product_price": 1000,
	    },

	  ];
	}
	function setup() {
		const app = new App();
		 app.mount(document.body);
	}

	whenReady(setup);
