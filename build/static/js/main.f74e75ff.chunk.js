(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/searchpets.b93bb496.png"},27:function(e,t,n){e.exports=n(42)},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),s=n(14),u=(n(32),n(5)),i=n(6),l=n(8),d=n(7),p=n(9),m=n(11),h=n(2),f=n.n(h),b=n(12),g="https://petful-server.herokuapp.com/",j={listUsers:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/user"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},createUser:function(e){return Object(b.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(g,"/user"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.abrupt("return",n.ok?n.json():n.json().then((function(e){return Promise.reject(e.statusText)})));case 4:case"end":return t.stop()}}),t)})))()},getDog:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/dog"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},getCat:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/cat"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},userAdopted:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/user"),{method:"DELETE",headers:{"Content-type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},adoptCat:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/cat"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},adoptDog:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/dog"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()}},E=(n(34),n(24)),v=n.n(E),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",redirect:!1},n.handleChange=function(e){e.preventDefault(),n.setState({user:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),j.createUser(n.state.user).then((function(e){e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"landing-page"},r.a.createElement("p",null,"Welcome to Petful where we pride ourselves as being the friendliest pet center in the world"),r.a.createElement("p",null,"We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart."),r.a.createElement("span",null,r.a.createElement("img",{id:"landing-img",src:v.a,alt:"search for your new pet"})),r.a.createElement(s.b,{to:"/adoption"},"Get Started"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"error-page"},"Oops! Oh jeez, it seems something went wrong. Oh yeah you becha... .Ummm aaa please go outside and try again later I guess or try again now I really have no idea.")}}]),t}(r.a.Component),w=(n(40),n(15));n(41),n(22);var A=function(e){var t=e.cat,n=t.age,a=t.breed,o=t.description,c=t.name,s=t.gender,u=t.story,i=t.imageURL;return r.a.createElement("div",{className:"cat"},r.a.createElement("div",null,r.a.createElement("h3",null,c),r.a.createElement("p",null,"This ",n," year old ",s," ",a," cat who was ",u," could be yours. "),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:o})),!e.disable&&r.a.createElement("button",{onClick:e.onAdopt},"Adopt")))};var k=function(e){var t=e.dog,n=t.age,a=t.breed,o=t.description,c=t.name,s=t.gender,u=t.story,i=t.imageURL;return r.a.createElement("div",{className:"dog"},r.a.createElement("div",null,r.a.createElement("h3",null,c),r.a.createElement("p",null,"This ",n," year old ",s," ",a," dog who was ",u," could be yours. "),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:o})),!e.disable&&r.a.createElement("button",{onClick:e.onAdopt},"Adopt")))},C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],prevAdopter:{name:"",choice:{}}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({users:Object(w.a)(this.props.line)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-list"},r.a.createElement("h3",null,"Users:"),r.a.createElement("ul",null,this.state.users.map((function(e){return r.a.createElement("li",{key:e},e)}))))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",adopter:"",userSubmit:!1,selected:!1,disable:!0,userLine:[],currentAdopter:"",dog:{},cat:{},adoptedList:[]},n.handleChange=function(e){e.preventDefault(),n.setState({user:e.target.value})},n.handleSubmit=function(e){n.setState({userSubmit:!0,userLine:[].concat(Object(w.a)(n.state.userLine),[n.state.user])}),setTimeout(n.adoptionCycle,1e3)},n.adoptionCycle=function(){n.state.userLine.forEach((function(e,t){setTimeout((function(){e===n.state.user?n.setState({disable:!1,currentAdopter:n.state.user}):(n.setState({currentAdopter:e}),(new Date).getMilliseconds()%2?n.handleAdoptCat():n.handleAdoptDog())}),4e3*t)}))},n.handleAdoptCat=function(e){e.preventDefault(),j.adoptCat().then((function(e){n.state.adoptedList.length?n.setState({cat:e.cat,adopter:n.state.currentAdopter,adoptedList:[].concat(Object(w.a)(n.state.adoptedList),[e.adopted])}):n.setState({cat:e.cat,adopter:n.state.currentAdopter,adoptedList:[e.adopted]})}))},n.handleAdoptDog=function(e){e.preventDefault(),j.adoptDog().then((function(e){n.state.adoptedList.length?n.setState({dog:e.newDog,adopter:n.state.currentAdopter,adoptedDogs:[].concat(Object(w.a)(n.state.adoptedDogs),[e.adopted])}):n.setState({dog:e.dog,adopter:n.state.currentAdopter,adoptedList:[e.adopted]})}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.listUsers().then((function(t){e.setState({userLine:t.userLine,prevAdopter:t.adopter})})),j.getDog().then((function(t){e.setState({dog:t.dog})})),j.getCat().then((function(t){e.setState({cat:t.cat})}))}},{key:"render",value:function(){var e=this,t=this.state.adoptedList.adoptedList;return r.a.createElement("div",{className:"adoption-page"},r.a.createElement(C,{line:this.state.userLine}),this.state.userSubmit&&r.a.createElement("div",{className:"adoption-display"},r.a.createElement(A,{cat:this.state.cat,onAdopt:this.handleAdoptCat,disable:this.state.disable}),r.a.createElement("ul",null,t&&t.map((function(t,n){return r.a.createElement("li",{key:n},t.name," adopted by ",e.state.adopter)}))),r.a.createElement(k,{dog:this.state.dog,onAdopt:this.handleAdoptDog,disable:this.state.disable})),!this.state.selected&&r.a.createElement("h2",null,"Currently selecting: ",this.state.currentAdopter),this.state.selected&&r.a.createElement("p",null,"Congratulations. You have successfully picked your new best friend!!"),!this.state.userSubmit&&r.a.createElement("div",null,r.a.createElement("form",{id:"username-form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"username"},"Please enter your name to begin"),r.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.user}),r.a.createElement("button",{type:"submit"},"begin"))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/"},"Petful - An Adoption Agency"))),r.a.createElement("main",{className:"main"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(m.a,{path:"/error"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/adoption"},r.a.createElement(S,null)))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(s.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f74e75ff.chunk.js.map