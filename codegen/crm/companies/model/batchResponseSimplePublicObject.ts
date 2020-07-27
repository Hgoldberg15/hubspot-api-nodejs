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
import { SimplePublicObject } from './simplePublicObject';

export class BatchResponseSimplePublicObject {
    'status': BatchResponseSimplePublicObject.StatusEnum;
    'results': Array<SimplePublicObject>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSimplePublicObject.StatusEnum"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSimplePublicObject.attributeTypeMap;
    }
}

export namespace BatchResponseSimplePublicObject {
    export enum StatusEnum {
        PENDING = <any> 'PENDING',
        PROCESSING = <any> 'PROCESSING',
        CANCELED = <any> 'CANCELED',
        COMPLETE = <any> 'COMPLETE'
    }
}
