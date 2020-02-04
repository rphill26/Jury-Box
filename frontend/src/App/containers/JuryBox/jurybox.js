import React from "react";

class JuryBox extends React.Component {
  render() {
    return (
      <table class="table table-hover table-dark">
        {/* Table Headings */}

        <thead>
          <tr>
            <th scope="col">Seat #</th>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Political</th>
            <th scope="col">Education</th>
            <th scope="col">Employment</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>

        {/* Table Content */}

        <tbody>
          <tr value="1">
            <th scope="row">1</th>
            <td>nothing again</td>
            <td>nada</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="2">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="3">
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="4">
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="5">
            <th scope="row">5</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="6">
            <th scope="row">6</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="7">
            <th scope="row">7</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="8">
            <th scope="row">8</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="9">
            <th scope="row">9</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="10">
            <th scope="row">10</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="11">
            <th scope="row">11</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="12">
            <th scope="row">12</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
              <input></input>
            </td>
          </tr>
          <tr value="a-1">
            <th scope="row">A-1</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr value="a-2">
            <th scope="row">A-2</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <input></input>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default JuryBox;
