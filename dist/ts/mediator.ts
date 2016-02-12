import {Container, inject} from 'aurelia-framework';
import {IRequest, IRequestHandler} from './interfaces';

@inject(Container)
export class Mediator {
  constructor(private container: Container) { }

  public send<TResponse>(request: IRequest<TResponse>): Promise<TResponse> {
    let handlerRef = (<any>request.constructor).handler;

    if (!handlerRef) {
      throw new Error(`no request handler found for request '${request.constructor.name}'.`);
    }

    let handler: IRequestHandler<IRequest<TResponse>, TResponse> = this.container.get(handlerRef);
    return handler.handle(request);
  }
}