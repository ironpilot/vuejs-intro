import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Milk-Bone Dog Treats',
        description: 'Milk-bone treats.',
        image: '',
        category: ['bones', 'treats']
      },
      {
        id: 2,
        name: 'Nylabone Puppy Chew Triple Pack',
        description: '3 plastic bones for your puppy to chew on.',
        image: '',
        category: ['bones']
      },
      {
        id: 3,
        name: 'Dog Jerky',
        description: 'Jerky that dogs will love!',
        image: '',
        category: ['treats']
      },
      {
        id: 4,
        name: 'Pup-Peroni Beef Flavor Dog Snacks',
        description: 'Beef flavored dog snacks that will make your dog go wild!',
        image: '',
        category: ['treats']
      },
      {
        id: 5,
        name: 'Six Foot Nylon Leash',
        description: 'A six food leash to keep your dog close at hand.',
        image: '',
        category: ['supplies']
      },
      {
        id: 6,
        name: 'Dog Dish',
        description: 'A small chrome dog bowl to hold water or food.',
        image: '',
        category: ['supplies']
      },
      {
        id: 7,
        name: 'Barkworthies Shin Bone, Peanut Butter Stuffed',
        description: 'A 4 inch shin bone stuffed with tasty peanut butter. Something any pup would be eager to have!',
        image: '',
        category: ['bones']
      },
      {
        id: 8,
        name: 'Dog Beef Log',
        description: 'A large log of cured beef that can be cut to size for treats.',
        image: '',
        category: ['treats']
      },
      {
        id: 9,
        name: 'Squeaky Tennis Ball Dog Toy',
        description: 'A brightly colored tennis ball style dog tog with a build in squeaker.',
        image: '',
        category: ['supplies']
      },
      {
        id: 10,
        name: 'Nail Trimmer for Dogs',
        description: 'Made from Stainless Steel for long lasting cutting edge.',
        image: '',
        category: ['supplies']
      },
    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
