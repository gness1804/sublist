type Comparison = 'equal' | 'sublist' | 'superlist' | 'unequal';

export class List {
  list: number[] = [];
  constructor(...args: number[]) {
    this.list = [...args];
  }

  compare(listB: List): Comparison {
    if (!this.list.length) {
      if (!listB.list.length) return 'equal';
      return 'sublist';
    }
    // this.list has a length of 1+
    if (!listB.list.length) return 'superlist';
    // both lists have a length of 1+

  }
}
