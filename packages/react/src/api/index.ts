import MetaProperty from './schema/property';
import MetaFunction from './schema/function';
import MetaTopic from './schema/topic';
import Meta from './schema/meta';

import Shared from './shared';

enum ACCESS {
  INTERNAL,
  PUBLIC_API,
  PRIVATE_API,
}

enum TYPE {
  PROPERTY,
  TOPIC,
  FUNCTION,
}

class Api {
  static ACCESS = ACCESS;
  static TYPE = TYPE;

  static Clazzes = {
    [Api.TYPE.FUNCTION]: MetaFunction,
    [Api.TYPE.PROPERTY]: MetaProperty,
    [Api.TYPE.TOPIC]: MetaTopic,
  };

  packageName: string;
  shared: Shared;
  properties?: any;
  view: any;
  definition: any;

  constructor(schema, meta) {
    this.packageName = schema.name || meta.packageName;
    this.shared = new Shared(this.packageName);
    this.view = schema.view;
    this.definition = schema.definition;
    if (schema.interface) {
      this.properties = Object.keys(schema.interface).map((propertyName) =>
        Meta.create(
          Api.Clazzes[schema.interface[propertyName].type || Api.TYPE.PROPERTY],
          { ...schema.interface[propertyName], name: propertyName, packageName: this.packageName },
          this.shared.withScope(propertyName)
        )
      );
    }
  }

  getName() {
    return this.packageName;
  }
  getReducers() {
    if (!this.properties) return {};

    return this.properties
      .filter((property) => property instanceof MetaProperty)
      .reduce((agg, property) => Object.assign(agg, property.getReducers()), {});
  }

  getInitialState() {
    if (!this.properties) return {};

    return this.properties
      .filter((property) => property instanceof MetaProperty)
      .reduce((agg, property) => Object.assign(agg, { [property.name]: property.initialState }), {});
  }

  build(apiAccess = Api.ACCESS.PRIVATE_API) {
    if (!apiAccess) throw new Error('Api access required!');
    if (!this.properties) return {};

    return this.properties.reduce((agg, property) => Object.assign(agg, property.build(apiAccess)), {});
  }

  hasType(type) {
    return this.definition.type === type;
  }
}

export default Api;
