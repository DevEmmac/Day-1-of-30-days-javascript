## DOCUMENT OBJECT MODEL (DOM) - DAY 1
### Geting Element:
we can access already created elements using javaScript.

* Getting elements by tag :- it takes tag name as a string parameter and it return an HTMLCollection object.

```
document.getElementsByTagName('tagname')
````
* Getting elements by class name:- it returns an HTMLCollection oject.
```
document.getelementsByClassName('classname')
```
* Getting an element by id :- it targets a single HTML element.
```
document.getelemetById('id)
```
* Getting elements by using QuerySelector methods:- this method can select an HTML elements by tag name, by id or by class nmae.
```
document.querySelector('h1')
```
### Adding attribute :
An attribute is added in the opening tag of HTML which gives additional information about the element.
* Adding attribute using setAttribute:- this method set any html attribute. it takes two parameters the type of the attribute and the name of the attribute
```
setArribute()
```
* Adding attribute without setAttribute:- 
* Adding class using classList:- the class list method is a good method to append additional class.
* Removing class using remove:- we can remove a specific class from an element.
### Adding Text to HTML element 
* Adding Text conetent usimg textContent:- textContent property is used to add text to an HTML element.
* Adding Text Content innerHTML:- innerHTML can add a text or HTML element or elemnts as a child.
* Text Content 
* inner HTML
### Adding style
* Adding Style Color:- this is a way or method of adding color.
* Adding Style Background Color
* Adding Style Font Size