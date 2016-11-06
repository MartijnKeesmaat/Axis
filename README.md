#Axis
Axis is a way to get quickly started with a well thought out structure for every front-end project. It strives to create projects with beautifully organized code, this is achieved by adapting the BEM methodology and using a SMACSS inspired structure. With this approach Axis is ready to face small, large and long lasting projects.


##Get started (not yet working)

**Npm**

1. npm install axis
2. run npm install in the root of the project.
3. run gulp serve in the root of the project.

**zip download**

1. Download the project.
2. run npm install in the root of the project.
3. run gulp serve in the root of the project.


## Base
Axis starts of with the styling of the basic elements of every website and is easily changed with a bunch of useful variables and mixins.


## Expanding 
To see a full list of all the components...


## Project structure
...


## Codeguide
Inleiding Lorem ipsum dolor sit amet, ad per dicat exerci, pri ad tamquam dolorem temporibus. Pro ea petentium erroribus, est paulo scripta denique id.


### BEM
**B**lock, **E**lement, **M**odifier

Is a smart way of naming your CSS classes to give them more transparency and meaning to other developers. They are far more strict and informative, which makes the BEM naming convention ideal for teams of developers on larger projects that might last a while.

The point of BEM is to tell other developers more about what a piece of markup is doing from its name alone

* block represents the higher level of an abstraction or component.
* block__element represents a descendent of .block that helps form .block as a whole.
* block--modifier represents a different state or version of .block.


**Examples**
```css
.site-search {} /* Block */
.site-search__field {} /* Element */
.site-search--full {} /* Modifier */
```

```css
.btn /* Block */
.btn--primary /* Modifier */
```

```css
.nav /* Block */
.nav__item /* Modifier */
```
The reason for double rather than single hyphens and underscores is so that your block itself can be hyphen delimited.
If you want to learn more about BEM there is a really useful article written by .[Harry Roberts](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)


### Rem’s / em's
In Axis font-size are set with rem’s because the are scaleable and therefore it is easier to make a responsive website. There is 1 problem though and that is that it’s hard to tell how small or big a text will get if you will give it certain amount of rem’s. For example how big will a h1 get if you will give it a font size of 4rem?

Rem is a relative measurement and relies on the root element. If you would give the html tag 18px, than 1 rem = 18px.

There is way to make this easier, by giving the html 62.5%, 1rem will = 10px, 1.8rem = 18px.
This way you don’t have to calculate every time you want to set a font-size but get the benefits of a scaleable font-size.

```css
html { font-size: 62.5%; }
body { font-size: 1.4rem; } /* =14px */
h1   { font-size: 2.4rem; } /* =24px */
```


**But what are the benefits of using rem?**
The root has font-size of 62.5% and the font-sizes are all relative, what this means is if you want so the text for mobile to be a bit smaller you give the body a media querie which sets the font-size to 60%. This way you don’t have give every element a different font-size on mobile.


**So what’s the deal with em’s?**
Em’s are used for the margins and paddings of elements which have a font-size, these are headers, buttons , paragraphs and list-items. A em is not equal to the root element but to the font-size of an element.


```css
.btn{
     font-size: 2rem (20px);
}
```

In this case, 1em on this element, or on its child elements (assuming no other font-size definitions), would be equal to 20px. So if we added a line:

```css
.example {
    font-size: 20px;
    border-radius: .5em;
}
```

This border-radius value of .5em computes to 10px (i.e. 20*.5). Similarly:

```css
.example {
    font-size: 20px;
    border-radius: .5em;
    padding: 2em;
}
```

If you want to know more about rem’s and em’s watch this video from [DevTips](https://www.youtube.com/watch?v=UHf3aQz50jQ).


### Editor
* 2 tabs of indentation
* 80 character wide columns;


### Comments
```css
/*------------------------------------*\
  #A-SECTION
\*------------------------------------*/
```

"#" is to search easily on section
if styles are divided in multiple files use comment on top of every page
If file exist of multiple sections use 5 enters between them

The // comment is used for every component
```css
// component
```


### Returns
One (1) empty line between closely related rulesets.
Two (2) empty lines between loosely related rulesets.
Five (5) empty lines between entirely new sections.
