"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var Mediator = (function () {
        function Mediator(container) {
            _classCallCheck(this, Mediator);

            this.container = container;
        }

        _createClass(Mediator, [{
            key: "send",
            value: function send(request) {
                var handlerRef = request.constructor.handler;
                if (!handlerRef) {
                    throw new Error("no request handler found for request '" + request.constructor.name + "'.");
                }
                var handler = this.container.get(handlerRef);
                return handler.handle(request);
            }
        }]);

        return Mediator;
    })();
    Mediator = __decorate([aurelia_framework_1.inject(aurelia_framework_1.Container), __metadata('design:paramtypes', [aurelia_framework_1.Container])], Mediator);
    exports.Mediator = Mediator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9yLmpzIiwibWVkaWF0b3IudHMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJNZWRpYXRvci5jb25zdHJ1Y3RvciIsIk1lZGlhdG9yLnNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUksVUFBVSxHQUFHLEFBQUMsYUFBUSxVQUFLLFVBQVUsSUFBSyxVQUFVLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNuRixRQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTTtRQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFBRSxDQUFDLENBQUM7QUFDN0gsUUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUNsSixXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDakUsQ0FBQztBQUNGLElBQUksVUFBVSxHQUFHLEFBQUMsYUFBUSxVQUFLLFVBQVUsSUFBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDMUQsUUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVHLENBQUM7QUFDRixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFO0FDTnJHLFFBQUEsUUFBQTtBQUVFQSwwQkFBb0JBLFNBQW9CQSxFQUFBQTs7O0FBQXBCQyxnQkFBQUEsQ0FBQUEsU0FBU0EsR0FBVEEsU0FBU0EsQ0FBV0E7U0FBS0E7Ozs7bUJBRWxDRCxjQUFZQSxPQUE0QkEsRUFBQUE7QUFDakRFLG9CQUFJQSxVQUFVQSxHQUFTQSxPQUFPQSxDQUFDQSxXQUFZQSxDQUFDQSxPQUFPQSxDQUFDQTtBQUVwREEsb0JBQUlBLENBQUNBLFVBQVVBLEVBQUVBO0FBQ2ZBLDBCQUFNQSxJQUFJQSxLQUFLQSw0Q0FBMENBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLFFBQUtBLENBQUNBO2lCQUN4RkE7QUFFREEsb0JBQUlBLE9BQU9BLEdBQW9EQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtBQUM5RkEsdUJBQU9BLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2FBQ2hDQTs7OztRQUNGRixDQUFBQTtBQWRELFlBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQyxtQkFBQSxDQUFBLE1BQU0sQ0FBQyxtQkFBQSxDQUFBLFNBQVMsQ0FBQyxFRHNCVixVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUNuRSxFQUFFLFFBQVEsQ0FBQyxDQ1RmO0FBYlksV0FBQSxDQUFBLFFBQVEsR0FBQSxRQWFwQixDQUFBO0NEV0EsQ0FBQyxDQUFDIiwiZmlsZSI6Im1lZGlhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnYXVyZWxpYS1mcmFtZXdvcmsnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGF1cmVsaWFfZnJhbWV3b3JrXzEpIHtcbiAgICBsZXQgTWVkaWF0b3IgPSBjbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgc2VuZChyZXF1ZXN0KSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlclJlZiA9IHJlcXVlc3QuY29uc3RydWN0b3IuaGFuZGxlcjtcbiAgICAgICAgICAgIGlmICghaGFuZGxlclJlZikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gcmVxdWVzdCBoYW5kbGVyIGZvdW5kIGZvciByZXF1ZXN0ICcke3JlcXVlc3QuY29uc3RydWN0b3IubmFtZX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5nZXQoaGFuZGxlclJlZik7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlci5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lZGlhdG9yID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGF1cmVsaWFfZnJhbWV3b3JrXzEuaW5qZWN0KGF1cmVsaWFfZnJhbWV3b3JrXzEuQ29udGFpbmVyKSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1cmVsaWFfZnJhbWV3b3JrXzEuQ29udGFpbmVyXSlcbiAgICBdLCBNZWRpYXRvcik7XG4gICAgZXhwb3J0cy5NZWRpYXRvciA9IE1lZGlhdG9yO1xufSk7XG4iLCJpbXBvcnQge0NvbnRhaW5lciwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SVJlcXVlc3QsIElSZXF1ZXN0SGFuZGxlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBpbmplY3QoQ29udGFpbmVyKVxyXG5leHBvcnQgY2xhc3MgTWVkaWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBDb250YWluZXIpIHsgfVxyXG5cclxuICBwdWJsaWMgc2VuZDxUUmVzcG9uc2U+KHJlcXVlc3Q6IElSZXF1ZXN0PFRSZXNwb25zZT4pOiBQcm9taXNlPFRSZXNwb25zZT4ge1xyXG4gICAgbGV0IGhhbmRsZXJSZWYgPSAoPGFueT5yZXF1ZXN0LmNvbnN0cnVjdG9yKS5oYW5kbGVyO1xyXG5cclxuICAgIGlmICghaGFuZGxlclJlZikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5vIHJlcXVlc3QgaGFuZGxlciBmb3VuZCBmb3IgcmVxdWVzdCAnJHtyZXF1ZXN0LmNvbnN0cnVjdG9yLm5hbWV9Jy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGFuZGxlcjogSVJlcXVlc3RIYW5kbGVyPElSZXF1ZXN0PFRSZXNwb25zZT4sIFRSZXNwb25zZT4gPSB0aGlzLmNvbnRhaW5lci5nZXQoaGFuZGxlclJlZik7XHJcbiAgICByZXR1cm4gaGFuZGxlci5oYW5kbGUocmVxdWVzdCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
