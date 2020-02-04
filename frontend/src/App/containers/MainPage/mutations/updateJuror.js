import { commitMutation, graphql } from 'react-relay';
import environment from '../../../../environment';

const mutation = graphql`
    mutation updateJurorMutation($name: String, $rating: String, $political: String, $education: String, $employment: String, $_id: ID) {
        updateJuror(_id: $_id, name: $name, rating: $rating, political: $political, education: $education, employment: $employment) {
            _id
            name
            rating
            political
            education
            employment
        }
    }
`;

function updateJurorMutation(_id, name, rating, political, education, employment) {
    const variables = { 
        _id,
        name,
        rating,
        political,
        education,
        employment
     };

     commitMutation(environment, {
         mutation,
         variables,
         onCompleted: (response, errors) => {
             console.log('Response recieved from server.');
         },
         updater: store => {
             const newUpdatedJuror = store.getRootField('updateJuror');
             const root = store.getRoot();
             const jurors = root.getLinkedRecords('jurors');
             const newJurors = jurors.filter(v => v.getValue('_id') !== _id);

             root.setLinkedRecords([...newJurors, newUpdatedJuror], 'jurors');
         },
         onError: err => console.error(err)
     });
}

export default updateJurorMutation;