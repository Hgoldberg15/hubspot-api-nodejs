/**
 * Companies
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class Filter {
    'value'?: string;
    'propertyName': string;
    'operator': Filter.OperatorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "Filter.OperatorEnum"
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }
}

export namespace Filter {
    export enum OperatorEnum {
        EQ = <any> 'EQ',
        NEQ = <any> 'NEQ',
        LT = <any> 'LT',
        LTE = <any> 'LTE',
        GT = <any> 'GT',
        GTE = <any> 'GTE',
        HASPROPERTY = <any> 'HAS_PROPERTY',
        NOTHASPROPERTY = <any> 'NOT_HAS_PROPERTY',
        CONTAINSTOKEN = <any> 'CONTAINS_TOKEN',
        NOTCONTAINSTOKEN = <any> 'NOT_CONTAINS_TOKEN'
    }
}
