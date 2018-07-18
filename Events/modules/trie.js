//#ifdef desktopweb

//#else
var trie, timer, oAhead, oBox,
        lapse = 0,
        log   = null;
var SearchAuto = [];
var Trie = (function() {
    function Trie(stem, sorting) {
        this.stem        = stem || "";
        this.nstem       = this.stem.charCodeAt(0);
        this.sorting     = sorting || Trie.SORT_DESC;
        this.wordCount   = 0;
        this.prefixCount = 0;
        this.children    = [];
        this.meta        = [];
    }

    Trie.SORT_ASC  = 0x0001;
    Trie.SORT_DESC = 0x0002;
    Trie.SORT_NONE = 0x0004;

    var STATIC_PROPS = ["stem", "nstem", "sorting", "wordCount", "prefixCount", "meta"];

    Trie.prototype = {
        add: function(word, meta) {
            if (word) {
                var t,
                    s = this.sorting,
                    i = 0,
                    k = word.charAt(0),
                    c = this.children,
                    l = c.length;
                meta = meta || {};
                if (!meta.word)
                    meta.word = word;
                for (; i < l; ++i) {
                    if (c[i].stem == k) {
                        t = c[i];
                        break;
                    }
                }
                if (!t) {
                    ++this.prefixCount;
                    t = new Trie(k, s);
                    if (!s || !c.length || s & Trie.SORT_NONE) {
                        c.push(t);
                    }
                    else if (s & Trie.SORT_DESC) {
                        i = l;
                        do {
                            if (--i < 0) {
                                c.unshift(t);
                                break;
                            }
                        } while (c[i].stem > k)
                        if (i >= 0)
                            c.splice(i + 1, 0, t);
                    }
                    else {
                        i = 0;
                      --l;
                        do {
                            if (++i > l) {
                                c.unshift(t);
                                break;
                            }
                        } while (c[i].stem > k)
                          {
                        if (i <= l)
                          {
                            c.splice(i, 0, t);
                          }
                          } 
                    }
                }
                t.add(word.substring(1), meta);
            }
            else {
                this.meta.push(meta);
                ++this.wordCount;
            }
        },
        
       
        find: function(prefix) {
            return walker(prefix, this, function(trie, idx) {
                return trie.children[idx];
            });
        },
   
        findPrefix: function(prefix) {
            return this.find(prefix);
        },
        getChild: function(prefix) {
            var i = 0,
                c = this.children,
                l = c.length;
            for (; i < l; ++i) {
                if (c[i].stem == prefix)
                    return c[i];
            }

            return null;
        },
        hasChild: function(prefix) {
            return this.getChild(prefix) !== null;
        },

      sort: function(direction) {
            if (typeof direction == "undefined")
                direction = Trie.SORT_DESC;
            if (!this.prefixCount || this.sorting === direction) return;
            this.sorting = direction;
            if (direction & Trie.SORT_NONE) return;
            var c = this.children,
                i = c.length - 1,
                m = direction & Trie.SORT_ASC ? sortAsc : sortDesc;
            c.sort(m);
            for (; i >= 0; --i)
                c[i].sort(direction);
        },

      getWords: function() {
            var words = [],
                c     = this.children,
                i     = 0,
                l     = c.length;
            for (; i < l; ++i) {
                if (c[i].wordCount) {
                    words = words.concat(c[i].meta.map(function(meta) {
                        return meta.word;
                    }));
                }
                words = words.concat(c[i].getWords());
            }
            return words;
        },
        
    };
    
    function walker(word, trie, method) {
        if (!word || !trie || !method) return null;
        var ch, c, l, i, prev;
        
        while (word.length > 0) {
            ch = word.charAt(0);
            c  = trie.children;
            l  = c.length;
            i  = 0;
            for (; i < l; ++i) {
                if (ch == c[i].stem)
                    break;
            }
            if (i == l)
                return null; // not found
            word = word.substring(1);
            prev = trie;
            trie = c[i];
        }
        return method(prev, i);
    }
    
      function sortAsc(a, b) {
        var s1 = a.nstem;
            s2 = b.nstem;
        return (s1 < s2) ? 1 : (s1 > s2) ? -1 : 0;
    }
    
     function sortDesc(a, b) {
        var s1 = a.nstem;
            s2 = b.nstem;
        return (s1 > s2) ? 1 : (s1 < s2) ? -1 : 0;
    }
    
    return Trie;
})();



    function setUp(data) 
  {		SearchAuto = data;
        trie = new Trie();
        var i = 0,
            l = SearchAuto.length,
            t = new Date();
        // add contacts to the trie
        for (; i < l; ++i) {
            timer = new Date();
            trie.add(SearchAuto[i].name.toLowerCase());
            lapse += new Date() - timer;
        }
        t = new Date() - t;
      
        addToLog("Metrics for adding " + SearchAuto.length + " contacts to a trie:");
        addToLog("Total:" + t + ", Avg: " + (lapse / l) + ", Loop overhead: " + (t - lapse));

        i = lapse = 0;
        timer = null;
        t     = new Date();
        var temp = [];
        for (; i < l; i++) {
            timer = new Date();
            temp.push(SearchAuto[i]);
            lapse += new Date() - timer;
        }
        t = new Date() - t;
        addToLog("Set against regular array add:" + t + ", Avg: " + (lapse / l) + ", Loop overhead: " + (t - lapse));
        // setup the type-ahead box:
    }
    function typeAhead(word) {
       objdatafetch=[];
        lapse = 0;
        timer = new Date();
        var t    = 0;
        root = trie.find(word);
        t += (lapse = new Date() - timer);
        addToLog("TYPING: Finding root trie took " + lapse + "ms");
        timer = new Date();
       var list  = [];
        if(root!==null){
          list = root.getWords();
        }
        else{
//           trie.add(word);
//           root = trie.find(word);
//           list = root.getWords();
        }
        t += (lapse = new Date() - timer);
        addToLog("TYPING: retrieving list of words (" + list.length + " contacts) took " + lapse + "ms");
        var i    = 0;
            l    = list.length;
            html = [];
        timer = new Date();
      t += (lapse = new Date() - timer);
        addToLog("TYPING: Building list of HTML took " + lapse + "ms");
        addToLog("TYPING: Total type-ahead action took " + t + "ms");
           return list;
    }

    function addToLog(s) {
       kony.print("***********************************************************"+s);
    }
//#endif