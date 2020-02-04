/**
 * @flow
 * @relayHash c69efb27a663d3e603ea98772c5b8fbc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteJurorMutationVariables = {|
  _id?: ?string
|};
export type deleteJurorMutationResponse = {|
  +deleteJuror: ?string
|};
export type deleteJurorMutation = {|
  variables: deleteJurorMutationVariables,
  response: deleteJurorMutationResponse,
|};
*/


/*
mutation deleteJurorMutation(
  $_id: ID
) {
  deleteJuror(_id: $_id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteJuror",
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteJurorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteJurorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteJurorMutation",
    "id": null,
    "text": "mutation deleteJurorMutation(\n  $_id: ID\n) {\n  deleteJuror(_id: $_id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0c7961d9fcfd653d1142037529ac9f4';
module.exports = node;
