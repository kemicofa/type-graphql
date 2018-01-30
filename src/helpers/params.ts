import { MetadataStorage } from "../metadata/metadata-storage";
import { findType } from "./findType";
import { ReturnTypeFunc, ClassType, TypeOptions } from "../types";
import { ParamDefinition } from "../metadata/definition-interfaces";

export function getParamInfo(
  prototype: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
  returnTypeFunc?: ReturnTypeFunc,
  options: TypeOptions = {},
) {
  if (typeof propertyKey === "symbol") {
    throw new Error("Symbol keys are not supported yet!");
  }

  const { getType, typeOptions } = findType({
    metadataKey: "design:paramtypes",
    prototype,
    propertyKey,
    parameterIndex,
    returnTypeFunc,
    typeOptions: options,
  });

  return {
    target: prototype.constructor,
    methodName: propertyKey,
    index: parameterIndex,
    getType,
    typeOptions,
  };
}
