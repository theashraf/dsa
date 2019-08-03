/*
//TODO:
getWordByPrefix(prefix:string):array<string> // return array of words starting with a specific prefix
getWordCount(word:string):number // return number of words in the Trie 
*/

export default class Trie {
  // we could have children of Map data structure for memory optimization
  // but the advantage of array -> check if child exists in O(1)
  private children: Array<Trie>;
  private isLeaf: boolean;

  constructor() {
    this.children = Array(26).fill(0); // to hold 26 characters a-z;
    this.isLeaf = false; // end of word
  }

  // O(n)
  insert(str: string): void {
    // if end of string reached successfully -> mark it as end of word
    if (!str) {
      this.isLeaf = true;
      return;
    }

    // get the index of the string's 1st char in the children array
    let current: number = str.slice(0, 1).charCodeAt(0) - "a".charCodeAt(0);

    // if path not exists -> create one
    if (!this.children[current]) {
      this.children[current] = new Trie();
    }

    // insert rest of the string in the new/existing path
    this.children[current].insert(str.slice(1));
  }

  // O(n)
  searchWord(word: string): boolean {
    // end of word reached successfully
    if (!word) {
      return this.isLeaf;
    }

    // get the index of the word's 1st char in the children array
    let current: number = word.slice(0, 1).charCodeAt(0) - "a".charCodeAt(0);

    // if not exist in the path return false;
    if (!this.children[current]) return false;

    // go to next character in the path
    return this.children[current].searchWord(word.slice(1));
  }

  // O(M)
  searchPrefix(prefix: string): boolean {
    // end of prefix reached successfully
    if (!prefix) {
      return true;
    }

    // get the index of the prefix's 1st char in the children array
    let current: number = prefix.slice(0, 1).charCodeAt(0) - "a".charCodeAt(0);

    // if not exist in the path return false;
    if (!this.children[current]) return false;

    //search starting from the next char in the prefix
    return this.children[current].searchPrefix(prefix.slice(1));
  }
}

const t = new Trie();

t.insert("car");
t.insert("apple");
t.insert("can");
t.insert("appeal");

console.log(t.searchWord("apple"));
