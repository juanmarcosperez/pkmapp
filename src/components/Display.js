import React from 'react';
import _ from 'lodash';

const Display = ({result}) => {
    if(!result){
        return <div>Loading...</div>
    }
    
    const renderAbility = () => {
        var length = _.get(result, 'abilities.length');
        var abilityName=  "" ;


        if(length> 1){
            for(var count = 0; count < length; count++){
                console.log(count);
               console.log ( _.get(result, 'abilities[count].is_hidden') );
               


                if(_.get(result, 'abilities[i].is_hidden') === 'true'){
                    abilityName =  _.get(result, 'abilities[i].ability.name') ;
                    console.log(abilityName);
               return (<p>Hidden Ability : {_.get(result, 'abilities[i].ability.name')} </p>)
                }
            }

        }
    }

    const renderType = () => {
        
        //same as renderAbility function
       
    }

    
    console.log(result);
    return <div>
         <img src= {_.get(result, 'sprites.front_default' )} alt="" />
         <ul>Name: {result.name}</ul>
         <ul>Type: {_.get(result, 'types[0].type.name')}</ul>
         <ul>Weight: {result.weight}</ul>
         <ul>{renderAbility() }</ul>
         
        
         </div>
}

export default Display;

