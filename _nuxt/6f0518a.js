(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{339:function(t,n,e){var content=e(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("259de4bc",content,!0,{sourceMap:!1})},341:function(t,n,e){"use strict";e(339)},342:function(t,n,e){var o=e(52)((function(i){return i[1]}));o.push([t.i,".bubble-menu{\n  display:flex;\n  background-color:#0d0d0d;\n  padding:.2rem;\n  border-radius:.5rem\n}\n.bubble-menu button{\n  border:none;\n  background:none;\n  color:#fff;\n  font-size:.85rem;\n  font-weight:500;\n  padding:0 .2rem;\n  opacity:.6\n}\n.floating-menu{\n  display:flex;\n  background-color:rgba(13,13,13,.06274509803921569);\n  padding:.2rem;\n  border-radius:.5rem\n}\n.floating-menu button{\n  border:none;\n  background:none;\n  font-size:.85rem;\n  font-weight:500;\n  padding:0 .2rem;\n  opacity:.6\n}",""]),o.locals={},t.exports=o},343:function(t,n,e){var content=e(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("bad8e090",content,!0,{sourceMap:!1})},349:function(t,n,e){"use strict";e.r(n);var o=e(345),r=e(346),c={components:{EditorContent:o.c,BubbleMenu:o.a,FloatingMenu:o.d},data:function(){return{editor:null}},mounted:function(){this.editor=new o.b({extensions:[r.a],content:"\n        <p>\n          Try to select <em>this text</em> to see what we call the bubble menu.\n        </p>\n        <p>\n          Neat, isn’t it? Add an empty paragraph to see the floating menu.\n        </p>\n      "})},beforeDestroy:function(){this.editor.destroy()}},l=(e(341),e(15)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.editor?e("bubble-menu",{staticClass:"bubble-menu",attrs:{"tippy-options":{duration:100},editor:t.editor}},[e("button",{class:{"is-active":t.editor.isActive("bold")},on:{click:function(n){t.editor.chain().focus().toggleBold().run()}}},[t._v("\n      Bold\n    ")]),t._v(" "),e("button",{class:{"is-active":t.editor.isActive("italic")},on:{click:function(n){t.editor.chain().focus().toggleItalic().run()}}},[t._v("\n      Italic\n    ")]),t._v(" "),e("button",{class:{"is-active":t.editor.isActive("strike")},on:{click:function(n){t.editor.chain().focus().toggleStrike().run()}}},[t._v("\n      Strike\n    ")])]):t._e(),t._v(" "),t.editor?e("floating-menu",{staticClass:"floating-menu",attrs:{"tippy-options":{duration:100},editor:t.editor}},[e("button",{class:{"is-active":t.editor.isActive("heading",{level:1})},on:{click:function(n){t.editor.chain().focus().toggleHeading({level:1}).run()}}},[t._v("\n      H1\n    ")]),t._v(" "),e("button",{class:{"is-active":t.editor.isActive("heading",{level:2})},on:{click:function(n){t.editor.chain().focus().toggleHeading({level:2}).run()}}},[t._v("\n      H2\n    ")]),t._v(" "),e("button",{class:{"is-active":t.editor.isActive("bulletList")},on:{click:function(n){t.editor.chain().focus().toggleBulletList().run()}}},[t._v("\n      Bullet List\n    ")])]):t._e(),t._v(" "),e("editor-content",{attrs:{editor:t.editor}})],1)}),[],!1,null,null,null);n.default=component.exports},356:function(t,n,e){"use strict";e(343)},357:function(t,n,e){var o=e(52)((function(i){return i[1]}));o.push([t.i,".boc{\n  content:var(--b3)\n}",""]),o.locals={},t.exports=o},373:function(t,n,e){"use strict";e.r(n);var o=e(6),r=(e(31),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,t.params,n.next=3,e("posts").limit(4).sortBy("date","asc").fetch();case 3:return o=n.sent,n.abrupt("return",{posts:o});case 5:case"end":return n.stop()}}),n)})))()}}),c=(e(356),e(15)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"container mx-auto text-xl"},[t._v("\n    Second brain App (with Nuxt, Supabase, Tailwind, Tiptap, and )\n  ")]),t._v(" "),e("tiptap",{staticClass:"container p-4 mx-auto mt-10 border"})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Tiptap:e(349).default})}}]);