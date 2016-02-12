"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

System.register(['aurelia-framework'], function (exports_1) {
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var Mediator;
    return {
        setters: [function (aurelia_framework_1_1) {
            aurelia_framework_1 = aurelia_framework_1_1;
        }],
        execute: function execute() {
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
            Mediator = Mediator;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9yLmpzIiwibWVkaWF0b3IudHMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJNZWRpYXRvci5jb25zdHJ1Y3RvciIsIk1lZGlhdG9yLnNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFVBQVMsU0FBUyxFQUFFO0FBQ3ZELFFBQUksVUFBVSxHQUFHLEFBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUssVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDbkYsWUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU07WUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQUUsQ0FBQyxDQUFDO0FBQzdILFlBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUEsSUFBSyxDQUFDLENBQUM7QUFDbEosZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pFLENBQUM7QUFDRixRQUFJLFVBQVUsR0FBRyxBQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxRCxZQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDNUcsQ0FBQztBQUNGLFFBQUksbUJBQW1CLENBQUM7QUFDeEIsUUFBSSxRQUFRLENBQUM7QUFDYixXQUFPO0FBQ0gsZUFBTyxFQUFDLENBQ0osVUFBVSxxQkFBcUIsRUFBRTtBQUM3QiwrQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztTQUMvQyxDQUFDO0FBQ04sZUFBTyxFQUFFLG1CQUFXO0FDZDVCLGdCQUFBLFFBQUE7QUFFRUEsa0NBQW9CQSxTQUFvQkEsRUFBQUE7OztBQUFwQkMsd0JBQUFBLENBQUFBLFNBQVNBLEdBQVRBLFNBQVNBLENBQVdBO2lCQUFLQTs7OzsyQkFFbENELGNBQVlBLE9BQTRCQSxFQUFBQTtBQUNqREUsNEJBQUlBLFVBQVVBLEdBQVNBLE9BQU9BLENBQUNBLFdBQVlBLENBQUNBLE9BQU9BLENBQUNBO0FBRXBEQSw0QkFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUE7QUFDZkEsa0NBQU1BLElBQUlBLEtBQUtBLDRDQUEwQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsUUFBS0EsQ0FBQ0E7eUJBQ3hGQTtBQUVEQSw0QkFBSUEsT0FBT0EsR0FBb0RBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO0FBQzlGQSwrQkFBT0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7cUJBQ2hDQTs7OztnQkFDRkYsQ0FBQUE7QUFkRCxvQkFBQSxHQUFBLFVBQUEsQ0FBQSxDQUFDLG1CQUFBLENBQUEsTUFBTSxDQUFDLG1CQUFBLENBQUEsU0FBUyxDQUFDLEVEOEJGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQ25FLEVBQUUsUUFBUSxDQUFDLENDakJ2QjtBQWJZLG9CQUFRLEdBQUEsUUFhcEIsQ0FBQTtTRG1CUTtLQUNKLENBQUE7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoibWVkaWF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJTeXN0ZW0ucmVnaXN0ZXIoWydhdXJlbGlhLWZyYW1ld29yayddLCBmdW5jdGlvbihleHBvcnRzXzEpIHtcbiAgICB2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG4gICAgfTtcbiAgICB2YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xuICAgIH07XG4gICAgdmFyIGF1cmVsaWFfZnJhbWV3b3JrXzE7XG4gICAgdmFyIE1lZGlhdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldHRlcnM6W1xuICAgICAgICAgICAgZnVuY3Rpb24gKGF1cmVsaWFfZnJhbWV3b3JrXzFfMSkge1xuICAgICAgICAgICAgICAgIGF1cmVsaWFfZnJhbWV3b3JrXzEgPSBhdXJlbGlhX2ZyYW1ld29ya18xXzE7XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgTWVkaWF0b3IgPSBjbGFzcyB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXJSZWYgPSByZXF1ZXN0LmNvbnN0cnVjdG9yLmhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlclJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBubyByZXF1ZXN0IGhhbmRsZXIgZm91bmQgZm9yIHJlcXVlc3QgJyR7cmVxdWVzdC5jb25zdHJ1Y3Rvci5uYW1lfScuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5nZXQoaGFuZGxlclJlZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgTWVkaWF0b3IgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgICAgICAgICBhdXJlbGlhX2ZyYW1ld29ya18xLmluamVjdChhdXJlbGlhX2ZyYW1ld29ya18xLkNvbnRhaW5lciksIFxuICAgICAgICAgICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1cmVsaWFfZnJhbWV3b3JrXzEuQ29udGFpbmVyXSlcbiAgICAgICAgICAgIF0sIE1lZGlhdG9yKTtcbiAgICAgICAgICAgIE1lZGlhdG9yID0gTWVkaWF0b3I7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7Q29udGFpbmVyLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtJUmVxdWVzdCwgSVJlcXVlc3RIYW5kbGVyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQGluamVjdChDb250YWluZXIpXHJcbmV4cG9ydCBjbGFzcyBNZWRpYXRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IENvbnRhaW5lcikgeyB9XHJcblxyXG4gIHB1YmxpYyBzZW5kPFRSZXNwb25zZT4ocmVxdWVzdDogSVJlcXVlc3Q8VFJlc3BvbnNlPik6IFByb21pc2U8VFJlc3BvbnNlPiB7XHJcbiAgICBsZXQgaGFuZGxlclJlZiA9ICg8YW55PnJlcXVlc3QuY29uc3RydWN0b3IpLmhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFoYW5kbGVyUmVmKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gcmVxdWVzdCBoYW5kbGVyIGZvdW5kIGZvciByZXF1ZXN0ICcke3JlcXVlc3QuY29uc3RydWN0b3IubmFtZX0nLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBoYW5kbGVyOiBJUmVxdWVzdEhhbmRsZXI8SVJlcXVlc3Q8VFJlc3BvbnNlPiwgVFJlc3BvbnNlPiA9IHRoaXMuY29udGFpbmVyLmdldChoYW5kbGVyUmVmKTtcclxuICAgIHJldHVybiBoYW5kbGVyLmhhbmRsZShyZXF1ZXN0KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
