/**
 * @flow
 * @relayHash c511d7b9fed06f5ff6e226ea1c094332
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateJurorMutationVariables = {|
  name?: ?string,
  rating?: ?string,
  political?: ?string,
  education?: ?string,
  employment?: ?string,
  _id?: ?string,
|};
export type updateJurorMutationResponse = {|
  +updateJuror: ?{|
    +_id: ?string,
    +name: ?string,
    +rating: ?string,
    +political: ?string,
    +education: ?string,
    +employment: ?string,
  |}
|};
export type updateJurorMutation = {|
  variables: updateJurorMutationVariables,
  response: updateJurorMutationResponse,
|};
*/


/*
mutation updateJurorMutation(
  $name: String
  $rating: String
  $political: String
  $education: String
  $employment: String
  $_id: ID
) {
  updateJuror(_id: $_id, name: $name, rating: $rating, political: $political, education: $education, employment: $employment) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateJuror",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
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
    "name": "updateJurorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateJurorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateJurorMutation",
    "id": null,
    "text": "mutation updateJurorMutation(\n  $name: String\n  $rating: String\n  $political: String\n  $education: String\n  $employment: String\n  $_id: ID\n) {\n  updateJuror(_id: $_id, name: $name, rating: $rating, political: $political, education: $education, employment: $employment) {\n    _id\n    name\n    rating\n    political\n    education\n    employment\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48dce4addaf9246f895fafbec9a7b944';
module.exports = node;
