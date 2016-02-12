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
var aurelia_framework_1 = require('aurelia-framework');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9yLmpzIiwibWVkaWF0b3IudHMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJNZWRpYXRvci5jb25zdHJ1Y3RvciIsIk1lZGlhdG9yLnNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUksVUFBVSxHQUFHLEFBQUMsYUFBUSxVQUFLLFVBQVUsSUFBSyxVQUFVLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNuRixRQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTTtRQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFBRSxDQUFDLENBQUM7QUFDN0gsUUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUNsSixXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDakUsQ0FBQztBQUNGLElBQUksVUFBVSxHQUFHLEFBQUMsYUFBUSxVQUFLLFVBQVUsSUFBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDMUQsUUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVHLENBQUM7QUNSRixJQUFBLG1CQUFBLEdBQUEsT0FBQSxDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBR3BELElBQUEsUUFBQTtBQUVFQSxzQkFBb0JBLFNBQW9CQSxFQUFBQTs7O0FBQXBCQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFUQSxTQUFTQSxDQUFXQTtLQUFLQTs7OztlQUVsQ0QsY0FBWUEsT0FBNEJBLEVBQUFBO0FBQ2pERSxnQkFBSUEsVUFBVUEsR0FBU0EsT0FBT0EsQ0FBQ0EsV0FBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7QUFFcERBLGdCQUFJQSxDQUFDQSxVQUFVQSxFQUFFQTtBQUNmQSxzQkFBTUEsSUFBSUEsS0FBS0EsNENBQTBDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxRQUFLQSxDQUFDQTthQUN4RkE7QUFFREEsZ0JBQUlBLE9BQU9BLEdBQW9EQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtBQUM5RkEsbUJBQU9BLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1NBQ2hDQTs7OztJQUNGRixDQUFBQTtBQWRELFFBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQyxtQkFBQSxDQUFBLE1BQU0sQ0FBQyxtQkFBQSxDQUFBLFNBQVMsQ0FBQyxFRHNCZCxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUNuRSxFQUFFLFFBQVEsQ0FBQyxDQ1RYO0FBYlksT0FBQSxDQUFBLFFBQVEsR0FBQSxRQWFwQixDQUFBIiwiZmlsZSI6Im1lZGlhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBhdXJlbGlhX2ZyYW1ld29ya18xID0gcmVxdWlyZSgnYXVyZWxpYS1mcmFtZXdvcmsnKTtcbmxldCBNZWRpYXRvciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHNlbmQocmVxdWVzdCkge1xuICAgICAgICBsZXQgaGFuZGxlclJlZiA9IHJlcXVlc3QuY29uc3RydWN0b3IuaGFuZGxlcjtcbiAgICAgICAgaWYgKCFoYW5kbGVyUmVmKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG5vIHJlcXVlc3QgaGFuZGxlciBmb3VuZCBmb3IgcmVxdWVzdCAnJHtyZXF1ZXN0LmNvbnN0cnVjdG9yLm5hbWV9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMuY29udGFpbmVyLmdldChoYW5kbGVyUmVmKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cbn07XG5NZWRpYXRvciA9IF9fZGVjb3JhdGUoW1xuICAgIGF1cmVsaWFfZnJhbWV3b3JrXzEuaW5qZWN0KGF1cmVsaWFfZnJhbWV3b3JrXzEuQ29udGFpbmVyKSwgXG4gICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXVyZWxpYV9mcmFtZXdvcmtfMS5Db250YWluZXJdKVxuXSwgTWVkaWF0b3IpO1xuZXhwb3J0cy5NZWRpYXRvciA9IE1lZGlhdG9yO1xuIiwiaW1wb3J0IHtDb250YWluZXIsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0lSZXF1ZXN0LCBJUmVxdWVzdEhhbmRsZXJ9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5AaW5qZWN0KENvbnRhaW5lcilcclxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogQ29udGFpbmVyKSB7IH1cclxuXHJcbiAgcHVibGljIHNlbmQ8VFJlc3BvbnNlPihyZXF1ZXN0OiBJUmVxdWVzdDxUUmVzcG9uc2U+KTogUHJvbWlzZTxUUmVzcG9uc2U+IHtcclxuICAgIGxldCBoYW5kbGVyUmVmID0gKDxhbnk+cmVxdWVzdC5jb25zdHJ1Y3RvcikuaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWhhbmRsZXJSZWYpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBubyByZXF1ZXN0IGhhbmRsZXIgZm91bmQgZm9yIHJlcXVlc3QgJyR7cmVxdWVzdC5jb25zdHJ1Y3Rvci5uYW1lfScuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhhbmRsZXI6IElSZXF1ZXN0SGFuZGxlcjxJUmVxdWVzdDxUUmVzcG9uc2U+LCBUUmVzcG9uc2U+ID0gdGhpcy5jb250YWluZXIuZ2V0KGhhbmRsZXJSZWYpO1xyXG4gICAgcmV0dXJuIGhhbmRsZXIuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
