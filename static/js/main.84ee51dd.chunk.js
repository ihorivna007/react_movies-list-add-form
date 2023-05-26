(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(7),c=i.n(a),n=(i(15),i(10)),s=i(3),l=i(1),r=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(2),b=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,j=i(8),h=i.n(j);var u=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.required,o=void 0!==n&&n,d=e.onChange,m=void 0===d?function(){}:d,j=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(s.a)(j,1)[0],O=Object(l.useState)(!1),g=Object(s.a)(O,2),p=g[0],v=g[1],f=Object(l.useState)(!0),w=Object(s.a)(f,2),x=w[0],M=w[1];var N=p&&o&&!i.trim(),U=i&&!x;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:u,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:h()("input",{"is-danger":N}),type:"text",placeholder:"Enter ".concat(c),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return v(!0),void(t.match("Url")&&M(b.test(i)))}})}),N&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")}),U&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," should have the valid format")})]})},O=function(e){var t=e.onAdd,i=void 0===t?function(){}:t,a=Object(l.useState)(0),c=Object(s.a)(a,2),n=c[0],o=c[1],d=Object(l.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),j=Object(s.a)(d,2),h=j[0],O=j[1],g=Object(l.useState)(!1),p=Object(s.a)(g,2),v=p[0],f=p[1];return Object(l.useEffect)((function(){var e=h.title,t=h.imgUrl,i=h.imdbUrl,a=h.imdbId;f(!!e.trim()&&!!a.trim()&&b.test(t)&&b.test(i))}),[h]),Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),v&&(i(h),o(n+1),O({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(u,{name:"title",label:"Title",value:h.title,onChange:function(e){O(Object(m.a)(Object(m.a)({},h),{},{title:e}))},required:!0}),Object(r.jsx)(u,{name:"description",label:"Description",value:h.description,onChange:function(e){O(Object(m.a)(Object(m.a)({},h),{},{description:e}))}}),Object(r.jsx)(u,{name:"imgUrl",label:"Image URL",value:h.imgUrl,onChange:function(e){O(Object(m.a)(Object(m.a)({},h),{},{imgUrl:e}))},required:!0}),Object(r.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:h.imdbUrl,onChange:function(e){O(Object(m.a)(Object(m.a)({},h),{},{imdbUrl:e}))},required:!0}),Object(r.jsx)(u,{name:"imdbId",label:"Imdb ID",value:h.imdbId,onChange:function(e){O(Object(m.a)(Object(m.a)({},h),{},{imdbId:e}))},required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!v,children:"Add"})})})]},n)},g=i(9),p=(i(19),function(){var e=Object(l.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})});c.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.84ee51dd.chunk.js.map