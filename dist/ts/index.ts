import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(frameworkConfig: FrameworkConfiguration, config: any) {
}

export {handleFor} from './decorators';
export {IRequest, IRequestHandler} from './interfaces';
export {Mediator} from './mediator';