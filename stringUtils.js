
function capitalize(str) {
return str.charAt(0).toUpperCase() + str.slice(1);

}
function reverse(str) {
return str.split(&#39;&#39;).reverse().join(&#39;&#39;);
}
module.exports = { capitalize, reverse };
