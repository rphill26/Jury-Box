import { commitMutation, graphql } from 'react-relay';
import environment from '../../../../environment';

const mutation = graphql`
    mutation deleteJurorMutation($_id: ID) {
        deleteJuror(_id: $_id)
    }
`;

function deleteJurorMutation(_id) {
    const variables = {
        _id
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log('Response received from server.');
        },
        updater: store => {
            const root = store.getRoot();
            const jurors = root.getLinkedRecords('jurors');
            const newJurors = jurors.filter(v => v.getValue('_id') !== _id);

            root.setLinkedRecords(newJurors, 'jurors');
        },

        onError: err => console.error(err)
    });
}


export default deleteJurorMutation;
