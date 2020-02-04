/**
 * @flow
 * @relayHash ef509bdd80410fe5024d31bf7b662d1c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createJurorMutationVariables = {|
  name?: ?string,
  rating?: ?string,
  political?: ?string,
  education?: ?string,
  employment?: ?string,
|};
export type createJurorMutationResponse = {|
  +createJuror: ?{|
    +_id: ?string,
    +name: ?string,
    +rating: ?string,
    +political: ?string,
    +education: ?string,
    +employment: ?string,
  |}
|};
export type createJurorMutation = {|
  variables: createJurorMutationVariables,
  response: createJurorMutationResponse,
|};
*/


/*
mutation createJurorMutation(
  $name: String
  $rating: String
  $political: String
  $education: String
  $employment: String
) {
  createJuror(name: $name, rating: $rating, political: $political, education: $education, employment: $employment) {
    _id
    name
    rating
    political
    education
    employment
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "rating",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "political",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "education",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "employment",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createJuror",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "education",
        "variableName": "education"
      },
      {
        "kind": "Variable",
        "name": "employment",
        "variableName": "employment"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "political",
        "variableName": "political"
      },
      {
        "kind": "Variable",
        "name": "rating",
        "variableName": "rating"
      }
    ],
    "concreteType": "Juror",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rating",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "political",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "education",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "employment",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createJurorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createJurorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createJurorMutation",
    "id": null,
    "text": "mutation createJurorMutation(\n  $name: String\n  $rating: String\n  $political: String\n  $education: String\n  $employment: String\n) {\n  createJuror(name: $name, rating: $rating, political: $political, education: $education, employment: $employment) {\n    _id\n    name\n    rating\n    political\n    education\n    employment\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8dd9439c010a351e10c18db27a6e3bb';
module.exports = node;
