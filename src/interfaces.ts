export interface IRequest<TResponse> { }

export interface IRequestHandler<TRequest extends IRequest<any>, TResponse> {
  handle(message: TRequest): Promise<TResponse>;
}