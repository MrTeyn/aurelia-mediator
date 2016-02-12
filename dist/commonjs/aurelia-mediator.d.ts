declare module 'aurelia-mediator' {
  import { FrameworkConfiguration, Container } from 'aurelia-framework';
  export interface IRequest<TResponse> {
  }
  export interface IRequestHandler<TRequest extends IRequest<any>, TResponse> {
      handle(message: TRequest): Promise<TResponse>;
  }
  export function configure(frameworkConfig: FrameworkConfiguration, config: any): void;
  export function handleFor(request: any): (target: any) => void;
  export class Mediator {
      private container;
      constructor(container: Container);
      send<TResponse>(request: IRequest<TResponse>): Promise<TResponse>;
  }
}