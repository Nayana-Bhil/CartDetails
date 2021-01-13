
const { Component, Store, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useState, useDispatch, useStore } = owl.hooks;

const actions = {
		addTask({ state }, p_id) {
		        if (p_id && (!state.tasks.find(t => parseInt(t.p_id) == parseInt(p_id)))) {
		            const newTask = {
		                p_id: p_id,
		            };
		            state.tasks.push(newTask);
			   	}
		},

		deleteTask({ state }, p_id) {
		    const index = state.tasks.findIndex((t) => t.p_id == p_id);
		    state.tasks.splice(index, 1);
		}
};
	const initialState = {
	  tasks: [],
	};




const APP_TEMPLATE = xml /* xml */`
<table>
	<tr>
		<td>
			<div class="heading" align="right">Shopping App
			   	<input id="searchdata" placeholder="Search product.." t-on-keyup="searchFunction"/>
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<div id="alltask">
				<t t-foreach="products" t-as="product" t-key="product.id">
					<div class="task" id="task">
				       	<span><t t-esc="product.product_name"/></span>
				   		<span>Rs. <t t-esc="product.product_price"/></span>
						<button type="button" t-att-id="product.id" t-on-click="addTask">Add to cart</button>
				    </div> 
				</t>
			</div>
		</td>
	</tr>
	<tr>
		<td>
			 <div class="cartstore">
				<span><t t-set="total" t-value="0"/></span>
				   	<h4 align="center">Cart</h4>
							<t t-foreach="tasks" t-as="task" t-key="task.id">
								<span><t t-set="total" t-value="total + products[task.p_id-1].product_price"/></span>
								<span><t t-esc="products[task.p_id-1].product_name"/></span>
								<span class="delete" t-att-id="task.p_id" t-on-click="deleteTask">🗑</span><br></br>
							</t>
			 </div>
		</td>
	</tr>
	<tr>
		<td>
			<div align="right">
				<span><b>Total price : <t t-esc="total"/></b></span>
			</div>
		</td>
	</tr>
 </table>`;
	// Owl Components
	class App extends Component {
	    static template = APP_TEMPLATE;

	tasks = useStore((state) => state.tasks);
    dispatch = useDispatch();


	    addTask(ev) {
	        if (ev.target.id) {
		        this.dispatch("addTask", ev.target.id)
		       	}
		}
	    deleteTask(ev) {
		    this.dispatch("deleteTask", ev.target.id)
		}

		searchFunction() {
            var input, filter, main, div, div2, i, inputValue;
            input = document.getElementById("searchdata").value;
            filter = input.toUpperCase();
            main = document.getElementById("alltask");
            div = main.getElementsByClassName("task");
            for (i = 0; i < div.length; i++) {
                div2 = div[i].getElementsByTagName("span")[0];
                if (div2) {
                    inputValue = div2.textContent || div2.innerText;
                    if (inputValue.toUpperCase().indexOf(filter) > -1) {
                        div[i].style.display = "";
                    } else {
                        div[i].style.display = "none";
                    }
                }
            }
        }


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


	function makeStore() {
		const localState = window.localStorage.getItem("shoppingcart");
		const state = localState ? JSON.parse(localState) : initialState;
		const store = new Store({ state, actions });
		store.on("update", null, () => {
			localStorage.setItem("shoppingcart", JSON.stringify(store.state));
		});
		return store;
	}
	function setup() {
		owl.config.mode = "dev";
		App.env.store = makeStore();
		const app = new App();
		 app.mount(document.body);
	}

	whenReady(setup);
