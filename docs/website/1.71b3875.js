(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{173:function(s,t,r){"use strict";r.r(t);var a={components:{}},n=r(17),e=Object(n.a)(a,function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h2",[s._v("Arc")]),s._v(" "),r("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Arc} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  viewport: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nconst arc = new Arc();\narc.attr({\n  radius: 50,\n  startAngle: Math.PI * 0.75,\n  endAngle: Math.PI * 2.75,\n  lineWidth: 5,\n\n  strokeColor: 'red',\n  bgcolor: '#ccc'\n});\n\narc.on('mousemove', evt => {\n  arc.attr('strokeColor', 'yellow');\n  evt.stopDispatch();\n});\n\narc.on('mouseleave', evt => {\n  arc.attr('strokeColor', 'red');\n  evt.stopDispatch();\n});\n\nlayer.append(arc);\n"}},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Arc} = spritejs;\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("viewport")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" arc = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Arc();\narc.attr({\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.75")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ccc'")]),s._v("\n});\n\narc.on("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mousemove'")]),s._v(", evt => {\n  arc.attr("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'strokeColor'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(");\n  evt.stopDispatch();\n});\n\narc.on("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseleave'")]),s._v(", evt => {\n  arc.attr("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'strokeColor'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(");\n  evt.stopDispatch();\n});\n\nlayer.append(arc);\n")])])])],1)},[],!1,null,null,null);t.default=e.exports}}]);