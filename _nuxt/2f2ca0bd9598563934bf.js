(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,n){var a=n(237);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("3f820252",a,!0,{})},236:function(e,t,n){"use strict";var a=n(200);n.n(a).a},237:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.container--fix[data-v-24feb9e6]{margin-top:5rem;margin-bottom:5rem;text-align:center\n}\nh1[data-v-24feb9e6]{color:#222333;margin-bottom:1rem\n}\nh2[data-v-24feb9e6]{color:#6abfad\n}\n.speaker--links[data-v-24feb9e6]{text-align:left\n}\n.speaker--links ul[data-v-24feb9e6]{display:flex;margin:0;padding:0;list-style:none;justify-content:space-around\n}\n@media screen and (max-width:660px){\n.speaker--links ul[data-v-24feb9e6]{display:block\n}\n}\n.speaker--links ul li[data-v-24feb9e6]{margin:1rem\n}\n.speaker--links ul li svg[data-v-24feb9e6]{top:6px;position:relative\n}\n.speaker--links ul li a[data-v-24feb9e6]{text-decoration:none;color:#222333\n}\n.container--image[data-v-24feb9e6]{margin-top:2rem;margin-bottom:1rem;min-height:150px;display:flex;justify-content:center\n}\n.container--image img[data-v-24feb9e6]{width:150px;border-radius:50%;align-self:center;flex:0 0 auto\n}\ndiv.description--container[data-v-24feb9e6]{text-align:left;background-color:#b1ded4;padding:2rem;margin-top:2rem\n}\ndiv.description--container p[data-v-24feb9e6]{line-height:32px\n}\n@media screen and (max-width:660px){\ndiv.description--container[data-v-24feb9e6]{margin-left:-2rem;margin-right:-2rem\n}\n}",""])},271:function(e,t,n){"use strict";n.r(t);n(25);var a=new(n(230).Converter),i={validate:function(e){var t=e.store,n=e.params;return t.getters.speakers.filter(function(e){return e.name===n.name}).length>0},asyncData:function(e){var t=e.store,n=e.params;return{speaker:t.getters.speakers.filter(function(e){return e.name===n.name})[0]}},computed:{bioHTML:function(){return a.makeHtml(this.speaker.bio)}},head:function(){var e="Touraine Tech 2019 - ".concat(this.speaker.name),t="https://touraine.tech/speaker/".concat(this.speaker.name),n="".concat(this.speaker.avatar);return{titleTemplate:e,meta:[{hid:"description",name:"description",content:this.speaker.bio},{hid:"ogtitle",property:"og:title",content:e},{hid:"ogdescription",property:"og:description",content:this.speaker.bio},{hid:"ogtype",property:"og:type",content:"website"},{hid:"ogurl",property:"og:url",content:t},{hid:"ogimage",property:"og:image",content:n},{hid:"oglocale",property:"og:locale",content:"fr_FR"},{hid:"twittercard",name:"twitter:card",content:"summary"},{hid:"twittertitle",name:"twitter:title",content:e},{hid:"twitterdescription",name:"twitter:description",content:this.speaker.bio},{hid:"twitterimage",name:"twitter:image",content:n},{hid:"twitterimagealt",name:"twitter:image:alt",content:"Logo ".concat(this.speaker.name)}]}}},r=(n(236),n(4)),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container--fix"},[n("div",{staticClass:"container--image"},[n("img",{attrs:{src:e.speaker.avatar,alt:e.speaker.name}})]),e._v(" "),n("h1",[e._v(e._s(e.speaker.name))]),e._v(" "),n("div",{staticClass:"speaker--links"},[n("ul",[e.speaker.company?n("li",[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{fill:"black",d:"M6 7v-7h13v10h5v14h-23v-17h5zm0 16v-4h-1v4h1zm8-4h-3v4h3v-4zm6 0h-1v4h1v-4zm2-7h-3v6h2v4h1v-10zm-5-10h-9v20h1v-5h7v5h1v-20zm-13 20v-4h2v-9h-3v13h1zm17-6h-1v-2h1v2zm-17-2h1v2h-1v-2zm8 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-10-4v2h-1v-2h1zm7 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2z"}})]),e._v("\n        "+e._s(e.speaker.company)+"\n      ")]):e._e(),e._v(" "),e.speaker.city?n("li",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"}})]),e._v("\n        "+e._s(e.speaker.city)+"\n      ")]):e._e(),e._v(" "),e.speaker.twitter?n("li",[n("a",{attrs:{target:"_blank",href:"https://twitter.com/"+e.speaker.twitter.replace(/^@/,"")}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"#1DA1F2",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"}})]),e._v("\n        "+e._s(e.speaker.twitter)+"\n      ")])]):e._e(),e._v(" "),e.speaker.github?n("li",[n("a",{attrs:{target:"_blank",href:"https://github.com/"+e.speaker.github}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"#333",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"}})]),e._v("\n        "+e._s(e.speaker.github)+"\n      ")])]):e._e()])]),e._v(" "),n("div",{staticClass:"description--container"},[n("p",{domProps:{innerHTML:e._s(e.bioHTML)}})])])},[],!1,null,"24feb9e6",null);s.options.__file="_name.vue";t.default=s.exports}}]);