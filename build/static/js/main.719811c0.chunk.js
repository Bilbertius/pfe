(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/searchpets.b93bb496.png"},27:function(e,t,n){e.exports=n(42)},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),s=n(14),u=(n(32),n(3)),i=n(4),l=n(6),p=n(5),d=n(7),h=n(11),m=n(2),f=n.n(m),b=n(12),j="https://petful-server.herokuapp.com/",g={listUsers:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/user"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},createUser:function(e){return Object(b.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/user"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.abrupt("return",n.ok?n.json():n.json().then((function(e){return Promise.reject(e.statusText)})));case 4:case"end":return t.stop()}}),t)})))()},getDog:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/dog"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},getCat:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/cat"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},adoptCat:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/cat"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},adoptDog:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/dog"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()},refreshUsers:function(){return Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/people"));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():t.json().then((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})))()}},v=(n(34),n(24)),E=n.n(v),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",redirect:!1},n.handleChange=function(e){e.preventDefault(),n.setState({user:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),g.createUser(n.state.user).then((function(e){e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"landing-page"},r.a.createElement("p",null,"Welcome to Petful where we pride ourselves as being the friendliest pet center in the world"),r.a.createElement("p",null,"We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart."),r.a.createElement("span",null,r.a.createElement("img",{id:"landing-img",src:E.a,alt:"search for your new pet"})),r.a.createElement(s.b,{to:"/adoption"},"Get Started"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"error-page"},"Oops! Oh jeez, it seems something went wrong. Oh yeah you becha... .Ummm aaa please go outside and try again later I guess or try again now I really have no idea.")}}]),t}(r.a.Component),w=(n(40),n(15)),k=(n(41),n(22),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={adoptedCats:[],cat:{},error:null,isAdopted:!1},n.handleAdopt=function(e){e.preventDefault(),g.adoptCat().then((function(e){n.setState({cat:e.newCat,adoptedCats:[].concat(Object(w.a)(n.state.adoptedCats),[e.adopted])})}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getCat().then((function(t){e.setState({cat:t.cat})}))}},{key:"render",value:function(){var e=this.state.cat,t=e.age,n=e.breed,a=e.description,c=e.name,o=e.gender,s=e.story,u=e.imageURL;return r.a.createElement("div",{className:"cat"},r.a.createElement("div",null,r.a.createElement("h3",null,c),r.a.createElement("p",null,"This ",t," year old ",o," ",n," cat who was ",s," could be yours. "),r.a.createElement("img",{src:u,alt:a}),!this.props.disable&&r.a.createElement("button",{onClick:this.handleAdopt},"Adopt")),r.a.createElement("ul",{className:"animal"},"Previously adopted : ",this.state.adoptedCats.map((function(e){return r.a.createElement("li",{key:e.name},e.name)}))))}}]),t}(r.a.Component)),C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={adoptedDogs:[],dog:{},error:null,isAdopted:!1},n.handleAdopt=function(e){e.preventDefault(),g.adoptDog().then((function(e){n.setState({adoptedDogs:[].concat(Object(w.a)(n.state.adoptedDogs),[e.adopted])})})),g.getDog().then((function(e){n.setState({dog:e.dog})}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getDog().then((function(t){e.setState({dog:t.dog})}))}},{key:"render",value:function(){var e=this.state.dog,t=e.age,n=e.breed,a=e.description,c=e.name,o=e.gender,s=e.story,u=e.imageURL;return r.a.createElement("div",{className:"dog"},r.a.createElement("div",null,r.a.createElement("h3",null,c),r.a.createElement("p",null,"This ",t," year old ",o," ",n," cat who was ",s," and ",a," could be yours. "),r.a.createElement("img",{src:u,alt:"Doggy"}),!this.props.disable&&r.a.createElement("button",{onClick:this.handleAdopt},"Adopt")),r.a.createElement("ul",{className:"animal"},"Previously adopted : ",this.state.adoptedDogs.map((function(e){return r.a.createElement("li",{key:e.name},e.name)}))))}}]),t}(r.a.Component),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],currentAdopter:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-list"},r.a.createElement("h3",null,"Users:"),r.a.createElement("ul",null,this.props.line.map((function(e){return r.a.createElement("li",{key:e},e)}))))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",userSubmit:!1,disable:!0,userLine:[],currentAdopter:""},n.handleChange=function(e){e.preventDefault(),n.setState({user:e.target.value})},n.handleSubmit=function(e){n.setState({userSubmit:!0,userLine:[].concat(Object(w.a)(n.state.userLine),[n.state.user])}),setTimeout(n.adoptionCycle,1e3)},n.adoptionCycle=function(){n.state.userLine.forEach((function(e,t){setTimeout((function(){e===n.state.user?n.setState({disable:!1,currentAdopter:n.state.user}):n.setState({currentAdopter:e})}),4e3*t)}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.listUsers().then((function(t){e.setState({userLine:t.userLine})}))}},{key:"render",value:function(){return console.log(this.state.userLine),r.a.createElement("div",{className:"adoption-page"},r.a.createElement(A,{line:this.state.userLine}),r.a.createElement("div",{className:"adoption-display"},r.a.createElement(k,{disable:this.state.disable}),r.a.createElement(C,{disable:this.state.disable})),r.a.createElement("h2",null,this.state.currentAdopter),!this.state.userSubmit&&r.a.createElement("div",null,r.a.createElement("p",null,"Please enter your name to begin"),r.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.user}),r.a.createElement("button",{onClick:this.handleSubmit},"begin")))}}]),t}(r.a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/"},"Petful - An Adoption Agency"))),r.a.createElement("main",{className:"main"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(h.a,{path:"/error"},r.a.createElement(O,null)),r.a.createElement(h.a,{path:"/adoption"},r.a.createElement(S,null)))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(s.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.719811c0.chunk.js.map