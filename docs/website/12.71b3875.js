(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{174:function(s,t,a){"use strict";a.r(t);var r={components:{}},n=a(17),e=Object(n.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Star")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Star} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  viewport: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nconst star = new Star();\nstar.attr({\n  pos: [50, 40],\n  radius: 40,\n  innerRadius: 24,\n  color: '#000',\n  lineWidth: 4,\n  angles: 5,\n  bgcolor: '#eee',\n  fillColor: 'red'\n  //anchor: [ 0.5, 0.5 ]\n});\n\nstar.on('mouseenter', evt => {\n  star.attr('fillColor', 'green');\n  evt.stopDispatch();\n});\n\nstar.on('mouseleave', evt => {\n  star.attr('fillColor', 'red');\n  evt.stopDispatch();\n});\n\nlayer.append(star);\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Star} = spritejs;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("viewport")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" star = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Star();\nstar.attr({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("24")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#000'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("angles")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#eee'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n  \n});\n\nstar.on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseenter'")]),s._v(", evt => {\n  star.attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fillColor'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v(");\n  evt.stopDispatch();\n});\n\nstar.on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseleave'")]),s._v(", evt => {\n  star.attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fillColor'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(");\n  evt.stopDispatch();\n});\n\nlayer.append(star);\n")])])])],1)},[],!1,null,null,null);t.default=e.exports}}]);