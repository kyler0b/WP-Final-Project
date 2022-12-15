<script>

export default {

    name: 'AutoSearch',
    props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
    data() {
        return {
      search: '',
      results: [],
      isOpen: false,
    };
  },
    methods: {
        filterResults() {
            this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
        },
        onChange() {
            this.filterResults();
            this.isOpen = true;
        },
        setResult(result) {
            this.search = result;
            this.isOpen = false;
        },
    }
};

</script>

<template>
    <div class="autocomplete">
      <input type="text" v-model="search" @input="onChange"/>
      <ul v-show="isOpen" class="autocomplete-results">
        <li v-for="(result, i) in results"
        :key="i" @click="setResult(result)" class="autocomplete-result">
          {{ results }}
        </li>
      </ul>
    </div>
</template>

<style>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 6em;    
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>



