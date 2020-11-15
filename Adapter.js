class Search {
  constructor (text, world) {
    this.text = text;
    this.world = world;
  }
  getWorld () {
    return this.world;
  }

  searchWorldIntText () {
    return this.text;
  }
};

class SearchAdapter {
  constructor (adapter) {
    this.adapter = adapter
  }

  searchWorldIntText () {
    return `these words: ${this.adapter.getWorld()} were found ${this.adapter.searchWorldIntText()}`
  }
}


const search = new Search('some text', 'cat, dog');
const searchAdapter = new SearchAdapter(search);

console.log(searchAdapter.searchWorldIntText());