export function handleFor(request) {
  return target => {
    let key = `${request.name}-mediator-handler`;
    
    if (request.handler) {
      throw new Error(`duplicate request handler declared for request '${request.name}'.`);
    }

    request.handler = target;
  };
}