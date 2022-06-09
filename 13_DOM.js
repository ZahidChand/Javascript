
/**DOM */

// Window is the main container or we can say the
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// Eg
//      The history or to find the url etc.

//  whereas the DOM is the child of Window Object


// All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.


// For example
//  window.screen or just screen is a small information 
// object about physical screen dimensions.
//  window.location giving the current URL
//  window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

//  Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
//  document.getElementById()

// Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file


// ************** DOM vs BOM *******************

//  The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

//  Eg: 
// change the background color to red
// document.body.style.background = "red";


// The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 


