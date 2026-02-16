const { capitalize, reverse } = require(&#39;./stringUtils&#39;);
test(&#39;capitalize first letter&#39;, () =&gt; {
expect(capitalize(&#39;hello&#39;)).toBe(&#39;Hello&#39;);
});
test(&#39;reverse string&#39;, () =&gt; {
expect(reverse(&#39;hello&#39;)).toBe(&#39;olleh&#39;);
});
