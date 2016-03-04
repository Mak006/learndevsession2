// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/dojo/dojo.d.ts" />

import Friends = require("app/friends");
import Profile = require("app/profile");
import Items = require("app/items");

import request = require("dojo/request");
import xhr = require("dojo/request/xhr");
import on = require("dojo/on");
import domClass = require("dojo/dom-class");

let friendsData: Friends.IFriendProps[] = [
    { id: 1, name: 'Homer Simpson', initials: 'HS', coursesCount: 9, articlesCount: 7 }
];
let friends: Friends.Friends = ReactDOM.render(<Friends.Friends data={friendsData} />, document.getElementById("friendsNode")) as Friends.Friends;

var courses = [
    { id: 1, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript", href: "https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css", description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 },
    { id: 2, title: "Building Web Applications with Node.js and Express 4.0", href: "https://app.pluralsight.com/library/courses/nodejs-express-web-applications", description: "I've enjoyed this course.  It describes alot of the basic fundamentals for structuring a Node.js app.", rating: 4.5 },
    { id: 3, title: "Building a Full-Stack App with React and Express", href: "https://app.pluralsight.com/library/courses/react-express-full-stack-app-build", description: "Can be a bit advanced at times.  But not too many other courses cover the same material.", rating: 3.5 },
    { id: 4, title: "Introduction to npm as a Build Tool", href: "https://app.pluralsight.com/library/courses/npm-build-tool-introduction", description: "This has some useful information but I'm still not sure how I will incorporate this into my build process.  Still in progress.", rating: 4 },
    { id: 5, title: "Using ES6 with TypeScript", href: "https://app.pluralsight.com/library/courses/es6-with-typescript", description: "I haven't taken this course yet since it was only released last month.  Looks interesting though!", rating: 0 }
];

var articles = [
    { id: 1, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
    { id: 2, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
    { id: 3, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
    { id: 4, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
    { id: 5, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
    { id: 6, title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" }
];

let coursesNode: Items.Items = ReactDOM.render(<Items.Items/>, document.getElementById('coursesNode')) as Items.Items;
let articlesNode: Items.Items = ReactDOM.render(<Items.Items/>, document.getElementById('articlesNode')) as Items.Items;

coursesNode.updateData(courses);
articlesNode.updateData(articles);

ReactDOM.render(<Profile.Profile initialArticlesCount={10} initialCoursesCount={20} />, document.getElementById("profileNode"));

let options: any = {
    handleAs: "json",
    headers: {
        "X-Requested-With": null
    }
};

let promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
promise.then((data) => {
    friends.updateData(data);
}, (err) => {
    console.error("failed to get data");
    });


on(window, "scroll", () => {
    if (document.body.scrollTop > 60) {
        console.log("scrolled here");
        domClass.add(document.getElementsByTagName("nav")[0], "scrolled");
    } else {
        domClass.remove(document.getElementsByTagName("nav")[0], "scrolled");
    }
});