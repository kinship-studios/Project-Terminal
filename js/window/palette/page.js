"use strict";
Object.defineProperty(module.exports, "__esModule", { value: true });
function ifDocumentExists(run) {
    if (!document == undefined) {
        run();
    }
}
var Page = /** @class */ (function () {
    function Page(path) {
        // Add to Documents
        this.addTo = {
            head: function (elements) {
                ifDocumentExists(function () {
                    return elements.forEach(function (element) {
                        document.head.insertAdjacentHTML('beforeend', element);
                    });
                });
            },
            body: function (elements) {
                ifDocumentExists(function () {
                    return elements.forEach(function (element) {
                        document.body.insertAdjacentHTML('beforeend', element);
                    });
                });
            },
            element: {
                ID: function (id, elements) {
                    ifDocumentExists(function () {
                        return elements.forEach(function (element) {
                            document.getElementById(id).insertAdjacentHTML('beforeend', element);
                        });
                    });
                },
                Class: function (Class, elements) {
                    ifDocumentExists(function () {
                        return elements.forEach(function (element) {
                            var classMembers = document.getElementsByClassName(Class);
                            var i;
                            for (i < classMembers.length; i++;) {
                                classMembers[i].insertAdjacentHTML('beforeend', element);
                            }
                        });
                    });
                }
            }
        };
        this.path = path;
    }
    return Page;
}());
module.exports.Page = Page;
