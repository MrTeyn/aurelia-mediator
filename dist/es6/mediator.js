var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Container, inject } from 'aurelia-framework';
export let Mediator = class {
    constructor(container) {
        this.container = container;
    }
    send(request) {
        let handlerRef = request.constructor.handler;
        if (!handlerRef) {
            throw new Error(`no request handler found for request '${request.constructor.name}'.`);
        }
        let handler = this.container.get(handlerRef);
        return handler.handle(request);
    }
};
Mediator = __decorate([
    inject(Container), 
    __metadata('design:paramtypes', [Container])
], Mediator);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiTWVkaWF0b3IuY29uc3RydWN0b3IiLCJNZWRpYXRvci5zZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxtQkFBbUI7QUFHbkQ7SUFFRUEsWUFBb0JBLFNBQW9CQTtRQUFwQkMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBV0E7SUFBSUEsQ0FBQ0E7SUFFdENELElBQUlBLENBQVlBLE9BQTRCQTtRQUNqREUsSUFBSUEsVUFBVUEsR0FBU0EsT0FBT0EsQ0FBQ0EsV0FBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFFcERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSx5Q0FBeUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO1FBQ3pGQSxDQUFDQTtRQUVEQSxJQUFJQSxPQUFPQSxHQUFvREEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDOUZBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQTtBQUNIRixDQUFDQTtBQWREO0lBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7YUFjakI7QUFBQSIsImZpbGUiOiJtZWRpYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtJUmVxdWVzdCwgSVJlcXVlc3RIYW5kbGVyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQGluamVjdChDb250YWluZXIpXHJcbmV4cG9ydCBjbGFzcyBNZWRpYXRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IENvbnRhaW5lcikgeyB9XHJcblxyXG4gIHB1YmxpYyBzZW5kPFRSZXNwb25zZT4ocmVxdWVzdDogSVJlcXVlc3Q8VFJlc3BvbnNlPik6IFByb21pc2U8VFJlc3BvbnNlPiB7XHJcbiAgICBsZXQgaGFuZGxlclJlZiA9ICg8YW55PnJlcXVlc3QuY29uc3RydWN0b3IpLmhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFoYW5kbGVyUmVmKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gcmVxdWVzdCBoYW5kbGVyIGZvdW5kIGZvciByZXF1ZXN0ICcke3JlcXVlc3QuY29uc3RydWN0b3IubmFtZX0nLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBoYW5kbGVyOiBJUmVxdWVzdEhhbmRsZXI8SVJlcXVlc3Q8VFJlc3BvbnNlPiwgVFJlc3BvbnNlPiA9IHRoaXMuY29udGFpbmVyLmdldChoYW5kbGVyUmVmKTtcclxuICAgIHJldHVybiBoYW5kbGVyLmhhbmRsZShyZXF1ZXN0KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
