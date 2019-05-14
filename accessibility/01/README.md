# Semantic Tags

When we create HTML tags, we often want to be explicit about what content each tag will contain. 

You always would want to *describe the content that you're displaying* and utilize existing and accepted semantic elements!

## WHY?
1. Clarity for other computers
2. Much better for accessiblity

For example, we would rather use an actual footer tag

```HTML
<footer>
    This is my amazing footer.
</footer>
```

rather than a basic div, even though they achieve the same functionality.

```HTML
<div>
    This is my amazing footer.
</div>
```

## Landmark Sections

To provide a better and more understanable experience for screen readers, we should semantically organize the most important content in our pages in what are called "landmarks." Examples of landmark tags include `<header>`, `<main>`, and `<footer>`.

```
Including at LEAST `<header>`, `<main>`, and `<footer>` landmarks is slowly becoming convention!
```

For example, given a code snippet like this

```HTML
<nav>
    This is my navbar
    <a href="#">Link</a>
</nav>

<div>
    <h1>I am so cool</h1>
</div>

<div>
    <p>Just kidding</p>
</div>

<div>
    <p>Made with love in San Francisco.</p>
    <a href="#">See my Github</a>
</div>

```

We would want to wrap our content in landmark tags, based on the section:

```HTML
<header>
    <nav>
        This is my navbar
        <a href="#">Link</a>
    </nav>
</header>

<main>
    <div>
        <h1>I am so cool</h1>
    </div>

    <div>
        <p>Just kidding</p>
    </div>
</main>

<footer>
    <p>Made with love in San Francisco.</p>
    <a href="#">See my Github</a>
</footer>

```


## **DEMO:** Screen reading.

<hr>


# Instructions

1. Open `semantic.html` and adjust tags so that they are more explicit and semantic. 

2. Also, review the areas that are labeled as `landmarks` and wrap the content in a semantic tag.

3. Pay close attention to the one element that hints that it's a `nav` element (it should have a class that hints to this)! Change that `div` to be a `nav` element.

4. Also be on the lookout for elements that hint that they are buttons! Change those `divs` to `button` elements.
    - Note: `<button>` tags in HTML are more than just semantic - they provide clickability and minor styling, and sometimes form submission. 


### Definitions 

#### Semantic Markup 
- HTML that introduces meaning to the page


### More Resources

https://www.w3schools.com/html/html5_semantic_elements.asp