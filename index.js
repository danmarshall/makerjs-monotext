var makerjs = require('makerjs');

function monotext() {
	var mv = makerjs.model.move;
	var arc = makerjs.paths.Arc;
	var line = makerjs.paths.Line;
	
	var u = 50;
	var u2 = u * 2;
	var u3 = u * 3;
	var u4 = u * 4;
	var up = u / 3;
	var c1 = [u, u];
	var c2 = [u, u3];
	var pne = [u2, u4];
	var pnw = [0, u4];
	var k = u2 + u * .5;
	var gap = 10;
	var gc = [gap, u2];
	var gc2 = [u2 - gap, u2];
	
	function sp(letterFn, index, offset) {
	    var letter = new letterFn();
	    letter.origin = [index * k + (offset || 0), 0];
	    return letter;
	}
	
	function left() {
	    return new line('left', [0, 0], pnw);
	}
	
	function crossbar() {
	    return new line('cross', gc, gc2);
	}
	
	function lowangle() {
	    return new line('lowangle', gc, [u2, 0])
	}
	
	function lowarc() {
	    return new arc('lowarc', c1, u, 180, 90)
	}
	
	var alpha = {
	    a: function() {
	        this.id = 'a';
	        this.paths = [
	            new arc('upper', c2, u, 0, 180),
	            new line('left', [0, 0], [0, u3]),
	            new line('right', [u2, 0], [u2, u3]),
	            crossbar()
	        ];
	    },
	    e: function() {
	        this.id = 'e';
	        this.paths = [
	            left(),
	            new line('top', pnw, pne),
	            new line('bottom', [0, 0], [u2, 0]),
	            crossbar()
	        ];
	    },
	    g: function() {
	        this.id = 'g';
	        this.paths = [
	            new arc('toparc', c2, u, 0, 180),
	            new arc('bottomarc', c1, u, 180, 0),
	            new line('left', [0, u], [0, u3]),
	            new line('right', [u2, u], [u2, u2]),
	            new line('cross', [u, u2], [u2, u2])
	        ];
	    },
	    j: function() {
	        this.id = 'j';
	        this.paths = [
	            new arc('lowarc', c1, u, 180, 0),
	            new line('right', [u2, u], pne)
	        ];
	    },
	    k: function() {
	        this.id = 'k';
	        this.paths = [
	            left(),
	            new line('topcross', pne, gc),
	            lowangle()
	        ];
	    },
	    m: function() {
	        this.id = 'm';
	        this.paths = [
	            left(),
	            new line('right', [u2, 0], pne),
	            new line('leftcross', [0, u4], [u, u2]),
	            new line('rightcross', [u, u2], [u2, u4])
	        ];
	    },
	    o: function() {
	        this.id = 'o';
	        this.paths = [
	            new arc('toparc', c2, u, 0, 180),
	            new arc('bottomarc', c1, u, 180, 0),
	            new line('left', [0, u], [0, u3]),
	            new line('right', [u2, u], [u2, u3])
	        ];
	    },
	    r: function() {
	        this.id = 'r';
	        this.paths = [
	            left(),
	            new line('top', pnw, [u, u4]),
	            new arc('upper', c2, u, 270, 90),
	            new line('cross', [gap, u2], [u, u2]),
	            lowangle()
	        ];
	    },
	    s: function() {
	        this.id = 's';
	        this.paths = [
	            new arc('upper', c2, u, 0, 270),
	            new arc('lowarc', c1, u, 180, 90)
	        ];
	    },
	    dot: function() {
	        var angle = 30;
	        this.id = 'dot';
	        this.paths = [
	            new arc('dot', [u, up], up, 270 + angle, 270 - angle)
	        ];
	    }
	};

    this.id = 'monotext',
    this.models = [ 
        sp(alpha.m, 0), 
        sp(alpha.a, 1), 
        sp(alpha.k, 2), 
        sp(alpha.e, 3), 
        sp(alpha.r, 4), 
        sp(alpha.j, 5), 
        sp(alpha.s, 6),
        sp(alpha.dot, 7),
        sp(alpha.o, 8),
        sp(alpha.r, 9),
        sp(alpha.g, 10)
    ];

}

module.exports = monotext;
