import { commitMutation, graphql } from "react-relay";
import environment from "../../../../environment";

const mutation = graphql`
  mutation createJurorMutation(
    $name: String
    $rating: String
    $political: String
    $education: String
    $employment: String
  ) {
    createJuror(
      name: $name
      rating: $rating
      political: $political
      education: $education
      employment: $employment
    ) {
      _id
      name
      rating
      political
      education
      employment
    }
  }
`;

function createJurorMutation(name, rating, political, education, employment) {
  const variables = {
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
      console.log("Response recieved from server.");
    },
    updater: store => {
      const payload = store.getRootField("createJuror");
      const root = store.getRoot();
      const jurors = root.getLinkedRecords("jurors");

      const newJurors = [...jurors, payload];
      root.setLinkedRecords(newJurors, "jurors");
    },
    onError: err => console.error(err)
  });
}
export default createJurorMutation;
