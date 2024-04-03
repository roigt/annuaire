import React from 'react';
import {Card} from 'semantic-ui-react';


const Etablissement =({properties})=>{
    console.log(properties);
  const {nom,telephone,url} = properties;

  return (
    <Card>
         <Card.Content>{nom}</Card.Content>
         { telephone ?
              <Card.Meta>Téléphone: {telephone}</Card.Meta>
              :undefined
         }
         {url?
           <Card.Meta>Site: {url}</Card.Meta>
           :undefined
         } 
         
    </Card>
  )
}

export default Etablissement;