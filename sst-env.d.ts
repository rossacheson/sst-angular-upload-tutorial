/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "MyBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "MyFunction": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "MyWeb": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
  }
}
