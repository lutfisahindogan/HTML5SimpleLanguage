# HTML5SimpleLanguage
HTML5 Simple Language

You do not need to write more than one page for Html5. You can use this library for simple language support.

Language support works without your system and accesses and modifies switches with direct language support.

It focuses on the part we want to change and performs operations.


If the part of the language support you want is html, you can use the following code in a simple way.
<pre><code>&lt;p data-lang-type="html"&gt;{{key}}&lt;/p&gt;</code></pre>

You can use the following code in a simple way if the part of the language support you want is attributes.
<pre><code>&lt;p data-lang-type="attr" data-lang-type="title" title="{{key}}"&gt;&lt;/p&gt;</code></pre>

Also, for more than one attribute, you just need to put ",".
<pre><code>&lt;p data-lang-type="attr" data-lang-type="title,value" title="{{key}}" value="{{key2}}"&gt;&lt;/p&gt;</code></pre>

Html attributes and part you want to change the subject to be in this situation if both the following example will tell you everything.
<pre><code>&lt;p data-lang-type="all" data-lang-type="title,value" title="{{key}}" value="{{key2}}"&gt;{{key3}}&lt;/p&gt;</code></pre>


With the demo project you will find in it, you no longer need to use many libraries for simple language support.
Just add the "en.json" or "tr.json" or "de.json" files you need to do after performing the operations and enter their contents.
