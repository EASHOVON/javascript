/*
##Module Introduction and What is Javascript **
জাভাস্ক্রিপ্ট কি এখানে তা সম্পর্কে জানলাম।
মানুষ সরাসরি বুঝতে পারে কিন্তু মেশিন সরাসরি বুঝতে পারে না এটাকেই মূলতে হাই লেভেল ল্যাংগুয়েজ বলা হয়।
Reasearch What is Javascript-->
Javascript is a High Level Interpreted Language....

///////////////////////////////////////////////////////////////////////
##Create Script tag and connect external Script file **
Html এর সাথে Javascript ব্যবহার করতে আমরা Html এর Body Tag এর একদম শেষের দিকে <script></script> ট্যাগ লিখে এর মধ্যে আমরা জাভাস্ক্রিপ্ট এর কোড গুলো লেখতে পারবো যা আমাদের Html এর সাথে মিলে একসাথে কাজ করতে পারে।

আবার আমরা এক্সটারনাল জাভাস্ক্রিপ্ট এর ফাইল খুলে সেই ফাইল আমাদের এইচটিএমএল এর মধ্যে সংযোগ করেও জাভাস্ক্রিপ্ট এর কোডগুলো লিখতে পারবো।
<script src="Javascript File location"></script> এভাবে জাভাস্ক্রিপ্ট এর এক্সটারনাল সংযোগ করা হয়।

জাভাস্ক্রিপ্ট উপর থেকে নিচ এভাবে কাজ করে। উপরে যে কাজ দেওয়া আছে তা সেরে নিচের দিকে নামতে থাকে।


///////////////////////////////////////////////////////////////////////////////////////////////
##What is DOM (Document Object Model) **
Html এর সাথে জাভাস্ক্রিপ্ট এর সংযোগের ফলে আমরা জাভাস্ক্রিপ্ট এ যদি document লিখি তাহলে আমাদের পুরো Html এর মধ্যে যা কিছু আছে তা সব হাইলাইট হয়ে যায় তার মানে জাভাস্ক্রিপ্ট এ document লিখলে সে Html এ যা আছে তা দেখাবে।
console.log(document); যদি আমরা লিখি তাহলে এখন আমরা Html এর পুরো অংশটুকু প্রিন্ট হবে। আর যদি
console.log(document.body); লিখি তাহলে ওই Html এর মধ্যে body tag এর মধ্যে যা আছে তা আমাদের
দেখাবে।
জাভাস্ক্রিপ্ট দিয়ে এইচটিএমএল কে একসেস করার একটা সিস্টেম হচ্ছে DOM.


/////////////////////////////////////////////////////////////////////////////////////////
##Get different HTML elements in JS by using tag name **
Html এর বিভিন্ন ট্যাগের মধ্যে কি আছে তা আমরা একসেস করতে পারি getElementsByTagName এর ফাংশন এর মাধ্যমে। লেখার নিয়ম document.getElementsByTagName('Tag Name'); তাহলে এই নামের ট্যাগ কতগুলো আছে তা দেখাবে। আমরা যদি document.getElementsByTagName('Tag Name'); এর সাহায্যে যা পাবো তা একটা ভ্যারিয়েবল এও আমরা রাখতে পারি। const blogTitle = document.getElementsByTagName('h3');
document মানে চিন্তা করতে পারো আমরা Html এর মধ্যে যাবো।


/////////////////////////////////////////////////////////////////////////////////////////
##Capture and change Element by using getElementById
উপরের লিসন এর মাধ্যমে আমরা শিখলাম যে কিভাবে জাভাস্ক্রিপ্ট এর মাধ্যমে Html এর বিভিন্ন ট্যাগকে ধরে আনতে হয়। কিন্তু এতে করে সমস্যা হচ্ছে একবারে অনেকগুলো ট্যাগ চলে আসে। এখন আমরা স্পেসিফিক কোনো ট্যাগ নিয়ে যদি কাজ করতে চাই তবে আমাদের ওই ট্যাগকে সিলেক্ট করতে আইডি ব্যবহার করতে হবে। ফাংশনটি হবে
getElementById--এর মাধ্যমে কিভাবে করতে পারি? document.getElementById('Id Name Just') করলে ওই
আইডিতে কি আছে তা দেখতে পারবো। ওই আইডিকে ধরে আমরা যদি স্টাইল করতে চাই তাহলে
document.getElementById('second-title').style.color = 'red' এভাবে লিখবো।
আবার এভাবেও লিখতে পারি --> const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center'
Html এর লেখাকে পরিবর্তন করতে চাইলে, const third = document.getElementById('third-title');
third.innerText = 'Something' এভাবে আমরা ব্যাকগ্রাউন্ড কালার, প্যাডিং, মার্জিন এগুলো দিতে পারি।

///////////////////////////////////////////////////////////////////////////////////////////
##Explore getElementsByClassName and querySelectorAll
যদি আমরা Html এর মধ্যে কোনো এলিমেন্টকে ক্লাসের মাধ্যমে ধরে কাজ করতে চাই তাহলে আমরা এভাবে করবো
document.getElementByClassName('Class Name') এখন এই ক্লাস নেমকে ধরে কিভাবে স্টাইল করতে হয় তা
দেখবো। --> const blogs = document.getElementsByClassName('blog');
for (const blog of blogs){
    blog.style.border = '2px solid orange'
};
অনেকগুলো একই ক্লাস নেম থেকে যদি প্রথম ক্লাস নেম টা সিলেক্ট করতে চাই তাহলে
document.querySelector('.blog'); এটা ব্যবহার করবো। মনে রাখতে হবে কুয়েরি সিলেক্টর এর মধ্যে ক্লাস নেম লিখতে হলে সিএসএস এ যেমন ডট দিয়ে ক্লাস নেম লিখতাম তেমনি আমরা কুয়েরি সিলেক্টর এর মধ্যে ক্লাস নেম লিকবো।

আর যদি ওই ক্লাস নেম যতগুলো আছে সবগুলোকে সিলেক্ট করতে চাই তাহলে
document.querySelectorAll('.blog');
কোনো একটা আইডির মধ্যের এলিমেন্টকে পেতে
document.querySelectorAll('#second-blog p')


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
##NodeList, htmlcollection, setAttribute, parentNode, childnodes
কোনো একটি এলিমেন্টের ভিতরে এট্রিবিউটকে যদি আমরা পেতে চাই
secondTitle2.getAttribute('Attribute Name');
এট্রিবিউট যদি আমরা সেট করতে চাই
secondTitle.setAttribute('Attribute Name', 'Attribute Value');
কোনো একটা এলিমেন্টের প্যারেন্ট এলিমেন্ট কে তা জানতে
secondTitle2.parentNode
আবার কোনো এলিমেন্টের ভেতরে কি কি চাইল্ড তাও আমরা জানতে পারি
secondBlog.childNodes

///////////////////////////////////////////////////////////////////////////////////////////
## Create HTML elements using Javascript and appendChild
যদি আমি জাভাস্ক্রিপ্ট এর মাধ্যমে Html এর মধ্যে কোনো এলিমেন্ট এড করতে চাই
document.createElement('h3');
এবার ধরুন আমাদের Html এর ভেতরে ul li দিয়ে ৪টার মতো লিস্ট রয়েছে সেখানে আমরা জাভাস্ক্রিপ্ট দিয়ে যদি আর একটা li যুক্ত করতে চাই তবে
const li = document.createElement('li');
li.innerText = 'Blog-5';
const ul = document.getElementById('blog-list');
ul.appendChild(li);
যদি এলিমেন্ট রিমুভ করতে হয়
const friends = document.getElementById('friends');
const fifth = friends.children[4];
friends.removeChild(fifth); তাহলে রিমুভ হয়ে যাবে

এবার আমরা বড় কিছু এড করবো>>>>
const article = document.createElement('article');
এলিমেন্ট এর মধ্যে ক্লাস এড করা
article.classList.add('blog')
const h3 = document.createElement('h3');
h3.innerText = 'My Awesome Blog-5';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum Dolor';
article.appendChild(h3);
article.appendChild(p);

InnerHtml দিয়েও আমরা এলিমেন্ট যোগ করতে পারি 
article.innerHTML = `
<h3>My Awesome Blog-5</h3>
<p>Lorem Ipsum dolor</p>
`










##Module summary and DOM Review
*/
