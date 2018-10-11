<h2>Motivation</h2>
Simple node.js which access mongeDB

<h2>Operation supported</h2>
<table>
  <tr>
    <th>Operation</th>
    <th>File name to invoke by node</th> 
  </tr>
  <tr>
    <td>Connect</td>
    <td>connect.js</td> 
  </tr>
  <tr>
    <td>Create documents</td>
    <td>insert_users.js</td> 
  </tr>
 <tr>
    <td>Read all documents</td>
    <td>read_users.js</td> 
  </tr>
<tr>
    <td>Read one document</td>
    <td>read_user.js</td> 
  </tr>
<tr>
    <td>Delete documents</td>
    <td>delete_users.js</td> 
  </tr>
<tr>
    <td>Update document</td>
    <td>update_user.js</td> 
  </tr>
</table>

invoke operation by doing in cmd :  node <file_name>

<h2>Points of interests</h2>
<ul>
<li>MongoDb instance is remote and hosted by mlab as a service</li>
<li>URL to db , db admin user name and db admin password are stored on dev.js which is .gitignore so it will not appear to everyone in github</li>
</ul>

<h2>package installation</h2>
npm install mongodb 