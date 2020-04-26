(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1SM4":function(e){e.exports=JSON.parse('{"a":[{"name":"Stock Score","description":"A Python project to fetch stock financials/statistics and perform preliminary screens to aid in the stock selection process.","tags":["Python","Finance","Pandas"],"url":"https://github.com/jackmoody11/stockscore","docs":"https://jack-moody.com/stockscore","starred":false},{"name":"SEC Edgar","description":"Download all companies periodic reports, filings and forms from EDGAR database.","tags":["Python","Finance","Scraping","BeautifulSoup"],"url":"https://github.com/jackmoody11/sec-edgar","docs":"https://rudrakos.com/sec-edgar/","starred":false},{"name":"Game of Life","description":"Conway\'s Game of Life implemented in Java.","tags":["Java","Cellular Automation","Multithreading","Swing"],"url":"https://github.com/jackmoody11/game-of-life","starred":false},{"name":"Project Euler","description":"Various Project Euler solutions implemented in Python, Java, and C.","tags":["Python","Java","C","Math","Dynamic Programming","Project Euler"],"url":"https://github.com/jackmoody11/project-euler-solutions","starred":true},{"name":"Machine Learning","description":"Some of my Jupyter notebooks as I learn about Machine Learning.","tags":["Python","Scikit-Learn","Tensorflow","Machine Learning","Regression","Classification"],"url":"https://github.com/jackmoody11/mlearn","starred":false},{"name":"Personal Site","description":"The source code for this site.","tags":["Python","Flask","Javascript","AJAX","HTML","CSS","Bootstrap 4"],"url":"https://github.com/jackmoody11/jackmoody11.github.io","starred":false},{"name":"Auto DCF","description":"Easy plug-and-chug discounted cash flow model framework that allows for advanced modeling and sensitivity tests.","tags":["Python","Pandas","Finance","Numpy"],"url":"https://github.com/jackmoody11/autodcf","docs":"https://jack-moody.com/autodcf/","starred":false}]}')},Q8R3:function(e,t,r){e.exports={cardLeftBorder:"project_card-module--card-left-border--1EQaX",cardBorder:"project_card-module--card-border--1SUqK",filterBadge:"project_card-module--filter-badge--1UPSW"}},gZkK:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));r("pJf4"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q8oJ"),r("8npG"),r("nWfQ"),r("gu/5"),r("eoYm");var a=r("q1tI"),n=r.n(a),o=r("1SM4"),c=r("Wbzz"),i=r("Q8R3"),s=r.n(i),l=function(e){var t=e.project.starred?s.a.cardBorder:"";return n.a.createElement("div",{className:"card",id:t},e.children)},d=function(e){var t=e.project,r=e.onTagClick;return n.a.createElement("div",null,t.tags.map((function(e,t){return n.a.createElement("span",{className:"badge badge-light "+s.a.filterBadge,onClick:r,key:t},e)})))},u=function(e){return e.project.name.toLowerCase().includes("project euler")?n.a.createElement(c.a,{to:"/euler",className:"btn btn-primary mr-1"},"Solutions"):n.a.createElement(n.a.Fragment,null)},m=function(e){var t=e.project;return t.hasOwnProperty("docs")?n.a.createElement("a",{href:t.docs,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Docs"):null},f=function(e){var t=e.project,r=e.onFilterClick;return n.a.createElement("div",{className:"col-lg-4 project-card-container mb-3"},n.a.createElement(l,{project:t},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t.name),n.a.createElement(d,{project:t,onTagClick:r}),n.a.createElement("p",{className:"card-text py-3"},t.description),n.a.createElement(u,{project:t}),n.a.createElement("a",{href:t.url,className:"btn btn-primary mr-1",target:"_blank",rel:"noopener noreferrer"},"Source"),n.a.createElement(m,{project:t}))))},p=r("soUV");r("6+lF");function h(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,r;r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a;a=c;function c(t){var r;return(r=e.call(this,t)||this).allProjects=o.a,r.state={filters:[],filteredProjects:r.allProjects},r.removeFilter=r.removeFilter.bind(y(r)),r.addFilter=r.addFilter.bind(y(r)),r}var i=c.prototype;return i.removeFilter=function(e){var t=e.currentTarget.textContent,r=this.state.filters.filter((function(e){return e!==t}));this.setState({filters:r,filteredProjects:this.allProjects.filter((function(e){return r.every((function(t){return e.tags.includes(t)}))}))})},i.addFilter=function(e){var t=e.currentTarget.textContent,r=[].concat(h(this.state.filters),[t]);this.state.filters.includes(t)||this.setState({filters:r,filteredProjects:this.state.filteredProjects.filter((function(e){return r.every((function(t){return e.tags.includes(t)}))}))})},i.render=function(){var e=this;return n.a.createElement(p.a,{title:"Projects"},n.a.createElement("h1",null,"Projects"),n.a.createElement("hr",null),n.a.createElement("div",{className:"mb-3",id:"tag-filters"},this.state.filters.map((function(t,r){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"badge badge-light p-1 m-1",onClick:e.removeFilter,key:"filter-"+r},t,n.a.createElement("i",{className:"far fa-times-circle p-1 close-btn"})))}))),n.a.createElement("div",{className:"card-deck card-columns mb-3"},this.state.filteredProjects.map((function(t,r){return n.a.createElement(f,{project:t,onFilterClick:e.addFilter,key:"project-"+r})}))))},c}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-e453393b5e911c906208.js.map