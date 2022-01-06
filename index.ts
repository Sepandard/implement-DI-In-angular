class HelloSrv {
    sayHello(): void {
      console.log('hi everyone.....');
    }
  }
  
  class Component {
    constructor(public readonly helloSrv: HelloSrv) {}
  }
  
  // Angular DI
  class Injector {
    private _container = new Map();
  
    constructor(private _providers: any[] = []) {
      _providers.forEach((service) => {
        this._container.set(service, new service());
      });
    }
    get(service: any) {
      const serviceInstance = this._container.get(service);
      if (!serviceInstance) {
        throw Error(' no provider found');
      }
      return serviceInstance;
    }
  }
  //Add to providers
  const injector = new Injector([HelloSrv]);
  
  const component = new Component(injector.get(HelloSrv));
  component.helloSrv.sayHello();
  