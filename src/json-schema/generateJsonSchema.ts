/**
 * Created by allen on 2016/7/15.
 */

let generateSchema = require('generateSchema');

interface IGenerateSchema {
    generic:(object:Object, output:Object)=>Object;
    mongoose:(object:Object, output:Object)=>Object;
    json:(object:Object, output:Object)=>Object;
}

function generateJsonSchema(title:string, jsonData:JSON):JSON {
    return generateSchema.json(title, jsonData);
}