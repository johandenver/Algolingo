(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},127:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/AlgoLingo2.9c34dd11.png"},24:function(e,t,a){e.exports=a.p+"static/media/AlgoLingo1.ef8aada4.png"},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),s=(a(36),a(3)),i=a(4),c=a(6),m=a(5),u=a(7),g=a(12),d=a(19),h=(a(56),a(57),a(24)),v=a.n(h);var p=function(){return l.a.createElement("nav",{className:"mainHeader z-depth-0"},l.a.createElement("div",{className:"nav-wrapper z-depth-0"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("img",{src:v.a,height:"auto",width:"350",alt:"AlgoLingo"}))))};a(58);var E=function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container"},"\xa9 2019 Copyright.",l.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},"AlgoLingo is created by us!"))))},b=a(22),f=(a(59),a(8));a(106);function N(e){if(!e)return null;try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(a){return null}}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).showForm=function(e){a.setState({form:e})},a.state={form:"login",isLoading:!0,token:"",loggedIn:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=N("the_main_app");if(t&&t.token){var a=t.token;fetch("/api/account/verify?token="+a).then(function(e){return e.json()}).then(function(t){t.success?e.setState({token:a,isLoading:!1}):e.setState({isLoading:!1})})}else this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.token;return a?l.a.createElement("div",null,l.a.createElement("p",null,"Loading..")):n?void 0:l.a.createElement("div",{className:"login-container"},l.a.createElement("div",{className:"box-controller"},l.a.createElement("div",{className:"controller",onClick:function(){return e.showForm("login")}},l.a.createElement("h5",null,"Login")),l.a.createElement("div",{className:"controller",onClick:function(){return e.showForm("register")}},l.a.createElement("h5",null,"Register"))),l.a.createElement("div",{className:"input-container"},"login"===this.state.form&&l.a.createElement(k,{checkLog:this.props.checkLog}),"register"===this.state.form&&l.a.createElement(y,null)))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onTextboxChangeSignUpEmail=function(e){a.setState({signUpEmail:e.target.value})},a.onTextboxChangeSignUpPassword=function(e){a.setState({signUpPassword:e.target.value})},a.onTextboxChangeSignUpFirstName=function(e){a.setState({signUpFirstName:e.target.value})},a.onTextboxChangeSignUpLastName=function(e){a.setState({signUpLastName:e.target.value})},a.onSignUp=function(){var e=a.state,t=e.signUpFirstName,n=e.signUpLastName,l=e.signUpEmail,r=e.signUpPassword;a.setState({isLoading:!0}),fetch("/api/account/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t,lastName:n,email:l,password:r})}).then(function(e){return e.json()}).then(function(e){e.success?a.setState({signUpError:e.message,isLoading:!1,signUpPassword:"",signUpFirstName:"",signUpLastName:"",isRegistered:!0,token:e.token}):a.setState({signUpError:e.message,isLoading:!1})})},a.state={isLoading:!0,isRegistered:!1,token:"",signUpError:"",signUpFirstName:"",signUpLastName:"",signUpEmail:"",signUpPassword:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.signUpFirstName,a=e.signUpLastName,n=e.signUpEmail,r=e.signUpPassword,o=e.signUpError;return l.a.createElement("div",{className:"inner-container"},l.a.createElement("img",{src:v.a,height:"auto",width:"150",alt:"AlgoLingo"}),l.a.createElement("div",{className:"box-header"},"Please register:"),o?l.a.createElement("p",null,o):null,l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"First Name",type:"text",value:t,onChange:this.onTextboxChangeSignUpFirstName})),l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"Last Name",type:"text",value:a,onChange:this.onTextboxChangeSignUpLastName})),l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"Email",type:"email",value:n,onChange:this.onTextboxChangeSignUpEmail})),l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"Password",type:"password",value:r,onChange:this.onTextboxChangeSignUpPassword})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn waves-effect waves-light light-blue darken-2",onClick:this.onSignUp},"Register"))))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(){a.props.checkLog(!0)},a.onSignIn=function(){var e=a.state,t=e.signInEmail,n=e.signInPassword;a.setState({isLoading:!0}),fetch("/api/account/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(function(e){return e.json()}).then(function(e){e.success?(!function(e,t){e||console.error("Error: Key is missing");try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error(a)}}("the_main_app",{token:e.token}),a.setState({signInError:e.message,isLoading:!1,signInPassword:"",signInEmail:"",token:e.token,loggedIn:!0}),a.handleChange()):a.setState({signInError:e.message,isLoading:!1})})},a.state={isLoading:!0,token:"",signInError:"",signInEmail:"",signInPassword:"",loggedIn:!1},a.onTextboxChangeSignInEmail=a.onTextboxChangeSignInEmail.bind(Object(b.a)(a)),a.onTextboxChangeSignInPassword=a.onTextboxChangeSignInPassword.bind(Object(b.a)(a)),a.onSignIn=a.onSignIn.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onTextboxChangeSignInEmail",value:function(e){this.setState({signInEmail:e.target.value})}},{key:"onTextboxChangeSignInPassword",value:function(e){this.setState({signInPassword:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.signInEmail,a=e.signInPassword,n=e.signUpError;return e.loggedIn?l.a.createElement(d.a,{to:"/welcome"}):l.a.createElement("div",{className:"inner-container"},l.a.createElement("img",{src:v.a,height:"auto",width:"150",alt:"AlgoLingo"}),l.a.createElement("div",{className:"box-header"},"Please login:"),n?l.a.createElement("p",null,n):null,l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"Email",type:"email",value:t,onChange:this.onTextboxChangeSignInEmail})),l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{label:"Password",type:"password",value:a,onChange:this.onTextboxChangeSignInPassword})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn waves-effect waves-light light-blue darken-2",onClick:this.onSignIn.bind(this)},"Login"))))}}]),t}(l.a.Component),S=w,A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("div",{id:"login-column"},l.a.createElement(S,{checkLog:this.props.checkLog}))))}}]),t}(l.a.Component),C=(a(109),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).logOut=function(){a.setState({isLoading:!0});var e=N("the_main_app");if(e&&e.token){var t=e.token;fetch("/api/account/logout?token="+t).then(function(e){return e.json()}).then(function(e){e.success?a.setState({token:"",isLoading:!1}):a.setState({isLoading:!1})})}else a.setState({isLoading:!1})},a.state={isLoading:!0,token:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=N("the_main_app");if(t&&t.token){var a=t.token;fetch("/api/account/verify?token="+a).then(function(e){return e.json()}).then(function(t){t.success?e.setState({token:a,isLoading:!1}):e.setState({isLoading:!1})})}else this.setState({isLoading:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"side-nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"menu-item",id:"welcome-menu"},l.a.createElement(g.b,{to:"/welcome",className:"/welcome"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("h5",null,"Welcome to AlgoLingo"))),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",{className:"menu-item"},l.a.createElement(g.b,{to:"/library",className:"/library"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("i",{className:"material-icons"},"library_books")," AlgoLibrary")),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",{className:"menu-item"},l.a.createElement(g.b,{to:"/dashboard",className:"/dashboard"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("i",{className:"material-icons"},"person")," Your Dashboard")),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",{className:"menu-item"},l.a.createElement(g.b,{to:"/create",className:"/create"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("i",{className:"material-icons"},"library_add")," Create Custom Algorithm")),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",{className:"menu-item"},l.a.createElement(g.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",onClick:this.logOut},l.a.createElement("i",{className:"material-icons"},"exit_to_app")," Logout"))))}}]),t}(l.a.Component)),O=a(16),j=a.n(O),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(C,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"algo-container"},l.a.createElement("div",{className:"library-header"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"100",alt:"AlgoLingo"}),l.a.createElement("h2",null,"Hello ",this.props.firstName,", Welcome to AlgoLingo!")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("i",null,'"Perhaps the most important principle for the good algorithm designer is to refuse to be content." \u2015 Alfred V. Aho')),l.a.createElement("div",null,l.a.createElement("p",null,"Algorithms are much more than just a a procedure for solving mathematical problems. In programming Algorithms are most often used to help in solving problems or accomplishing some desired outcome."),l.a.createElement("p",null,"AlgoLingo's library of Javascript Algorithms provides various scenarious for you to solve. You will be able to save your Algorithm Solutions to your Dashboard, as well as create your own Algorithms.")),l.a.createElement("div",{className:"button-container"},l.a.createElement("div",null,l.a.createElement(g.b,{to:"/library"},l.a.createElement("button",{className:"waves-effect waves-light btn-large welcome-buttons"},l.a.createElement("i",{className:"material-icons right"},"library_books"),"Go to the AlgoLibrary"))),l.a.createElement("div",null,l.a.createElement(g.b,{to:"/dashboard"},l.a.createElement("button",{className:"waves-effect waves-light btn-large welcome-buttons"},l.a.createElement("i",{className:"material-icons right"},"person"),"Go to your Dashboard")))))))}}]),t}(l.a.Component),L=a(20),x=a.n(L),U={getAlgorithms:function(){return x.a.get("/api/library")},getUserId:function(e){return x.a.get("/api/user/token/"+e)},getUser:function(e){return x.a.get("/api/user/"+e)},showSaved:function(e,t){return x.a.post("/api/user/"+e,t)},showAnswer:function(e){return x.a.get("/api/user/"+e+"/answer")},updateAnswer:function(e,t){return x.a.post("/api/user/"+e+"/answer",t)},deleteSaved:function(e,t){return x.a.post("/api.user/"+e+"/remove",t)}},T=(a(127),a(21)),P=a.n(T);a(30);function _(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function D(e){return l.a.createElement("button",Object.assign({},e,{className:"btn waves-effect waves-light"}),e.children)}var F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState({savedAnswer:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.saveUserAlgorithm({savedId:a.props.algorithm._id,savedAnswer:a.state.savedAnswer})},a.state={savedAnswer:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.algorithm;return l.a.createElement("div",{className:"library-area",key:e._id},l.a.createElement(f.Collapsible,{className:"z-depth-0"},l.a.createElement("li",null,l.a.createElement("div",{className:"collapsible-header title-header"},l.a.createElement("h5",{className:"algo-title",name:"title",value:""},e.title)),l.a.createElement("div",{className:"collapsible-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"description-container"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("h5",null,e.title," Description: "),l.a.createElement("p",{className:"algo-description",name:"description"},e.description),l.a.createElement(_,{id:"library-snippet",name:"answer",value:this.state.savedAnswer,onChange:this.onChange,placeholder:"Code your answer here!",require:"true"}),l.a.createElement(D,{type:"submit",name:"action"},"Save to Dashboard",l.a.createElement("i",{className:"material-icons right"},"save"))))),l.a.createElement(f.Collapsible,{className:"z-depth-0"},l.a.createElement("li",null,l.a.createElement("div",{className:"collapsible-header answer-title"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"45",alt:"AlgoLingo"}),l.a.createElement("h5",null,"Click here for one ",e.title," solution!")),l.a.createElement("div",{className:"collapsible-body answer-body"},l.a.createElement("div",null,l.a.createElement("p",null,"Below is one possible way to solve the ",e.title," ","algorithm. How does your solution compare?"),l.a.createElement(P.a,{className:"Javascript answer-box"},e.answer)))))))))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadAlgorithms=function(){U.getAlgorithms().then(function(e){return a.setState({algorithms:e.data})}).catch(function(e){return console.log(e)})},a.state={algorithms:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadAlgorithms()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(C,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"algo-container"},l.a.createElement("div",{className:"library-header"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"100",alt:"AlgoLingo"}),l.a.createElement("h2",null," AlgoLingo Algorithms")),l.a.createElement("div",null,l.a.createElement("p",null,"Welcome to the AlgoLibrary. The library contains a list of Javascript Algorithm Challenges."),l.a.createElement("p",null,"Please select an Algorithm below for you to solve and save to your Dashboard. If you get stuck, feel free to click on the provided solution, but do note there are many ways to solve for the desired result. Is your answer different than ours?")),l.a.createElement("h4",null,"AlgoLibrary:"),this.state.algorithms.length?l.a.createElement("ul",null,this.state.algorithms.map(function(t){return l.a.createElement(F,{key:t._id,algorithm:t,saveUserAlgorithm:e.props.saveUserAlgorithm})})):l.a.createElement("h4",null,"No Results at this time!"))))}}]),t}(l.a.Component),Y=(a(316),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.savedAlgorithm,a=e.deleteSavedAlgorithms;return l.a.createElement("div",{className:"library-area"},l.a.createElement(f.Collapsible,{className:"z-depth-0"},l.a.createElement("li",null,l.a.createElement("div",{className:"collapsible-header title-header"},l.a.createElement("h5",{className:"algo-title"},"Algorithm: ",t.title),l.a.createElement("button",{className:"btn waves-effect waves-light delete",onClick:function(){return a(t._id)}},l.a.createElement("i",{className:"material-icons"},"delete_forever"))),l.a.createElement("div",{className:"collapsible-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"description-container"},l.a.createElement("h5",null,"Description: "),l.a.createElement("p",{className:"algo-description",name:"description"},t.description)),l.a.createElement("div",null,l.a.createElement("p",null,"Your saved Algorithm:"),l.a.createElement(P.a,{className:"Javascript answer-box"},t.savedAnswer))),l.a.createElement(f.Collapsible,null,l.a.createElement("li",null,l.a.createElement("div",{className:"collapsible-header answer-title"},l.a.createElement("h5",null,"Click here for one ",t.title," Solution!")),l.a.createElement("div",{className:"collapsible-body answer-body"},l.a.createElement("div",null,l.a.createElement("p",null,"Below is one possible way to solve the"," ",t.title," Algorithm. How does your solution compare?"),l.a.createElement(P.a,{className:"Javascript answer-box"},t.answer)))))))))}}]),t}(l.a.Component));a(317);var W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadSavedAlgorithms=function(e){console.log("api user id: ",e),U.showAnswer(e).then(function(e){console.log("ShowAnswer API response:",e),e.data.length&&a.setState({savedAlgorithms:e.data})}).catch(function(e){return console.log(e)})},a.deleteSavedAlgorithms=function(e){console.log("delete id: ",e),U.deleteSaved(e).then(function(e){return a.loadSavedAlgorithms()}).catch(function(e){return console.log(e)})},a.state={savedAlgorithms:[],userCreated:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedAlgorithms(this.props.userId)}},{key:"render",value:function(){var e=this;return console.log("dashboard Algo: ",this.state.savedAlgorithms),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(C,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"algo-container"},l.a.createElement("h3",null,this.props.firstName,"'s Dashboard!"),l.a.createElement("div",{className:"dashboard-container"},l.a.createElement("div",{className:"library-header"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"100",alt:"AlgoLingo"}),l.a.createElement("h2",null,"Saved Algorithms")),l.a.createElement("h4",null,"Your library of saved Algolingo Algorithms:"),this.state.savedAlgorithms.length?l.a.createElement("ul",null,this.state.savedAlgorithms.map(function(t){return l.a.createElement(Y,{key:t._id,savedAlgorithm:t,deleteSavedAlgorithms:e.deleteSavedAlgorithms})})):l.a.createElement("p",null,"You have not yet saved any Algorithms from the Library.")),l.a.createElement("div",{className:"dashboard-container"},l.a.createElement("div",{className:"library-header"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"100",alt:"AlgoLingo"}),l.a.createElement("h2",null,"Custom Algorithms")),l.a.createElement("h4",null,"Your own library of custom created Algorithms:"),this.state.userCreated.length?l.a.createElement("ul",null,this.state.userCreated.map()):l.a.createElement("p",null,"You have not yet created any Custom Algorithms.")))))}}]),t}(l.a.Component),z=a(50),H=(a(318),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,l=a.description,r=a.custom;console.log("Form was submited.","title: "+n,"Description: "+l,"Custom Code: "+r),U.showSaved().post(function(){})},e.state={title:"",description:"",custom:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("Custom Form state is",this.state);var e=this.state,t=e.title,a=e.description,n=e.custom;return l.a.createElement("div",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{name:"title",label:"Algorithm Title:",type:"text",value:t,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-group"},l.a.createElement(f.TextInput,{name:"description",label:"Algorithm Description:",type:"text",value:a,onChange:this.handleChange}))),l.a.createElement("div",{className:"row form-row"},l.a.createElement("div",{className:" col s12"},l.a.createElement(_,{id:"custom-snippet",name:"custom",placeholder:"Code your Algorithm here!",require:"true",value:n,onChange:this.handleChange}))),l.a.createElement("div",{className:"row form-row"},l.a.createElement("button",{type:"submit",value:"submit",className:"btn waves-effect waves-light",name:"action"},"Save to Dashboard",l.a.createElement("i",{className:"material-icons right"},"save"))))))}}]),t}(l.a.Component)),M=Object(d.g)(H);var R=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l3"},l.a.createElement(C,null)),l.a.createElement("div",{className:"col s12 m8 l9"},l.a.createElement("div",{className:"algo-container"},l.a.createElement("div",{className:"library-header"},l.a.createElement("img",{className:"logo2",src:j.a,height:"auto",width:"100",alt:"AlgoLingo"}),l.a.createElement("h2",null,"Custom Algorithm")),l.a.createElement("div",null,l.a.createElement("h2",null,"Custom Algorithm Feature is Coming Soon!"),l.a.createElement("p",null,"AlgoLingo is a great place for you to create and store your own Algorithms."),l.a.createElement("p",null,"Complete your Javascript Algorithm below and save it to your Dashboard. How many can you come up with?")),l.a.createElement("h4",null,"Create Custom Algorithm:"),l.a.createElement(M,null))))},B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).login=function(e){a.setState({loggedIn:e})},a.checkLog=function(e){a.setState({check:e})},a.getToken=function(){var e=localStorage.getItem("the_main_app"),t=JSON.parse(e).token;U.getUserId(t).then(function(e){e.data&&(a.setState({token:t,userId:e.data.userId}),U.getUser(e.data.userId).then(function(e){a.setState({firstName:e.data.firstName.substring(0,1).toUpperCase()+e.data.firstName.substring(1)})}))}).catch(function(e){return console.log("userId error",e)})},a.saveUserAlgorithm=function(e){U.showSaved(a.state.userId,e).then(function(){console.log(e),console.log("it worked")}).catch(function(e){return console.error("bad",e)})},a.state={check:!1,loggedIn:!1,token:"",userId:"",firstName:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.state.check&&this.getToken()}},{key:"render",value:function(){var e=this;return console.log(this.state.userId),l.a.createElement("div",{id:"page"},l.a.createElement(g.a,null,l.a.createElement(p,null),l.a.createElement("main",null,l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",render:function(t){return l.a.createElement(A,Object.assign({},t,{loggedIn:e.login,checkLog:e.checkLog}))}}),l.a.createElement(d.b,{path:"/welcome",loggedIn:this.state.loggedIn,render:function(t){return l.a.createElement(I,Object.assign({},t,{firstName:e.state.firstName}))}}),l.a.createElement(d.b,{path:"/library",loggedIn:this.state.loggedIn,render:function(t){return l.a.createElement(J,Object.assign({},t,{saveUserAlgorithm:e.saveUserAlgorithm}))}}),l.a.createElement(d.b,{path:"/dashboard",userId:this.state.userId,loggedIn:this.state.loggedIn,render:function(t){return e.state.userId?l.a.createElement(W,Object.assign({},t,{userId:e.state.userId,firstName:e.state.firstName})):l.a.createElement("div",null,"nothing")}}),l.a.createElement(d.b,{path:"/create",loggedIn:this.state.loggedIn,component:R}))),l.a.createElement("footer",null,l.a.createElement(E,null))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){},51:function(e,t,a){e.exports=a(319)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.122811a3.chunk.js.map