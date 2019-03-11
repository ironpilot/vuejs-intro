import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Milk-Bone Dog Treats',
        price: 4.50,
        description: 'Milk-bone treats.',
        image: '',
        category: ['bones', 'treats']
      },
      {
        id: 2,
        name: 'Nylabone Puppy Chew Triple Pack',
        price: 3.99,
        description: '3 plastic bones for your puppy to chew on.',
        image: '',
        category: ['bones']
      },
      {
        id: 3,
        name: 'Dog Jerky',
        price: 5.30,
        description: 'Jerky that dogs will love!',
        image: '',
        category: ['treats']
      },
      {
        id: 4,
        name: 'Pup-Peroni Beef Flavor Dog Snacks',
        price: 5.99,
        description: 'Beef flavored dog snacks that will make your dog go wild!',
        image: '',
        category: ['treats']
      },
      {
        id: 5,
        name: 'Six Foot Nylon Leash',
        price: 9.99,
        description: 'A six food leash to keep your dog close at hand.',
        image: '',
        category: ['supplies']
      },
      {
        id: 6,
        name: 'Dog Dish',
        price: 4.99,
        description: 'A small chrome dog bowl to hold water or food.',
        image: '',
        category: ['supplies']
      },
      {
        id: 7,
        name: 'Barkworthies Shin Bone, Peanut Butter Stuffed',
        price: 11.50,
        description: 'A 4 inch shin bone stuffed with tasty peanut butter. Something any pup would be eager to have!',
        image: '',
        category: ['bones']
      },
      {
        id: 8,
        name: 'Dog Beef Log',
        price: 15.99,
        description: 'A large log of cured beef that can be cut to size for treats.',
        image: '',
        category: ['treats']
      },
      {
        id: 9,
        name: 'Squeaky Tennis Ball Dog Toy',
        price: 2.99,
        description: 'A brightly colored tennis ball style dog tog with a build in squeaker.',
        image: '',
        category: ['supplies']
      },
      {
        id: 10,
        name: 'Nail Trimmer for Dogs',
        price: 15.99,
        description: 'Made from Stainless Steel for long lasting cutting edge.',
        image: '',
        category: ['supplies']
      },
    ],
    cart: {
      items: [],
      count: 0
    }
  },
  getters: {
    cartTotal(state) {
      let total = 0.0;
      state.cart.items.forEach((item) => {
        let product = state.products.find((prod) => prod.id === item.id);
        if(product) {
          total += (product.price * item.quantity);
        }
      });

      return Math.round(total * 100)/100;
    },
    boneProducts(state) {
      let products = [];
      state.products.forEach((el) => {
        if(el.category.find((cat) => cat === 'bones')) {
          products.push(el);
        }
      });

      return products;
    },
    treatProducts(state) {
      let products = [];
      state.products.forEach((el) => {
        if(el.category.find((cat) => cat === 'treats')) {
          products.push(el);
        }
      });

      return products;
    },
    supplyProducts(state) {
      let products = [];
      state.products.forEach((el) => {
        if(el.category.find((cat) => cat === 'supplies')) {
          products.push(el);
        }
      });

      return products;
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      //Find out if the item is already in the cart
      let item = state.cart.items.find((el) => el.id === payload.id);

      //Increment the quantity if it is or push it to the list if it is not.
      if(item) {
        item.quantity++;
      } else {
        state.cart.items.push(payload);
      }

      //Always add one to the item count
      state.cart.count++;
    },
    removeProductFromCart(state, item) {
      let productIndex = state.cart.items.findIndex((el) => el === item);
      state.cart.items.splice(productIndex, 1);
    }
  },
  actions: {
    addToCart({commit}, payload) {
      commit('addProductToCart', payload);
    },
    removeFromCart({commit}, payload) {
      commit('removeProductFromCart', payload);
    }
  }
})
